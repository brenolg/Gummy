import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.roxo0};
  border-radius: 20px;
  padding: 120px 0px 120px 0px;
  @media (max-width: 900px) {
    padding: 48px 0px 48px 0px;
  }
`

export const Header = styled.header`
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
  .mobileTitleContainer {
    display: none;
  }
  @media (max-width: 900px) {
    padding-right: 25px;
    padding-left: 25px;
    margin-bottom: 24px;
    .titleContainer {
      display: none;
    }
    .logo-container {
      display: flex;
      flex-direction: row;
      padding-bottom: 22px;
    }
    .mobileTitleContainer {
      display: flex;
      flex-direction: column;
    }
  }
`

export const GoldenLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 27px;
  @media (max-width: 900px) {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`

export const InstaTxt = styled.img`
  width: 148.105px;
  height: 42px;
  @media (max-width: 900px) {
    width: 113px;
    height: 32px;
    aspect-ratio: 113/32;
  }
`

export const Title = styled.h3`
  color: #151d53;
  font-family: Montserrat;
  font-size: 28.993px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 7px;
  @media (max-width: 900px) {
    font-size: 20px;
    padding-bottom: 0;
  }
`

export const Rail = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: 120px;
  &.dragging {
    cursor: grabbing;
  }
  @media (max-width: 900px) {
    margin-left: 25px;
  }
`

export const Track = styled.div<{ $index: number }>`
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateX(${(p) => `calc(${p.$index} * (352px + 40px) * -1)`});
`

export const Card = styled.div`
  border-radius: 7px;
  border: 1px solid #d6d6d6;
  width: 352px;
  box-sizing: border-box;
  background: #fff;
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
    .dots {
      display: flex;
      align-items: center;
    }
  }
`

export const ThumbContainer = styled.article`
  position: relative;
  background: #ffffff;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  overflow: hidden;
  height: 469.083px;
  width: 352px;
`

export const Thumb = styled.div`
  display: block;
  aspect-ratio: 352/469.08;
  background: #f0eee9;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
  @media (max-width: 900px) {
    font-size: 20px;
    margin-top: auto;
  }
`

export const IconBtn = styled.button`
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .prev {
    transform: rotate(180deg);
  }
`
