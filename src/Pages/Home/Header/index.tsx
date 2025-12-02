import logo from '@/assets/imgs/logo.png'
import { BuyButton, Container, Content, Logo, Nav, NavItem, RightArea } from './styles'
import CartDrawer from './CartDrawer'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import defaultScrollProps from '@/utils/defaultScrollProps'
import { useMediaQuery } from 'react-responsive'
import MobileMenu from './MobileMenu'

export default function Header() {
  const navigate = useNavigate()

  function goToCheckout() {
    navigate('/checkout')
  }

  function goToTrack() {
    navigate('/track')
  }

  const isMobile = useMediaQuery({
    query: '(max-width: 1245px)',
  })

  return (
    <Container>
      <Content>
        {isMobile && <MobileMenu />}

        <Logo src={logo} alt="Logo" loading="eager" />

        <Nav>
          {!isMobile && (
            <>
              <Link to="science" {...defaultScrollProps}>
                <NavItem>CABELO, PELE & UNHA</NavItem>
              </Link>
              <Link to="ingredients" {...defaultScrollProps}>
                <NavItem>FÓRMULA</NavItem>
              </Link>
              <Link to="beneficios" {...defaultScrollProps}>
                <NavItem>BENEFÍCIOS</NavItem>
              </Link>
              <Link to="use" {...defaultScrollProps}>
                <NavItem>COMO USAR</NavItem>
              </Link>
              <Link to="depoimentos" {...defaultScrollProps}>
                <NavItem>DEPOIMENTOS</NavItem>
              </Link>

              <button type="button" onClick={goToTrack}>
                <NavItem>RASTREAR PEDIDO</NavItem>
              </button>
            </>
          )}
          <BuyButton type="button" onClick={goToCheckout}>
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
