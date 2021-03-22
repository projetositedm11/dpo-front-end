import { Container } from './styles'
import { BsCheck } from 'react-icons/bs'

interface Props {
  text: string
}

const TopicItem: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <BsCheck />
      <p>{text}</p>
    </Container>
  )
}

export default TopicItem
