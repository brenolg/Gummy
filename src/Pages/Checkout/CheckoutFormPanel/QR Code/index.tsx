import styled from "styled-components";
import copy from '@/assets/icons/copy.svg'
import { useCoreData } from "@/context/coreDataContext";

export default function PixPaymentScreen() {
  const { formData } = useCoreData();


  const handleCopy = () => {
    navigator.clipboard.writeText(String(formData.qrcodePayload)
    );
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
        <QrImage src={`data:image/png;base64,${formData.qrcodeImage}`} />
      </QrBox>

      <CopyButton onClick={handleCopy}>
        <CopyIcon src={copy}/>
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
color: var(--roxo-700, #502665);
text-align: center;
font-family: "Nunito Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 160% */
margin: 8px;
`;

const Instructions = styled.p`
color: var(--Color-Neutral-Black-700, #424242);
text-align: center;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 50px;
`;

const Emphasis = styled.p`
color: var(--Roxo-400, #943FBF);
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const Or = styled.p`
color: var(--Color-Neutral-Black-700, #424242);
text-align: center;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const QrBox = styled.div`
  width: 241px;
  height: 242px;
  aspect-ratio: 241/242;
  margin: 22px auto;
`;

const QrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CopyButton = styled.button`
color: var(--roxo-700, #502665);
text-align: center;
font-family: "Nunito Sans";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
width: fit-content;
gap: 16px;
margin: auto;
`;

const CopyIcon = styled.img`

`;
