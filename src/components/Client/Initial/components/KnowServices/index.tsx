import Link from 'next/link'
import { Container, Content, Topics } from './styles'
import TopicItem from './TopicItem'

const KnowServices: React.FC = () => {
  return (
    <Container>
      <Content>
        <section>
          <h4>
            <span>2 -</span> Uma coisa de cada vez?
          </h4>
          <h4>
            Conheça nossos <span>serviços segmentados</span>
          </h4>
          <p>
            Conheça nossos serviços segmentados para solicitar uma proposta a um investimento mais
            flexível.
          </p>
          <Link href="/servicos">
            <a>Serviços</a>
          </Link>
        </section>
        <Topics>
          <div>
            <TopicItem text="Tópico" />
            <TopicItem text="Tópico" />
            <TopicItem text="Tópico" />
            <TopicItem text="Tópico" />
            <TopicItem text="Tópico" />
            <TopicItem text="Tópico" />
          </div>
        </Topics>
      </Content>
    </Container>
  )
}

export default KnowServices
