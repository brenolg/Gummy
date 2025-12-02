import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0px 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    359deg,
    rgba(235, 215, 245, 0.04) 1.2%,
    var(--Roxo-0, #fdfbfe) 73.51%
  );
  @media (max-width: 900px) {
    padding: 40px 24px;
    padding-right: 0;
  }
`

export const TitleArea = styled.div`
  text-align: center;
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media (max-width: 900px) {
    gap: 8px;
  }
`

export const SubTitle = styled.p`
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: var(--font-size-16, 16px);
  font-style: normal;
  font-weight: var(--font-weight-600, 600);
  line-height: var(--font-size-16, 16px); /* 100% */
  letter-spacing: var(--letter-spacing-1_6, 1.6px);
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(186, 126, 27, 0.48) 0%, #ba7e1b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`

export const Title = styled.h2`
  color: var(--dourado-200, #ba7e1b);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  span {
    color: var(--roxo-700, #502665);
    font-family: 'Nunito Sans';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 120%;
    span {
      font-size: 24px;
      line-height: 120%;
    }
  }
`

export const CardsWrapper = styled.div<{ $isDragging: boolean }>`
  display: flex;
  gap: 24px;
  padding: 40px 0 104px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 104px;
  box-sizing: border-box;
  align-self: stretch;
  overflow-x: hidden;
  overflow-y: visible;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  @media (max-width: 900px) {
    padding: 0;
    padding-top: 32px;
    padding-bottom: 40px;
  }
`

export const Card = styled.div<{ $isFirst?: boolean; $isLast?: boolean }>`
  margin-left: ${({ $isFirst }) => ($isFirst ? '120px' : '0')};
  margin-right: ${({ $isLast }) => ($isLast ? '120px' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 370px;
  height: 310px;
  padding: 40px;
  padding-bottom: 0;
  border-radius: 16px;
  background: var(--Roxo-0, #fdfbfe);
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  flex: 0 0 370px;
  .line {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ba7e1b 0%, var(--roxo-700, #502665) 100%);
    margin-bottom: 12px;
  }
  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
    padding: 24px;
    width: 250px;
    height: 251px;
    flex: 0 0 250px;
    margin-left: ${({ $isFirst }) => ($isFirst ? '0px' : '0')};
    margin-right: ${({ $isLast }) => ($isLast ? '0px' : '0')};
  }
`

export const Stars = styled.div`
  /* mellis-html.vercel.app/Font Awesome 5 Free/Solid 15 */
  font-family: var(--font-family-Font-4, 'Font Awesome 5 Free');
  font-size: var(--font-size-15, 15px);
  font-style: normal;
  font-weight: var(--font-weight-900, 900);
  line-height: var(--font-size-15, 15px); /* 100% */
  background: linear-gradient(180deg, rgba(186, 126, 27, 0.08) 0%, #ba7e1b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
`

export const Name = styled.h4`
  color: var(--dourado-200, #ba7e1b);
  font-family: 'Nunito Sans';
  font-size: var(--font-size-18, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--line-height-25, 25px); /* 138.889% */
  margin-bottom: 12px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`

export const Text = styled.p`
  overflow: hidden;
  color: var(--Grey-400, #a3a3a3);
  font-family: 'Nunito Sans';
  font-size: var(--font-size-18, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  @media (max-width: 900px) {
    font-size: 14px;
  }
`
