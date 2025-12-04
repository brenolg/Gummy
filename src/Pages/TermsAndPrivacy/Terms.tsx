import Header from '@/components/SimpleHeader'
import { Container, Title, Text, SectionTitle, List, ListItem, PageWrapper } from './styles'
import Footer from '@/components/SimpleFooter'

export default function Terms() {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Title>Termos e Condições</Title>

        <Text>
          A Power Gummy, representada legalmente por Desirée Partichelli Rampf – MEI, inscrita no
          CNPJ nº 60.809.007/0001-80, com sede em Itapema/SC, disponibiliza este website para
          exposição e venda de seus produtos, bem como para veiculação de campanhas publicitárias.
          Estes Termos e Condições reafirmam nosso compromisso com a transparência, qualidade e
          segurança em todas as operações realizadas.
        </Text>

        <SectionTitle>1 – Objeto</SectionTitle>
        <Text>
          Este documento apresenta as regras de uso do site e das compras realizadas na Power Gummy.
          Ao utilizar o site, você declara que leu, compreendeu e concorda integralmente com estes
          Termos e Condições. Caso tenha dúvidas, pode entrar em contato com nossa equipe pelos
          canais informados ao final.
        </Text>

        <SectionTitle>2 – Cadastro e Utilização de Dados</SectionTitle>
        <Text>
          Para comprar produtos ou utilizar determinadas funcionalidades do site, o usuário deverá
          realizar um cadastro com dados como: nome, CPF, endereço, e-mail e telefone.
        </Text>
        <Text>
          O usuário é responsável pelas informações fornecida, respondendo por todas as atividades
          realizadas em sua conta.
        </Text>
        <Text>
          A Power Gummy segue as disposições da Lei Geral de Proteção de Dados (LGPD), sendo a
          Política de Privacidade parte integrante destes Termos.
        </Text>

        <SectionTitle>3 – Comentários e Conteúdos de Usuários</SectionTitle>
        <Text>
          O usuário pode postar comentários e avaliações sobre os produtos, desde que o conteúdo não
          viole direitos de terceiros, não incite crimes nem infrinja a legislação brasileira.
        </Text>
        <Text>
          A Power Gummy se reserva o direito de remover conteúdos que contrariem estes Termos e de
          adotar medidas legais em caso de irregularidades.
        </Text>
        <Text>
          Ao enviar comentários, imagens ou conteúdos, o usuário autoriza a Power Gummy a
          utilizá-los de forma gratuita e não exclusiva para divulgação da marca.
        </Text>

        <SectionTitle>4 – Propriedade Intelectual</SectionTitle>
        <Text>
          Todos os conteúdos do site (textos, imagens, ilustrações, logotipos, embalagens e
          materiais de comunicação) são de propriedade exclusiva da Power Gummy, estando protegidos
          pela legislação de propriedade intelectual e direitos autorais.
        </Text>
        <Text>É vedada a reprodução, modificação ou utilização sem autorização expressa.</Text>

        <SectionTitle>5 – Informações dos Produtos</SectionTitle>
        <Text>
          Os produtos Power Gummy são suplementos alimentares registrados na Anvisa, desenvolvidos
          com base em boas práticas de fabricação.
        </Text>
        <Text>
          ⚠ Importante: suplementos alimentares não têm finalidade de tratar, curar, prevenir ou
          mitigar doenças. A eficácia pode variar conforme fatores individuais (genética,
          alimentação, estilo de vida).
        </Text>
        <Text>
          As informações presentes no site têm caráter informativo e não substituem a orientação
          médica. Em caso de gravidez, amamentação ou condições de saúde específicas, recomenda-se
          consultar um profissional de saúde antes do consumo.
        </Text>

        <SectionTitle>6 – Compra, Pagamento, Entrega, Trocas e Devoluções</SectionTitle>
        <SectionTitle>6.1 – Compra</SectionTitle>

        <List>
          <ListItem>As compras são permitidas apenas para maiores de 18 anos.</ListItem>
          <ListItem>
            Os produtos destinam-se ao consumo próprio, não sendo permitida revenda sem autorização.
          </ListItem>
          <ListItem>
            Os preços podem ser alterados sem aviso prévio, prevalecendo o valor exibido no momento
            da finalização do pedido.
          </ListItem>
          <ListItem>O frete é calculado conforme localidade e quantidade de itens.</ListItem>
        </List>

        <SectionTitle>6.2 – Pagamento</SectionTitle>
        <Text>As compras podem ser pagas via Asaas, com as seguintes opções:</Text>
        <List>
          <ListItem>Cartão de crédito (à vista ou parcelado).</ListItem>
          <ListItem>Pix.</ListItem>
        </List>

        <SectionTitle>6.3 – Entrega</SectionTitle>
        <List>
          <ListItem>
            O prazo de entrega exibido no site é estimado e pode variar conforme os Correios.
          </ListItem>
          <ListItem>
            A Power Gummy terá até 5 (cinco) dias úteis após a confirmação do pagamento para
            despachar o pedido.
          </ListItem>
          <ListItem>
            O cliente é responsável por fornecer endereço correto e completo. Endereços incorretos
            podem gerar atrasos, devoluções e custos adicionais de reenvio.
          </ListItem>
          <ListItem>
            No ato da entrega, o receptor deve conferir a encomenda. Caso haja embalagem violada,
            produto avariado ou divergência, o recebimento deve ser recusado e o SAC comunicado
            imediatamente.
          </ListItem>
        </List>

        <SectionTitle>6.4 – Trocas e Devoluções</SectionTitle>
        <List>
          <ListItem>
            Direito de arrependimento (CDC, art. 49): o cliente pode desistir da compra em até 7
            dias corridos contados do recebimento. O produto deve estar sem uso, lacrado, na
            embalagem original e com nota fiscal e acessórios.
          </ListItem>
          <ListItem>
            Defeito ou vício: constatado defeito de fabricação, o cliente poderá escolher entre
            troca ou reembolso, observados os prazos legais do CDC.
          </ListItem>
          <ListItem>
            Em qualquer solicitação, é obrigatória a comunicação prévia ao SAC para emissão da
            etiqueta de logística reversa e instruções de postagem.
          </ListItem>
        </List>

        <SectionTitle>6.5 – Restituição de Valores</SectionTitle>
        <Text>A restituição seguirá estas regras:</Text>
        <Text>a) Arrependimento (até 7 dias):</Text>
        <List>
          <ListItem>
            Reembolso integral do valor do produto + frete de ida pago pelo cliente.
          </ListItem>
          <ListItem>A logística reversa (frete de volta) é por conta da Power Gummy.</ListItem>
        </List>
        <Text>b) Defeito/Vício de fabricação:</Text>
        <List>
          <ListItem>Em caso de reembolso, inclui-se valor do produto + frete de ida.</ListItem>
          <ListItem>
            A logística reversa (frete de volta) também é por conta da Power Gummy.
          </ListItem>
          <ListItem>Em caso de troca, o reenvio do novo produto é sem custo ao cliente.</ListItem>
        </List>
        <Text>
          c) Erro do cliente (ex.: endereço incorreto, não retirada nos Correios, ausência no
          recebimento):
        </Text>
        <List>
          <ListItem>
            Poderá haver cobrança de novo frete para reenvio ou desconto do frete no valor a ser
            restituído, quando aplicável.
          </ListItem>
        </List>
        <Text>
          Prazos de estorno: variam conforme a forma de pagamento (cartão de crédito sujeito ao
          fluxo da operadora; Pix segue prazos bancários). O processamento é iniciado após o
          recebimento e conferência do produto devolvido.
        </Text>

        <SectionTitle>7 – SAC (Serviço de Atendimento ao Consumidor)</SectionTitle>
        <Text>Você pode entrar em contato com a Power Gummy através dos seguintes canais:</Text>
        <List>
          <ListItem>E-mail: contato@powergummybr.com.br</ListItem>
          <ListItem>WhatsApp: (47) 99206-4104</ListItem>
        </List>
        <Text>Atendimento de segunda a sexta-feira, das 9h às 17h.</Text>

        <SectionTitle>8 – Alterações dos Termos</SectionTitle>
        <Text>
          A Power Gummy poderá alterar estes Termos e Condições a qualquer momento. A versão
          atualizada estará sempre disponível em nosso site, sendo de responsabilidade do usuário
          verificar as atualizações.
        </Text>

        <SectionTitle>9 – Foro</SectionTitle>
        <Text>
          Em caso de disputas legais, fica eleito o foro da comarca de Itapema/SC, com renúncia de
          qualquer outro, por mais privilegiado que seja.
        </Text>
      </Container>
      <Footer />
    </PageWrapper>
  )
}
