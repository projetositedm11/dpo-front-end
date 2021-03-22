import Layout from '../Layout'

import {
  Container,
  Header,
  WrapperPrivacyContent,
  Title,
  Content,
  Phrase,
  List,
  TextBold,
  BackToTheTop,
} from './styles'

const PrivacyPolicy = () => {
  const clickHandle = () => {
    document.location.href = 'mailto:privacy@dpobackoffice.com.br?subject=Política de privacidade'
  }

  return (
    <Layout ifLogo ifCompletedFooter={false}>
      <Container>
        <Header>
          <div>
            <p>Política de privacidade</p>
          </div>
        </Header>
        <WrapperPrivacyContent>
          <div>
            <Title marginBottom="0px" marginTop="0px">
              Informações que coletamos sobre você
            </Title>
            <Content>
              <Phrase color="cinza" marginTop="10px" marginBottom="0px" bold={false}>
                Coletamos suas informações pessoais através de suas interações e experiência para
                com nossos produtos e serviços.
              </Phrase>
              <Phrase color="cinza" marginTop="14px" marginBottom="0px" bold={false}>
                Os tipos de informações variam de acordo com a maneira que você interage conosco.
                Isso pode incluir informações como:
              </Phrase>
              <List>
                <li>Como você usa ou visita nosso site;</li>
                <li>Como você usa nosso produto;</li>
                <li>Melhora no desenvolvimento de nosso produto;</li>
                <li>Personalização de conteúdo e recomendação;</li>
                <li>Envio de materiais e ofertas para você.</li>
              </List>
              <Phrase color="azul" marginTop="14px" marginBottom="0px" bold={true}>
                As informações pessoais que coletamos podem incluir:
              </Phrase>
              <List>
                <li>Detalhes de contato como nome, email, empresa, cargo e telefone</li>
                <li>
                  Cookie de informações de rastreamento, como endereço IP, identificador do
                  dispositivo, dados de localização, tipo de navegador e linguagem, tempos de
                  acesso, URL (Uniform Resource Locator), outros identificadores exclusivos e dados
                  técnicos que podem identificar seu smartphone e navegador.
                </li>
                <li>Relatórios de erros e desempenho.</li>
              </List>
            </Content>
            <Title marginBottom="0px" marginTop="20px">
              Como usamos cookies
            </Title>
            <Content>
              <Phrase color="cinza" marginTop="10px" marginBottom="0px" bold={false}>
                Nossa coleta de cookies é utilizada para nos fornecer estatísticas de seus acessos
                em nossa plataforma. Tendo as informações de como você interage com cada
                funcionalidade, podemos visualizar, personalizar e proporcionar uma melhoria
                contínua de nosso conteúdo, para que você tenha a melhor experiência conosco..
              </Phrase>
            </Content>
            <Title marginBottom="0px" marginTop="20px">
              Acesse, exclua ou atualize suas informações e entre em contato conosco
            </Title>
            <Content>
              <Phrase color="azul" marginTop="10px" marginBottom="0px" bold={true}>
                {' '}
                Seus direitos de privacidade{' '}
              </Phrase>
              <Phrase color="cinza" marginTop="13px" marginBottom="0px" bold={false}>
                Você tem certos direitos de privacidade de acordo com as leis locais aplicáveis,
                incluindo:
              </Phrase>
              <List>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito ao conhecimento:
                  </TextBold>{' '}
                  você pode ter o direito de confirmação da existência de tratamento de dados
                  pessoais que coletamos sobre você e para que finalidade.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito de acesso:{' '}
                  </TextBold>{' '}
                  você pode ter o direito de solicitar informações sobre os dados pessoais que
                  possuímos e obter uma cópia dessas informações pessoais.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito retificação:{' '}
                  </TextBold>{' '}
                  você pode ter o direito de solicitar correção de dados incompletos, imprecisos ou
                  desatualizados.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito à objeção:{' '}
                  </TextBold>{' '}
                  você pode ter o direito de se opor ao processamento de seus dados pessoais, quando
                  aplicável e revogar seu consentimento para processar ou conceder acesso aos seus
                  dados pessoais.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Tomada de decisão automatizada:{' '}
                  </TextBold>{' '}
                  você pode ter o direito de não ter uma decisão tomada sobre você que se baseie
                  apenas no processamento automatizado se essa decisão produzir efeitos legais ou
                  similarmente significativos em relação a você.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito à portabilidade:{' '}
                  </TextBold>{' '}
                  você pode ter o direito de receber suas informações pessoais, em um formato
                  estruturado, comumente usado e legível por máquina e ter essas informações
                  transmitidas para outra organização em determinadas circunstâncias.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito à exclusão:
                  </TextBold>{' '}
                  você pode ter o direito de solicitar a exclusão de suas informações pessoais que
                  coletamos de você.
                </li>
                <li>
                  <TextBold fontWeight="800" underline={false}>
                    {' '}
                    Direito de estar livre de discriminação:
                  </TextBold>{' '}
                  O DPO BackOffice não discriminará você por qualquer informação ou por exercer seus
                  direitos de privacidade
                </li>
              </List>
              <Phrase color="cinza" marginTop="13px" marginBottom="0px" bold={false}>
                Você pode exercer seus Direitos de Privacidade em relação às suas informações
                pessoais enviando um e-mail para{' '}
                <TextBold fontWeight="500" underline={true}>
                  {' '}
                  <a onClick={clickHandle} rel="noopener noreferrer">
                    {' '}
                    privacy@DPOBackoffice.com.br.{' '}
                  </a>
                </TextBold>
                Nossa coleta de cookies é utilizada para nos fornecer estatísticas de seus acessos
                em nossa plataforma. Tendo as informações de como você interage com cada
                funcionalidade, podemos visualizar, personalizar e proporcionar uma melhoria
                contínua de nosso conteúdo, para que você tenha a melhor experiência conosco.
              </Phrase>
            </Content>
            <Title marginBottom="0px" marginTop="20px">
              Como protegemos suas informações
            </Title>
            <Content>
              <Phrase color="cinza" marginTop="13px" marginBottom="0px" bold={false}>
                O{' '}
                <TextBold fontWeight="800" underline={false}>
                  {' '}
                  DPOBackOffice{' '}
                </TextBold>{' '}
                adota medidas de proteção rígidas para proteger os seus dados pessoais contra uso
                incorreto, interferência e perda, bem como acesso não autorizado, modificação ou
                divulgação, conforme exigido por lei. As formas como fazemos isso incluem:
              </Phrase>
              <List>
                <li>
                  Uso de criptografia ao coletar ou transferir informações confidenciais, como
                  detalhes do cartão de crédito;
                </li>
                <li>
                  Definição de nossas proteções de segurança de dados para garantir a segurança,
                  integridade, disponibilidade e resiliência contínuas dos sistemas e serviços de
                  processamento;
                </li>
                <li> Limitação do acesso às informações que coletamos sobre você;</li>
                <li> Destruição de informações pessoais, quando exigido por lei;</li>
                <li>
                  Recomendamos que você preserve sua segurança não compartilhando suas senhas com
                  outras pessoas e que leia nossos materiais voltados à segurança contra o phishing,
                  uma das formas mais utilizadas para roubo de credenciais hoje no mundo.
                </li>
              </List>
            </Content>
            <Title marginBottom="0px" marginTop="20px">
              Alterações na política de privacidade
            </Title>
            <Content>
              <Phrase color="cinza" marginTop="13px" marginBottom="0px" bold={false}>
                Podemos fazer alterações nesta Declaração de Privacidade quando necessário para
                fornecer maior transparência ou em resposta a:
              </Phrase>
              <List>
                <li>
                  Feedback de nossos clientes, reguladores, indústria ou outras partes interessadas;
                </li>
                <li> Mudanças em nossas práticas de privacidade, produtos ou serviços;</li>
                <li>Mudanças nas leis de privacidade aplicáveis ;</li>
              </List>
              <Phrase color="cinza" marginTop="13px" marginBottom="0px" bold={false}>
                Se houver alterações materiais na Declaração de Privacidade, revisaremos a data
                “última atualizada” na parte inferior da declaração de privacidade. Nós encorajamos
                você a revisar periodicamente esta Declaração de Privacidade para saber como o
                DPOBackOffice está protegendo suas informações
              </Phrase>
            </Content>
          </div>
        </WrapperPrivacyContent>
        <BackToTheTop onClick={(e) => scrollTo(0, 0)}>
          <p>Voltar ao Topo</p>
        </BackToTheTop>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
