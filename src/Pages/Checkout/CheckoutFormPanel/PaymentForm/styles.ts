import styled from 'styled-components'

interface IStyleProps {
  $error: boolean
  $disabled?: boolean
}

export const InputError = styled.div<IStyleProps>`
  position: absolute;
  bottom: -8px;
  transform: translateY(100%);
  text-align: start;
  display: flex;
  opacity: ${(props) => {
    if (props.$error) return 1 // Com erro
    return 0 // Nenhuma condição atendida
  }};
  align-items: center;
  transition: all 0.3s ease-out;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--Vermelho-Alerta, #f00);
  font-family: Inter;
  font-size: 10px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 4px;

  white-space: normal;
  word-break: break-word; /* força quebra dentro da palavra */
  overflow-wrap: anywhere;
  .img-error {
    width: 12px;
    height: 12px;
  }
`
