import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import goldenInstaLogo from '@/assets/icons/goldenInstaLogo.svg'
import instaTxt from '@/assets/icons/instaTxt.svg'
import goldenArow from '@/assets/icons/goldenArrow.svg'
import dots from "@/assets/icons/dots.svg"
import logoRound from '@/assets/icons/logoRound.svg'

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.roxo0};
  border-radius: 20px;
  padding: 120px 0px 120px 0px;
`;

const Header = styled.header`
  padding-right: 120px;
  padding-left: 120px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .titleContainer {
    display: flex;
    align-items: center;
  }
`;

const GoldenLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 27px;
`;

const InstaTxt= styled.img`
  width: 148.105px;
  height: 42px;
`;

const Title = styled.h3`
  color: #151D53;
  font-family: Montserrat;
  font-size: 28.993px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 7px;
`;

const Rail = styled.div`
  position: relative; overflow: hidden; 
  margin-left: 120px;
  margin-right: 119px;
`;

const Track = styled.div<{ $index: number }>`
  display: grid; grid-auto-flow: column; 
  gap: 40px;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
  transform: translateX(${p => `calc(${p.$index} * (352px + 40px) * -1)`});
`;

const Card = styled.div`
  border-radius: 7px;
  border: 1px solid #D6D6D6;
  width: 352px;               
  box-sizing: border-box; 
  background: #FFF;
  .cardHeader {
    padding: 16px 0;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    .fistContainer {
      display: flex;
    }
    .logo {
      width: 35px;
      height: 35px;
      margin-right: 11px;
    }
    .txt {
      color: #000;
      font-family: 'Roboto';
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

const ThumbContainer = styled.article`
  position: relative; background: #ffffff; border-bottom-right-radius: 7px; border-bottom-left-radius: 7px; overflow: hidden;
  height: 469.083px;
  width: 352px;
`;

const Thumb = styled.a`
  display: block; aspect-ratio: 352.00/469.08; background: #f0eee9;
  img, video { width: 100%; height: 100%; object-fit: cover; display:block; }
`;

const Controls = styled.div`
  display: flex; align-items: center; gap: 8px; margin-top: 12px; justify-content: flex-end;
`;

const IconBtn = styled.button`
  &:disabled { opacity: .4; cursor: not-allowed; }
  .prev {
    transform: rotate(180deg);
  }
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
    (async () => {
      try {
          const token = import.meta.env.VITE_INSTA_TOKEN as string;
          if (!token) throw new Error('VITE_INSTA_TOKEN não definido');
          const fields = "id,media_url,media_type,permalink,thumbnail_url,timestamp,caption";
          const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;
          const { data } = await axios.get(url);
    
          setItems(data?.data ?? []);
        
      }  catch (e: unknown)  {
        console.error(e)
        setItems([]);
      }
    })();
  
  }, []);

  useEffect(() => { setIndex(0); }, [perView]);

  const canPrev = index > 0;
  const canNext = index < totalPages;

  if (items === null) return null;          
  if (!items.length) return null; 

  return (
    <Section>
      <Header>
        <div className="titleContainer">
        <GoldenLogo src={goldenInstaLogo}/>
        <InstaTxt src={instaTxt}/>
        <Title>
          @powergummybr
        </Title>
        </div>

        <Controls>
          <IconBtn onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={!canPrev} aria-label="Anterior">
            <img src={goldenArow } className="prev"/>
          </IconBtn>
          <IconBtn onClick={() => setIndex(i => Math.min(totalPages, i + 1))} disabled={!canNext} aria-label="Próximo"
            >
            <img src={goldenArow }/>
          </IconBtn>
        </Controls>
      </Header>

      <Rail>
        <Track $index={index}>
          {items.map((p) => (
            <Card key={p.id} >
              <div className="cardHeader">
                <div className="fistContainer">
                  <img className="logo" src={logoRound }/>
                  <p className="txt">powergummybr</p>
                </div>
                <img className="dots" src={dots}/>

              </div>
              <ThumbContainer >
                <Thumb href={p.permalink} target="_blank" aria-label="Abrir no Instagram">
                  {(p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM") ? (
                      <img
                        src={p.thumbnail_url || p.media_url}
                        alt={p.caption || 'Post do Instagram'}
                      />
                    ) : (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        poster={p.thumbnail_url || p.media_url}
                      >
                        <source src={p.media_url} />
                      </video>
                    )}
                </Thumb>
              </ThumbContainer>
            </Card>
          ))}
        </Track>
      </Rail>

    </Section>
  );
}
