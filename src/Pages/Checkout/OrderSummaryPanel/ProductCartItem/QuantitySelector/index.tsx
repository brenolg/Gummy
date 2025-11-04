import { useCoreData } from "@/context/coreDataContext";
import type { CartItem } from "@/context/coreDataContext";
import { Wrapper } from "../styles";
import { Button, Value } from "./styles";

type Props = {
  productId: number;
};

export function QuantitySelector({ productId }: Props) {
  const { cart, setCart } = useCoreData();
  const item = cart.find((c) => c.id === productId);

  if (!item) return null;

  const decrease = () => {
    setCart((prev: CartItem[]) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, quantity: Math.max(0, p.quantity - 1) }
          : p
      )
    );
  };

  const increase = () => {
    setCart((prev: CartItem[]) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    );
  };

  return (
    <Wrapper>
      <Button onClick={decrease}>–</Button>
      <Value>{item.quantity}</Value>
      <Button onClick={increase}>+</Button>
    </Wrapper>
  );
}
