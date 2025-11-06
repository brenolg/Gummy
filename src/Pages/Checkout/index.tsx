import { MainContainer } from './styles';
import CheckoutFormPanel from './CheckoutFormPanel';
import OrderSummaryPanel from './OrderSummaryPanel';

export type CheckoutFormData = {
  /** PASSO 1 — Contato */
  name: string;
  email: string;
  phone: string;
  advertisement: boolean;

  /** PASSO 2 — Endereço */
  zipCode: string;
  address: string;
  district: string;
  complement: string;
  number: string;
  city: string;
  state: string;

  /** PASSO 3 — Cartão */
  cardNumber: string;
  expiry: string;      // MM/AA
  cvv: string;         // 3–4 dígitos
  holderName: string;
  installments: number;
};

export default function Checkout() {

  return (
    <MainContainer>
      <CheckoutFormPanel/>
      <OrderSummaryPanel/>
    </MainContainer>
  );
}
