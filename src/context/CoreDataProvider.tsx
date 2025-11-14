import { useEffect, useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod, type CartItem, type Coupon,  type FormStep } from "./coreDataContext";

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CREDIT_CARD");
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [formStep, setFormStep] = useState<FormStep>(0);
  const [formPostalCode, setFormPostalCode] = useState("");

  const CART_KEY = "powergummy.cart";
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sincronizar sempre que cart mudar
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <CoreDataContext.Provider value={
      { paymentMethod, setPaymentMethod, cart, setCart, coupons, setCoupons, formStep, setFormStep , formPostalCode, setFormPostalCode}
      }>
      {children}
    </CoreDataContext.Provider>
  );
}
