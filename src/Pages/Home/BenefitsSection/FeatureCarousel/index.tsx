import CardFeature from "./CardFeature.tsx";
import { Bar, Scroller, Content } from "./styles";

import image1 from "./Image1.svg"
import image2 from "./Image2.svg"
import image3 from "./Image3.svg"
import image4 from "./Image4.svg"
import image5 from "./Image5.svg"
import image6 from "./Image6.svg"

import icon1 from './Icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import icon5 from './icon5.svg'
import icon6 from './icon6.svg'

const itens = [
  {img :image1, icon: icon1, text: "Fios mais fortes", subtext: 'e resistentes' },
  {img :image2 , icon: icon2, text: "Crescimento", subtext: 'acelerado e saudável' },
  {img :image3 , icon: icon3, text: "menos queda,", subtext: 'menos quebra' },
  {img :image4 , icon: icon4, text: "Pele firme, hidratada ", subtext: 'e iluminada' },
  {img :image5 , icon: icon5, text: "unhas que crescem", subtext: 'fortes e uniformes' },
  {img :image6 , icon: icon6, text: "Aumenta", subtext: 'a imunidade' },
];

export default function FeatureCarousel() {

  return (
    <Bar>
      <Scroller>
        <Content>
          {itens.map((it) => (
            <CardFeature
              key={it.text}
              img={it.img}
              icon={it.icon}
              text={it.text}
              subtext={it.subtext}
            />
            ))}
        </Content>

        {/* cópia 2: idêntica à primeira */}
        <Content aria-hidden>
          {itens.map((it) => (
            <CardFeature
              key={it.text}
              img={it.img}
              icon={it.icon}
              text={it.text}
              subtext={it.subtext}
            />
          ))}
        </Content>
      </Scroller>
    </Bar>
  );
}
