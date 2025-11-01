import { createContext, useContext } from "react";

export type PaymentMethod = "card" | "pix";

type CoreDataContextProps = {
  method: PaymentMethod;
  setMethod: (m: PaymentMethod) => void;
};

// apenas o contexto (sem componente)
export const CoreDataContext = createContext<CoreDataContextProps | undefined>(undefined);

// hook separado (função, não componente)
export function useCoreData() {
  const ctx = useContext(CoreDataContext);
  if (!ctx) throw new Error("useCoreData must be used inside CoreDataProvider");
  return ctx;
}
