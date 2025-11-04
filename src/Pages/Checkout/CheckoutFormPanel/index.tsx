import {  useState } from 'react';
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {  schemaFull} from './schema';
import {  MainButton } from '@/components';
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

export type CheckoutFormData = {
  /** PASSO 1 — Contato */
  name: string;
  email: string;
  cell: string;
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

// campos por passo: usados no trigger() para validar só o passo atual
const STEP_FIELDS: Array<(keyof CheckoutFormData)[]> = [
  // 0: Info
  ['name', 'email', 'cell', 'advertisement'],
  // 1: Endereço
  ['zipCode', 'address', 'district', 'complement', 'number', 'city', 'state'],
  // 2: Pagamento
  ['cardNumber', 'expiry', 'cvv', 'holderName', 'installments'],
];

export default function CheckoutFormPanel() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { method } = useCoreData(); 
  const navigate = useNavigate();

  const methods = useForm<CheckoutFormData>({
    resolver: yupResolver(schemaFull) as Resolver<CheckoutFormData>,
    defaultValues: { 
      name:'', email:'', cell:'', advertisement:false,
      zipCode:'', address:'', district:'', complement:'', number:'', city:'', state:'',
      cardNumber:'', expiry:'', cvv:'', holderName:'', installments:1,
    },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const handleStep = async () => {
    // passos 0–2: validar apenas os campos do passo atual
    if (step <= 2) {
      const valid = await methods.trigger(STEP_FIELDS[step], { shouldFocus: true });
      if (!valid) return;

      if (step === 0 && methods.getValues('advertisement')) {
        setLoading(true);
        await sleep(3000);
        console.log('Advertisement marcado: delay simulado de 3s.');
        setLoading(false);
      }

      if (step === 2) {
        // submit dos dados do checkout
        await methods.handleSubmit((data) => {
          console.log("CHECKOUT OK", data);
          // após o submit, decide o próximo step:
          if (method === 'pix') {
            // vai para o QR Code
            setStep(3);
          } else {
            // cartão: já mostra success
            setStep(3);
          }
        })();
        return;
      }

      setStep((s) => s + 1);
      return;
    }

    // step 3:
    if (step === 3) {
      if (method === 'pix') {
        // usuário clicou "Já paguei" → mostrar sucesso
        setStep(4);
      } else {
        // cartão: já está no sucesso; botão pode ficar escondido
      }
      return;
    }
  };

  return (
    <>
      <FormContainer >

        <BackButton onClick={() => navigate(-1)}>
          <img src={backArow}/>
          <PageTitle>Finalizar Compra</PageTitle>
        </BackButton>

        {/* Stepper de status do form */}
        <CheckoutStepper step={step} />

        <FormProvider {...methods}>
          <form 
            id="checkout-form"  
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // impede submit automático
                handleStep();       // chama sua lógica de próxima etapa
              }
            }} 
            >
            {step === 0 && (
              <InfoForm/>
            )}
            {step === 1 && (
              <AddressForm/>
            )}
            {step === 2 && (
              <PaymentCardForm/>
            )}
            {step === 3 && (
              <OrderSuccess/>
            )}

            <MainButton type="button" onClick={handleStep} loading={loading}>
              {step === STEP_FIELDS.length - 1 ? "Confirmar Pagamento" : "Avançar"}
            </MainButton>
          </form>
        </FormProvider>

        <SecureTxt/>
          
        </FormContainer>
    </>
  );
}
