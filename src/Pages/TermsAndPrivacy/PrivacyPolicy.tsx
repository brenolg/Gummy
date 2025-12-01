import { Container, Title, Text, SectionTitle, List, ListItem } from './styles'

export default function PrivacyPolicy() {
  return (
    <Container>
      <Title>Politica de Privacidade </Title>

      <Text>Bem-vinda(o) à Política de Privacidade da Power Gummy (nós)..</Text>

      <Text>
        Este documento foi criado para que você entenda de forma simples e transparente como
        coletamos, utilizamos e armazenamos seus dados pessoais. Aqui também explicamos como você
        pode acessar, atualizar ou decidir, de forma consciente, sobre o tratamento das suas
        informações.
      </Text>

      <Text>
        Nossa Política se aplica a todas as pessoas que interajam com a Power Gummy, seja como
        consumidoras ou apenas visitantes do nosso site.
      </Text>

      <Text>
        Podemos atualizar esta Política periodicamente, seja por mudanças legais, operacionais ou
        para refletir eventuais ajustes na forma como tratamos dados pessoais. Sempre que houver
        alterações relevantes, você será informado.
      </Text>

      <Text>
        Ao navegar em nosso site e/ou utilizar nossas funcionalidades, você concorda com os termos
        desta Política. Por isso, recomendamos que leia com calma. Caso tenha dúvidas, entre em
        contato com nossa equipe pelo e-mail: contato@powergummybr.com.br.
      </Text>

      <Text>
        Se em algum momento você optar por não fornecer dados pessoais que sejam necessários para
        determinadas funcionalidades (essas informações estarão sempre sinalizadas), é possível que
        o acesso a alguns recursos do site seja limitado.
      </Text>
      <Text>
        Além disso, esta Política não se aplica a quaisquer aplicativos, produtos, serviços, sites
        ou redes sociais de terceiros que possam ser acessados a partir da loja. Ao clicar nesses
        links, a responsabilidade passa a ser do serviço de destino.
      </Text>

      <SectionTitle>1. Definições</SectionTitle>

      <Text>Para os fins desta Política de Privacidade:</Text>

      <List>
        <ListItem>
          “Dados Pessoais”: qualquer informação que identifique ou possa identificar uma pessoa
          natural, como nome, CPF, data de nascimento, endereço IP etc.
        </ListItem>

        <ListItem>
          “Dados Pessoais Sensíveis”: informações sobre origem racial ou étnica, convicções
          religiosas, opiniões políticas, saúde, vida sexual, dados genéticos ou biométricos.
        </ListItem>

        <ListItem>
          “Tratamento de Dados Pessoais”: qualquer operação realizada com Dados Pessoais (coleta,
          armazenamento, utilização, compartilhamento, exclusão).
        </ListItem>

        <ListItem>
          “Leis de Proteção de Dados”: a Lei nº 13.709/18 (Lei Geral de Proteção de Dados Pessoais –
          LGPD) e demais normas aplicáveis.
        </ListItem>
      </List>

      <SectionTitle>2. Dados Coletados</SectionTitle>

      <Text>Podemos coletar as seguintes informações:</Text>

      <List>
        <ListItem>Dados cadastrais (nome, e-mail, CPF, telefone, endereço).</ListItem>
        <ListItem>Dados de pagamento e compras.</ListItem>
        <ListItem>Dados de navegação (IP, dispositivo e páginas acessadas).</ListItem>
      </List>

      <SectionTitle>3. Uso das Informações</SectionTitle>

      <List>
        <ListItem>Processar pedidos e pagamentos.</ListItem>
        <ListItem>Enviar comunicações e ofertas.</ListItem>
        <ListItem>Melhorar sua experiência no site.</ListItem>
        <ListItem>Cumprir obrigações legais.</ListItem>
      </List>

      <SectionTitle>4. Compartilhamento</SectionTitle>

      <Text>
        Seus dados podem ser compartilhados apenas com parceiros essenciais como meios de pagamento
        e logística, sempre respeitando esta política.
      </Text>

      <SectionTitle>5. Seus Direitos</SectionTitle>

      <List>
        <ListItem>Confirmar a existência de tratamento.</ListItem>
        <ListItem>Solicitar acesso aos dados.</ListItem>
        <ListItem>Corrigir, excluir ou bloquear dados.</ListItem>
        <ListItem>Revogar consentimento.</ListItem>
      </List>

      <SectionTitle>6. Segurança</SectionTitle>

      <Text>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
        autorizado, perda ou vazamento.
      </Text>

      <SectionTitle>7. Alterações</SectionTitle>

      <Text>
        Esta Política poderá ser atualizada a qualquer momento. Recomendamos que você revise
        periodicamente.
      </Text>
    </Container>
  )
}
