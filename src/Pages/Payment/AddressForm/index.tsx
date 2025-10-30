import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addresSchema } from './schema'
import {MInput, MainButton} from '../../../components'

type PaymentFormData = {
  zipCode: string
  address: string
  district: string
  complement:  string
  number: string
  city: string
  state: string
}

export default function AddressForm() {
  const methods = useForm<PaymentFormData>({
    resolver: yupResolver(addresSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      district: '',
      complement: '',
      number: '',
      city: '',
      state: '',
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
      >
        {/* Nome impresso no cartão */}
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>


          <MInput
            name="zipCode"
            type="cep"
            placeholder="CEP"
            hasAsterisk
          />
          <MInput
            name="address"
            type="text"
            placeholder="Endereço"
            hasAsterisk
          />
          <MInput
            name="district"
            type="text"
            placeholder="Bairro"
            hasAsterisk
          />
          <MInput
            name="complement"
            type="text"
            placeholder="Complemento"
            hasAsterisk
          />
          <MInput
            name="number"
            type="number"
            placeholder="Número"
            hasAsterisk
          />
          <MInput
            name="city"
            type="text"
            placeholder="Cidade"
            hasAsterisk
          />
          <MInput
            name="state"
            type="text"
            placeholder="Estado"
            hasAsterisk
          />
      
    

        </div>

      <MainButton type='submit'>Avançar</MainButton>
      </form>
    </FormProvider>
  )
}
