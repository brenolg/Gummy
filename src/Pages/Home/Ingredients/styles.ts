import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/ingredientsBg.png?alt=media&token=5a81f3fa-dbf9-485d-aef2-9eac024d5df9');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  width: 100%;
  padding: 48px 86px;
  display: flex;
  flex-direction: column;
  @media (max-width: 945px) {
    padding: 40px 24px;
  }
`

export const TopBanner = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: fit-content;
  margin: auto;
`

export const BannerTitle = styled.div`
  color: var(--dourado-200, #ba7e1b);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 34px;
  font-style: normal;
  font-weight: 800;
  line-height: 37.4px; /* 110% */
`

export const BannerSubtitle = styled.div`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1.1fr auto 1.1fr;
  gap: 32px;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 60px;
  justify-content: flex-start;
`

export const Ingredient = styled.div<{ $right?: boolean }>`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  align-items: ${({ $right }) => ($right ? 'flex-end' : 'flex-start')};
`

export const IngredientTitle = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.dourado200};
  font-family: 'Nunito Sans';
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.4px;
  text-align: ${({ $right }) => ($right ? 'right' : 'left')};
  @media (max-width: 1150px) {
    font-size: 25px;
  }
`

export const IngredientSubtitle = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.roxo700};
  font-family: 'Nunito Sans';
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.4px;
  margin-bottom: 8px;
  text-align: ${({ $right }) => ($right ? 'right' : 'left')};
  @media (max-width: 1150px) {
    font-size: 28px;
  }
`

export const IngredientText = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.roxo700};
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  text-align: ${({ $right }) => ($right ? 'right' : 'left')};
`

export const BottleWrapper = styled.div<{ $showHover?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1;
  .bottle {
    max-width: 260px;
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
    cursor: pointer;
  }

  /* hover image */
  .bottle.hover {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${({ $showHover }) => ($showHover ? 1 : 0)};
    pointer-events: none;
    z-index: 2;
  }

  /* default image */
  .bottle.default {
    opacity: ${({ $showHover }) => ($showHover ? 0 : 1)};
  }

  /* hover desktop */
  &:hover .bottle.default {
    opacity: 0;
  }

  &:hover .bottle.hover {
    opacity: 1;
  }
  .seal {
    position: absolute;
    bottom: 62px;
    right: -25px;
    z-index: 5;
  }

  @media (max-width: 1150px) {
    .seal {
      bottom: 132px;
      right: -25px;
      z-index: 5;
    }
  }

  @media (max-width: 820px) {
    max-width: 382px;
    margin: auto;
    gap: 0;
    .bottle {
      max-width: 320px;
    }
    .seal {
      bottom: 145px;
      right: -20px;
    }
  }
`

export const BottleImage = styled.img`
  max-width: 260px;
  width: 100%;
`

export const BottomNote = styled.div`
  display: flex;
  width: 389px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  position: relative;
  border: var(--stroke-weight-1, 1px) solid rgba(186, 160, 106, 0.24);
  background: rgba(246, 234, 208, 0.08);
  box-shadow: 0 0 8px 1px rgba(185, 158, 104, 0.24);
  backdrop-filter: blur(12px);
  h2 {
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
    background: linear-gradient(90deg, #502665 0%, #a14ccb 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: var(--roxo-700, #502665);
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }

  @media (max-width: 1150px) {
    width: 250px;
  }

  @media (max-width: 820px) {
    width: 100%;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
  }
`
