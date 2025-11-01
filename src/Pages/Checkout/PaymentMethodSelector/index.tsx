import { Wrapper, Option } from "./styles";
import CreditCardIcon from './CreditCardIcon'
import PixIcon from "./PixIcon"; // se quiser, te ajudo a criar esse também
import { useCoreData } from "@/context/coreDataContext";

export default function PaymentMethodSelector() {
  const { method, setMethod } = useCoreData();

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
