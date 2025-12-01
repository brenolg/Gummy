import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

type BannerData = {
  imageUrl: string
  position: number
}

type RotatingBannerProps = {
  banners: BannerData[]
}

export default function RotatingBanner({ banners }: RotatingBannerProps) {
  // Ordena pelo position (1, 2, 3...)
  const sortedBanners = useMemo(
    () => [...banners].sort((a, b) => a.position - b.position),
    [banners]
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  // Quando mudar a lista, volta pro primeiro
  useEffect(() => {
    if (!sortedBanners.length) return
    setCurrentIndex(0)
  }, [sortedBanners.length])

  // Troca de banner a cada 3s
  useEffect(() => {
    if (!sortedBanners.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 < sortedBanners.length ? prev + 1 : 0))
    }, 6000)

    return () => clearInterval(interval)
  }, [sortedBanners.length])

  if (!sortedBanners.length) return null

  return (
    <BannerWrapper>
      {sortedBanners.map((banner, index) => (
        <BannerImage
          key={banner.position}
          src={banner.imageUrl}
          alt={`Banner ${banner.position}`}
          $active={index === currentIndex}
        />
      ))}
    </BannerWrapper>
  )
}

/* ---------- STYLES ---------- */

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  aspect-ratio: 1440 / 700;
  @media (max-width: 640px) {
    aspect-ratio: 435 / 620; /* ou o ratio real da sua arte mobile */
  }
`

const BannerImage = styled.img<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
`
