import { useState } from 'react'
import Header from './Header'
import {
  Wrapper,
  Card,
  Title,
  SubTitle,
  InputGroup,
  Input,
  CheckLine,
  SubmitButton,
  InputError,
} from './styles'

import logo from '@/assets/imgs/logo.png'
import check from '@/assets/icons/check.svg'
import glass from '@/assets/icons/magnifyingGlass.svg'
import imgError from '@/assets/icons/error.svg'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // evita reload da página

    if (!orderId.trim()) {
      setError('Digite o ID do pedido.')
      return
    }
  }

  return (
    <Wrapper>
      <Header />

      {/* FORM PARA ACEITAR ENTER */}
      <form
        onSubmit={handleSubmit}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Card>
          <img className="logo" src={logo} />

          <Title>Rastrear Pedido</Title>
          <SubTitle>Acompanhe seu pedido de forma simples e rápida</SubTitle>

          <InputGroup>
            <label>ID do Pedido</label>

            <Input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Digite o código de rastreio"
            />
          </InputGroup>

          <CheckLine>
            <img src={check} />
            <span>Digite o ID completo do pedido</span>
            <InputError $error={!!error}>
              <img src={imgError} className="img-error" /> {error}
            </InputError>
          </CheckLine>

          {/* Botão type="submit" ativa Enter */}
          <SubmitButton
            as="a"
            href="https://totalconecta.totalexpress.com.br/rastreamento?codigo&op=BUSCAR&language=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={glass} />
            Consultar Pedido
            <img src={glass} />
          </SubmitButton>
        </Card>
      </form>
    </Wrapper>
  )
}
