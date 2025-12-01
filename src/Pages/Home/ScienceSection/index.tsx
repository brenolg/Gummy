import { MainButton } from '@/components'

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
} from './styles'
import { useNavigate } from 'react-router-dom'

export default function ScienceSection() {
  const navigate = useNavigate()
  function goToCheckout() {
    navigate('/checkout')
  }

  return (
    <Section id="science">
      <Content>
        <Heading>
          <SuperTitle>NÃO É MÁGICA</SuperTitle>
          <Title>É CIÊNCIA APLICADA!</Title>
          <Description>
            A nova geração de suplementação. A evolução que sua rotina estava esperando.
          </Description>
          <DescriptionStrong>Cabelo, pele e unhas transformados.</DescriptionStrong>
        </Heading>

        <CardsGrid>
          <Card>
            <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairGirl.png?alt=media&token=9b51869a-1dd5-4cac-8693-5de57c0803fc" />
            <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/hairB.png?alt=media&token=9cf73e62-3466-4957-92c7-e38dd6454770" />
          </Card>

          <Card>
            <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nails.png?alt=media&token=7297b79f-c7d7-4656-8163-adbb2f1b1dc6" />
            <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/nailsB.png?alt=media&token=c1333ed2-6bbb-46d5-960a-467d8c34a232" />
          </Card>

          <Card>
            <FeaturedImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skin.png?alt=media&token=dd03b2cf-fa42-4cd0-8003-734515dd25b7" />
            <BackImage $img="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/skinB.png?alt=media&token=66a9de4e-0c2b-45bd-a48f-b9af3408f0bf" />
          </Card>
        </CardsGrid>

        <MainButton type="button" onClick={goToCheckout} maxW={630}>
          Quero minha Power Gummy agora
        </MainButton>
      </Content>
    </Section>
  )
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
