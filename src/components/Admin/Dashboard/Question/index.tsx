import Layout from '../index'
import Header from '../../components/Header'
import { Container, QuestionItem } from './styles'

import Link from 'next/link'

const Question: React.FC = () => {
  return (
    <Layout>
      <Header title="Pergunta" showAdd={false} />
      <Container>
        <QuestionItem>
          <p>Proposta</p>
          <Link href="/L0gu1N@Dp0B4cK645olg-proposal-question">
            <a>Acessar &rarr;</a>
          </Link>
        </QuestionItem>
      </Container>
    </Layout>
  )
}

export default Question
