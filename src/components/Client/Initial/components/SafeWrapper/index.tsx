import { Header, Bold, Container, Content, ImageContainer } from './styles'
import { Safe } from '../../../../../assets'

const SafeWrapper: React.FC = () => {
  return (
    <Container id="safe_wrapper">
      <Header>
        <h3>
          Apoiamos o <Bold>Data Protection Officer</Bold> (DPO) na adequação de empresas à Lei geral
          de Proteção de Dados
        </h3>
      </Header>
      <Content>
        <section>
          <p>
            O <span>DPO|BackOffice{'/>'}</span> é uma empresa constituída por profissionais com mais
            de 20 anos de experiência na área de Privacidade de dados, com expertise abrangente ao
            nosso propósito: Apoiar o Data Protection Officer (DPO) em todos os processos da Lei
            Geral de Proteção de Dados (LGPD).
          </p>
          <p>
            Nossa equipe é formada por advogados especialistas em Direito Digital, Consultores
            Sênior em Cibersegurança, Governança, riscos e conformidade. Juntos, trabalhamos para
            esclarecer o que é a LGPD, como ela afeta seu negócio e a importância do DPO para com a
            privacidade de dados.
          </p>
        </section>
        <section>
          <ImageContainer>
            <img src={Safe} alt="safe_image" />
          </ImageContainer>
          <p>
            Em outras palavras, desmistificamos quais são os requisitos específicos para a
            organização chegar ao compliance com a LGPD e como isso{' '}
            <span>pode reforçar o laço de fidelidade</span> com seus clientes, provando como
            experiência prática como este status pode lhe gerar um negócio próspero.
          </p>
        </section>
      </Content>
    </Container>
  )
}

export default SafeWrapper
