import styled from 'styled-components'
import { colors } from '../../styles/themeUtils'

export const MainContainer = styled.div`
  background: ${(t) => colors(t).neutral.white0};
  display: flex;
  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`
export const DividedContainer = styled.div`
  width: 50%;
  padding: 80px;
  @media (max-width: 950px) {
    padding: 24px;
  }
`

export const FormContainer = styled(DividedContainer)`
  background: ${(t) => colors(t).neutral.white0};
  @media (max-width: 740px) {
    margin: auto;
  }
`

export const ProductContainer = styled(DividedContainer)`
  background: ${(t) => colors(t).roxo0};
  @media (max-width: 740px) {
    margin: auto;
  }
`

export const PageTitle = styled.h1<{ $mb?: number }>`
  color: #1f1f1f;
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 48px;
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : '0')};
`
