import bottleImg from '@/assets/imgs/heroBottle.svg'
import fruitsImg from '@/assets/imgs/fruits.svg'
import fruitsM from '@/assets/imgs/fruitsM.svg'

import {
  Section,
  Card,
  LeftContent,
  Title,
  BenefitsList,
  BenefitItem,
  BottleWrapper,
  BottleImage,
  FruitsImage,
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
    query: '(max-width: 1150px)',
  })

  return (
    <Section>
      {!isMobile && (
        <>
          <Card>
            <div className="card-conteiner">
              <LeftContent>
                <Title>
                  O FUTURO DAS <br />
                  <span className="highlight">VITAMINAS JÁ COMEÇOU!</span>
                </Title>

                <BenefitsList>
                  <BenefitItem>💜 Novo padrão de suplementação em gomas ✨</BenefitItem>
                  <BenefitItem>⚡ Ácido Hialurônico + Biotina + 7 Vitaminas</BenefitItem>
                  <BenefitItem>💎 Nutrição avançada com ativos premium</BenefitItem>
                  <BenefitItem>🌱 Fórmula limpa, inteligente com resultado real</BenefitItem>
                  <BenefitItem>✨ Simples na rotina. Poderosa no efeito</BenefitItem>
                  <BenefitItem>🏆 Sabor delicioso. Zero açúcar. Zero desculpas </BenefitItem>
                </BenefitsList>
              </LeftContent>

              <BottleWrapper>
                <BottleImage src={bottleImg} alt="Power Gummy Cabelo, Pele & Unha" />
              </BottleWrapper>

              <FruitsImage $img={fruitsImg} />
            </div>
            <div className="line" />
          </Card>

          <MainButton type="button" onClick={goToCheckout} maxW={456}>
            Comprar agora
          </MainButton>

          <WomanImage
            src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/heroWoman.svg?alt=media&token=9d79efc0-9b34-4442-9074-39b93d2e414b"
            alt="Mulher sorrindo"
          />
        </>
      )}
      {isMobile && (
        <>
          <Card>
            <LeftContent>
              <Title>
                Beleza que <br />
                <span className="highlight">vem de dentro!</span>
              </Title>

              <BenefitsList>
                <BenefitItem>💜 Novo padrão de suplementação em gomas ✨</BenefitItem>
                <BenefitItem>⚡ Ácido Hialurônico + Biotina + 7 Vitaminas</BenefitItem>
                <BenefitItem>💎 Nutrição avançada com ativos premium</BenefitItem>
                <BenefitItem>🌱 Fórmula limpa, inteligente com resultado real</BenefitItem>
                <BenefitItem>✨ Simples na rotina. Poderosa no efeito</BenefitItem>
                <BenefitItem>🏆 Sabor delicioso. Zero açúcar. Zero desculpas </BenefitItem>
              </BenefitsList>
            </LeftContent>

            <BottleWrapper>
              <BottleImage src={bottleImg} alt="Power Gummy Cabelo, Pele & Unha" />
            </BottleWrapper>

            <FruitMobile src={fruitsM} />
          </Card>
        </>
      )}
    </Section>
  )
}
