import { useCoreData } from '@/context/coreDataContext';
import { Divider, MInput, Select, MainButton } from '@/components';
import PaymentMethodSelector from '../PaymentMethodSelector';
import { InputContainer, TwoInputContainer, FormTitle } from '../styles';
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useFetch } from '@/hooks/useFetch';
import { onlyDigits } from '@/utils/helper';
import { useState } from 'react';
import { InputError } from '@/components/form/FormCommomStyle';
import imgError from '@/assets/icons/error.svg'

export type CheckoutFormData = {
  cardNumber: string;
  expiry: string;      // MM/AA
  cvv: string;         // 3–4 dígitos
  holderName: string;
  installments: number;
  cpf: string;
};

export default function PaymentCardForm() {
  const [error , setError] = useState('')
  const { fetcher } = useFetch();
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

  const { paymentMethod, formData, cartStorage, setFormStep , setFormData, globalLoading, coupons, shipping, setGlobalLoading} = useCoreData();

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
    if (globalLoading) return
    
    if (paymentMethod !== "PIX") {
      const isValid = await methods.trigger(); // valida só no cartão

      if (!isValid) {
        console.error("Form inválido");
        return;
      }
    }

    const data = methods.getValues();
    try {
      setGlobalLoading(true)
      setError('')
      const filteredCoupons = coupons.filter(c => c.code !== "PIX05");
      const filteredItems = cartStorage.filter(item => item.quantity > 0);
      const [month, year2] = data.expiry.split("/");
      const year4 = `20${year2}`;
      const body = {
          customerData: {
            name: formData.name,
            email: formData.email,
            cpf: onlyDigits(data.cpf),
            phone: onlyDigits(String(formData.phone))
          },
          ...(filteredCoupons.length > 0 && {
            coupon: filteredCoupons[0].code
          }),

          items: filteredItems,

          shipping: shipping?.valor,
          paymentMethod: paymentMethod,
          ...(paymentMethod === "CREDIT_CARD" && {
          creditCard: {
            holderName: data.holderName.toLocaleUpperCase(),
            number: onlyDigits(data.cardNumber),
            expiryMonth: month, 
            expiryYear: year4 ,
            ccv: data.cvv
          },
          creditCardHolderInfo: {
            name: formData.name,
            email: formData.email,
            cpfCnpj: onlyDigits(data.cpf),
            postalCode: formData.postalCode,
            addressNumber: formData.addressNumber,
            addressComplement: formData.addressComplement,
            phone: onlyDigits(String(formData.phone)),
          }
        })
      }
      console.log("body", body)
      const res = await fetcher(
        "/public/create-order",
        "POST",
        { body }
      );

      console.log("Order criada com sucesso:", res);

    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      setError('Não foi possível validar a compra. Verifique os dados e tente novamente.')
      return
    }finally {
      setGlobalLoading(false)
    }

    //Salva os dados
    setFormData(prev => ({
      ...prev,
      ...data
    }));
    

    if (paymentMethod === "CREDIT_CARD") {
      setFormStep('success')
    }
    if (paymentMethod === 'PIX') {
      setFormStep('qrcode')
    }
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
              <MInput name="cardNumber" type="card"   placeholder="Número do Cartão" hasAsterisk mb={24}/>
              <MInput name="cpf" type="cpf"   placeholder="CPF" hasAsterisk mb={24}/>
              <TwoInputContainer>
                <MInput name="expiry" type="expiry" placeholder="Validade" hasAsterisk mb={24}/>
                <MInput name="cvv"    type="cvv"    placeholder="CVV"      hasAsterisk mb={24}/>
              </TwoInputContainer>
              <MInput name="holderName" type="text" placeholder="Nome do titular do Cartão" hasAsterisk mb={24}/>
              <Select name="installments" placeholder="Parcelas" options={installmentsOptions} hasAsterisk />
            </> : 
            <div className='pix-description'>
              Clique no botão de “Confirmar pagamento”
              para visualizar o QR Code de pagamento
            </div>
          }
          <InputError $error={!!error}><img src={imgError} className='img-error'/> {error}</InputError>
        </InputContainer>

          <MainButton type="submit" loading={globalLoading} >
            Confirmar Pagamento
          </MainButton>
      </form>
    </FormProvider>
  );
}
