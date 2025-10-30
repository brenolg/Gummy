import styled from 'styled-components'
import { colors, typography } from '../../../styles/themeUtils'


interface PlaceholderProps {
  $isFocusedOrValid: boolean
  isSearchable?: boolean
  isDisabled?: boolean
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
    -webkit-box-shadow: 0 0 0 30px #FFFFFF inset !important;
  }
`

export const Placeholder = styled.span<PlaceholderProps>`
  position: absolute;
  left: ${(props: PlaceholderProps) =>
    props.isSearchable ? '38.5px' : '10px'};
  top: ${(props: PlaceholderProps) => (props.$isFocusedOrValid ? 0 : '50%')};
  transform: translateY(-50%);
  z-index: 2;
  color: black;
  padding: 0 6px;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.2s ease-out;
  ${(props) => props.isDisabled && 'color: #757575;'}
  
  background: ${t => colors(t).neutral.white0};
  ${t => typography(t).input};
  .asterisk {
    color: #d61212;
  }

`
interface IStyleProps {
  $error: boolean
  $disabled?: boolean
}

export const InputError = styled.div<IStyleProps>`
  font-size: 11px;
  position: absolute;
  bottom: 0px;
  transform: translateY(100%);
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: start;
  box-sizing: border-box;
  padding-right: 4px;
  display: flex;
  opacity: ${(props) => {
    if (props.$error) return 1 // Com erro
    return 0 // Nenhuma condição atendida
  }};
  align-items: center;
  gap: 4px;
  max-height: 20px;
  height: 20px;
  transition: all 0.3s ease-out;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d61212;
  .img-error {
    width: 12px;
    height: 12px;
    filter: invert(12%) sepia(73%) saturate(6695%) hue-rotate(358deg)
      brightness(91%) contrast(89%);
  }
`

