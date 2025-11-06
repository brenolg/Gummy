import { useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod, type CartItem, type Coupon,  type FormStep } from "./coreDataContext";
import trio from '@/assets/imgs/trioGummy.png';

const mockCartItems: CartItem[] = [
  {
    productId: 'powergum-kit-3',
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 1,
    unitPrice: 100,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  },
  {
    productId: 'powergum-1',
    image: trio,
    title: "ONE® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 2,
    unitPrice: 100,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  }
];

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CREDIT_CARD");
  const [cart, setCart] = useState<CartItem[]>(mockCartItems);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [formStep, setFormStep] = useState<FormStep>(0);     

  return (
    <CoreDataContext.Provider value={{ paymentMethod, setPaymentMethod, cart, setCart, coupons, setCoupons, formStep, setFormStep }}>
      {children}
    </CoreDataContext.Provider>
  );
}
