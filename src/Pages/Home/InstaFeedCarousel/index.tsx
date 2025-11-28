import { useEffect, useMemo, useState } from 'react'

import goldenInstaLogo from '@/assets/icons/goldenInstaLogo.svg'
import instaTxt from '@/assets/icons/instaTxt.svg'
import goldenArow from '@/assets/icons/goldenArrow.svg'
import dots from '@/assets/icons/dots.svg'
import logoRound from '@/assets/icons/logoRound.svg'
import {
  Card,
  Controls,
  GoldenLogo,
  Header,
  IconBtn,
  InstaTxt,
  Rail,
  Section,
  Thumb,
  ThumbContainer,
  Title,
  Track,
} from './styles'
import { useFetch } from '@/hooks/useFetch'

export type FeedItem = {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  thumbnail_url?: string
  timestamp?: string
  caption?: string
}

// ========================= Hook responsivo =========================
function usePerView() {
  const [per, setPer] = useState(3)
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      if (w < 540) setPer(1)
      else if (w < 920) setPer(2)
      else setPer(3)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return per
}

export default function InstaFeedCarousel() {
  const perView = usePerView()
  const [items, setItems] = useState<FeedItem[] | null>(null)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [moved, setMoved] = useState(false)
  const { fetcher } = useFetch()

  const totalPages = useMemo(() => {
    const total = Math.max(0, (items?.length || 0) - perView)
    return total
  }, [items, perView])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetcher<FeedItem[]>(`/public/instagram`, 'GET')

        setItems(res ?? [])
      } catch (e) {
        console.error(e)
      }
    }

    load()
  }, [])
  console.log('items:', items)

  useEffect(() => {
    setIndex(0)
  }, [perView])

  const canPrev = index > 0
  const canNext = index < totalPages

  if (items === null) return null
  if (!items.length) return null

  function handleMouseDown(e: React.MouseEvent) {
    setIsDragging(true)
    setMoved(false)
    setStartX(e.clientX)
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return

    const diff = e.clientX - startX
    if (Math.abs(diff) > 5) setMoved(true) // 👈 limiar de movimento

    const cardWidth = 352 + 40

    if (Math.abs(diff) > cardWidth / 3) {
      if (diff < 0 && index < totalPages) {
        setIndex((idx) => idx + 1)
        setStartX(e.clientX)
      }

      if (diff > 0 && index > 0) {
        setIndex((idx) => idx - 1)
        setStartX(e.clientX)
      }
    }
  }

  function handleMouseUp() {
    setIsDragging(false)
  }

  function handleMouseLeave() {
    setIsDragging(false)
  }

  return (
    <Section>
      <Header>
        <div className="titleContainer">
          <GoldenLogo src={goldenInstaLogo} />
          <InstaTxt src={instaTxt} />
          <Title>@powergummybr</Title>
        </div>
        <div className="mobileTitleContainer">
          <div className="logo-container">
            <GoldenLogo src={goldenInstaLogo} />
            <InstaTxt src={instaTxt} />
          </div>
          <Title>@powergummybr</Title>
        </div>

        <Controls>
          <IconBtn
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <img src={goldenArow} className="prev" />
          </IconBtn>
          <IconBtn
            onClick={() => setIndex((i) => Math.min(totalPages, i + 1))}
            disabled={!canNext}
            aria-label="Próximo"
          >
            <img src={goldenArow} />
          </IconBtn>
        </Controls>
      </Header>

      <Rail
        className={isDragging ? 'dragging' : ''}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <Track $index={index}>
          {items.map((p) => (
            <Card
              key={p.id}
              onClickCapture={(e) => {
                if (moved) {
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
            >
              <div className="cardHeader">
                <div className="fistContainer">
                  <img className="logo" src={logoRound} />
                  <p className="txt">powergummybr</p>
                </div>
                <a
                  className="dots"
                  href={p.permalink}
                  target="_blank"
                  aria-label="Abrir no Instagram"
                >
                  <img src={dots} onClickCapture={(e) => moved && e.preventDefault()} />
                </a>
              </div>
              <ThumbContainer>
                <Thumb
                  onClickCapture={(e) => {
                    if (moved) {
                      e.preventDefault()
                      e.stopPropagation()
                    }
                  }}
                >
                  {p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM' ? (
                    <img
                      src={p.thumbnail_url || p.media_url}
                      alt={p.caption || 'Post do Instagram'}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  ) : (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={p.thumbnail_url || p.media_url}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
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
  )
}
