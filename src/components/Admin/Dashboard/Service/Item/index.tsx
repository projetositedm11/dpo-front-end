import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  Container,
  Header,
  Actions,
  Button,
  RelatedServices,
  Title,
  Text,
  Message,
  ItemList,
  List,
} from './styles'

import { FaCheck } from 'react-icons/fa'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Data from './components'
import RenderDescription from './components/renderDescription'
interface ItemProps {
  service: any
  deleteService: any
}

const Item: React.FC<ItemProps> = ({ service, deleteService }) => {
  const { push } = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)

  function handleClick() {
    deleteService(service._id)
    setConfirmDelete(!confirmDelete)
  }
  return (
    <Container>
      <Header>
        <Title>
          {service.title} - {service.category.title}{' '}
        </Title>
        <Actions>
          <Button onClick={() => push(`/L0gu1N@Dp0B4cK645olg-edit-service/${service._id}`)}>
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
        <Text> Imagem: </Text>
        {service.image?.url ? (
          <img src={service.image.url} width="120" height="110" />
        ) : (
          <p> Não adicionado</p>
        )}
        <Data text="Resumo" label={service.resume} />
        <RenderDescription description={service.description} />
        <Data text="Horas de execução" label={service.runningHours} />
        <Data text="Valor hora" label={service.hourValue} />
        <Data text="Valor minuto" label={service.minuteValue} />
        <Data
          text="Horas fixas"
          label={
            service.fixedHours !== null && service.fixedHours !== undefined
              ? `${service.fixedHours}`
              : 'Não especificado'
          }
        />
        <Data
          text="Reteste / Margem de negociação"
          label={
            service.retest !== null && service.retest !== undefined
              ? `${service.retest}%`
              : 'Não especificado'
          }
        />

        <Text>Pré-requisitos: </Text>
        {service.prerequisites.length <= 0 && <Message>Nenhum pré-requisito no momento</Message>}
        <List>
          {service.prerequisites.map((service: any, index) => {
            return <ItemList key={index}> {service} </ItemList>
          })}
        </List>
        <Text>Entregáveis: </Text>
        {service.deliverable.length <= 0 && <Message>Nenhum entregável no momento</Message>}
        <List>
          {service.deliverable.map((service: any, index) => {
            return <ItemList key={index}> {service} </ItemList>
          })}
        </List>

        <Text>Serviços relacionados: </Text>
        {service.prerequisitesService.length <= 0 && (
          <Message>Nenhum Serviço relacionado no momento</Message>
        )}
        <List>
          {service.prerequisitesService.map((service: any, index) => {
            return <ItemList key={index}> {service.title} </ItemList>
          })}
        </List>

        <Text>Perguntas relacionadas: </Text>
        {service.proposalQuestions.length <= 0 && (
          <Message>Nenhum pergunta relacionada no momento</Message>
        )}
        <List>
          {service.proposalQuestions.map((service: any, index) => {
            return <ItemList key={index}> {service.title} </ItemList>
          })}
        </List>
      </RelatedServices>
    </Container>
  )
}

export default Item
