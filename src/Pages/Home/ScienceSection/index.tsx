import { MainButton } from "@/components"; 
import hairImg from "@/assets/imgs/hairGirl.svg";
import nailsImg from "@/assets/imgs/nails.svg";
import skinImg from "@/assets/imgs/skin.svg";
import nailsBack from "@/assets/imgs/nailsBack.svg"

import {
  Section,
  Content,
  Heading,
  SuperTitle,
  Title,
  Description,
  CardsGrid,
  Card,
  DescriptionStrong,
  FeaturedImage,
  BackImage,
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function ScienceSection() {
  const navigate = useNavigate();
  function goToCheckout() {
    navigate("/checkout");
  }

  return (
    <Section id='science'>
      <Content>
        <Heading>
          <SuperTitle>NÃO É MÁGICA</SuperTitle>
          <Title>É CIÊNCIA APLICADA!</Title>
          <Description>
            A nova geração de suplementação. A evolução que sua rotina estava esperando.
          </Description>
          <DescriptionStrong>
            Cabelo, pele e unhas transformados.
          </DescriptionStrong>
        </Heading>
        

        <CardsGrid>
          <Card>
            <FeaturedImage $img={hairImg} />
          </Card>

          <Card>
            <FeaturedImage $img={nailsImg} $width={ 343.5 } />
            <BackImage $img={nailsBack}  />
          </Card>

          <Card>
            <FeaturedImage $img={skinImg}  />
          </Card>
        </CardsGrid>

        <MainButton type="button" onClick={goToCheckout} maxW={630}>
          Quero minha Power Gummy agora
        </MainButton>
    
      </Content>
    </Section>
  );
}


 //   <CardBody>
//
  //                        <CardTag>UNHAS</CardTag>
    //            <CardHighlight>RESISTENTES</CardHighlight>
      //        <CardFooterText>
        //        <div className="content">
          //      Zero açucar, sem desculpas,&nbsp;
            //    <strong>Resultados reais.</strong>
            //    </div>
             // </CardFooterText>
            //</CardBody>