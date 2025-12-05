import styled from 'styled-components'

export const StyledMainButton = styled.button<{
  $maxW?: number
  $golden?: boolean
  $font?: number
}>`
  outline: none;
  height: 68px;
  width: 100%;
  border-radius: 16px;
  max-width: ${({ $maxW }) => ($maxW ? `${$maxW}px` : '100%')};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.neutral.white0};
  position: relative;
  background: ${({ $golden, theme }) =>
    $golden
      ? `linear-gradient(90deg, var(--dourado-200, #BA7E1B) 0%, var(--dourado-300, #5B4112) 100%)`
      : `linear-gradient(90deg, ${theme.colors.roxo700} 0%, ${theme.colors.roxo500} 100%)`};
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: ${({ $font }) => ($font ? `${$font}px` : '18px')};
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
    font-size: 16px;
  }
`

/* use opacity para não deslocar o layout */
export const Label = styled.span<{ $hidden: boolean }>`
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.15s ease;
`
