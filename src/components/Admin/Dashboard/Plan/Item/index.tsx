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
  Paragrath,
  Row,
} from './styles'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'
import { Plan } from '../index'

interface ItemProps {
  plan: Plan
  deleteItem: (id: string) => Promise<void>
}

const Item: React.FC<ItemProps> = ({
  plan: { title, included, notIncluded, _id, resume, price, includedServices },
  deleteItem,
}) => {
  const { push } = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)

  function handleClick() {
    deleteItem(_id)
    setConfirmDelete(!confirmDelete)
  }

  return (
    <Container>
      <Header>
        <Title>
          {title} - R$ {price.toLocaleString().replace(',', '.')}
        </Title>
        <Actions>
          <Button onClick={() => push(`/L0gu1N@Dp0B4cK645olg-edit-plan/${_id}`)}>
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
        <Text>Resumo:</Text>
        <Paragrath>{resume}</Paragrath>
      </RelatedServices>

      <RelatedServices>
        <Text>Inclui:</Text>
        {included.length <= 0 && <Message>Nenhuma inclusão no momento</Message>}
        <List>
          {included.map((include, index) => {
            return (
              <ItemList key={index}>
                {' '}
                {include.title} - {include.description}{' '}
              </ItemList>
            )
          })}
        </List>
      </RelatedServices>
      <RelatedServices>
        <Text>Não inclui:</Text>
        {notIncluded.length <= 0 && <Message>Nenhuma exclusão no momento</Message>}
        <List>
          {notIncluded.map((exclude, index) => {
            return (
              <ItemList key={index}>
                {' '}
                {exclude.title} - {exclude.description}{' '}
              </ItemList>
            )
          })}
        </List>
      </RelatedServices>
      <RelatedServices>
        <Text>Serviços relacionados:</Text>
        {includedServices.length <= 0 && <Message>Nenhum serviço relacionado</Message>}
        <List>
          {includedServices.map((service) => {
            return <ItemList key={service._id}> {service.title} </ItemList>
          })}
        </List>
      </RelatedServices>
    </Container>
  )
}

export default Item
