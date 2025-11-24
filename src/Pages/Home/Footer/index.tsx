
import { BottomBar, Column, Content, Description, FooterContainer, Guarantee, LeftText, LinkItem, Logo, RightText, SmallText, SocialIcon, Title } from "./styles";
import { MainButton } from "@/components";
import logo from '@/assets/imgs/logo.svg'
import instaW from '@/assets/icons/instaWhite.svg'
import IKIGAI from '@/assets/icons/IKIGAI.svg'
import defaultScrollProps from "@/utils/defaultScrollProps";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import insta from "@/assets/icons/instaG.svg"
import email from "@/assets/icons/mailG.svg"

export default function Footer() {
  const navigate = useNavigate();

  function goToCheckout() {
    navigate("/checkout");
  }

  function goToTrack() {
    navigate("/track");
  }

  return (
    <FooterContainer>
      <Content>

        {/* COLUNA 1 – LOGO + TEXTO */}
        <Column>
          <Logo src={ logo } alt="Logo" />

          <Description>
            Somos uma revolução em gomas de beleza, transformando ciência
            em experiência, rotina em prazer e constância em resultados.
          </Description>
          <a
            href="https://instagram.com/powergummybr/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <SocialIcon>
            <img src={instaW}/>
          </SocialIcon>
          </a>
        </Column>

        {/* COLUNA 2 – MAPA DO SITE */}
        <Column $gap={16} >
          <Title>MAPA DO SITE</Title>
          <Link to="science" {...defaultScrollProps}>
            <LinkItem>CABELO, PELE & UNHA</LinkItem>
          </Link>
          <Link to="ingredients" {...defaultScrollProps}>
            <LinkItem>FÓRMULA</LinkItem>
          </Link>
          <Link to="beneficios" {...defaultScrollProps}>
            <LinkItem>BENEFÍCIOS</LinkItem>
          </Link>
          <Link to="use" {...defaultScrollProps}>
            <LinkItem>COMO USAR</LinkItem>
          </Link>
          <Link to="depoimentos" {...defaultScrollProps}>
            <LinkItem>DEPOIMENTOS</LinkItem>
          </Link>
          <Link to="faq" {...defaultScrollProps}>
            <LinkItem>DÚVIDAS FREQUENTES</LinkItem>
          </Link>
          <button type='button' onClick={goToCheckout} className="buyButton">
            <LinkItem>COMPRAR</LinkItem>
          </button>
        </Column>

        {/* COLUNA 3 – CONTATO */}
        <Column $gap={16}>
          <Title>CONTATO</Title>
            <a   href="https://wa.me/5547992064104" target="_blank" rel="noopener noreferrer">
              <LinkItem>
                <img src={insta}/>
                (47) 99206-4104
              </LinkItem>
            </a>

            <a href="mailto:contato@powergummybr.com.br" target="_blank" rel="noopener noreferrer">
              <LinkItem>
                <img src={email}/>
                contato@powergummybr.com.br
              </LinkItem>
            </a>
          <div>
            <SmallText>Atendimento</SmallText>
            <SmallText>Seg à Sex (08:00 às 17:00)</SmallText>
          </div>
          <SmallText>Termos</SmallText>
          <SmallText>Política de Privacidade</SmallText>
        </Column>

        {/* COLUNA 4 – INFORMAÇÕES */}
        <Column $gap={16} $minW={273.8}>
          <Title>INFORMAÇÕES</Title>

          <MainButton onClick={goToTrack}>RASTREAR MEU PEDIDO</MainButton>
          <MainButton>FALAR COM SUPORTE</MainButton>

          <Guarantee>Garantia Power Gummy</Guarantee>
        </Column>
      </Content>

      {/* BARRA FINAL */}
      <BottomBar>
        <LeftText>
          Power Gummy | © Todos os direitos reservados | CNPJ add
        </LeftText>

        <RightText>
          Desenvolvido por <img src={IKIGAI }/>
        </RightText>
      </BottomBar>
    </FooterContainer>
  );
}
