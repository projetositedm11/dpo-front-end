import { DefaultService } from '../../../../../assets'
import { Container, Image, Header } from './styles'
import { IService } from '../../../Services'
import { useRouter } from 'next/router'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'

interface Props {
  item: IService
}

const Item: React.FC<Props> = ({ item: { title, slug, image } }) => {
  const { push } = useRouter()

  return (
    <Container>
      <div style={{ textAlign: 'end' }}>
        <IoCheckmarkCircleSharp />
      </div>
      <Header>
        <p>{title}</p>
        <Image url={image?.url || DefaultService} />
      </Header>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => push(`/servico/${slug}`)} id="button">
          Saiba mais
        </button>
      </div>
    </Container>
  )
}

export default Item
