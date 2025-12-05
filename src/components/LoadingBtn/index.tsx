import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Icon = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 0.8s linear infinite;
  font-size: 30px;
  color: #fff;
`

export default function LoadingBtn() {
  return <Icon />
}
