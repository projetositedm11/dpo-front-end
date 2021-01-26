import { Container, Header, Bold } from './styles'
import Link from 'next/link'
const Questions: React.FC = () => {
  return (
    <Container>
      <Header>
        <h3>
          Duvidas?<Bold>{'/>'}</Bold>
        </h3>
      </Header>
      <section>
        <Link href="/faq">
          <a>Conheça nossa FAQ e saiba tudo!</a>
        </Link>
        <Link href="/contato">
          <a>Fale Conosco</a>
        </Link>
      </section>
    </Container>
  )
}

export default Questions
