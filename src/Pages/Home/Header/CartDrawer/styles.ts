import styled, { css, keyframes } from "styled-components";

export const CartButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: ${({ theme }) => theme.colors.roxo0};
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.6px;
    cursor: pointer;
  }

  img {
    width: 30px;
    height: 31px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
`;

export const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 680px;
  height: 100vh;
  z-index: 30;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: 0.3s ease;
  background: #FFF;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.25);
    @media (max-width: 650px) { 
    width: 320px;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 32px 48px 32px 32px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.roxo200};
  p {
    color: ${({ theme }) => theme.colors.roxo900};
    font-family: "Nunito Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 100% */
  }
  span {
    font-weight: 700;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 16px;
  top: 24px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const ShippingContainer = styled.div`
  display: flex;
  padding: 24px 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.roxo0};
  margin-bottom: 24px;
  img {
    width: 16px;
    height: 16px;
  }
  p {
    color: ${({ theme }) => theme.colors.roxo700};
    font-family: "Nunito Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  span {
    font-weight: 700;
  }
`;

export const ImageContainer = styled.div<{ $img: string }>`
  width: 104px;
  height: 104px;
  min-width: 104px;
  border-radius: 8px;
  background: url(${({ $img }) => $img}) no-repeat;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Items = styled.div`
  padding-top: 24px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
`;

export const Item = styled.div`
    display: flex;
    height: 104px;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    padding: 0 56px 0 40px;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 0;
    align-self: stretch;
  }
  .title {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.roxo900};
    text-overflow: ellipsis;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 120% */
    max-width: 100%;
    white-space: normal;
    overflow-wrap: break-word;
    max-width: 100%;
  }
  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    color: ${({ theme }) => theme.colors.neutral.grey800};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(12px);
  }
`;

export const EBookContainer = styled.div<{ $visible: boolean }>`
  animation: ${({ $visible }) =>
    $visible
      ? css`${fadeIn} 0.35s ease forwards`
      : css`${fadeOut} 0.35s ease forwards`
  };
  display: flex;
  padding: 24px 40px;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid  ${({ theme }) => theme.colors.roxo25};
  background: #FFF;
  .eBookImg {
    width: 104px;
    height: 104px;
  }
  .light {
      color: ${({ theme }) => theme.colors.roxo900};
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
  .strong {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.roxo900};
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 24px */
  }
`
export const Footer = styled.div`
  padding: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.roxo200};
  .totalContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  .total {
    color: 1px solid ${({ theme }) => theme.colors.roxo900};
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  }
  strong {
    color: ${({ theme }) => theme.colors.roxo900};
    text-align: right;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .bagImg {
    width: 56px;
    height: 63.75px;
  }
  .text {
    color: #868785;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

