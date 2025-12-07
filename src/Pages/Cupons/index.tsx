import { Btn, Subtitle, Title } from './Styles'
import plus from '@/assets/icons/plus.svg'
import { Divider } from '@/components'
import PageLoading from '@/components/PageLoading'
import { useFetch } from '@/hooks/useFetch'
import { useEffect, useState } from 'react'

export default function Cupons() {
  const { fetcher } = useFetch()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

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
      <Btn>
        <img src={plus} alt="Adicionar" /> Novo Cupom
      </Btn>
      <Divider mb={24} />
      <Subtitle>Cupons cadastrados</Subtitle>
    </div>
  )
}
