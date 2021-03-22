import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { IService } from '../index'
import { Container, Message, Row, Title, Header } from './styles'
import Item from '../Item'

interface CategoryData {
  _id: string
  title: string
  services: IService[]
}

interface Props {
  category: CategoryData
  addCartItem: (id: string) => void
  removeCartItem: (id: string) => void
  showMore: (slug: string) => void
  handleCheck: (id: string) => boolean
}

const DropDown: React.FC<Props> = ({
  category,
  showMore,
  addCartItem,
  removeCartItem,
  handleCheck,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Container open={open}>
      <Header onClick={() => setOpen(!open)}>
        <Title>{category.title}</Title>
        <section>{open ? <MdClose /> : <IoIosArrowDown />}</section>
      </Header>
      <article>
        {category.services.length <= 0 && <Message>Nenhum serviço nesta categoria</Message>}
        <Row>
          {category.services &&
            category.services.map((service) => (
              <Item
                showMore={showMore}
                key={service._id}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
                item={service}
                checked={handleCheck(service._id)}
              />
            ))}
        </Row>
      </article>
    </Container>
  )
}

export default DropDown
