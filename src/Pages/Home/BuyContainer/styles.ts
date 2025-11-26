import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  padding: 80px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 32px 32px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.roxo800} 0%,
    ${({ theme }) => theme.colors.roxo700} 100%
  );
  text-align: center;
  .section-title {
    color: ${({ theme }) => theme.colors.roxo0};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .section-subtitle {
    color: ${({ theme }) => theme.colors.roxo0};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 64px;
  }
  @media (max-width: 1270px) {
    padding: 40px 24px;
    .section-title {
      font-size: 28px;
    }
    .section-subtitle {
      font-size: 14px;
      margin-bottom: 55px;
    }
  }
`
export const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(182.84px, 550px));
  width: 100%;
  @media (max-width: 1270px) {
    gap: 8px;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
export const Card = styled.div`
  display: flex;
  position: relative;
  padding: 48px 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%; /* ocupa a célula inteira do grid */
  max-width: 550px;
  .cardTitle {
    color: ${({ theme }) => theme.colors.roxo700};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 48px */
  }
  .cardSubtitle {
    color: ${({ theme }) => theme.colors.roxo700};
    font-family: 'Nunito Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .description {
    color: ${({ theme }) => theme.colors.neutral.grey700};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    white-space: pre-line;
  }
  .productImage {
    height: 225px;
  }
  .eBookPlus {
    color: ${({ theme }) => theme.colors.neutral.grey400};
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .mb51 {
    margin-bottom: 51.5px;
  }
  .mb24 {
    margin-bottom: 24px;
  }
  .seal {
    position: absolute;
    top: -41px;
    right: -81px;
  }
  @media (max-width: 1270px) {
    padding: 16px 8px;
    .seal {
      top: -52px;
      right: -11px;
      width: 85px;
      height: 69px;
    }
    .cardTitle {
      font-size: 24px;
      line-height: 100%;
    }
    .cardSubtitle {
      color: var(--roxo-700, #502665);
      font-family: 'Nunito Sans';
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 120%;
      margin-bottom: 8px;
    }
    .description {
      font-size: 14px;
    }
    .eBookPlus {
      color: var(--roxo-700, #502665);
      text-align: center;
      font-family: 'Nunito Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 14.4px */
    }
    .mb24 {
      margin-bottom: 8px;
    }
    .mb51 {
      margin-bottom: 36px;
    }
  }
  @media (max-width: 650px) {
    .productImage {
      height: 120px;
    }
  }
`

export const Price = styled.div`
  margin-bottom: 24px;
  .priceNumber {
    color: ${({ theme }) => theme.colors.roxo700};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 105%; /* 105% */
    margin-bottom: 16px;
  }
  .payMethod {
    color: ${({ theme }) => theme.colors.neutral.grey700};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 100% */
  }
  .dashed {
    color: ${({ theme }) => theme.colors.neutral.grey600};
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 210%; /* 210% */
    text-decoration-line: line-through;
  }
  @media (max-width: 1270px) {
    .dashed {
      font-size: 12px;
      line-height: 133.333%;
    }
    .priceNumber {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .payMethod {
      font-size: 12px;
    }
  }
`
