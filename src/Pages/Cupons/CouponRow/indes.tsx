// CouponRow.tsx
import editIcon from '@/assets/icons/edit.svg'
import trash from '@/assets/icons/trash.svg'
import { useState } from 'react'
import { FakeInput } from '@/components/form/FakeInput'
import type { Coupon } from '..' // ajusta o caminho se o index estiver em outra pasta

interface CouponRowProps {
  item: Coupon
  index: number
  onEdit: (item: Coupon) => void
  onDelete: (item: Coupon) => void
}

export default function CouponRow({ item, index, onEdit, onDelete }: CouponRowProps) {
  const [showEdit, setShowEdit] = useState(false)

  const [code, setCode] = useState(item.code)
  const [percent, setPercent] = useState(item.percent?.toString() ?? '')
  const [influencer, setInfluencer] = useState(item.influencer ?? '')

  const handleConfirm = () => {
    const edited: Coupon = {
      ...item, // mantém id, active, createdAt, usageCount
      code,
      percent: percent ? Number(percent) : item.percent,
      influencer: influencer || undefined,
    }
    console.log('EDITED', edited)

    onEdit(edited)
    setShowEdit(false)
  }

  return [
    <div key={`index-${index}`} className="grid-index">
      {index + 1}
    </div>,

    <div key={`created-${index}`} className="grid-item">
      {new Date(item.createdAt._seconds * 1000).toLocaleDateString('pt-BR')}
    </div>,

    <div key={`code-${index}`} className="grid-item">
      {showEdit ? <FakeInput value={code} onChange={setCode} /> : item.code || '-'}
    </div>,

    <div key={`percent-${index}`} className="grid-item">
      {showEdit ? (
        <FakeInput type="number" value={percent} onChange={setPercent} />
      ) : item.percent != null ? (
        `${item.percent}%`
      ) : (
        '-'
      )}
    </div>,

    <div key={`usageCount-${index}`} className="grid-item">
      {item.usageCount != null ? `${item.usageCount}` : '0'}
    </div>,

    <div key={`influencer-${index}`} className="grid-item">
      {showEdit ? (
        <FakeInput value={influencer} onChange={setInfluencer} />
      ) : (
        item.influencer || '-'
      )}
    </div>,

    <div key={`status-${index}`} className="grid-item">
      <span
        style={{
          padding: '5px 10px',
          borderRadius: '8px',
          width: '92px',
          fontSize: '12px',
          fontWeight: 600,
          color: item.active ? '#2ecc71' : '#e74c3c',
          background: item.active ? '#e9f9f0' : '#fdeaea',
        }}
      >
        {item.active ? 'Ativo' : 'Inativo'}
      </span>
    </div>,

    <div key={`actions-${index}`} className="grid-action-area">
      <div className="grid-action-btn">
        {showEdit ? (
          <button type="button" onClick={handleConfirm}>
            OK
          </button>
        ) : (
          <img src={editIcon} onClick={() => setShowEdit(true)} style={{ cursor: 'pointer' }} />
        )}
      </div>
      <button type="button" className="grid-action-btn" onClick={() => onDelete(item)}>
        <img src={trash} />
      </button>
    </div>,
  ]
}
