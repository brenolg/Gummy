import styled from "styled-components";
import giftIcon from "@/assets/gif/gift.gif"; // Troque pelo seu ícone

export default function OrderConfirmed() {
  return (
    <Wrapper>
      <Header>
        <CheckIcon>✔</CheckIcon>
        <TitlePedido>Pedido confirmado</TitlePedido>
      </Header>

      <MainTitle>Parabéns,</MainTitle>
      <SubTitle>sua compra foi realizada com sucesso!</SubTitle>

      <GiftText>Sua pedido desbloqueou um presente!</GiftText>

      <GiftImage src={giftIcon} alt="Presente" />

      <DownloadButton>Baixar e-book gratuito</DownloadButton>

      <EmailHint>
        Você receberá um email de confirmação em breve, <br />
        junto com seu e-book!
      </EmailHint>

      <DetailsButton>Detalhes da compra ⌄</DetailsButton>
    </Wrapper>
  );
}

/* ---------------- STYLES ---------------- */

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 32px 16px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #3c005a;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
`;

const CheckIcon = styled.div`
  width: 22px;
  height: 22px;
  background: #7b3bf3;
  color: white;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitlePedido = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const MainTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #5a00a3;
`;

const GiftText = styled.p`
  color: #c57c00;
  font-weight: 600;
  margin-bottom: 20px;
`;

const GiftImage = styled.img`
  width: 120px;
  margin: 16px auto;
  display: block;
`;

const DownloadButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #6a00f4, #b400f6);
  border: none;
  padding: 14px 0;
  margin-top: 12px;
  margin-bottom: 20px;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const EmailHint = styled.p`
  font-size: 13px;
  color: #575757;
  margin-bottom: 28px;
  line-height: 1.4;
`;

const DetailsButton = styled.button`
  width: 100%;
  background: #f9f4ff;
  border: 1px solid #e8d8ff;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
