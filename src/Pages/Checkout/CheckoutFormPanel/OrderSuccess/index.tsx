import { useState } from "react";
import giftIcon from "@/assets/gif/gift.gif";
import check from "@/assets/imgs/checkP.svg";
import { MainButton } from "@/components";
import chevron from "@/assets/imgs/chevron-down.svg";
import ebook from "@/assets/pdf/ebook.pdf";
import { CheckIcon, Header, TitlePedido, Wrapper, MainTitle, SubTitle, GiftText, GiftImage, EmailHint, DetailsWrapper, DetailsHeader, ChevronIcon, DetailsContent, SectionCard, SectionTitle, Field, FieldLabel, FieldValue, FieldRow, ShippingRow, ShippingPrice, ShippingSub } from "./styles";
import { useCoreData } from "@/context/coreDataContext";

export default function OrderConfirmed() {
  const [open, setOpen] = useState(false); // começa aberto ou fechado, como quiser
  const { cart } = useCoreData();
  console.log(cart)

  const hasGift = cart.some(
    item => item.productId.toLowerCase().includes("kit") && item.quantity > 0
  );

  return (
    <Wrapper>
      <Header>
        <CheckIcon src={check} />
        <TitlePedido>Pedido confirmado</TitlePedido>
      </Header>

      <MainTitle>Parabéns,</MainTitle>
      <SubTitle>sua compra foi realizada com sucesso!</SubTitle>
      {hasGift && (
        <>
          <GiftText>Sua pedido desbloqueou um presente!</GiftText>

          <GiftImage src={giftIcon} alt="Presente" />

          <MainButton maxW={382} onClick={() => window.open(ebook, "_blank")}>
            Baixar e-book gratuito
          </MainButton>

          <EmailHint>
            Você receberá um email de confirmação em breve,
            <br />
            junto com seu e-book!
          </EmailHint>
        </>
      )}

      {/* DROPDOWN DE DETALHES */}
      <DetailsWrapper>
        <DetailsHeader type="button" onClick={() => setOpen((p) => !p)} $open={open}>
          <span>Detalhes da compra</span>
          <ChevronIcon src={chevron} alt="" $open={open} />
        </DetailsHeader>

        {open && (
          <DetailsContent>
            {/* CONTATO */}
            <SectionCard>
              <SectionTitle>Contato</SectionTitle>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldValue>teste@gmail.com</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Celular</FieldLabel>
                <FieldValue>(48) 98812-3456</FieldValue>
              </Field>
            </SectionCard>

            {/* ENTREGA */}
            <SectionCard>
              <SectionTitle>Entrega</SectionTitle>
              <Field>
                <FieldLabel>CEP</FieldLabel>
                <FieldValue>01234-567</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Endereço</FieldLabel>
                <FieldValue>Add</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Bairro</FieldLabel>
                <FieldValue>Add</FieldValue>
              </Field>

              <FieldRow>
                <Field flex={1}>
                  <FieldLabel>Complemento</FieldLabel>
                  <FieldValue>Add</FieldValue>
                </Field>
                <Field flex={1}>
                  <FieldLabel>Número</FieldLabel>
                  <FieldValue>Add</FieldValue>
                </Field>
              </FieldRow>

              <FieldRow>
                <Field flex={1}>
                  <FieldLabel>Cidade</FieldLabel>
                  <FieldValue>Add</FieldValue>
                </Field>
                <Field flex={1}>
                  <FieldLabel>Estado</FieldLabel>
                  <FieldValue>Add</FieldValue>
                </Field>
              </FieldRow>
            </SectionCard>

            {/* FRETE */}
            <SectionCard>
              <SectionTitle>Frete</SectionTitle>
              <ShippingRow>
                <div className="row">
                  <FieldLabel>&lt;Nome do frete&gt;</FieldLabel>
                <ShippingPrice>Grátis</ShippingPrice>
                </div>
                  <ShippingSub>3 a 4 dias úteis</ShippingSub>
              </ShippingRow>
            </SectionCard>

            {/* FORMA DE PAGAMENTO */}
            <SectionCard>
              <SectionTitle>Forma de pagamento</SectionTitle>
              <Field>
                <FieldValue>Cartão de crédito</FieldValue>
              </Field>
              <Field>
                <FieldValue>PIX</FieldValue>
              </Field>
            </SectionCard>
          </DetailsContent>
        )}
      </DetailsWrapper>
    </Wrapper>
  );
}


