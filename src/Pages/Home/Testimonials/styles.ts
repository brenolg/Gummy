import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0px 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(359deg, rgba(235, 215, 245, 0.04) 1.2%, var(--Roxo-0, #FDFBFE) 73.51%);
`;

export const TitleArea = styled.div`
  text-align: center;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-family: "Nunito Sans";
  font-size: var(--font-size-16, 16px);
  font-style: normal;
  font-weight: var(--font-weight-600, 600);
  line-height: var(--font-size-16, 16px); /* 100% */
  letter-spacing: var(--letter-spacing-1_6, 1.6px);
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(186, 126, 27, 0.48) 0%, #BA7E1B 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.h2`
  color: var(--dourado-200, #BA7E1B);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  span {
    color: var(--roxo-700, #502665);
    font-family: "Nunito Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }
`;

export const CardsWrapper = styled.div<{ $isDragging: boolean }>`
  display: flex;
  gap: 24px;
  padding: 40px 0 104px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  align-self: stretch;
  overflow-x: hidden;
  overflow-y: visible;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
`;

export const Card = styled.div<{ $isFirst?: boolean; $isLast?: boolean }>`
  margin-left: ${({ $isFirst }) => ($isFirst ? "120px" : "0")};
  margin-right: ${({ $isLast }) => ($isLast ? "120px" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 370px;
  height: 300px;
  padding: 40px;
  border-radius: 16px;
  background: var(--Roxo-0, #FDFBFE);
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  flex: 0 0 370px;
  .line {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      #BA7E1B 0%,
      var(--roxo-700, #502665) 100%
    );
    margin-bottom: 12px;
  }
`;

export const Stars = styled.div`
  /* mellis-html.vercel.app/Font Awesome 5 Free/Solid 15 */
  font-family: var(--font-family-Font-4, "Font Awesome 5 Free");
  font-size: var(--font-size-15, 15px);
  font-style: normal;
  font-weight: var(--font-weight-900, 900);
  line-height: var(--font-size-15, 15px); /* 100% */
  background: linear-gradient(180deg, rgba(186, 126, 27, 0.08) 0%, #BA7E1B 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
`;

export const Name = styled.h4`
  color: var(--dourado-200, #BA7E1B);
  font-family: "Nunito Sans";
  font-size: var(--font-size-18, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--line-height-25, 25px); /* 138.889% */
  margin-bottom: 12px;
`;

export const Text = styled.p`
overflow: hidden;
color: var(--Grey-400, #A3A3A3);
font-family: "Nunito Sans";
font-size: var(--font-size-18, 18px);
font-style: normal;
font-weight: 700;
line-height: 150%; /* 27px */
`;
