import cartIcon from "@/assets/icons/cart.svg";
import logo from '@/assets/imgs/logo.svg'
import { BuyButton, CartButton, Container, Content, Logo, Nav, NavItem, RightArea } from "./styles";

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

          <CartButton>
            <img src={cartIcon} alt="carrinho" />
            <span>(0)</span>
          </CartButton>
        </RightArea>
      </Content>
    </Container>
  );
}
