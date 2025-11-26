import styled, { keyframes } from 'styled-components'

export const StyledMainButton = styled.button<{ $maxW?: number }>`
  outline: none;
  height: 68px;
  width: 100%;
  border-radius: 16px;
  max-width: ${({ $maxW }) => ($maxW ? `${$maxW}px` : '100%')};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.neutral.white0};
  position: relative;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.roxo700} 0%,
    ${({ theme }) => theme.colors.roxo500} 100%
  );
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 19px;
  font-weight: 800;
  .loading-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) {
    height: 58px;
  }
`

/* Spinner minimalista */
const spin = keyframes` to { transform: rotate(360deg); }`

export const Spinner = styled.span`
  width: 24px;
  height: 24px;
  margin: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neutral.white0};
  border-right-color: transparent;
  animation: ${spin} 0.7s linear infinite;
`

/* use opacity para não deslocar o layout */
export const Label = styled.span<{ $hidden: boolean }>`
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.15s ease;
`
