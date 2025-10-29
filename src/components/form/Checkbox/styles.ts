import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: inherit;
  position: relative;
  margin-bottom: 30px
`

export const Label = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  user-select: none;
  line-height: 1.2;
  color: #fff; /* ajusta pro seu tema, se for claro troca pra #111 */

  /* se quiser ajustar hit area maior pra clicar mais fácil */
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
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;

  background-color: ${({ $checked, $disabled }) =>
    $disabled ? '#444' : $checked ? '#00d27a' : 'transparent'};

  border: 2px solid
    ${({ $checked, $error }) =>
      $error
        ? '#d61212' // borda vermelha se erro
        : $checked
        ? '#00d27a' // borda verde se marcado
        : '#888'};  // borda cinza padrão

  color: ${({ $checked }) => ($checked ? '#111' : 'transparent')};

  svg {
    display: block;
  }
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: black; /* troca se fundo claro */
  line-height: 1.3;
`

export const CheckboxError = styled.div<{ $visible: boolean }>`
  font-size: 11px;
  line-height: 14px;
  color: #d61212;
  font-weight: 400;

  /* garantir que o layout não pule quando some/aparece */
  min-height: 14px;

  /* animação suave de visibilidade */
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`