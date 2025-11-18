import styled from 'styled-components'
import { colors } from '../../../styles/themeUtils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: inherit;
  position: relative;
`

export const Label = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
  line-height: 1.2;
  padding: 2px 0;
`

// input verdadeiro, mas invisível
export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`

// caixinha do checkbox
export const Box = styled.span<{
  $checked: boolean
  $error?: boolean
  $disabled?: boolean
}>`
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;

  background-color: ${({ theme, $checked, $disabled }) =>
    $disabled
      ? '#444'
      : $checked
      ? theme.colors.roxo700
      : 'transparent'
  };
  border: 1px solid
    ${({ $checked, $error, theme }) =>
      $error
        ? '#d61212' // borda vermelha se erro
        : $checked
        ? theme.colors.roxo700 // borda verde se marcado
        : theme.colors.neutral.grey500};  // borda cinza padrão
`

export const Text = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${t => colors(t).roxo900}; 
`

