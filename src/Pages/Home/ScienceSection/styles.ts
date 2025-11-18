import styled from "styled-components";
import bg from './scienceBg.svg'

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: 96px 136px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.roxo0} 0%, #FAE4C1 100%),${({ theme }) => theme.colors.dourado100};
  background-image: url(${ bg });
  background-repeat: no-repeat;
  background-size: cover;     
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const Heading = styled.header`
  text-align: center;
  margin-bottom: 80px;
`;

export const SuperTitle = styled.p`

  color: ${({ theme }) => theme.colors.dourado200};


text-align: center;
font-family: "Nunito Sans";
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: 120%; /* 48px */
`;

export const Title = styled.h2`

  color: ${({ theme }) => theme.colors.roxo700};


font-family: "Nunito Sans";
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: 120%;
margin-bottom: 24px;
`;

export const Description = styled.p`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;

export const DescriptionStrong = styled.p`
  color: var(--roxo-700, #502665);
  font-family: "Nunito Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const CardsGrid = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 40.5px;
  margin-bottom: 80px;
`;

export const Card = styled.article`
width: 320px;
height: 440px;
flex-shrink: 0;
position: relative;

  display: flex;           
  flex-direction: column;  
  border-radius: 24px;
//border: 2px solid rgba(186, 126, 27, 0.08);
//background: linear-gradient(180deg, rgba(250, 228, 193, 0.00) 0%, #FAE4C1 100%);

`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 4.5px;

`;

export const CardTag = styled.span`

text-align: center;
font-family: "Nunito Sans";
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 37.4px; /* 93.5% */
  color: ${({ theme }) => theme.colors.neutral.white0};
  
  
`;

export const CardHighlight = styled.span`
color: var(--Grey-Branco, #FFF);
text-align: center;
font-family: "Nunito Sans";
font-size: 42px;
font-style: normal;
font-weight: 900;
line-height: 120%; /* 50.4px */
`;

export const CardFooterText = styled.p`
display: flex;
width: 100%;

padding: 4px;
align-items: flex-start;
gap: 10px;
flex-shrink: 0;
border-radius: 24px;
border: 1px solid var(--roxo-700, #502665);

.content {
width: 100%;
padding: 8px 0;
gap: 10px;
border-radius: 24px;
background: linear-gradient(180deg, #502665 0%, var(--Roxo-600, #662F82) 100%);

color: var(--Roxo-0, #FDFBFE);
text-align: center;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 16.8px */
strong {
  font-weight: 900;
}
}
`;


export const FeaturedImage = styled.div<{ $img: string, $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
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
`;
