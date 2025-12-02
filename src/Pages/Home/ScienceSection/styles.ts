import styled from 'styled-components'
import bg from '@/assets/imgs/scienceBg.svg'

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: 96px 136px;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.colors.roxo0} 0%, #fae4c1 100%),
    ${({ theme }) => theme.colors.dourado100};
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 750px) {
    padding: 24px;
    padding-top: 72px;
    padding-bottom: 56px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.header`
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`

export const SuperTitle = styled.p`
  color: ${({ theme }) => theme.colors.dourado200};
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%; /* 48px */
  @media (max-width: 750px) {
    font-size: 24px;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.roxo700};
  font-family: 'Nunito Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  margin-bottom: 24px;
  @media (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`

export const Description = styled.p`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  @media (max-width: 750px) {
    font-size: 14px;
  }
`

export const DescriptionStrong = styled.p`
  color: var(--roxo-700, #502665);
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`

export const CardsGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40.5px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`

export const Card = styled.article`
  width: 320px;
  height: 440px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  @media (max-width: 750px) {
    width: 250px;
    height: 344px;
  }
`

export const FeaturedImage = styled.div<{ $img: string; $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: 100%;
  position: absolute;
  top: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const BackImage = styled.div<{ $img: string; $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  &&:hover {
    opacity: 1;
  }
`
export const CardsWrapper = styled.div<{ $isDragging: boolean }>`
  display: flex;
  gap: 24px;
  padding-left: 120px; /* 120px nas laterais, substitui as margins do Card */
  padding-right: 120px;
  padding-bottom: 104px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  align-self: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  & > * {
    flex-shrink: 0;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 900px) {
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 60px;
  }
`
