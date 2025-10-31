import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutSchema} from './schema';
import {  MainButton } from '../../components';
import { FormContainer, MainContainer, PageTitle, ProductContainer } from './styles';
import InfoForm from './InfoForm';
import AddressForm from './AddressForm';
import PaymentCardForm from './PaymentForm';
import CheckoutStepper from './CheckoutStepper';


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

export default function Payment() {
  const [step, setStep] = useState(0);

  const methods = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      // Info
      name: '', email: '', cell: '', advertisement: false,
      // Endereço
      zipCode: '', address: '', district: '', complement: '', number: '', city: '', state: '',
      // Cartão
      cardNumber: '', expiry: '', cvv: '', holderName: '', installments: 1,
    },
    mode: 'onBlur',
  });

  const { handleSubmit, trigger, formState: { isSubmitting } } = methods;

  const onSubmit = (data: CheckoutFormData) => {
    console.log('CHECKOUT OK', data);
  };

  const next = async () => {
    const fields = STEP_FIELDS[step];
    const ok = await trigger(fields, { shouldFocus: true });
    console.log("STEP")

    if (ok) setStep(prev => prev + 1);
  };

  const isLast = step === STEP_FIELDS.length - 1;

  return (
    <MainContainer>
      <FormProvider {...methods}>
        <FormContainer >
          {/* Stepper simples (opcional) */}
          <PageTitle>Finalizar Compra</PageTitle>

          <CheckoutStepper step={step} />

          <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            {step === 0 && (
              <InfoForm/>
            )}
            {step === 1 && (
              <AddressForm/>
            )}
            {step === 0 && (
              <PaymentCardForm/>
            )}

            {/* Navegação / Submit */}
            <div >
              {!isLast ? (
                <MainButton type="button" onClick={next} >
                  Avançar
                </MainButton>
              ) : (
                <MainButton type="submit" loading={isSubmitting} >
                  Confirmar Pagamento
                </MainButton>
              )}
            </div>
          </form>
        </FormContainer>
      </FormProvider>

      <ProductContainer>
        <PageTitle>Resumo do pedido</PageTitle>
      </ProductContainer>
    </MainContainer>
  );
}
