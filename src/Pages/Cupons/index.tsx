import { Btn, Subtitle, Title } from './Styles'
import plus from '@/assets/icons/plus.svg'
import { Divider } from '@/components'
import Modal from '@/components/Modal'
import PageLoading from '@/components/PageLoading'
import { useFetch } from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import CreateCouponForm from './CreateCouponForm'

export default function Cupons() {
  const { fetcher } = useFetch()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)

        const res = await fetcher(`/admin/coupons`, 'GET')

        setData(res)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

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

      <Modal open={open} onClose={() => setOpen(false)} maxWidth="754px">
        <CreateCouponForm />
      </Modal>
    </div>
  )
}
