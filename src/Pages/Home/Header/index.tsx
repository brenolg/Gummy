
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
          <Link to="science" {...defaultScrollProps}>
            <NavItem >CABELO, PELE & UNHA</NavItem>
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
