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
`
