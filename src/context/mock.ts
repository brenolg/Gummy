import trio from '@/assets/imgs/trioGummy.svg'
import one from '@/assets/imgs/oneGummy.svg'
import type { CartItem } from './coreDataContext';

export const mockCartItems: CartItem[] = [
  {
    productId: 'powergum-kit-3',
    image: trio,
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 1,
    unitPrice: 100,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  },
  {
    productId: 'powergum-1',
    image: one,
    title: "ONE® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    quantity: 2,
    unitPrice: 100,
    peso: 1,
    altura: 20,
    largura: 2,
    profundidade: 3,
  }
];
