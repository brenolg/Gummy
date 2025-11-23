import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-bottom: 72px;
  padding-top: 77px;
  background: linear-gradient(180deg, var(--roxo-700, rgba(80, 38, 101, 0.24)) 0%, var(--Roxo-0, rgba(253, 251, 254, 0.24)) 100%), var(--Roxo-0, #FDFBFE);
`;

export const HeaderText = styled.p`
  color: var(--roxo-700, #502665);
  font-family: "Nunito Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 60px */
  padding-left: 110px;
`;

export const SubText = styled.p`
  padding-left: 110px;
  color: var(--dourado-200, #BA7E1B);
  font-family: "Nunito Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 16px;
  strong {
    color: var(--dourado-200, #BA7E1B);
    font-family: "Nunito Sans";
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const PurposeTitle = styled.h3`
  color: #BAA06A;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  gap: 15px;
  display: flex;
  padding-left: 110px;
  margin-bottom: 40px;
`;

export const ScienceText = styled.p`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  strong {
    color: var(--dourado-200, #BA7E1B);
    font-family: "Nunito Sans";
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TransformatioTxt = styled.div`
  color: #BAA06A;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  gap: 15px;
  display: flex;
  margin-bottom: 24px;
`;

export const CareTxt = styled.div`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;


export const HairTxt = styled.div`
  color: var(--dourado-200, #BA7E1B);
  font-family: "Nunito Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  margin-bottom: 40px;
`;
