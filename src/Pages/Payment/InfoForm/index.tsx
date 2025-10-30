import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InfoSchema } from './schema'
import {MInput, Checkbox, MainButton} from '../../../components'

type PaymentFormData = {
  name: string
  email: string
  cell: string
  advertisement:  boolean 
}

export default function InfoForm() {
  const methods = useForm<PaymentFormData>({
    resolver: yupResolver(InfoSchema ),
    defaultValues: {
      name: '',
      email: '',
      cell: '',
      advertisement: false
    },
    mode: 'onBlur',
  })

  const {
    handleSubmit,
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
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>


          <MInput
            name="name"
            type="text"
            placeholder="Nome"
            hasAsterisk
          />
          <MInput
            name="email"
            type="text"
            placeholder="email"
            hasAsterisk
          />
          <MInput
            name="cell"
            type="cell"
            placeholder="cel"
            hasAsterisk
          />
          <Checkbox
            name="advertisement"
            label="Enviar novidades e promoções"
          />

        </div>

      <MainButton type='submit'>Avançar</MainButton>
      </form>
    </FormProvider>
  )
}
