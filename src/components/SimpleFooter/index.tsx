import {
  BottomBar,
  Column,
  Content,
  Description,
  FooterContainer,
  Guarantee,
  LeftText,
  LinkItem,
  Logo,
  RightText,
  SmallText,
  SocialIcon,
  Title,
} from './styles'
import { MainButton } from '@/components'
import logo from '@/assets/imgs/logo.png'
import instaW from '@/assets/icons/instaWhite.svg'
import IKIGAI from '@/assets/icons/IKIGAI.svg'
import { useNavigate } from 'react-router-dom'
import insta from '@/assets/icons/instaG.svg'
import email from '@/assets/icons/mailG.svg'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  const navigate = useNavigate()

  function goToTrack() {
    navigate('/track')
  }

  function goToTerms() {
    navigate('/terms')
  }

  function goToPrivacy() {
    navigate('/privacy')
  }

  const isMobile = useMediaQuery({
    query: '(max-width: 1050px)',
  })

  return (
    <FooterContainer>
      <Content>
        {/* COLUNA 1 – LOGO + TEXTO */}
        <Column className="center-mobile">
          <Logo src={logo} alt="Logo" loading="eager" />

          <Description>
            Somos uma revolução em gomas de beleza, transformando ciência em experiência, rotina em
            prazer e constância em resultados.
          </Description>
          <a href="https://instagram.com/powergummybr/" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <img src={instaW} />
            </SocialIcon>
          </a>
        </Column>

        {!isMobile && (
          <>
            {/* COLUNA 3 – CONTATO */}

            <Column $gap={16}>
              <Title>CONTATO</Title>
              <a href="https://wa.me/5547992064104" target="_blank" rel="noopener noreferrer">
                <LinkItem>
                  <img src={insta} />
                  (47) 99206-4104
                </LinkItem>
              </a>

              <a
                href="mailto:contato@powergummybr.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItem>
                  <img src={email} />
                  contato@powergummybr.com.br
                </LinkItem>
              </a>
              <div>
                <SmallText>Atendimento</SmallText>
                <SmallText>Seg à Sex (08:00 às 17:00)</SmallText>
              </div>
              <button onClick={goToTerms}>
                <SmallText>Termos</SmallText>
              </button>
              <button onClick={goToPrivacy}>
                <SmallText>Política de Privacidade</SmallText>
              </button>
            </Column>
          </>
        )}

        {isMobile && (
          <div className="colum-container">
            {/* COLUNA 3 – CONTATO */}
            <Column $gap={16}>
              <Title>CONTATO</Title>
              <a href="https://wa.me/5547992064104" target="_blank" rel="noopener noreferrer">
                <LinkItem>
                  <img src={insta} />
                  (47) 99206-4104
                </LinkItem>
              </a>

              <a
                href="mailto:contato@powergummybr.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItem>
                  <img src={email} />
                  contato@powergummybr.com.br
                </LinkItem>
              </a>
              <div className="work-hour">
                <SmallText>Atendimento Seg à Sex (08:00 às 17:00)</SmallText>
              </div>
              <button onClick={goToTerms}>
                <SmallText>Termos</SmallText>
              </button>
              <button onClick={goToPrivacy}>
                <SmallText>Política de Privacidade</SmallText>
              </button>
            </Column>
          </div>
        )}

        {/* COLUNA 4 – INFORMAÇÕES */}
        <Column $gap={16} $minW={273.8} className="center-mobile">
          <Title>INFORMAÇÕES</Title>

          <MainButton onClick={goToTrack}>RASTREAR MEU PEDIDO</MainButton>
          <a
            href="https://wa.me/5547992064104"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            <MainButton>FALAR COM SUPORTE</MainButton>
          </a>

          <Guarantee>Garantia Power Gummy</Guarantee>
        </Column>
      </Content>

      {/* BARRA FINAL */}
      <BottomBar>
        <LeftText>Power Gummy | © Todos os direitos reservados</LeftText>

        <RightText href="https://ikigaidesign.com.br/" target="_blank" rel="noopener noreferrer">
          Desenvolvido por <img src={IKIGAI} />
        </RightText>
      </BottomBar>
    </FooterContainer>
  )
}
