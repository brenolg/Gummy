import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

interface IStyleProps {
  small?: boolean
  medium?: boolean
  large?: boolean
  error?: string
  disabled?: boolean
}


interface IStyleProps {
  small?: boolean
  medium?: boolean
  large?: boolean
  error?: string
  disabled?: boolean
}

// truque: permitir props arbitrárias além de IStyleProps
type InputBaseProps = IStyleProps & Record<string, unknown>

export const Input = styled(IMaskInput)<InputBaseProps>`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  box-sizing: border-box;
  padding: 12px;
  margin-left: 0.5px;
  transition: all 0.3s ease-out;
  height: 44px;
  font-family: 'Inter';
  outline: none;
  border-radius: 5px;
  color: #424242;

  border: 1px solid;

  
  &:disabled {
    color: rgb(84, 84, 84);
  }
  width: 100%;
  max-width: 100%;
`


export const Error = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-top: 10px;
`

export const InputError = styled.div`
 
  position: absolute;
  bottom: -3px;
  transform: translateY(100%);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: start;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;

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