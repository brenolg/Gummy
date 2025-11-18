import { IMaskInput } from 'react-imask'
import styled from 'styled-components'
import { colors } from "../../../styles/themeUtils";
import { typography } from '../../../styles/themeUtils';

interface IStyleProps {
  error?: string
  disabled?: boolean
}


interface IStyleProps {
  error?: string
  disabled?: boolean
}

// truque: permitir props arbitrárias além de IStyleProps
type InputBaseProps = IStyleProps & Record<string, unknown>

export const Input = styled(IMaskInput)<InputBaseProps>`
  padding: 16px;
  transition: all 0.3s ease-out;
  height: 48px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ;
  width: 100%;
  max-width: 100%;
  border: 1px solid ${t => colors(t).neutral.grey500};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05);
  color: ${t => colors(t).neutral.black700};
  background: ${t => colors(t).neutral.white0};

  ${t => typography(t).input};
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