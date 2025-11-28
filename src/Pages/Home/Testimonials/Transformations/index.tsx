import { useRef, useState } from 'react'
import { BtnWraper, CardsWrapper, Subtitle, Title } from './styles'
import video1 from '@/assets/videos/test1.mp4'
import video3 from '@/assets/videos/test1.mp4'
import video2 from '@/assets/videos/test2.mp4'
import bef1 from '@/assets/imgs/bef1.png'
import after1 from '@/assets/imgs/after1.png'
import bef2 from '@/assets/imgs/bef2.png'
import after2 from '@/assets/imgs/after2.png'
import bef3 from '@/assets/imgs/bef3.png'
import after3 from '@/assets/imgs/after3.png'
import VideoCard from './VideoCard'
import BeforeAfterCard from './BeforeAfterCard'
import { MainButton } from '@/components'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

type DepVideo = {
  isVideo: true
  videoUrl: string
  text: string
}

type DepBeforeAfter = {
  isVideo: false
  before: string
  after: string
  label: string
  time: string
}

type Depoimento = DepVideo | DepBeforeAfter

const depoimentos: Depoimento[] = [
  {
    isVideo: true,
    videoUrl: video1,
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before: bef1,
    after: after1,
    label: 'Unhas mais resistentes',
    time: '6 semanas',
  },
  {
    isVideo: true,
    videoUrl: video2,
    text: 'É um composto vitamínico bem completo e muito prático de tomar',
  },
  {
    isVideo: false,
    before: bef2,
    after: after2,
    label: 'Unhas mais resistentes',
    time: '6 semanas',
  },
  {
    isVideo: true,
    videoUrl: video3,
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before: bef3,
    after: after3,
    label: 'Unhas mais resistentes',
    time: '6 semanas',
  },
]

export default function Transformations() {
  const navigate = useNavigate()
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  function goToCheckout() {
    navigate('/checkout')
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    const slider = sliderRef.current
    startXRef.current = e.pageX - slider.offsetLeft
    scrollLeftRef.current = slider.scrollLeft
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const slider = sliderRef.current
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startXRef.current) * 1.2 // velocidade
    slider.scrollLeft = scrollLeftRef.current - walk
  }

  // touch (mobile) – opcional, mas deixa a experiência consistente
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    const slider = sliderRef.current
    const touch = e.touches[0]
    startXRef.current = touch.pageX - slider.offsetLeft
    scrollLeftRef.current = slider.scrollLeft
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return
    const slider = sliderRef.current
    const touch = e.touches[0]
    const x = touch.pageX - slider.offsetLeft
    const walk = (x - startXRef.current) * 1.2
    slider.scrollLeft = scrollLeftRef.current - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  })

  return (
    <>
      <Title>Trasformações</Title>
      <Subtitle>falam mais que palavras</Subtitle>

      <CardsWrapper
        ref={sliderRef}
        $isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {depoimentos.map((dep, i) =>
          dep.isVideo ? (
            <VideoCard key={i} text={dep.text} videoUrl={dep.videoUrl} />
          ) : (
            <BeforeAfterCard
              key={i}
              beforeSrc={dep.before}
              afterSrc={dep.after}
              title={dep.label}
              timeText={dep.time}
            />
          )
        )}
      </CardsWrapper>
      <BtnWraper>
        <MainButton maxW={659} onClick={goToCheckout}>
          {isMobile ? 'COMECE JÁ SUA MUDANÇA' : 'GARANTIR MEU TRATAMENTO HOJE'}
        </MainButton>
      </BtnWraper>
    </>
  )
}
