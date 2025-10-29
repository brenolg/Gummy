import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { paymentSchema } from './paymentSchema'
import InputComponent from '../../components/form/MaskedInput' 
import SelectComponent from '../../components/form/Select'
import Checkbox from '../../components/form/Checkbox'

type PaymentFormData = {
  nome: string
  parcelas: string
  acceptTerms: boolean 
}

export default function PaymentForm() {
  const methods = useForm<PaymentFormData>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      nome: '',
      parcelas: '',
      acceptTerms: false
    },
    mode: 'onBlur',
  })

  const {
    handleSubmit,
    formState: { isSubmitting }, // tirei isValid daqui
  } = methods

  const onSubmit = (data: PaymentFormData) => {
    console.log('clicou')
    console.log('PAGAMENTO ENVIADO', data)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'grid',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '1.5rem 1.5rem 2rem',
          boxShadow:
            '0 24px 48px -12px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.04)',
        }}
      >
        {/* Nome impresso no cartão */}
        <div style={{ display: 'grid', gap: '.4rem' }}>
          <label
            htmlFor="nome"
            style={{
              fontSize: '.8rem',
              fontWeight: 500,
              color: '#1a1a1a',
            }}
          >
            Nome no cartão
          </label>

          <InputComponent
            name="nome"
            type="text"
            placeholder="FULANO DE TAL"
            hasAsterisk
          />
          <Checkbox
            name="acceptTerms"
            label="Aceito os termos de uso"
          />
          <SelectComponent
            name="parcelas"
            placeholder="Parcelas"
            hasAsterisk
            options={[
              { label: '1x de R$ 368,90', value: '1' },
              { label: '2x de R$ 184,45', value: '2' },
              { label: '3x de R$ 122,97', value: '3' },
            ]}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            marginTop: '.5rem',
            appearance: 'none',
            border: 0,
            borderRadius: '0.75rem',
            height: '44px',
            background:
              'linear-gradient(90deg, rgb(63,94,251) 0%, rgb(252,70,107) 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '.9rem',
            lineHeight: 1,
            cursor: 'pointer',
            boxShadow:
              '0 16px 32px -8px rgba(63,94,251,0.5), 0 4px 12px rgba(0,0,0,0.15)',
            transition: 'opacity .12s ease, box-shadow .12s ease',
            opacity: isSubmitting ? 0.6 : 1,
          }}
        >
          {isSubmitting ? 'Processando...' : 'Pagar agora'}
        </button>
      </form>
    </FormProvider>
  )
}
