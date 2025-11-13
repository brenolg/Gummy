
import logo from '@/assets/imgs/logo.svg'
import { BuyButton, Container, Content, Logo, Nav, NavItem, RightArea } from "./styles";
import CartDrawer from "./CartDrawer";

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo src={ logo } alt="Logo" />

        <Nav>
          <NavItem href="#">CABELO, PELE & UNHA</NavItem>
          <NavItem href="#">FÓRMULA</NavItem>
          <NavItem href="#">BENEFÍCIOS</NavItem>
          <NavItem href="#">COMO USAR</NavItem>
          <NavItem href="#">DEPOIMENTOS</NavItem>
          <NavItem href="#">RASTREAR PEDIDO</NavItem>
          <BuyButton>COMPRAR</BuyButton>
        </Nav>

        <RightArea>
        <CartDrawer/>

        </RightArea>
      </Content>
    </Container>
  );
}
