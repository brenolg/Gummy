import { createContext, useContext } from "react";

export type PaymentMethod = "CREDIT_CARD" | "PIX";

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
  peso: number,
  altura: number,
  largura: number,
  profundidade: number
};

export type Coupon = {
  code: string;
  discount: number; // ex: 10 => 10%
};

export type FormStep = 0 | 1 | 2 | "qrcode" | "success";

type CoreDataContextProps = {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (m: PaymentMethod) => void;

  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>; 

  
  coupons: Coupon[];
  setCoupons: React.Dispatch<React.SetStateAction<Coupon[]>>;

  formStep: FormStep;
  setFormStep: React.Dispatch<React.SetStateAction<FormStep>>;
};

export const CoreDataContext = createContext<CoreDataContextProps | undefined>(undefined);

export function useCoreData() {
  const ctx = useContext(CoreDataContext);
  if (!ctx) throw new Error("useCoreData must be used inside CoreDataProvider");
  return ctx;
}
