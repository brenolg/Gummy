import styled from 'styled-components'
import { colors } from '../../styles/themeUtils'

export const MainContainer = styled.div`
  background: ${t => colors(t).neutral.white0};
  display: flex; 
`
export const DividedContainer= styled.div`
  width: 50%;
  padding: 80px;
`

export const FormContainer = styled(DividedContainer)`
  background: ${t => colors(t).neutral.white0};
`

export const ProductContainer = styled(DividedContainer)`
  background: ${t => colors(t).roxo0};
`

export const InputContainer  = styled.div`
  border-radius: 16px;
  padding: 16px;
  background: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
`

export const FormTitle = styled.h2`
  color: #3C3C3C;
  font-family: "Nunito Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`

export const PageTitle = styled.h1`
  color: #1F1F1F;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 48px;
`

export const TwoInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 
`