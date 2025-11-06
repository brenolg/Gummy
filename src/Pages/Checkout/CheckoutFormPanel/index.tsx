import { useState } from 'react';
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaFull } from './schema';
import { MainButton } from '@/components';
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
import { useCoreData, type FormStep } from '@/context/coreDataContext';
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

// passos numéricos usados para validação campo-a-campo
const STEP_FIELDS: Array<(keyof CheckoutFormData)[]> = [
  // 0: Info
  ['name', 'email', 'phone', 'advertisement'],
  // 1: Endereço
  ['postalCode', 'address', 'district', 'addressComplement', 'addressNumber', 'city', 'state'],
  // 2: Pagamento (cartão)
  ['cardNumber', 'expiry', 'cvv', 'holderName', 'installments'],
];

export default function CheckoutFormPanel() {
  const { formStep, setFormStep, paymentMethod } = useCoreData();
  const [loading, setLoading] = useState(false);
  const isPix = paymentMethod === 'PIX';
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

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


  const handleStep = async () => {
    // fluxo principal enquanto ainda estamos nos passos 0,1,2
    if (formStep === 0 || formStep === 1 || formStep === 2) {
      const isPaymentStep = formStep === 2;

      // PIX: não validar o passo 2 (cartão)
      const mustValidateThisStep = !(isPix && isPaymentStep);

      if (mustValidateThisStep) {
        const valid = await methods.trigger(STEP_FIELDS[formStep], { shouldFocus: true });
        if (!valid) return;
      }

      if (formStep === 0 && methods.getValues('advertisement')) {
        setLoading(true);
        await sleep(3000);
        console.log('Advertisement marcado: delay simulado de 3s.');
        setLoading(false);
      }

      if (isPaymentStep) {
        if (isPix) {
          // PIX: sem handleSubmit; pega os dados sem validar o cartão
          const data = methods.getValues();
          console.log('Fluxo PIX — dados parciais do checkout:', data);
          setFormStep('qrcode'); // vai para tela de QR Code
          return;
        } else {
          // Cartão: submete validando e vai para sucesso
          await methods.handleSubmit((data) => {
            console.log('CHECKOUT OK (Cartão)', data);
            setFormStep('success');
          })();
          return;
        }
      }

      setFormStep((s: FormStep) => (s === 0 ? 1 : 2));
      return;
    }

    // passo 'qrcode' (PIX): usuário confirma pagamento
    if (formStep === 'qrcode') {
      console.log('PIX confirmado pelo usuário');
      setFormStep('success');
      return;
    }

    // passo 'success': aqui você pode navegar para outra rota, se quiser
    if (formStep === 'success') {
      // navigate('/obrigado'); // opcional
      return;
    }
  };

  const getCtaLabel = () => {
    if (formStep === 0 || formStep === 1) return 'Avançar';
    if (formStep === 2) return isPix ? 'Gerar QR Code' : 'Confirmar Pagamento';
    if (formStep === 'qrcode') return 'Já paguei';
    if (formStep === 'success') return 'Concluir';
    return 'Avançar';
  };

  return (
    <>
      <FormContainer>
        <BackButton onClick={() => navigate(-1)}>
          <img src={backArow}/>
          <PageTitle>Finalizar Compra</PageTitle>
        </BackButton>

        {/* Stepper de status do form (usa índice numérico mapeado) */}
        <CheckoutStepper />

        <FormProvider {...methods}>
          <form
            id="checkout-form"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // impede submit automático
                handleStep();       // lógica de próxima etapa
              }
            }}
          >
            {formStep === 0 && <InfoForm/>}
            {formStep === 1 && <AddressForm/>}
            {formStep === 2 && <PaymentCardForm/>}
            {formStep === 'qrcode' && <QRCode/>}
            {formStep === 'success' && <OrderSuccess/>}

            <MainButton type="button" onClick={handleStep} loading={loading}>
              {getCtaLabel()}
            </MainButton>
          </form>
        </FormProvider>

        <SecureTxt/>
      </FormContainer>
    </>
  );
}
