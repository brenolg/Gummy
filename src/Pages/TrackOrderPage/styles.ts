import { colors } from "@/styles/themeUtils";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, var(--Roxo-300, #A559CB) 0%, var(--roxo-700, #502665) 50%, var(--Roxo-800, #3F2049) 100%), #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 16px;
  background: rgba(190, 190, 190, 0.20);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  max-width: 512px;
  width: 100%;
  margin-top: 146px;
  .logo{
    width: 173px;
    height: 120px;
    aspect-ratio: 173/120;
    margin-bottom:8px
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-family: "Segoe UI Symbol";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.6px;
  background: linear-gradient(94deg, #EDD1FF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
`;

export const SubTitle = styled.p`
color: #FFF;
text-align: center;
font-family: "Segoe UI Symbol";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
margin-bottom: 32px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;

  label {
    color: #E8CCF4;
    font-family: "Segoe UI Symbol";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  transition: all 0.3s ease-out;
  border-radius: 5px;
  outline: none;
  width: 100%;
display: flex;
height: 40px;
padding: 11.5px 6.25px 11.5px 18px;
  border: 1px solid ${t => colors(t).neutral.grey500};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05);
  color: ${t => colors(t).neutral.black700};
  background: ${t => colors(t).neutral.white0};
  &:hover {
    border: 1px solid var(--Roxo-25, #EBD7F5);
    background: var(--Roxo-0, #FDFBFE);
  }
  &:focus {
    border: 1px solid var(--roxo-700, #502665);
    background: var(--Color-Neutral-White-0, #FFF);
  }

color: #64748B;
font-family: "Segoe UI Symbol";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const CheckLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  position: relative;

  span {
    color: #FFF;
    font-family: "Segoe UI Symbol";
    font-size: 11.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 137.931% */
  }
`;

export const SubmitButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
width: 100%;
height: 48px;
border-radius: 12px;
background: linear-gradient(96deg, #8A47AA 0%, #6A3486 100%);
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);
color: #FFF;
text-align: center;
font-family: "Segoe UI Symbol";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
border-radius: 12px;
background: linear-gradient(96deg, #8A47AA 0%, #6A3486 100%);
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);
`;
interface IStyleProps {
  $error: boolean
  $disabled?: boolean
}

export const InputError = styled.div<IStyleProps>`
  position: absolute;
  bottom: 0px;
  transform: translateY(100%);
  text-align: start;
  display: flex;
  opacity: ${(props) => {
    if (props.$error) return 1 // Com erro
    return 0 // Nenhuma condição atendida
  }};
  align-items: center;
  transition: all 0.3s ease-out;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--Vermelho-Alerta, #F00);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  padding: 4px 0;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  .img-error {
    width: 12px;
    height: 12px;
  }
`
