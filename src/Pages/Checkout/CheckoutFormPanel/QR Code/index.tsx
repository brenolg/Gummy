import styled from "styled-components";
import qrImg from "@/assets/imgs/qr-code.png"; // troque pelo seu QR real

export default function PixPaymentScreen() {
  const handleCopy = () => {
    const code =
      "00020126360014BR.GOV.BCB.PIX0111+5531999999990206PIX1235204000053039865406100.005802BR5925NOME DO RECEBEDOR6009SAO PAULO62140510ABC12345676304EF7A";

    navigator.clipboard.writeText(code);
    alert("Código PIX copiado!");
  };

  return (
    <Wrapper>
      <Title>Estamos quase lá!</Title>

      <Instructions>
        Para finalizar sua compra efetuando pagamento:
      </Instructions>

      <Emphasis>Escaneie o QR Code</Emphasis>
      <Or>ou</Or>
      <Emphasis>Copie o código PIX e cole no app do seu banco</Emphasis>

      <QrBox>
        <QrImage src={qrImg} alt="QR Code para pagamento PIX" />
      </QrBox>

      <CopyButton onClick={handleCopy}>
        <CopyIcon>📋</CopyIcon>
        Copiar código
      </CopyButton>
    </Wrapper>
  );
}

/* ---------------- STYLES ---------------- */

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 32px 16px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #4b008f;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Instructions = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 18px;
`;

const Emphasis = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #6a00f4;
`;

const Or = styled.p`
  font-size: 13px;
  color: #333;
  margin: 4px 0;
`;

const QrBox = styled.div`
  width: 240px;
  height: 240px;
  padding: 12px;
  margin: 22px auto;
  background: white;
  border: 2px solid #eee;
  border-radius: 12px;
`;

const QrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  color: #6a00f4;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 12px;
`;

const CopyIcon = styled.span`
  font-size: 18px;
`;
