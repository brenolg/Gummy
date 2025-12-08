import { Btn, Subtitle, Title } from './Styles'
import plus from '@/assets/icons/plus.svg'
import { Divider } from '@/components'
import Modal from '@/components/Modal'
import PageLoading from '@/components/PageLoading'
import { useFetch } from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import CreateCouponForm from './CreateCouponForm'
import Table from '@/components/Table'
import CouponRow from './CouponRow/indes'

type Coupon = {
  id: string
  code: string
  percent?: number
  active: boolean
  influencer?: string
  createdAt: {
    _seconds: number
  }
}

export default function Cupons() {
  const { fetcher } = useFetch()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Coupon[]>([])
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const res = await fetcher('/admin/coupons', 'GET')
        setData(res)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const pageSize = 10
  const pageData = data.slice((page - 1) * pageSize, page * pageSize)

  const header = [
    '#',
    'QUANDO FOI CRIADO',
    'Código do cupom',
    'desconto',
    'Usados',
    'contexto',
    'status',
    'ação',
  ]

  function tableRows(coupons: Coupon[]) {
    if (!coupons) return []

    return coupons.map((item, i) => (
      <CouponRow
        key={item.code}
        item={item}
        index={i}
        onEdit={(item) => console.log('Editar', item)}
        onDelete={(item) => console.log('Deletar', item)}
      />
    ))
  }
  return loading ? (
    <PageLoading />
  ) : (
    <div>
      <Title>Gestão de Cupons</Title>

      <Btn onClick={() => setOpen(true)}>
        <img src={plus} alt="Adicionar" /> Novo Cupom
      </Btn>

      <Divider mb={24} />
      <Subtitle>Cupons cadastrados</Subtitle>

      <Table
        header={header}
        page={page}
        columnsWidths={[40, 220, 200, 160, 140, 220, 140, 110]}
        setPage={setPage}
        filterData={data}
        pageData={tableRows(pageData)}
      />

      <Modal open={open} onClose={() => setOpen(false)} maxWidth="754px">
        <CreateCouponForm />
      </Modal>
    </div>
  )
}
