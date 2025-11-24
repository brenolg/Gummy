import { MainContainer } from './styles';
import CheckoutFormPanel from './CheckoutFormPanel';
import OrderSummaryPanel from './OrderSummaryPanel';

export default function Checkout() {

  return (
    <MainContainer>
      <CheckoutFormPanel/>
      <OrderSummaryPanel/>
    </MainContainer>
  );
}
