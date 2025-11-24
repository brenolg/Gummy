import styled from "styled-components";
import giftIcon from "@/assets/gif/gift.gif"; // Troque pelo seu ícone
import check from '@/assets/imgs/checkP.svg'
import { MainButton } from "@/components";
import chevron from "@/assets/imgs/chevron-down.svg"

export default function OrderConfirmed() {
  return (
    <Wrapper>
      <Header>
        <CheckIcon src={check}/>
        <TitlePedido>Pedido confirmado</TitlePedido>
      </Header>

      <MainTitle>Parabéns,</MainTitle>
      <SubTitle>sua compra foi realizada com sucesso!</SubTitle>

      <GiftText>Sua pedido desbloqueou um presente!</GiftText>

      <GiftImage src={giftIcon} alt="Presente" />

      <MainButton maxW={382}>Baixar e-book gratuito</MainButton>

      <EmailHint>
        Você receberá um email de confirmação em breve, 
        <br />
        junto com seu e-book!
      </EmailHint>

      <DetailsButton>Detalhes da compra <img src={chevron}/></DetailsButton>
    </Wrapper>
  );
}

/* ---------------- STYLES ---------------- */

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 52px;
`;

const CheckIcon = styled.img`
width: 32px;
height: 32px;
`;

const TitlePedido = styled.span`
color: var(--roxo-700, #502665);
font-family: "Nunito Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 150%;
`;

const MainTitle = styled.h2`
color: var(--roxo-700, #502665);
text-align: center;
font-family: "Nunito Sans";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 48px */
`;

const SubTitle = styled.p`
  color: var(--roxo-700, #502665);
  font-family: "Nunito Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-align: center;
  margin-bottom: 52px;
`;

const GiftText = styled.p`
color: var(--dourado-200, #BA7E1B);
text-align: center;
font-family: "Nunito Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 160% */
`;

const GiftImage = styled.img`
  width: 120px;
  margin: 16px auto;
  display: block;
`;

const EmailHint = styled.p`
  color: var(--Color-Neutral-Black-700, #424242);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const DetailsButton = styled.button`
  border-radius: 24px 24px 0 0;
  border: 1px solid var(--roxo-700, #502665);
  background: var(--Roxo-0, #FDFBFE);
  height: 75px;
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
