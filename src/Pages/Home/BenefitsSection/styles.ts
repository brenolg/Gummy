import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 77px 110px 256px;
`;

export const HeaderText = styled.p`
color: var(--roxo-700, #502665);
font-family: "Nunito Sans";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 150%;

  strong {

color: var(--dourado-200, #BA7E1B);
font-family: "Nunito Sans";
font-size: 40px;
font-style: normal;
font-weight: 900;
line-height: 150%; /* 60px */
  }
`;

export const SubText = styled.p`
color: ${({ theme }) => theme.colors.dourado100};
color: var(--Roxo-600, #662F82);
font-family: "Nunito Sans";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-bottom: 45px;
  strong {
   color: var(--dourado-200, #BA7E1B);

font-weight: 900;

  }
`;

export const PurposeBlock = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
  
`;

export const PurposeTitle = styled.h3`
color: var(--roxo-700, #502665);
font-family: "Nunito Sans";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 38.4px */
strong {

font-weight: 700;

}
`;

export const PurposeSubtitle = styled.p`
  color: var(--dourado-200, #BA7E1B);
font-family: "Nunito Sans";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 120%;

`;

export const CardsRow = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SmallCard = styled.div`
  padding: 18px 30px;
  border-radius: 16px;

  font-size: 14px;

  font-weight: 600;
  min-width: 140px;
`;

export const LargeCard = styled.div`
  padding: 22px 35px;
  border-radius: 16px;

  font-size: 15px;

  min-width: 180px;
`;

export const ScienceText = styled.p`
  margin: 40px 0 20px;
  font-size: 18px;


  strong {

  }
`;

export const Button = styled.button`
  margin-top: 35px;
  padding: 15px 40px;

  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
`;

