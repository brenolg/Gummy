
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cardSchema } from './schema';
import { MInput, Select, MainButton } from '../../../components';

const installmentsOptions = Array.from({ length: 12 }, (_, i) => {
  const v = i + 1;
  return { label: `${v}x`, value: v };
});

type CardFormData = {
  cardNumber: string;
  expiry: string;       // MM/AA
  cvv: string;          // 3–4 dígitos
  holderName: string;
  installments: number; // 1–12x
};

export default function PaymentCardForm() {
  const methods = useForm<CardFormData>({
    resolver: yupResolver(cardSchema),
    defaultValues: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      holderName: '',
      installments: 1,
    },
    mode: 'onBlur',
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = (data: CardFormData) => {
    console.log('PAGAMENTO ENVIADO', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: 16 }}>
        {/* Número do Cartão */}
        <MInput
          name="cardNumber"
          type="card"          // adicione no seu getMaskConfig: mask "0000 0000 0000 0000"
          placeholder="Número do Cartão"
          hasAsterisk
          maxLength={19 + 3}  // 19 dígitos + espaços
        />

        {/* Linha: Validade | CVV */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <MInput
            name="expiry"
            type="expiry"      // adicione no getMaskConfig: mask "00/00"
            placeholder="Validade"
            hasAsterisk
            maxLength={5}
          />
          <MInput
            name="cvv"
            type="cvv"         // adicione no getMaskConfig: mask "0000" (aceite 3-4)
            placeholder="CVV"
            hasAsterisk
            maxLength={4}
          />
        </div>

        {/* Nome do titular */}
        <MInput
          name="holderName"
          type="text"
          placeholder="Nome do titular do Cartão"
          hasAsterisk
          maxLength={60}
        />

        {/* Parcelas */}
        <Select
          name="installments"
          placeholder="Parcelas"
          options={installmentsOptions}
          hasAsterisk
        />

        <MainButton type="submit" loading={isSubmitting} >
          Avançar
        </MainButton>
      </form>
    </FormProvider>
  );
}
