import bottleImg from '@/assets/imgs/heroBottle.svg'
import fruitsImg from '@/assets/imgs/fruits.svg'
import womanImg from '@/assets/imgs/heroWoman.svg'
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
                  Beleza que <br />
                  <span className="highlight">vem de dentro!</span>
                </Title>

                <BenefitsList>
                  <BenefitItem>💜 Sem açúcar, sem culpa</BenefitItem>
                  <BenefitItem>✨ Saúde e praticidade no dia a dia</BenefitItem>
                  <BenefitItem>🌱 Fórmula com minerais essenciais</BenefitItem>
                  <BenefitItem>🍇 Sabor irresistível de frutas vermelhas</BenefitItem>
                  <BenefitItem>⚡ Ácido Hialurônico + 8 Vitaminas</BenefitItem>
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

          <WomanImage src={womanImg} alt="Mulher sorrindo" />
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
                <BenefitItem>💜 Sem açúcar, sem culpa</BenefitItem>
                <BenefitItem>✨ Saúde e praticidade no dia a dia</BenefitItem>
                <BenefitItem>🌱 Fórmula com minerais essenciais</BenefitItem>
                <BenefitItem>🍇 Sabor irresistível de frutas vermelhas</BenefitItem>
                <BenefitItem>⚡ Ácido Hialurônico + 8 Vitaminas</BenefitItem>
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
