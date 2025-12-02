import seal from '@/assets/imgs/seal.svg'

import { leftIngredients, rightIngredients } from './factory'
import {
  BannerSubtitle,
  BannerTitle,
  BottleWrapper,
  BottomNote,
  Column,
  Content,
  Ingredient,
  IngredientSubtitle,
  IngredientText,
  IngredientTitle,
  Main,
  Section,
  TopBanner,
} from './styles'
import { useMediaQuery } from 'react-responsive'
import VitaminsAccordion from './VitaminsAccordion'
import { useState } from 'react'

export default function Ingredients() {
  const isMobile = useMediaQuery({
    query: '(max-width: 820px)',
  })

  const [showHover, setShowHover] = useState(false)

  const toggleBottle = () => {
    if (isMobile) {
      setShowHover((prev) => !prev)
    }
  }

  return (
    <Section id="ingredients">
      {!isMobile && (
        <Content>
          {/* Banner superior */}
          <TopBanner>
            <BannerTitle>Ácido Hialurônico</BannerTitle>
            <BannerSubtitle>
              Hidratação de dentro pra fora, ajudando na sensação de pele mais firme e elástica.
            </BannerSubtitle>
          </TopBanner>

          {/* Conteúdo principal */}
          <Main>
            <Column>
              {leftIngredients.map((ing, i) => (
                <Ingredient key={`left-${i}`}>
                  <IngredientTitle>{ing.title}</IngredientTitle>
                  <IngredientSubtitle>{ing.subtitle}</IngredientSubtitle>
                  <IngredientText>{ing.text}</IngredientText>
                </Ingredient>
              ))}
            </Column>

            <BottleWrapper onClick={toggleBottle} $showHover={showHover}>
              <div className="relative">
                <img src={seal} className="seal" />
                <img
                  className="bottle default"
                  src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/EmbalagemFrente.png?alt=media&token=56f24118-8c1c-4d48-b3d8-db7b69db0a09"
                  alt="Power Gummy"
                />
                <img
                  className="bottle hover"
                  src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/EmbalagemVerso.svg?alt=media&token=be370b4e-fe18-41b8-ad99-973878a58f13"
                  alt="Power Gummy hover"
                />
              </div>
              <BottomNote>
                <h2>Sinergia inteligente de nutrientes</h2>
                <p>
                  Ativos nas doses certas que agem em conjunto para uma combinação equilibrada
                  potencializando os resultados.
                </p>
              </BottomNote>
            </BottleWrapper>

            <Column>
              {rightIngredients.map((ing, i) => (
                <Ingredient key={`right-${i}`} $right>
                  <IngredientSubtitle $right>{ing.subtitle}</IngredientSubtitle>
                  <IngredientText $right>{ing.text}</IngredientText>
                </Ingredient>
              ))}
            </Column>
          </Main>
        </Content>
      )}
      {isMobile && (
        <Content>
          <BottleWrapper>
            <div className="relative">
              <img src={seal} className="seal" />
              <img
                className="bottle default"
                src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/EmbalagemFrente.png?alt=media&token=56f24118-8c1c-4d48-b3d8-db7b69db0a09"
                alt="Power Gummy"
              />
              <img
                className="bottle hover"
                src="https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/EmbalagemVerso.svg?alt=media&token=be370b4e-fe18-41b8-ad99-973878a58f13"
                alt="Power Gummy hover"
              />
            </div>
            <BottomNote>
              <h2>Sinergia inteligente de nutrientes</h2>
              <p>
                Ativos nas doses certas que agem em conjunto para uma combinação equilibrada
                potencializando os resultados.
              </p>
            </BottomNote>
          </BottleWrapper>
          <VitaminsAccordion />
        </Content>
      )}
    </Section>
  )
}
