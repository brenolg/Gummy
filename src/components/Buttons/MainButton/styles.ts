import styled, { keyframes } from "styled-components";

export const StyledMainButton = styled.button`
  border: 1px solid #ECECEC;
  outline: none;
  height: 68px;
  color: ${({ theme }) => theme.colors.neutral.white0};
  width: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.roxo700} 0%,
    ${({ theme }) => theme.colors.roxo500} 100%
  );
  border-radius: 16px;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 19px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

/* Spinner minimalista */
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neutral.white0};
  border-right-color: transparent;
  animation: ${spin} .7s linear infinite;
`;

/* Esconde o texto visualmente quando loading para não “pular” layout */
export const Label = styled.span<{ $hidden: boolean }>`
  visibility: ${({ $hidden }) => ($hidden ? "hidden" : "visible")};
`;
