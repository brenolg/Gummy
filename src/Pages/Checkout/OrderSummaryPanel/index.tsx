import { PageTitle, ProductContainer } from '../styles';
import { ProductCartItem } from './ProductCartItem'
import { CartContainer, EmptyContainer } from './styles';
import { DiscountCoupons } from './DiscountCoupons';
import { useCoreData } from '@/context/coreDataContext';
import OrderSummary from './OrderSummary';
import emptyBag from '@/assets/icons/emptyBag.svg'

export default function OrderSummaryPanel() {
  const { cart } = useCoreData();

  const cartCount = cart.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  return (
    <>
      {cartCount === 0 ? (
        <EmptyContainer>
          <img src={emptyBag} />
          <p className="text">Seu carrinho está vazio.</p>
        </EmptyContainer>
      ) : (
        <ProductContainer>
          <PageTitle $mb={48}>Resumo do pedido</PageTitle>

          <CartContainer className="cart">
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

          <DiscountCoupons />
          <OrderSummary />
        </ProductContainer>
      )}
    </>
  );
}
