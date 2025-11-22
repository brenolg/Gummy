import { useEffect } from 'react';
import {  useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaFull } from './schema';
import { FormContainer, PageTitle } from '../styles';
import InfoForm from './InfoForm';
import AddressForm from './AddressForm';
import PaymentCardForm from './PaymentForm';
import CheckoutStepper from './CheckoutStepper';
import SecureTxt from './SecureTxt';
import backArow from '@/assets/icons/backArow.svg'
import { useNavigate } from 'react-router-dom';
import { BackButton } from './styles'
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
  const { formStep, setFormPostalCode } = useCoreData();
  const navigate = useNavigate();

  const methods = useForm<CheckoutFormData>({
    resolver: yupResolver(schemaFull) as Resolver<CheckoutFormData>,
    defaultValues: { 
      name:'', email:'', phone:'', advertisement:false,
      postalCode:'', address:'', district:'', addressComplement:'', addressNumber:'', city:'', state:'',
      cardNumber:'', expiry:'', cvv:'', holderName:'', installments:1,
    },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  

  // usa o watch DO useForm (methods), não do useFormContext
  const postalCode = methods.watch("postalCode");

  useEffect(() => {
    if (postalCode.length === 9) {
      setFormPostalCode(postalCode);   // CEP válido -> salva no contexto global
    } else {
      setFormPostalCode("");           // opcional: limpa quando não tiver completo
    }
  }, [postalCode, setFormPostalCode]);
  return (
    <>
      <FormContainer>
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
      </FormContainer>
    </>
  );
}
