import gummyImg from "@/assets/imgs/fruits.svg"; // substitua pela sua imagem de gominhas
import { Button, CardsRow, Container, GummyImage, HeaderText, LargeCard, PurposeBlock, PurposeSubtitle, PurposeTitle, ScienceText, SmallCard, SubText } from "./styles";


export default function BenefitsSection() {
  return (
    <Container>
      <HeaderText>
        <strong>Power Gummy</strong> é mais que um suplemento
      </HeaderText>

      <SubText>
        Somos uma <strong>revolução em gomas de beleza com 
      Cuidado 3 em 1</strong>
      </SubText>

      <PurposeBlock>
        <PurposeTitle>Nascemos de um <strong>propósito!</strong></PurposeTitle>
        <PurposeSubtitle>Transformar autocuidado em:</PurposeSubtitle>

        <CardsRow>
          <SmallCard>Ritual leve</SmallCard>
          <SmallCard>Delicioso</SmallCard>
          <SmallCard>Realmente eficaz</SmallCard>
        </CardsRow>
      </PurposeBlock>

      <ScienceText>
        Criada com ciência e <strong>pensada para resultados consistentes ao longo do tempo.</strong>
      </ScienceText>

      <CardsRow>
        <LargeCard>Crescimento dos fios</LargeCard>
        <LargeCard>Adeus queda de cabelo</LargeCard>
        <LargeCard>Fortalecer as unhas</LargeCard>
        <LargeCard>Envelhecer com saúde</LargeCard>
      </CardsRow>

      <Button>COMECE JÁ SUA MUDANÇA</Button>

      <GummyImage src={gummyImg} />
    </Container>
  );
}
