import fruitsImg from '@/assets/imgs/fruit.png'
import fruitsM from '@/assets/imgs/fruitsM.png'

import {
  Section,
  Card,
  LeftContent,
  Title,
  BenefitsList,
  BenefitItem,
  BottleWrapper,
  BottleImage,
  WomanImage,
  FruitMobile,
} from './styles'
import { MainButton } from '@/components'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default function Hero() {
  const navigate = useNavigate()
  function goToCheckout() {
    navigate('/checkout')
  }

  const isMobile = useMediaQuery({
    query: '(max-width: 880px)',
  })

  return (
    <Section>
      {!isMobile && (
        <>
          <Card>
            <LeftContent>
              <Title>
                O FUTURO DAS <br />
                <span className="highlight">VITAMINAS JÁ COMEÇOU!</span>
              </Title>

              <BenefitsList>
                <BenefitItem>💜 Novo padrão de suplementação em gomas </BenefitItem>
                <BenefitItem>⚡ Ácido Hialurônico + Biotina + 7 Vitaminas</BenefitItem>
                <BenefitItem>💎 Nutrição avançada com ativos premium</BenefitItem>
                <BenefitItem>🌱 Fórmula limpa, inteligente com resultado real</BenefitItem>
                <BenefitItem>✨ Simples na rotina. Poderosa no efeito</BenefitItem>
                <BenefitItem>🏆 Sabor delicioso. Zero açúcar. Zero desculpas </BenefitItem>
              </BenefitsList>
            </LeftContent>

            <BottleWrapper>
              <BottleImage
                src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/heroBotle.png?alt=media&token=fdc7f200-161b-4313-8db1-945762acf48d"
                alt="Power Gummy Cabelo, Pele & Unha"
              />
            </BottleWrapper>

            <div className="line" />
            <FruitMobile src={fruitsImg} />
          </Card>

          <MainButton type="button" onClick={goToCheckout} maxW={456}>
            Comprar agora
          </MainButton>

          <WomanImage
            src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/heroWomam.png?alt=media&token=ab75124a-8d53-4cfe-91dc-9fec72b2f069"
            alt="Mulher sorrindo"
          />
        </>
      )}
      {isMobile && (
        <>
          <Card>
            <LeftContent>
              <Title>
                O FUTURO DAS <br />
                <span className="highlight">VITAMINAS JÁ COMEÇOU!</span>
              </Title>

              <BenefitsList>
                <BenefitItem>💜 Novo padrão de suplementação em gomas </BenefitItem>
                <BenefitItem>⚡ Ácido Hialurônico + Biotina + 7 Vitaminas</BenefitItem>
                <BenefitItem>💎 Nutrição avançada com ativos premium</BenefitItem>
                <BenefitItem>🌱 Fórmula limpa, inteligente com resultado real</BenefitItem>
                <BenefitItem>✨ Simples na rotina. Poderosa no efeito</BenefitItem>
                <BenefitItem>🏆 Sabor delicioso. Zero açúcar. Zero desculpas </BenefitItem>
              </BenefitsList>
            </LeftContent>

            <BottleWrapper>
              <BottleImage
                src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/heroBotle.png?alt=media&token=fdc7f200-161b-4313-8db1-945762acf48d"
                alt="Power Gummy Cabelo, Pele & Unha"
              />
            </BottleWrapper>

            <FruitMobile src={fruitsM} />
          </Card>
        </>
      )}
    </Section>
  )
}
