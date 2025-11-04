import { createContext, useContext } from "react";

export type PaymentMethod = "card" | "pix";

export type CartItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
};

export type Coupon = {
  code: string;
  discount: number; // ex: 10 => 10%
};

type CoreDataContextProps = {
  method: PaymentMethod;
  setMethod: (m: PaymentMethod) => void;

  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>; 

  
  coupons: Coupon[];
  setCoupons: React.Dispatch<React.SetStateAction<Coupon[]>>;
};

export const CoreDataContext = createContext<CoreDataContextProps | undefined>(undefined);

export function useCoreData() {
  const ctx = useContext(CoreDataContext);
  if (!ctx) throw new Error("useCoreData must be used inside CoreDataProvider");
  return ctx;
}
