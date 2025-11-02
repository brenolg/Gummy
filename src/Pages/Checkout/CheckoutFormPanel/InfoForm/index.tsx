import { MInput, Checkbox} from '@/components'
import { InputContainer } from '../styles'
import { FormTitle } from '../styles'

export default function InfoForm() {
  return (
    <InputContainer>
      <FormTitle>Contato</FormTitle>
      <MInput name="name"  type="text" placeholder="Nome" hasAsterisk mb={16} />
      <MInput name="email" type="text" placeholder="Email"  hasAsterisk mb={16}/>
      <MInput name="cell"  type="cell" placeholder="Celular" hasAsterisk mb={24}/>
      <Checkbox name="advertisement" label="Enviar novidades e promoções" />
    </InputContainer>
  )
}
