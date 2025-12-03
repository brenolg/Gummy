import CardFeature from './CardFeature.tsx'
import { Bar, Scroller, Content } from './styles'

import image1 from './Image1.png'
import image2 from './Image2.png'
import image3 from './Image3.png'
import image4 from './Image4.png'
import image5 from './Image5.png'
import image6 from './Image6.png'

const itens = [
  {
    img: image1,
    text: 'Fios mais fortes',
    subtext: 'e resistentes',
    alt: 'Modelo com cabelo castanho escuro, liso e longo, demonstrando fios visivelmente mais fortes e resistentes, com brilho intenso, resultado do uso do suplemento Power Gummy.',
  },
  {
    img: image2,
    text: 'Crescimento',
    subtext: 'acelerado e saudável',
    alt: 'Cabelo feminino longo representando o resultado de crescimento acelerado e saudável promovido pelo suplemento Power Gummy.',
  },
  {
    img: image3,
    text: 'menos queda,',
    subtext: 'menos quebra',
    alt: 'Mulher segurando uma escova de cabelo com excesso de fios soltos, ilustrando o problema de queda e quebra de cabelo que o suplemento Power Gummy ajuda a resolver.',
  },
  {
    img: image4,
    text: 'Pele firme, hidratada ',
    subtext: 'e iluminada',
    alt: 'Close-up de modelo sorrindo, demonstrando uma pele firme, hidratada e iluminada, com aspecto radiante e saudável, resultado do uso do suplemento Power Gummy.',
  },
  {
    img: image5,
    text: 'unhas que crescem',
    subtext: 'fortes e uniformes',
    alt: 'Mãos femininas sobre uma flor branca, com unhas longas, bem cuidadas e em formato uniforme, simbolizando unhas que crescem fortes e saudáveis com Power Gummy.',
  },
  {
    img: image6,
    text: 'Aumenta',
    subtext: 'a imunidade',
    alt: 'Mulher sorrindo ao ar livre, com os braços levantados segurando um tecido roxo, irradiando saúde e bem-estar, ilustrando como Power Gummy aumenta a imunidade e vitalidade.',
  },
]

export default function FeatureCarousel() {
  return (
    <Bar>
      <Scroller>
        <Content>
          {itens.map((it) => (
            <CardFeature
              key={it.text}
              img={it.img}
              text={it.text}
              subtext={it.subtext}
              alt={it.alt}
            />
          ))}
        </Content>

        {/* cópia 2: idêntica à primeira */}
        <Content aria-hidden>
          {itens.map((it) => (
            <CardFeature
              key={it.text}
              img={it.img}
              text={it.text}
              subtext={it.subtext}
              alt={it.alt}
            />
          ))}
        </Content>
      </Scroller>
    </Bar>
  )
}
