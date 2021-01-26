import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Header,
  Title,
  Actions,
  Button,
  RelatedServices,
  Text,
  List,
  ItemList,
  Message,
} from './styles'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'

interface ItemProps {
  id: string
  title: string
  relatedServices?: string[]
  deleteItem: (id: string) => Promise<void>
}

const Item: React.FC<ItemProps> = ({ title, relatedServices, id, deleteItem }) => {
  const { push } = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)

  function handleClick() {
    deleteItem(id)
    setConfirmDelete(!confirmDelete)
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Actions>
          <Button onClick={() => push(`/admin-edit-category/${id}`)}>
            <FiEdit />
          </Button>
          {confirmDelete ? (
            <Button backgroundColor="red" onClick={() => handleClick()}>
              <FaCheck />
            </Button>
          ) : (
            <Button backgroundColor="red" onClick={() => setConfirmDelete(!confirmDelete)}>
              <FiTrash />
            </Button>
          )}
        </Actions>
      </Header>
      <RelatedServices>
        <Text>Serviços relacionados: </Text>
        {relatedServices.length <= 0 && <Message>Nenhum Serviço relacionado no momento</Message>}
        <List>
          {relatedServices.map((service: any, index) => {
            return <ItemList key={index}> {service.title} </ItemList>
          })}
        </List>
      </RelatedServices>
    </Container>
  )
}

export default Item
