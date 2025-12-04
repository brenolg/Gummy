import styled, { keyframes } from 'styled-components'

export const Banner = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const FirstBanner = styled(Banner)`
  margin-top: -88px;
`

const spin = keyframes` to { transform: rotate(360deg); }`

export const Spinner = styled.span`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.roxo900};
  border-right-color: transparent;
  animation: ${spin} 0.7s linear infinite;
`

export const PageWrapper = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`
