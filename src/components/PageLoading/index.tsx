import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  inset: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Spinner = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 0.9s linear infinite;
  font-size: 80px;
  color: #502665;
`

export default function PageLoading() {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}
