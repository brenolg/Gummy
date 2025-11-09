import cartIcon from "@/assets/icons/cart.svg";
import logo from '@/assets/imgs/logo.svg'
import { BuyButton, CartButton, Container, Content, Logo, Nav, NavItem, RightArea } from "./styles";
import { useCoreData } from "@/context/coreDataContext";
import { useNavigate } from "react-router-dom";

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
          <NavItem href="#">CABELO, PELE & UNHA</NavItem>
          <NavItem href="#">FÓRMULA</NavItem>
          <NavItem href="#">BENEFÍCIOS</NavItem>
          <NavItem href="#">COMO USAR</NavItem>
          <NavItem href="#">DEPOIMENTOS</NavItem>
          <NavItem href="#">RASTREAR PEDIDO</NavItem>
          <BuyButton>COMPRAR</BuyButton>
        </Nav>

        <RightArea>
          <CartButton onClick={goToCheckout}>
            <img src={cartIcon} alt="carrinho" />
            <span>({cartCount})</span>
          </CartButton>
        </RightArea>
      </Content>
    </Container>
  );
}
