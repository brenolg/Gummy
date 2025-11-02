import { PageTitle, ProductContainer } from '../styles';
import { ProductCartItem } from './ProductCartItem'
import trio from '@/assets/imgs/trioGummy.png';
import { CartContainer } from './styles';

const mockCartItems = [
  {
    id: 1,
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 1,
    unitPrice: 269
  },
  {
    id: 2,
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 2,
    unitPrice: 269
  }
];

export default function OrderSummaryPanel() {

  return (
    <ProductContainer>
      <PageTitle $mb={48}>Resumo do pedddido</PageTitle>

      <CartContainer className='cart'>
      {mockCartItems.map(item => (
        <ProductCartItem
          key={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          quantity={item.quantity}
          unitPrice={item.unitPrice}
        />
      ))}
      </CartContainer>
  
    </ProductContainer>
  );
}
