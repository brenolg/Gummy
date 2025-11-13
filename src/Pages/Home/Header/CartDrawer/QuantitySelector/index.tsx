import { useCoreData } from "@/context/coreDataContext";
import type { CartItem } from "@/context/coreDataContext";
import { MinusButton, PlusButton, Value ,  Wrapper} from "./styles";
import minus from '@/assets/icons/minus.svg'
import plus from '@/assets/icons/plus.svg'

type Props = {
  productId: string;
};

export function QuantitySelector({ productId }: Props) {
  const { cart, setCart } = useCoreData();
  const item = cart.find((c) => c.productId === productId);

  if (!item) return null;

  const decrease = () => {
    setCart((prev: CartItem[]) =>
      prev.map((p) =>
        p.productId === productId
          ? { ...p, quantity: Math.max(0, p.quantity - 1) }
          : p
      )
    );
  };

  const increase = () => {
    setCart((prev: CartItem[]) =>
      prev.map((p) =>
        p.productId === productId
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    );
  };

  return (
    <Wrapper>
      <MinusButton onClick={decrease}>
        <img src={minus}/>
      </MinusButton>
      <Value>{item.quantity}</Value>
      <PlusButton onClick={increase}>
        <img src={plus}/>
      </PlusButton >
    </Wrapper>
  );
}
