import InfoCarousel from "./FeatureCarousel";
import {  CareTxt, CenterWrapper, Container, HairTxt, HeaderText, PurposeTitle, ScienceText,  SubText, TransformatioTxt } from "./styles";
import check from './check-circle.svg'
import power from './power.svg'
import { MainButton } from "@/components";
import { useNavigate } from "react-router-dom";


export default function BenefitsSection() {
  const navigate = useNavigate();

  function goToCheckout() {
    navigate("/checkout");
    
  }
  return (
    <Container id='beneficios'>
      <HeaderText>
        <strong>Power Gummy</strong> é mais que um suplemento
      </HeaderText>

      <SubText>
        <strong>É Cuidado 3 em 1.</strong> Somos a evolução e em gomas de beleza
      </SubText>

      <PurposeTitle><img src={check}/>Nascemos de um propósito!</PurposeTitle>

      <ScienceText>
        Criada com ingredientes puros e inteligentes para
        <strong>resultados rápidos, visíveis e consistentes</strong>
      </ScienceText>

      <InfoCarousel/>

      <CenterWrapper>
        <TransformatioTxt><img src={power}/>Transformação visível em poucas semanas</TransformatioTxt>

        <CareTxt >PowerGummy: o cuidado que tira você da frustração e entrega resultado.</CareTxt>
        <HairTxt>Cabelo, pele e unhas do jeito que você sempre sonhou.</HairTxt>

        <MainButton maxW={579} onClick={goToCheckout}>COMECE JÁ SUA MUDANÇA</MainButton>
      </CenterWrapper>
    </Container>
  );
}
