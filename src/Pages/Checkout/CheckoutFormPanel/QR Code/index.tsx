import styled from "styled-components";
import copy from '@/assets/icons/copy.svg'

export default function PixPaymentScreen() {

    const payload = "00020101021226820014br.gov.bcb.pix2560pix-h.asaas.com/qr/cobv/63d52c74-fd99-499e-96b9-d0dc07bb660c5204000053039865802BR5913Joao da Silva6012Paulo Afonso61084860219062070503***630413D8"

  const encodedImage = "iVBORw0KGgoAAAANSUhEUgAAAcIAAAHCAQAAAABUY/ToAAADBElEQVR4Xu2UQW4bUQxDZ+f736jH8i4NH6lvt0AxRTeVAcrOfIniYxbzk+vrH+vH9bvyt1XyrkreVcm7KnlXJe/qv5HPi3p8dw99vg+1fK3Lo/nlLLmY9M6Ux0CmzD/1E2fJ3WRUMzwRTLCFT1/yM0iD/ga/gp3okp9DphFqzJUUxJIfQX4d1YcJ/Jp5MMdZcjUZ5/P+czJL/uGzgHzVuRN563YzznKq5FqS98tbNoA/b12HVDWWk1NyMSk5ABM7pwCjRii5nbTL7/2RN2+fRk3QrzuhZcm1pCCcL0gGBzosi3GW3E3mBmjBboYEaZuL4KySu0l7YmQB7HMUU/otaksuJtXrDSO+fE60Xy5tJrrkbhIVg0prKxnfs0ouJwGf8zer5tKgp9McxG9IZMm9JGiedhNlyPfgKETKXXI3GUsqF8PvPrMZ8RJLriUxhVf3bpAAD3lxE4gruZb8dc1oC6i9WDTHU3IxeRDsttgmyRGojmdTci2pLXX+qOWzYrvjIhktuZuU3c40KDo0pdWq5HZymLN0oQixREg+JTeTZz8eh02IRk1RDJbcS4qxh/N4rJiTPjloJdeS3x0DAWFtSxp0kIwl95K8aSAOrsLQknEoZJxSSu4lfRGwn1Eeh5CRVPfylFxLvi1iTsTzNxCH5pKrySuCVvoLxu5mHo4BL7mdtC81Bt8B2yb8i6tQcjfpeVQRwEBOSftKKrmYtFugL4IT7OHkHmiHk+iSi0n8VoK9u7VlQdZEllxLWmWfpbEIjBQuCSV3k/ZowwLcHmGe0wQsuZzUy0+EXRPF+OAymLSr5GJSFE7pl2ywsnuYRMeoL7mWNAgkEwGCxFlPlm+Df03JteRUQJx6oBj3GkW7kptJ74ei8xdTfqwfpeRiUp0dbJOVUxB2H3MvSi4mTeB/76C19tXI1mrJ/eRDPU5UvvZRTvS25CeQ+Lw5LJ1kR8y25GLSkk6eGC2+3xAuwcSV3EvO/+CI8somTUu6c0e4LSUXk/9UJe+q5F2VvKuSd1Xyrj6M/AkPJZej6/T1rwAAAABJRU5ErkJggg=="
  const handleCopy = () => {
    navigator.clipboard.writeText(payload);
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
        <QrImage src={`data:image/png;base64,${encodedImage}`} />
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
