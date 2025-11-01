import { useEffect, useState } from 'react';
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {  schemaFull} from './schema';
import {  MainButton } from '../../components';
import { FormContainer, MainContainer, PageTitle, ProductContainer } from './styles';
import InfoForm from './InfoForm';
import AddressForm from './AddressForm';
import PaymentCardForm from './PaymentForm';
import CheckoutStepper from './CheckoutStepper';
import SecureTxt from './SecureTxt';


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

export default function Checkout() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    methods.reset(methods.getValues()); // mantém valores e religa resolver
  }, [step, methods]);

  const handleStep = async () => {
    const valid = await methods.trigger(STEP_FIELDS[step], { shouldFocus: true });
    if (!valid) return;

    // PASSO 0: se advertisement = true, faz loading 3s e loga
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    if (step === 0) {
      const wantsAds = methods.getValues('advertisement'); // boolean
      if (wantsAds) {
        setLoading(true);
        await sleep(3000);
        console.log('Advertisement marcado: iniciando fluxo com delay de 3s.');
        setLoading(false);
      }
    }

    if (step === STEP_FIELDS.length - 1) {
      await methods.handleSubmit((data) => {
        console.log("CHECKOUT OK", data);
      })(); // executa
      return;
    }

    setStep((s) => s + 1);
  };


  return (
    <MainContainer>
      <FormProvider {...methods}>
        <FormContainer >
          {/* Stepper simples (opcional) */}
          <PageTitle>Finalizar Compra</PageTitle>

          <CheckoutStepper step={step} />

          <form id="checkout-form" >
            {step === 0 && (
              <InfoForm/>
            )}
            {step === 1 && (
              <AddressForm/>
            )}
            {step === 2 && (
              <PaymentCardForm/>
            )}

            <MainButton type="button" onClick={handleStep} loading={loading}>
              {step === STEP_FIELDS.length - 1 ? "Confirmar Pagamento" : "Avançar"}
            </MainButton>
          </form>

          <SecureTxt/>
          
        </FormContainer>
      </FormProvider>

      <ProductContainer>
        <PageTitle>Resumo do pedido</PageTitle>
      </ProductContainer>
    </MainContainer>
  );
}
