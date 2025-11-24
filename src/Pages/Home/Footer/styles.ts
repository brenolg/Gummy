import styled from "styled-components";

export const FooterContainer = styled.footer`

`;

export const Content = styled.div`
display: flex;
padding: 60px 120px;
align-items: flex-start;
align-self: stretch;
justify-content: space-between;
background: linear-gradient(180deg, var(--Roxo-800, #3F2049) 0%, var(--roxo-700, #502665) 100%);
`;

interface ColumnProps {
  $gap?: number;
  $minW?: number;
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
`;

export const Logo = styled.img`
width: 173px;
height: 120px;
aspect-ratio: 173/120;
margin-bottom: 16px;
`;

export const Description = styled.p`
color: #FFF;
font-family: "Nunito Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
letter-spacing: var(--letter-spacing--0_4, -0.4px);
max-width: 230px;
margin-bottom: 24px;
`;

export const SocialIcon = styled.button`
border-radius: 12px;
border: 1px solid var(--Roxo-0, #FDFBFE);
background: var(--roxo-700, #502665);
padding: 10px;
width: fit-content;
  cursor: pointer;
  img {
    width: 18px;
height: 18px;
  }
`;

export const Title = styled.h4`
color: var(--dourado-200, #BA7E1B);
font-family: "Nunito Sans";
font-size: var(--font-size-20, 20px);
font-style: normal;
font-weight: var(--font-weight-700, 700);
line-height: var(--font-size-20, 20px); /* 100% */
letter-spacing: var(--letter-spacing--0_5, -0.5px);
`;

export const LinkItem = styled.p`
color: #FFF;
font-family: "Nunito Sans";
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: var(--line-height-22_5, 22.5px); /* 140.625% */
letter-spacing: var(--letter-spacing--0_4, -0.4px);
cursor: pointer;
display: flex;
gap: 7px;
`;

export const SmallText = styled.p`
color: #FFF;
font-family: "Nunito Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 17.6px; /* 110% */
letter-spacing: 0.6px;
`;


export const Guarantee = styled.p`
color: #FFF;
font-family: "Nunito Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 17.6px; /* 110% */
letter-spacing: 0.6px;
`;

export const BottomBar = styled.div`


  padding:20px 120px ;
  background: linear-gradient(90deg, #BA7E1B 0%, #54390C 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const LeftText = styled.p`
color: #FFF;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 30px; /* 214.286% */
`;

export const RightText = styled.p`
color: #FFF;
display: flex;
gap: 8px;
text-align: right;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 30px; /* 214.286% */
  strong {
    color: #ffdf7f;
  }
`;
