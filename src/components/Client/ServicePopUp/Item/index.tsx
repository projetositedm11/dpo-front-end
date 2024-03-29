import { DefaultService } from '../../../../assets'
import { Container, Image, Header } from './styles'
import { MouseEvent, useEffect, useState } from 'react'
import { ImRadioUnchecked } from 'react-icons/im'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { IService } from '../../Services/index'
import { useRouter } from 'next/router'

interface Props {
  item: IService
  addCartItem: (id: string) => void
  removeCartItem: (id: string) => void
  checked: boolean
}

const Item: React.FC<Props> = ({
  item: { _id, title, image, slug },
  addCartItem,
  removeCartItem,
  checked,
}) => {
  const { push } = useRouter()

  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (checked) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [checked])

  function changeClick(e: MouseEvent<HTMLDivElement>, id: string): void {
    const target = e.target as HTMLDivElement

    if (target.id !== 'button') {
      if (show) {
        removeCartItem(id)
        setShow(false)
      } else {
        addCartItem(id)
        setShow(true)
      }
    }
  }

  return (
    <Container onClick={(e) => changeClick(e, _id)}>
      <div style={{ textAlign: 'end' }}>
        {show ? <IoCheckmarkCircleSharp /> : <ImRadioUnchecked />}
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
