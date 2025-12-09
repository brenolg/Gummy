import styled from 'styled-components'

export const FooterContainer = styled.footer`
  .colum-container {
    display: flex;
    justify-content: space-around;
    width: 50%;
    @media (max-width: 520px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 40px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: 60px 120px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  background: linear-gradient(180deg, var(--Roxo-800, #3f2049) 0%, var(--roxo-700, #502665) 100%);
  @media (max-width: 1200px) {
    padding: 24px;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 40px;
  }
`
interface ColumnProps {
  $gap?: number
  $minW?: number
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${({ $gap }) => $gap !== undefined && `gap: ${$gap}px;`}
  ${({ $minW }) => $minW !== undefined && `min-width: ${$minW}px;`}
  .buyButton {
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 1050px) {
    width: 100%;
    min-width: 100%;
    &.center-mobile {
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .work-hour {
      display: flex;
    }
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
  }
`

export const Logo = styled.img`
  width: 173px;
  height: 120px;
  aspect-ratio: 173/120;
  margin-bottom: 16px;
  @media (max-width: 520px) {
    margin-bottom: 0;
  }
`

export const Description = styled.p`
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: var(--letter-spacing--0_4, -0.4px);
  max-width: 230px;
  margin-bottom: 24px;
  @media (max-width: 700px) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: 520px) {
    margin-bottom: 0;
  }
`

export const SocialIcon = styled.button`
  border-radius: 12px;
  border: 1px solid var(--Roxo-0, #fdfbfe);
  background: var(--roxo-700, #502665);
  padding: 10px;
  width: fit-content;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
`

export const Title = styled.h4`
  color: var(--dourado-200, #ba7e1b);
  font-family: 'Nunito Sans';
  font-size: var(--font-size-20, 20px);
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: var(--font-size-20, 20px); /* 100% */
  letter-spacing: var(--letter-spacing--0_5, -0.5px);
`

export const LinkItem = styled.p`
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: var(--line-height-22_5, 22.5px); /* 140.625% */
  letter-spacing: var(--letter-spacing--0_4, -0.4px);
  cursor: pointer;
  display: flex;
  gap: 7px;
`

export const SmallText = styled.p`
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.6px; /* 110% */
  letter-spacing: 0.6px;
  text-align: left;
`

export const Guarantee = styled.p`
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.6px; /* 110% */
  letter-spacing: 0.6px;
`

export const BottomBar = styled.div`
  padding: 20px 120px;
  background: linear-gradient(90deg, #ba7e1b 0%, #54390c 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 16px 24px;
    text-align: center;
  }
`

export const LeftText = styled.p`
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
`

export const RightText = styled.p`
  color: #fff;
  display: flex;
  gap: 8px;
  text-align: right;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
  strong {
    color: #ffdf7f;
  }
`
