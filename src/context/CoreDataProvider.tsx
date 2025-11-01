import { useState, type ReactNode } from "react";
import { CoreDataContext, type PaymentMethod } from "./coreDataContext";

export default function CoreDataProvider({ children }: { children: ReactNode }) {
  const [method, setMethod] = useState<PaymentMethod>("card");

  return (
    <CoreDataContext.Provider value={{ method, setMethod }}>
      {children}
    </CoreDataContext.Provider>
  );
}
