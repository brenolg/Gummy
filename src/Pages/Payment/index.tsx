import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import PaymentCardForm from "./PaymentForm";
import { FormContainer, MainContainer, ProductContainer } from "./styles";

export default function Payment() {
  return (
    <MainContainer>
      <FormContainer>
        <h1>Finalizar Compra</h1>
        <PaymentCardForm/>
        <InfoForm/>
        <AddressForm/>
      </FormContainer>
      <ProductContainer>
        <h1>Resumo do pedido</h1>
      </ProductContainer>

    </MainContainer>
  )
}
