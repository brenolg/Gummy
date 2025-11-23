import { IMaskInput } from 'react-imask'
import styled from 'styled-components'
import { colors } from "../../../styles/themeUtils";
import { typography } from '../../../styles/themeUtils';

interface IStyleProps {
  $error?: boolean
  disabled?: boolean
}

// truque: permitir props arbitrárias além de IStyleProps
type InputBaseProps = IStyleProps & Record<string, unknown>

export const Input = styled(IMaskInput)<InputBaseProps>`
  padding: 16px;
  transition: all 0.3s ease-out;
  border-radius: 5px;
  outline: none;
  height: 48px;
  border: 1px solid ;
  width: 100%;
  max-width: 100%;
  border: 1px solid ${t => colors(t).neutral.grey500};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05);
  color: ${t => colors(t).neutral.black700};
  background: ${t => colors(t).neutral.white0};
  &:hover {
    border: 1px solid var(--Roxo-25, #EBD7F5);
    background: var(--Roxo-0, #FDFBFE);
  }
  &:focus {
    border: 1px solid var(--roxo-700, #502665);
    background: var(--Color-Neutral-White-0, #FFF);
  }

  ${t => typography(t).input};
  ${({ disabled }) =>
    disabled &&
    `
      border: 1px solid var(--Grey-300, #D6D6D6);
      background: var(--Grey-50, #FAFAFA);
      color: var(--Grey-400, #A3A3A3);
      cursor: not-allowed;
    `};
      ${({ $error }) =>
    $error &&
    `
    border: 1px solid var(--Vermelho-Alerta, #F00);

    `};
    
`

export const Loading = styled.div<{ $loading: boolean | undefined }>`
  pointer-events: none;
  position: absolute;
  top: 50%;
  z-index: 99;
  right: 12px;
  transform: translateY(-50%);
  display: ${(props) => (props.$loading ? 'flex' : 'none')};
  .loading-img {
    width: 20px;
    @keyframes load {
      to {
        transform: rotate(360deg);
      }
    }
    animation: load 2s infinite linear;
  }
`