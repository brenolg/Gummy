import styled from 'styled-components'


interface PlaceholderProps {
  $isFocusedOrValid: boolean
  isSearchable?: boolean
  isDisabled?: boolean
}

export const InputContainer = styled.div<{
  small?: boolean
  large?: boolean
  customWith?: number
}>`
  position: relative;
  .relative {
    position: relative;
    width: ${({ small, large, customWith }) => {
      let width = '100%'
      if (small) width = '155px'
      if (large) width = '315px'
      if (customWith) width = `${customWith}px`
      return width
    }};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #444 inset !important;
  }
`

export const Placeholder = styled.span<PlaceholderProps>`
  position: absolute;
  left: ${(props: PlaceholderProps) =>
    props.isSearchable ? '38.5px' : '12.5px'};
  top: ${(props: PlaceholderProps) => (props.$isFocusedOrValid ? 0 : '50%')};
  transform: translateY(-50%);
  z-index: 2;
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 0 6px;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.2s ease-out;
  ${(props) => props.isDisabled && 'color: #757575;'}

  .asterisk {
    color: #d61212;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 13px;
  }
`
interface IStyleProps {
  $error: boolean
  $disabled?: boolean
  ['data-testid']: string
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