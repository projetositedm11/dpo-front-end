import { Container } from './styles'
import Link from 'next/link'

interface Props {
  slug: string
  title: string
}

const Service: React.FC<Props> = ({ slug, title }) => {
  return (
    <Container>
      <p>{title}</p>
      <Link href={`/servico/${slug}`}>
        <a>Saiba Mais</a>
      </Link>
    </Container>
  )
}

export default Service
