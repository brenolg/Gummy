import { useCoreData, type CartItem } from '@/context/coreDataContext'
import { MainButton } from '@/components'
import { CartItemsData } from '@/context/data'
import { Card, Grid, Price, Section } from './styles'
import { fmtBRL } from '@/utils/helper'
import seal from '@/assets/imgs/freeShipingR.svg'

// helper: upsert
function upsertCart(
  items: CartItem[],
  product: Omit<CartItem, 'quantity'>,
  deltaQty: number
): CartItem[] {
  const idx = items.findIndex((it) => it.productId === product.productId)
  if (idx === -1) return [...items, { ...product, quantity: Math.max(0, deltaQty) }]
  const next = [...items]
  const q = Math.max(0, next[idx].quantity + deltaQty)
  if (q === 0) next.splice(idx, 1)
  else next[idx] = { ...next[idx], quantity: q }
  return next
}

export default function BuyContainer() {
  const { setCart } = useCoreData()

  const addToCart = (productId: CartItem['productId'], qty = 1) => {
    const prod = CartItemsData.find((p) => p.productId === productId)
    if (!prod) return

    const { ...rest } = prod // remove quantity fixa do catálogo
    setCart((prev) => upsertCart(prev || [], rest, qty))
  }

  return (
    <Section id="buy">
      <h2 className="section-title">Condições especiais de lançamento</h2>
      <h3 className="section-subtitle">
        Escolha a opção Ideal para sua Rotina de tratamento de Beleza e Economize!
      </h3>

      <Grid>
        {/* CARD 1 */}
        <Card>
          <h3 className="cardTitle">1 Power Gummy</h3>
          <h2 className="cardSubtitle">Frutas vermelhas</h2>
          <p className="description mb51">{'30 gominhas - 1 mês\nde tratamento de Beleza'}</p>

          <img
            src={CartItemsData[0].image}
            alt={CartItemsData[0].title}
            loading="eager"
            className="productImage mb51"
          />

          <Price>
            <p className="priceNumber">{fmtBRL(Number(CartItemsData[0].unitPrice.toFixed(2)))}</p>
            <p className="payMethod">ou 3 x de R$ 36,63 (sem juros)</p>
          </Price>

          <MainButton onClick={() => addToCart(CartItemsData[0].productId)}>Comprar</MainButton>
        </Card>

        {/* CARD 2 */}
        <Card>
          <img src={seal} className="seal" />
          <h3 className="cardTitle">Kit 3 Power Gummy</h3>
          <h2 className="cardSubtitle">Frutas vermelhas</h2>

          <p className="description mb24">
            {'90 gominhas - 3 meses\nde tratamento de Beleza\n'}
            <span className="eBookPlus">+ e-book Power Gummy</span>
          </p>

          <img
            src={CartItemsData[1].image}
            alt={CartItemsData[1].title}
            className="productImage mb24"
            loading="eager"
          />

          <Price>
            <p className="dashed">R$ 327,00</p>
            <p className="priceNumber">{fmtBRL(Number(CartItemsData[1].unitPrice.toFixed(2)))}</p>
            <p className="payMethod">ou 3 x de R$ 89,67 (sem juros)</p>
          </Price>

          <MainButton onClick={() => addToCart(CartItemsData[1].productId)}>Comprar</MainButton>
        </Card>
      </Grid>
    </Section>
  )
}
