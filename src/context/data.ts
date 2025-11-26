import trio from '@/assets/imgs/trioGummy.svg'
import one from '@/assets/imgs/oneGummy.svg'
import type { CartItem } from './coreDataContext'

export const CartItemsData: CartItem[] = [
  {
    productId: 'powergummy-1',
    image: one,
    title: 'ONE® - 90 gomas',
    subtitle: 'Frutas vermelhas - 3 frascos',
    quantity: 0,
    unitPrice: 109.9,
    peso: 0.155,
  },
  {
    productId: 'powergum-kit-3',
    image: trio,
    title: 'Trio Power Gummy® - 90 gomas',
    subtitle: 'Frutas vermelhas - 3 frascos',
    quantity: 0,
    unitPrice: 269.0,
    peso: 0.465,
  },
]
