import { useEffect, useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod, type CartItem, type Coupon,  type FormStep, type MinimalCartItem, type ShippingResponse } from "./coreDataContext";
import { CartItemsData } from "./data";

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CREDIT_CARD");
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [formStep, setFormStep] = useState<FormStep>(0);
  const [formPostalCode, setFormPostalCode] = useState("");
  const [globalLoading, setGlobalLoading] = useState(false)
  const [formData, setFormData] = useState<Record<string, string | boolean | number>>({});
  const [shipping, setShipping] = useState<ShippingResponse["frete"] | null>(null);

    const CART_KEY = "powergummy.cart";
    // 🔹 Estado minimalista que VAI pro localStorage: só id + quantidade
    const [cartStorage, setCartStorage] = useState<MinimalCartItem[]>(() => {
      try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    });

    // 🔹 Estado completo usado pela aplicação (não vai pro localStorage)
    const [cart, setCart] = useState<CartItem[]>(() => {
      if (!cartStorage.length) return [];
      return cartStorage
        .map((item) => {
          const base = CartItemsData.find((p) => p.productId === item.productId);
          if (!base) return null;
          return { ...base, quantity: item.quantity };
        })
        .filter(Boolean) as CartItem[];
    });

    // Sempre que o cart COMPLETO mudar, atualiza o estado minimalista
    useEffect(() => {
      const minimal: MinimalCartItem[] = cart.map(({ productId, quantity }) => ({
        productId,
        quantity,
      }));
      setCartStorage(minimal);
    }, [cart]);

    // Sempre que o estado minimalista mudar, sincroniza no localStorage
    useEffect(() => {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(cartStorage));
      } catch {
        // ignora erros de storage (ex: modo privado)
      }
    }, [cartStorage]);

  return (
    <CoreDataContext.Provider value={
      { paymentMethod, setPaymentMethod, cart, setCart, coupons, setCoupons, formStep, setFormStep , formPostalCode, setFormPostalCode, cartStorage, setCartStorage, globalLoading, setGlobalLoading, formData, setFormData, shipping, setShipping}
      }>
      {children}
    </CoreDataContext.Provider>
  );
}
