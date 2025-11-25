import trio from '@/assets/imgs/trioGummy.svg'
import one from '@/assets/imgs/oneGummy.svg'
import type { CartItem } from './coreDataContext';

export const CartItemsData: CartItem[] = [
    {
    productId: 'powergummy-1',
    image: one,
    title: "ONE® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 0,
    unitPrice: 109.90,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  },
  {
    productId: 'powergum-kit-3',
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 0,
    unitPrice: 269.00,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  },

];
