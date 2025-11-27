import bottleImg from '@/assets/imgs/Embalagem frente (1).svg'
import bottleImgHover from '@/assets/imgs/Embalagem verso (1).svg'
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

export default function Ingredients() {
  const isMobile = useMediaQuery({
    query: '(max-width: 820px)',
  })

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

            <BottleWrapper>
              <img src={seal} className="seal" />
              <img className="bottle default" src={bottleImg} alt="Power Gummy" />
              <img className="bottle hover" src={bottleImgHover} alt="Power Gummy hover" />
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
            <img src={seal} className="seal" />
            <img className="bottle default" src={bottleImg} alt="Power Gummy" />
            <img className="bottle hover" src={bottleImgHover} alt="Power Gummy hover" />
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
