import { Item, Bar, Scroller, Content } from "./styles";
import icon from '@/assets/icons/xGolden.svg'
import discountPurple from "@/assets/icons/discountPurple.svg"
import creditCardPurple from "@/assets/icons/creditCardPurple.svg"
import sugarFree from "@/assets/icons/sugarFree.svg"
import glutenFree from "@/assets/icons/glutenFree.svg"
import dairyFree from "@/assets/icons/dairyFree.svg"
import calories from "@/assets/icons/calories.svg"


const itens = [
  { icon: discountPurple , lightText: "", strongText: '5% de desconto no PIX' },
  { icon: creditCardPurple , lightText: "em até ", strongText: ' 3x sem juros' },
  { icon: sugarFree , lightText: "", strongText: 'SEM AÇÚCAR'},
  { icon: glutenFree , lightText: "", strongText: 'SEM GLÚTEN'},
  { icon: dairyFree , lightText: "", strongText: 'SEM LACTOSE'},
  { icon: calories , lightText: "", strongText: 'BAIXA EM CALORIAS'},
  { icon: icon , lightText: "FORMATO DE ", strongText: 'GUMY'},
];

export default function InfoCarousel() {


  return (
    <Bar>
      <Scroller>
        <Content>
          {itens.map((it, i) => (
            <Item key={`a-${i}`}>
              <img src={it.icon} alt="" />
              <p className="text">
                <span className="light">{it.lightText}</span>
                {'  '}
                <span >{it.strongText}</span>
              </p>
            </Item>
          ))}
        </Content>

        {/* cópia 2: idêntica à primeira */}
        <Content aria-hidden>
          {itens.map((it, i) => (
            <Item key={`b-${i}`}>
              <img src={it.icon} alt="" />
              <p className="text">
                <span className="light">{it.lightText}</span>
                {'  '}
                <span>{it.strongText}</span>
              </p>
            </Item>
          ))}
        </Content>
      </Scroller>
    </Bar>
  );
}
