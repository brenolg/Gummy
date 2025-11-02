import {MInput} from '@/components'
import { InputContainer, TwoInputContainer } from '../styles'
import { FormTitle } from '../styles'

export default function AddressForm() {

  return (
    <InputContainer>
      <FormTitle>Endereço</FormTitle>
      <MInput name="zipCode"   type="cep"    placeholder="CEP"       hasAsterisk mb={16}/>
      <MInput name="address"   type="text"   placeholder="Endereço"  hasAsterisk mb={16} />
      <MInput name="district"  type="text"   placeholder="Bairro"    hasAsterisk mb={16}/>
      <TwoInputContainer>
        <MInput name="complement" type="text"  placeholder="Complemento" />
        <MInput name="number"    type="number" placeholder="Número"    hasAsterisk mb={16}/>
      </TwoInputContainer>
      <TwoInputContainer>
        <MInput name="city"      type="text"   placeholder="Cidade"    hasAsterisk mb={16}/>
        <MInput name="state"     type="text"   placeholder="Estado"    hasAsterisk />
      </TwoInputContainer>
    </InputContainer>
  )
}
