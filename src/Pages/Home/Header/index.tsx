
import logo from '@/assets/imgs/logo.svg'
import { BuyButton, Container, Content, Logo, Nav, NavItem, RightArea } from "./styles";
import CartDrawer from "./CartDrawer";
import { useCoreData } from '@/context/coreDataContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import defaultScrollProps from '@/utils/defaultScrollProps';

export default function Header() {
  const { cart } = useCoreData();
  const navigate = useNavigate();

  const cartCount = cart.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  function goToCheckout() {
    if (cartCount > 0) {
    navigate("/checkout");
    }
  }

  return (
    <Container>
      <Content>
        <Logo src={ logo } alt="Logo" />

        <Nav>
          <Link to="buy" {...defaultScrollProps}>
            <NavItem >CABELO, PELE & UNHA</NavItem>
          </Link>
            <Link to="buy" {...defaultScrollProps}>
          <NavItem>FÓRMULA</NavItem>
          </Link>
          <Link to="buy" {...defaultScrollProps}>
            <NavItem>BENEFÍCIOS</NavItem>
          </Link>
            <Link to="buy" {...defaultScrollProps}>
          <NavItem>COMO USAR</NavItem>
          </Link>
          <Link to="buy" {...defaultScrollProps}>
            <NavItem>DEPOIMENTOS</NavItem>
          </Link>

          <NavItem>RASTREAR PEDIDO</NavItem>
          
          <BuyButton type="button" onClick={goToCheckout} >COMPRAR</BuyButton>
        </Nav>

        <RightArea>
        <CartDrawer/>

        </RightArea>
      </Content>
    </Container>
  );
}
