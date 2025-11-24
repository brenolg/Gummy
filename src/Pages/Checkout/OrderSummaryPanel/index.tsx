import { PageTitle, ProductContainer } from '../styles';
import { ProductCartItem } from './ProductCartItem'
import { CartContainer } from './styles';
import { DiscountCoupons } from './DiscountCoupons';
import { useCoreData } from '@/context/coreDataContext';
import OrderSummary from './OrderSummary';

export default function OrderSummaryPanel() {
  const { cart } = useCoreData();

  return (
    <ProductContainer>
      <PageTitle $mb={48}>Resumo do pedido</PageTitle>

      <CartContainer className='cart'>
      {cart.map(item => (
        <ProductCartItem
          key={item.productId}
          productId={item.productId}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          quantity={item.quantity}
          unitPrice={item.unitPrice}
        />
      ))}
      </CartContainer>
      <DiscountCoupons/>
      <OrderSummary />
  
    </ProductContainer>
  );
}
