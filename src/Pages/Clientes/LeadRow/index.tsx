import mail from '@/assets/icons/mailP.svg'
import phone from '@/assets/icons/phoneP.svg'
import {
  ContactContainer,
  FunnelCard,
  ImageContainer,
  Images,
  QuantityBadge,
  StatusBadge,
} from './styles'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import pIcon from '@/assets/icons/PIcon.svg'
import bag from '@/assets/icons/bagW.svg'
import { fmtBRL } from '@/utils/helper'

function copyToClipboard(text?: string) {
  if (!text) return
  navigator.clipboard.writeText(text)
}

function resolveCardStatus(item: any) {
  if (item.status !== 'PENDING') return 'COMPRA'
  if (item.paymentMethod) return '3. Pagamento'
  if (item.address?.city) return '2. Endereço'
  return '1. Contato'
}

const productImages = {
  'powergum-kit-3':
    'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/trioGummy.png?alt=media&token=e6923e9e-0c14-4a45-8214-d444442ada88',

  'powergummy-1':
    'https://firebasestorage.googleapis.com/v0/b/powergummy-prod.firebasestorage.app/o/EmbalagemFrente.png?alt=media&token=56f24118-8c1c-4d48-b3d8-db7b69db0a09',
}

type ProductId = keyof typeof productImages
interface CartItem {
  productId: ProductId
  quantity: number
}

export default function LeadRow({ item, index }: { item: any; index: any }) {
  const step = resolveCardStatus(item)

  return [
    <div key={`index-${index}`} className="grid-index">
      {index + 1}
    </div>,

    <div key={`created-${index}`} className="grid-item">
      {new Date(item.createdAt).toLocaleDateString('pt-BR')}
    </div>,

    <Tippy content={item.name} theme="custom">
      <div key={`client-${index}`} className="grid-item max160">
        {item.name}
      </div>
    </Tippy>,

    <div key={`contact-${index}`} className="grid-item">
      <ContactContainer>
        <Tippy content={item.email} theme="custom">
          <img
            src={mail}
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard(item.email)
            }}
          />
        </Tippy>
        <Tippy content={item.phone} theme="custom">
          <img
            src={phone}
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard(item.phone)
            }}
          />
        </Tippy>
      </ContactContainer>
    </div>,

    <div key={`local-${index}`} className="grid-item">
      <Tippy
        content={
          item.address?.city || item.address?.state
            ? `${item.address?.city ?? ''}${item.address?.city && item.address?.state ? ', ' : ''}${item.address?.state ?? ''}`
            : 'Não preenchido'
        }
        theme="custom"
      >
        <div className="grid-item">
          {item.address?.city || item.address?.state
            ? `${item.address?.city ?? ''}${item.address?.city && item.address?.state ? ', ' : ''}${item.address?.state ?? ''}`
            : '-'}
        </div>
      </Tippy>
    </div>,

    <div key={`product-${index}`} className="grid-item products">
      <Images>
        {item.cartItems?.map((cartItem: CartItem, i: number) => {
          const image = productImages[cartItem.productId]
          const isGold = cartItem.productId === 'powergummy-1' // 👈 regra

          return (
            <ImageContainer key={i} $img={image} $isGold={!isGold}>
              <QuantityBadge>{cartItem.quantity}</QuantityBadge>
            </ImageContainer>
          )
        })}
      </Images>
    </div>,

    <div key={`funil-${index}`} className="grid-item">
      <FunnelCard $step={step}>{step}</FunnelCard>
    </div>,

    <Tippy content={item.coupon?.code ?? 'Sem copom'} theme="custom">
      <div key={`cupom-${index}`} className="grid-item golden">
        {item.coupon?.code ?? '-'}
      </div>
    </Tippy>,

    <div key={`value-${index}`} className="grid-item golden">
      {fmtBRL(item.total)}
    </div>,

    <div key={`status-${index}`} className="grid-item">
      <StatusBadge $status={item.status}>
        <img src={item.status === 'PENDING' ? pIcon : bag} />
        {item.status === 'PENDING' ? 'Pendente' : 'Confirmado'}
      </StatusBadge>
    </div>,
  ]
}
