import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

/* Botão */
export const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HamburgerLines = styled.span<{ $open: boolean }>`
  position: relative;
  width: 18px;
  height: 2px;
  background: #ffffff;
  border-radius: 999px;
  transition: background 0.2s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: #ffffff;
    border-radius: 999px;
    transition: transform 0.2s, top 0.2s, opacity 0.2s;
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }

  ${({ $open }) =>
    $open &&
    `
      background: transparent;
      &::before {
        top: 0;
        transform: rotate(45deg);
      }
      &::after {
        top: 0;
        transform: rotate(-45deg);
      }
  `}
`;

/* Painel centralizado com animação */
export const MobileMenuPanel = styled.nav<{ $open: boolean }>`
  position: absolute;
  top: 64px;

  /* CENTRALIZAÇÃO */
  left: 50%;
  transform: translateX(-50%) translateY(${({ $open }) => ($open ? "0" : "-10px")});
  min-width: 240px;
  padding: 18px 14px;
  background: #502665EB; 
  border-radius: 12px;
  border-top-right-radius:0;
  border-top-left-radius:0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;

  /* animação suave */
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.28s ease, transform 0.28s ease;
    left: 40px;
  @media (max-width: 650px) { 
    top: 54px;
    left: 95px;
  }
`;
