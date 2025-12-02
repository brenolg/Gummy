import styled from 'styled-components'

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

export const Title = styled.h1`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--line-height-49, 49px); /* 122.5% */
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 120%;
  }
`
export const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
`
export const Subtitle = styled.h2`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: var(--line-height-49, 49px); /* 204.167% */
  margin-bottom: 56px;
  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 24px;
  }
`
