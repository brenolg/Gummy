import { useState } from 'react'
import { AccordionWrapper, Item, ItemHeader, ItemTitle, Arrow, ItemBody } from './styles'
import { leftIngredients, rightIngredients, acid } from '../factory'

type VitaminItem = {
  title?: string
  text: string
  subtitle: string
}

const vitamins: VitaminItem[] = [...acid, ...leftIngredients, ...rightIngredients]

export default function VitaminsAccordion() {
  const [openId, setOpenId] = useState<string | null>(vitamins[0]?.subtitle ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <AccordionWrapper>
      {vitamins.map((vit) => {
        const isOpen = vit.subtitle === openId
        return (
          <Item key={vit.subtitle} $open={isOpen}>
            <ItemHeader onClick={() => toggle(vit.subtitle)}>
              <ItemTitle $open={isOpen}>
                {vit.title && (
                  <span style={{ color: '#BA7E1B', fontWeight: 700 }}>{vit.title}</span>
                )}

                {vit.subtitle && (
                  <span style={{ color: '#502665', marginLeft: 6 }}>{vit.subtitle}</span>
                )}
              </ItemTitle>

              <Arrow $open={isOpen} />
            </ItemHeader>

            <ItemBody $open={isOpen}>
              <p>{vit.text}</p>
            </ItemBody>
          </Item>
        )
      })}
    </AccordionWrapper>
  )
}
