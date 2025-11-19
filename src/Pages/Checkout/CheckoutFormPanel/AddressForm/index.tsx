import {MainButton, MInput} from '@/components'
import { InputContainer, TwoInputContainer } from '../styles'
import { FormTitle } from '../styles'
import { useCoreData } from '@/context/coreDataContext';

import { FormProvider, useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useEffect } from 'react';
import { Warning } from './styles';

export type CheckoutFormData = {
  postalCode: string;
  address: string;
  district: string;
  addressComplement: string;
  addressNumber: string;
  city: string;
  state: string;
};


export default function AddressForm() {
  const { setFormStep, setFormPostalCode } = useCoreData();

  const methods = useForm<CheckoutFormData>({
    resolver: yupResolver(schema) as Resolver<CheckoutFormData>,
    defaultValues: { 
      postalCode:'', address:'', district:'', addressComplement:'', addressNumber:'', city:'', state:'',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });
  
  const handleStep = async () => {
    const isValid = await methods.trigger(); // valida todos os campos

    if (!isValid) {
      return; // impede avanço
    }

    const data = methods.getValues();
    console.log("FORM DATA:", data);


    setFormStep(2); // agora só avança se estiver válido
  };
  
  const postalCode = methods.watch("postalCode"); 
  useEffect(() => {
    const fetchCep = async () => {
      if (postalCode.length !== 9) return;

      const cleanCEP = postalCode.replace(/\D/g, "");

      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
        const data = await res.json();

        // CEP inválido — dispara erro no input
        if (data.erro) {
          methods.setError("postalCode", {
            type: "manual",
            message: "CEP não encontrado",
          });
          return;
        }

        // CEP válido — limpa o erro manual e do Yup
        methods.clearErrors("postalCode");

        // Preenche os campos automaticamente
        methods.setValue("address", data.logradouro || "");
        methods.setValue("district", data.bairro || "");
        methods.setValue("addressComplement", data.complemento || "");
        methods.setValue("city", data.localidade || "");
        methods.setValue("state", data.uf || "");
        console.log("setFormPostalCode")
        setFormPostalCode(postalCode);

      } catch (error) {
        console.error("Erro ao buscar CEP:", error);

        methods.setError("postalCode", {
          type: "manual",
          message: "Erro ao consultar o CEP",
        });
      }
    };

    fetchCep();
  }, [postalCode]);

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
          <FormTitle>Endereço</FormTitle>
          <MInput name="postalCode"   type="cep"    placeholder="CEP"       hasAsterisk mb={16}/>
          <MInput name="address"   type="text"   placeholder="Endereço" disabled  hasAsterisk mb={16} />
          <MInput name="district"  type="text"   placeholder="Bairro" disabled   hasAsterisk mb={16}/>
          <TwoInputContainer>
            <MInput name="addressComplement" type="text"  placeholder="Complemento" />
            <MInput name="addressNumber"    type="number" placeholder="Número"    hasAsterisk mb={16}/>
          </TwoInputContainer>
          <TwoInputContainer>
            <MInput name="city"   disabled    type="text"   placeholder="Cidade"    hasAsterisk mb={16}/>
            <MInput name="state"  disabled    type="text"   placeholder="Estado"    hasAsterisk />
          </TwoInputContainer>
        </InputContainer>
        
        <Warning>⚠️ Certifique-se de que o endereço está completo e correto para garantir a entrega do seu pedido.</Warning>

        <MainButton type="submit" onClick={handleStep}>
          Avançar
        </MainButton>
      </form>
    </FormProvider>
  )
}
