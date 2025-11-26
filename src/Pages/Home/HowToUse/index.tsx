import { Wrapper, LeftBox, Title, List, VideoBox, BearImage } from './styles'

import bear from '@/assets/imgs/bearHTU.svg'
import { MainButton } from '@/components'
import { useNavigate } from 'react-router-dom'

export default function HowToUse() {
  const navigate = useNavigate()

  function goToCheckout() {
    navigate('/checkout')
  }

  return (
    <Wrapper id="use">
      <LeftBox>
        <Title>Seu ritual diário</Title>

        <List>
          <li>Para levar em qualquer lugar</li>
          <li>Prático e gostoso</li>
          <li>Auto cuidado com sabor</li>
          <li>Ideal para o life style moderno</li>
        </List>

        <MainButton maxW={350} onClick={goToCheckout}>
          Quero minha Power Gummy
        </MainButton>
        <BearImage src={bear} alt="gummy" />
      </LeftBox>

      <VideoBox>
        <video src="/videos/tutorial.mp4" controls />
      </VideoBox>
    </Wrapper>
  )
}
