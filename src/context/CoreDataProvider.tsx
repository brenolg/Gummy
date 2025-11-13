import { useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod, type CartItem, type Coupon,  type FormStep } from "./coreDataContext";

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CREDIT_CARD");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [formStep, setFormStep] = useState<FormStep>(0);     

  return (
    <CoreDataContext.Provider value={{ paymentMethod, setPaymentMethod, cart, setCart, coupons, setCoupons, formStep, setFormStep }}>
      {children}
    </CoreDataContext.Provider>
  );
}
