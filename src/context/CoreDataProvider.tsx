import { useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod, type CartItem, type Coupon } from "./coreDataContext";
import trio from '@/assets/imgs/trioGummy.png';

const mockCartItems: CartItem[] = [
  {
    id: 1,
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 1,
    unitPrice: 100
  },
  {
    id: 2,
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 2,
    unitPrice: 100
  }
];

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [cart, setCart] = useState<CartItem[]>(mockCartItems);
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  return (
    <CoreDataContext.Provider value={{ method, setMethod, cart, setCart, coupons, setCoupons }}>
      {children}
    </CoreDataContext.Provider>
  );
}
