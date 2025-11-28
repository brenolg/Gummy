import styled from 'styled-components'
import { colors, typography } from '../../../styles/themeUtils'

interface PlaceholderProps {
  $isFocusedOrValid: boolean
  isSearchable?: boolean
  $isDisabled?: boolean
}

export const InputContainer = styled.div<{
  $mb?: number
}>`
  position: relative;
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  .relative {
    position: relative;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
  }
`

export const Placeholder = styled.span<PlaceholderProps>`
  position: absolute;
  left: ${(props: PlaceholderProps) => (props.isSearchable ? '38.5px' : '10px')};
  top: ${(props: PlaceholderProps) => (props.$isFocusedOrValid ? 0 : '50%')};
  transform: translateY(-50%);
  z-index: 2;
  color: black;
  padding: 0 6px;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.2s ease-out;

  background: ${(t) => colors(t).neutral.white0};

  ${(t) => typography(t).input};
  ${(props) => props.$isDisabled && 'color: #A3A3A3 ;'}
  .asterisk {
    color: var(--Color-Semantic-Error-Error, #d61212);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
interface IStyleProps {
  $error: boolean
  $disabled?: boolean
}

export const InputError = styled.div<IStyleProps>`
  position: absolute;
  bottom: 0px;
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
