
import { BottomBar, Column, Content, Description, FooterContainer, Guarantee, LeftText, LinkItem, Logo, RightText, SmallText, SocialIcon, Title } from "./styles";
import { MainButton } from "@/components";
import logo from '@/assets/imgs/logo.svg'
import instaW from '@/assets/icons/instaWhite.svg'
import IKIGAI from '@/assets/icons/IKIGAI.svg'

export default function Footer() {
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

          <SocialIcon>
            <img src={instaW}/>
          </SocialIcon>
        </Column>

        {/* COLUNA 2 – MAPA DO SITE */}
        <Column $gap={16} >
          <Title>MAPA DO SITE</Title>
          <LinkItem>CABELO, PELE & UNHA</LinkItem>
          <LinkItem>FÓRMULA</LinkItem>
          <LinkItem>BENEFÍCIOS</LinkItem>
          <LinkItem>COMO USAR</LinkItem>
          <LinkItem>DEPOIMENTOS</LinkItem>
          <LinkItem>DÚVIDAS FREQUENTES</LinkItem>
          <LinkItem>COMPRAR</LinkItem>
        </Column>

        {/* COLUNA 3 – CONTATO */}
        <Column $gap={16}>
          <Title>CONTATO</Title>
          <LinkItem>@powergummybr</LinkItem>
          <LinkItem>(XX) add</LinkItem>
          <LinkItem>email</LinkItem>
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

          <MainButton >RASTREAR MEU PEDIDO</MainButton>
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
