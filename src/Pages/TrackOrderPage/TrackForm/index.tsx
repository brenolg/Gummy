import { useState } from 'react'
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
  Form,
} from './styles'

import logo from '@/assets/imgs/logo.png'
import check from '@/assets/icons/check.svg'
import arow from '@/assets/icons/arowLeft.svg'
import glass from '@/assets/icons/magnifyingGlass.svg'
import imgError from '@/assets/icons/error.svg'

type TrackFormProps = {
  setTrackStatus: React.Dispatch<React.SetStateAction<number>>
}

export default function TrackForm({ setTrackStatus }: TrackFormProps) {
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // evita reload da página
    setError('')

    if (!orderId.trim()) {
      setError('Digite o ID do pedido.')
      return
    }
    setTrackStatus(1)
  }

  return (
    <>
      <Wrapper>
        {/* FORM PARA ACEITAR ENTER */}
        <Card>
          <Form onSubmit={handleSubmit}>
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
            <SubmitButton>
              <img src={glass} />
              Consultar Pedido
              <img src={arow} />
            </SubmitButton>
          </Form>
        </Card>
      </Wrapper>
    </>
  )
}
