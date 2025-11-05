import styled, { keyframes } from "styled-components";

export const StyledMainButton = styled.button`
  border: 1px solid #ECECEC;
  outline: none;
  height: 68px;
  width: 100%;
  border-radius: 16px;

  /* 👇 grid para centralizar e sobrepor filhos */
  display: grid;
  place-items: center;

  color: ${({ theme }) => theme.colors.neutral.white0};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.roxo700} 0%,
    ${({ theme }) => theme.colors.roxo500} 100%
  );

  text-align: center;
  font-family: "Nunito Sans";
  font-size: 19px;
  font-weight: 800;
`;

/* Spinner minimalista */
const spin = keyframes` to { transform: rotate(360deg); }`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  margin: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neutral.white0};
  border-right-color: transparent;
  animation: ${spin} .7s linear infinite;
`;

/* use opacity para não deslocar o layout */
export const Label = styled.span<{ $hidden: boolean }>`
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity .15s ease;
`;
