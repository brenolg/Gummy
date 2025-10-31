import { Divider, MInput, Select, } from '../../../components';
import PaymentMethodSelector from '../PaymentMethodSelector';
import { FormTitle, InputContainer, TwoInputContainer } from '../styles';

export default function PaymentCardForm() {
  const installmentsOptions = Array.from({ length: 12 }, (_, i) => ({ label: `${i+1}x`, value: i+1 }));

  return (
    <InputContainer>
      <FormTitle>Pagamento</FormTitle>
      <PaymentMethodSelector/>
      <Divider/>
      <MInput name="cardNumber" type="card"   placeholder="Número do Cartão" hasAsterisk mb={16}/>
      <TwoInputContainer>
        <MInput name="expiry" type="expiry" placeholder="Validade" hasAsterisk mb={16}/>
        <MInput name="cvv"    type="cvv"    placeholder="CVV"      hasAsterisk mb={16}/>
      </TwoInputContainer>
      <MInput name="holderName" type="text" placeholder="Nome do titular do Cartão" hasAsterisk mb={24}/>
      <Select name="installments" placeholder="Parcelas" options={installmentsOptions} hasAsterisk />
    </InputContainer>
  );
}
