import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 52px;
`;

export const CheckIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const TitlePedido = styled.span`
  color: var(--roxo-700, #502665);
  font-family: "Nunito Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const MainTitle = styled.h2`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const SubTitle = styled.p`
  color: var(--roxo-700, #502665);
  font-family: "Nunito Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-align: center;
  margin-bottom: 52px;
`;

export const GiftText = styled.p`
  color: var(--dourado-200, #ba7e1b);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const GiftImage = styled.img`
  width: 120px;
  margin: 16px auto;
  display: block;
`;

export const EmailHint = styled.p`
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

/* DROPDOWN */

export const DetailsWrapper = styled.div`
  width: 100%;
  max-width: 430px;
`;

export const DetailsHeader = styled.button<{ $open: boolean }>`
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
  justify-content: space-between;
  gap: 8px;
  padding: 0 24px;
`;

export const ChevronIcon = styled.img<{ $open: boolean }>`
  width: 18px;
  height: 18px;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

export const DetailsContent = styled.div`
  border-radius: 0 0 24px 24px;
  border: 1px solid var(--roxo-700, #502665);
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* CARDS E CAMPOS INTERNOS */

export const SectionCard = styled.div`


  padding: 16px 16px 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styled.h3`
color: #3C3C3C;
font-family: "Nunito Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const FieldRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const Field = styled.div<{ flex?: number }>`
display: flex;
padding: 16px;
align-items: flex-start;
gap: 16px;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--roxo-700, #502665);
background: var(--Roxo-0, #FDFBFE);
width: 100%;
`;

export const FieldLabel = styled.span`
color: var(--roxo-700, #502665);
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 14px; /* 100% */
`;

export const FieldValue = styled.span`
color: var(--Grey-600, #525252);
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 100% */
`;

export const ShippingRow = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--roxo-700, #502665);
  display: flex;
  justify-content: space-between;
  .row {
      display: flex;
  justify-content: space-between;
  width: 100%;
  }
`;

export const ShippingSub = styled.div`
color: var(--Grey-600, #525252);
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 100% */
`;

export const ShippingPrice = styled.div`
color: var(--roxo-700, #502665);
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 900;
line-height: 14px; /* 100% */
`;
