import logo from '@/assets/imgs/logo.png'
import { BuyButton, Container, Content, Logo, RightArea } from './styles'
import CartDrawer from './CartDrawer'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  function goToCheckout() {
    navigate('/checkout')
  }

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Logo" />
        <BuyButton type="button" onClick={goToCheckout}>
          COMPRAR
        </BuyButton>
        <RightArea>
          <CartDrawer />
        </RightArea>
      </Content>
    </Container>
  )
}
