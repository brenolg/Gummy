import { useRef, useState } from 'react'
import { BtnWraper, CardsWrapper, Subtitle, Title } from './styles'

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
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/test1.mp4?alt=media&token=6bd3b06e-fccf-4204-a6a2-5e71fa00a715',
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/bef1.png?alt=media&token=c2558797-b82c-48a1-b47b-696ad5895977',
    after:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/after1.png?alt=media&token=33df9dcd-fbd5-43e5-9bd6-37d28b8daa86',
    label: 'Unhas mais resistentes',
    time: '6 semanas',
  },
  {
    isVideo: true,
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/test2.mp4?alt=media&token=c0563839-6018-4585-b63b-5c41f4f66c4e',
    text: 'É um composto vitamínico bem completo e muito prático de tomar',
  },
  {
    isVideo: false,
    before:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/bef2.png?alt=media&token=43d9cba5-09de-4b99-8d79-0731716062a4',
    after:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/after2.png?alt=media&token=265a1f61-176c-4c75-b27f-9d6e7db7a816',
    label: 'Unhas mais resistentes',
    time: '6 semanas',
  },
  {
    isVideo: true,
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/test1.mp4?alt=media&token=6bd3b06e-fccf-4204-a6a2-5e71fa00a715',
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/bef3.png?alt=media&token=7ed0ff8a-a009-4f05-8629-930d8e599c62',
    after:
      'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/after3.png?alt=media&token=b8700567-31e0-470d-9a0f-82486e55fb71',
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
