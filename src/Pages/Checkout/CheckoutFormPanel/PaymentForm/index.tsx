import { useCoreData } from '@/context/coreDataContext';
import { Divider, MInput, Select, MainButton } from '@/components';
import PaymentMethodSelector from '../PaymentMethodSelector';
import { InputContainer, TwoInputContainer, FormTitle } from '../styles';
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

export type CheckoutFormData = {
  cardNumber: string;
  expiry: string;      // MM/AA
  cvv: string;         // 3–4 dígitos
  holderName: string;
  installments: number;
  cpf: string;
};

export default function PaymentCardForm() {
  const installmentsOptions = [
    { label: "1x", value: 1 },
    { label: "2x", value: 2 },
    { label: "3x", value: 3 },
    { label: "4x", value: 4 },
    { label: "5x", value: 5 },
    { label: "6x", value: 6 },
    { label: "7x", value: 7 },
    { label: "8x", value: 8 },
    { label: "9x", value: 9 },
    { label: "10x", value: 10 },
    { label: "11x", value: 11 },
    { label: "12x", value: 12 },
  ];
  const { paymentMethod, formData, cartStorage, setFormStep } = useCoreData();

  const methods = useForm<CheckoutFormData>({
    resolver: paymentMethod === "CREDIT_CARD"
      ? (yupResolver(schema) as Resolver<CheckoutFormData>)
      : undefined, // <-- desliga toda validação quando for PIX
    defaultValues: { 
      cardNumber:'', expiry:'', cvv:'', installments: 0,cpf: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const handleStep = async () => {
    if (paymentMethod !== "PIX") {
      const isValid = await methods.trigger(); // valida só no cartão

      if (!isValid) {
        console.error("Form inválido");
        return;
      }
    }

    const data = methods.getValues();

    const body = {
      customerData: {
        name: formData.name,
        email: formData.email,
        cpf: data.cpf,
        phone: formData.phone
      },
      items: cartStorage,
      creditCard: {
        holderName: data.holderName,
        number: data.cardNumber,
        expiryMonth: data.expiry, //Formatar
        expiryYear: data.expiry,
        ccv: data.cvv
      },
      shipping: '',
      paymentMethod: paymentMethod,
      creditCardHolderInfo: {
        name: formData.name,
        email: formData.email,
        cpfCnpj: data.cpf,
        postalCode: formData.postalCode,
        addressNumber: formData.addressNumber,
        addressComplement: formData.addressComplement,
        phone: formData.phone
      }
    }

    if (paymentMethod === "CREDIT_CARD") {
      setFormStep('success')
    }
    console.log("entrou" , paymentMethod )
    if (paymentMethod === 'PIX') {
      setFormStep('qrcode')
    }

    console.log(body)
  }  

  return (
    <FormProvider {...methods}>
      <form
        id="checkout-form"
        onSubmit={methods.handleSubmit(handleStep)}  // <-- CERTO
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <InputContainer>
          <FormTitle>Pagamento</FormTitle>
          <PaymentMethodSelector/>
          <Divider mb={24}/>

          {paymentMethod === 'CREDIT_CARD' ? 
            <>
              <MInput name="cardNumber" type="card"   placeholder="Número do Cartão" hasAsterisk mb={18}/>
              <MInput name="cpf" type="cpf"   placeholder="CPF" hasAsterisk mb={18}/>
              <TwoInputContainer>
                <MInput name="expiry" type="expiry" placeholder="Validade" hasAsterisk mb={18}/>
                <MInput name="cvv"    type="cvv"    placeholder="CVV"      hasAsterisk mb={18}/>
              </TwoInputContainer>
              <MInput name="holderName" type="text" placeholder="Nome do titular do Cartão" hasAsterisk mb={24}/>
              <Select name="installments" placeholder="Parcelas" options={installmentsOptions} hasAsterisk />
            </> : 
            <div>
              Clique no botão de “Confirmar pagamento”
              para visualizar o QR Code de pagamento
            </div>
          }

        </InputContainer>
          <MainButton type="submit" >
            Confirmar Pagamento
          </MainButton>
      </form>
    </FormProvider>
  );
}
