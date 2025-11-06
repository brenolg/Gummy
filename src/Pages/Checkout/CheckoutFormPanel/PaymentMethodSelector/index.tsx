import { Wrapper, Option } from "./styles";
import CreditCardIcon from './CreditCardIcon'
import PixIcon from "./PixIcon"; // se quiser, te ajudo a criar esse também
import { useCoreData } from "@/context/coreDataContext";

export default function PaymentMethodSelector() {
  const { paymentMethod, setPaymentMethod } = useCoreData();

  return (
    <Wrapper>
      <Option $active={paymentMethod === "CREDIT_CARD"} onClick={() => setPaymentMethod("CREDIT_CARD")}>
        <CreditCardIcon />
        <span>Cartão de crédito</span>
      </Option>

      <Option $active={paymentMethod === "PIX"} onClick={() => setPaymentMethod("PIX")}>
        <PixIcon />
        <span>PIX</span>
      </Option>
    </Wrapper>
  );
}
