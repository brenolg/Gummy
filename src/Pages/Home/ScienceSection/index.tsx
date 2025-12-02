import { MainButton } from '@/components'

import {
  Section,
  Content,
  Heading,
  SuperTitle,
  Title,
  Description,
  CardsGrid,
  Card,
  DescriptionStrong,
  FeaturedImage,
  BackImage,
  CardsWrapper,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useRef, useState } from 'react'

export default function ScienceSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const navigate = useNavigate()
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
    query: '(max-width: 600px)',
  })

  return (
    <Section id="science">
      <Content>
        <Heading>
          <SuperTitle>NÃO É MÁGICA</SuperTitle>
          <Title>É CIÊNCIA APLICADA!</Title>
          <Description>
            A nova geração de suplementação. A evolução que sua rotina estava esperando.
          </Description>
          <DescriptionStrong>Cabelo, pele e unhas transformados.</DescriptionStrong>
        </Heading>

        {!isMobile && (
          <CardsGrid>
            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairGirl.png?alt=media&token=9b51869a-1dd5-4cac-8693-5de57c0803fc" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairB.png?alt=media&token=9cf73e62-3466-4957-92c7-e38dd6454770" />
            </Card>

            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nails.png?alt=media&token=7297b79f-c7d7-4656-8163-adbb2f1b1dc6" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nailsB.png?alt=media&token=c1333ed2-6bbb-46d5-960a-467d8c34a232" />
            </Card>

            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skin.png?alt=media&token=dd03b2cf-fa42-4cd0-8003-734515dd25b7" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skinB.png?alt=media&token=66a9de4e-0c2b-45bd-a48f-b9af3408f0bf" />
            </Card>
          </CardsGrid>
        )}
        {isMobile && (
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
            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairGirl.png?alt=media&token=9b51869a-1dd5-4cac-8693-5de57c0803fc" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairB.png?alt=media&token=9cf73e62-3466-4957-92c7-e38dd6454770" />
            </Card>

            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nails.png?alt=media&token=7297b79f-c7d7-4656-8163-adbb2f1b1dc6" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nailsB.png?alt=media&token=c1333ed2-6bbb-46d5-960a-467d8c34a232" />
            </Card>

            <Card>
              <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skin.png?alt=media&token=dd03b2cf-fa42-4cd0-8003-734515dd25b7" />
              <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skinB.png?alt=media&token=66a9de4e-0c2b-45bd-a48f-b9af3408f0bf" />
            </Card>
          </CardsWrapper>
        )}

        <MainButton type="button" onClick={goToCheckout} maxW={630}>
          QUERO GARANTIR O MEU AGORA
        </MainButton>
      </Content>
    </Section>
  )
}
