import logo from '@/assets/imgs/logo.png'
import { BuyButton, Container, Content, Logo, Nav, RightArea } from './styles'
import CartDrawer from '@/Pages/Home/Header/CartDrawer'
import { useNavigate } from 'react-router-dom'

export default function SimpleHeader() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <Container>
      <Content>
        <button onClick={goToHome}>
          <Logo src={logo} alt="Logo" loading="eager" />
        </button>
        <Nav>
          <BuyButton type="button" onClick={goToHome}>
            COMPRAR
          </BuyButton>
        </Nav>

        <RightArea>
          <CartDrawer />
        </RightArea>
      </Content>
    </Container>
  )
}
