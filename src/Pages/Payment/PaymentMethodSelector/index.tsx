import { useState } from "react";
import { Wrapper, Option } from "./styles";
import CreditCardIcon from './CreditCardIcon'
import PixIcon from "./PixIcon"; // se quiser, te ajudo a criar esse também

export default function PaymentMethodSelector() {
  const [method, setMethod] = useState<"card" | "pix">("card");

  return (
    <Wrapper>
      <Option $active={method === "card"} onClick={() => setMethod("card")}>
        <CreditCardIcon />
        <span>Cartão de crédito</span>
      </Option>

      <Option $active={method === "pix"} onClick={() => setMethod("pix")}>
        <PixIcon />
        <span>PIX</span>
      </Option>
    </Wrapper>
  );
}
