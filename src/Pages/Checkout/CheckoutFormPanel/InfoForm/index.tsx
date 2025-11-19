import { MInput, Checkbox, MainButton} from '@/components'
import { InputContainer } from '../styles'
import { FormTitle } from '../styles'
import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useCoreData } from '@/context/coreDataContext';
import { useState } from 'react';

export type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  advertisement: boolean;
};

export default function InfoForm() {
  const { setFormStep } = useCoreData();
  const [loading, setLoading] = useState(false);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const methods = useForm<CheckoutFormData>({
      resolver: yupResolver(schema) as Resolver<CheckoutFormData>,
      defaultValues: { 
        name:'', email:'', phone:'', advertisement:false,
      },
      mode: 'onBlur',
      reValidateMode: 'onChange'
    });

  const handleStep = async () => {
    const isValid = await methods.trigger(); // valida todos os campos

    if (!isValid) {
      console.log("Form inválido");
      return; // impede avanço
    }

    const data = methods.getValues();
    console.log("FORM DATA:", data);

    if (data.advertisement) {
      setLoading(true);
      await sleep(3000);
      console.log("Advertisement marcado: delay simulado de 3s.");
      setLoading(false);
    }

    setFormStep(1); // agora só avança se estiver válido
  };

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
          <FormTitle>Contato</FormTitle>
          <MInput name="name"  type="text" placeholder="Nome" hasAsterisk mb={16} />
          <MInput name="email" type="text" placeholder="Email"  hasAsterisk mb={16}/>
          <MInput name="phone"  type="phone" placeholder="Celular" hasAsterisk mb={24}/>
          <Checkbox name="advertisement" label="Enviar novidades e promoções" />
        </InputContainer>

        <MainButton type="submit" onClick={handleStep} loading={loading}>
          Avançar
        </MainButton>
      </form>
    </FormProvider>
  )
}
