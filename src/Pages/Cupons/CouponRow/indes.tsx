type Coupon = {
  code: string
  percent?: number
  influencer?: string
  active: boolean
  createdAt: {
    _seconds: number
  }
  usageCount?: number
}
import editIcon from '@/assets/icons/edit.svg'
import trash from '@/assets/icons/trash.svg'
import { useState } from 'react'

interface CouponRowProps {
  item: Coupon
  index: number
  onEdit: (item: Coupon) => void
  onDelete: (item: Coupon) => void
}

export default function CouponRow({ item, index, onEdit, onDelete }: CouponRowProps) {
  const [showEdit, setShowEdit] = useState(false)
  return [
    <div key={`index-${index}`} className="grid-index">
      {index + 1}
    </div>,

    <div key={`created-${index}`} className="grid-item">
      {new Date(item.createdAt._seconds * 1000).toLocaleDateString('pt-BR')}
    </div>,

    <div key={`code-${index}`} className="grid-item">
      {showEdit ? 'fake' : item.code || '-'}
    </div>,

    <div key={`percent-${index}`} className="grid-item">
      {showEdit ? 'fake' : item.percent != null ? `${item.percent}%` : '-'}
    </div>,

    <div key={`usageCount-${index}`} className="grid-item">
      {item.usageCount != null ? `${item.usageCount}` : '0'}
    </div>,

    <div key={`influencer-${index}`} className="grid-item">
      {showEdit ? 'fake' : item.influencer || '-'}
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
          <button
            onClick={() => {
              setShowEdit(false)
              onEdit(item)
            }}
          >
            OK
          </button>
        ) : (
          <img
            src={editIcon}
            onClick={() => {
              setShowEdit(true)
            }}
          />
        )}
      </div>
      <button type="button" className="grid-action-btn" onClick={() => onDelete(item)}>
        <img src={trash} />
      </button>
    </div>,
  ]
}
