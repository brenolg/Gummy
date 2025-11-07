import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.section`
  width: 100%;
  background: #faf7f5;
  border-radius: 20px;
  padding: 20px 16px 28px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const Header = styled.header`
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
`;

const IgLogo = styled.span`
  display: inline-flex; width: 28px; height: 28px; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffdc80, #f77737, #c13584 60%, #5851db);
`;

const Title = styled.h3`
  margin: 0; font-size: 18px; font-weight: 800; color: #1e1b16;
  display: flex; gap: 8px; align-items: center;
  span.handle { color: #7a6d5f; font-weight: 700; }
`;

const Rail = styled.div`
  position: relative; overflow: hidden; border: 2px solid #e9e2da; border-radius: 14px;
`;

const Track = styled.div<{ $index: number }>`
  display: grid; grid-auto-flow: column; grid-auto-columns: var(--cardW);
  gap: 16px; padding: 16px;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
  transform: translateX(${p => `calc(${p.$index} * (var(--cardW) + 16px) * -1)`});
`;

const Card = styled.article<{ $active?: boolean }>`
  position: relative; background: #ffffff; border-radius: 16px; overflow: hidden;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
`;

const Thumb = styled.a`
  display: block; aspect-ratio: 1 / 1; background: #f0eee9;
  img, video { width: 100%; height: 100%; object-fit: cover; display:block; }
`;

const Controls = styled.div`
  display: flex; align-items: center; gap: 8px; margin-top: 12px; justify-content: flex-end;
`;

const IconBtn = styled.button`
  all: unset; cursor: pointer; width: 36px; height: 36px; border-radius: 10px;
  display: grid; place-items: center; background: #ffffff; border: 1px solid #e9e2da;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  &:disabled { opacity: .4; cursor: not-allowed; }
`;


export type FeedItem = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp?: string;
  caption?: string;
};

// ========================= Hook responsivo =========================
function usePerView() {
  const [per, setPer] = useState(3);
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 540) setPer(1);
      else if (w < 920) setPer(2);
      else setPer(3);
      document.documentElement.style.setProperty("--cardW", w < 540 ? "88vw" : w < 920 ? "44vw" : "280px");
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return per;
}


export default function InstaFeedCarousel() {
  const perView = usePerView();
  const [items, setItems] = useState<FeedItem[] | null>(null);
  const [index, setIndex] = useState(0);

  const totalPages = useMemo(() => {
    const total = Math.max(0, (items?.length || 0) - perView);
    return total;
  }, [items, perView]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
          const token = import.meta.env.VITE_INSTA_TOKEN as string;
          if (!token) throw new Error('VITE_INSTA_TOKEN não definido');
          const fields = "id,media_url,media_type,permalink,thumbnail_url,timestamp,caption";
          const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;
          const { data } = await axios.get(url);
          if (!active) return;
          setItems(data?.data ?? []);
        
      }  catch (e: unknown)  {
        console.error(e)
        setItems([]);
      }
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => { setIndex(0); }, [perView]);

  const canPrev = index > 0;
  const canNext = index < totalPages;

  if (items === null) return null;          
  if (!items.length) return null; 

  return (
    <Section>
      <Header>
        <IgLogo />
        <Title>
          Instagram <span className="handle">@xx</span>
        </Title>
        
        <Controls>
          <IconBtn onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={!canPrev} aria-label="Anterior">
            ◀
          </IconBtn>
          <IconBtn onClick={() => setIndex(i => Math.min(totalPages, i + 1))} disabled={!canNext} aria-label="Próximo">
            ▶
          </IconBtn>
        </Controls>
      </Header>

      <Rail>
        <Track $index={index}>
          {items.map((p) => (
            <Card key={p.id} >
              <Thumb href={p.permalink} target="_blank" aria-label="Abrir no Instagram">
                {p.media_type === "IMAGE" ? (
                  <img src={p.media_url} alt={p.caption || 'Post do Instagram'} />
                ) : (
                  <video controls>
                    <source src={p.media_url} />
                  </video>
                )}
              </Thumb>
            </Card>
          ))}
        </Track>
      </Rail>

    </Section>
  );
}
