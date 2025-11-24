import { FormContainer, PageTitle } from '../styles';
import InfoForm from './InfoForm';
import AddressForm from './AddressForm';
import PaymentCardForm from './PaymentForm';
import CheckoutStepper from './CheckoutStepper';
import SecureTxt from './SecureTxt';
import backArow from '@/assets/icons/backArow.svg'
import { useNavigate } from 'react-router-dom';
import { BackButton, ContentContainer } from './styles'
import OrderSuccess from './OrderSuccess';
import { useCoreData } from '@/context/coreDataContext';
import QRCode from './QR Code';

// Se tiver um componente de QR Code, importe aqui
// import PixQRCode from './PixQRCode';

export type CheckoutFormData = {
  /** PASSO 1 — Contato */
  name: string;
  email: string;
  phone: string;
  advertisement: boolean;
  /** PASSO 2 — Endereço */
  postalCode: string;
  address: string;
  district: string;
  addressComplement: string;
  addressNumber: string;
  city: string;
  state: string;
  /** PASSO 3 — Cartão */
  cardNumber: string;
  expiry: string;      // MM/AA
  cvv: string;         // 3–4 dígitos
  holderName: string;
  installments: number;
};

export default function CheckoutFormPanel() {
  const { formStep } = useCoreData();
  const navigate = useNavigate();


  return (
    <>
      <FormContainer>
        
        <ContentContainer>
        <BackButton onClick={() => navigate(-1)}>
          <img src={backArow}/>
          <PageTitle>Finalizar Compra</PageTitle>
        </BackButton>

        {/* Stepper de status do form (usa índice numérico mapeado) */}
        <CheckoutStepper />

          {formStep === 0 && <PaymentCardForm/>}
          {formStep === 0 && <InfoForm/>}
          {formStep === 1 && <AddressForm/>}
          {formStep === 'qrcode' && <QRCode/>}
          {formStep === 'success' && <OrderSuccess/>}

        <SecureTxt/>
        </ContentContainer>
      </FormContainer>
    </>
  );
}
