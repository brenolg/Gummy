
import logo from '@/assets/imgs/logo.svg'
import { BuyButton, Container, Content, Logo, RightArea } from "./styles";
import CartDrawer from "./CartDrawer";
import { useCoreData } from '@/context/coreDataContext';
import { useNavigate } from 'react-router-dom';


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
        <BuyButton type="button" onClick={goToCheckout} >COMPRAR</BuyButton>
        <RightArea>
        <CartDrawer/>

        </RightArea>
      </Content>
    </Container>
  );
}
