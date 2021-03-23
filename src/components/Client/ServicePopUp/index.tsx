import { MouseEvent } from 'react'
import {
  Container,
  Main,
  Title,
  Grid,
  ButtonContainer,
  Description,
  Subtitle,
  Message,
  IconContainer,
} from './styles'
import { IService } from '../Services/index'
import Item from './Item'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
interface Props {
  id: string
  service: IService
  openModal: boolean
  closeModal: () => void
  addCartItem: (id: string) => void
  removeCartItem: (id: string) => void
  handleCheck: (id: string) => boolean
}

const ServicePopUp: React.FC<Props> = ({
  service: { title, resume, prerequisitesService, slug },
  openModal,
  id,
  addCartItem,
  handleCheck,
  removeCartItem,
  closeModal,
}) => {
  const { push } = useRouter()

  function handleCloseModal(e: MouseEvent<HTMLDivElement>): void {
    const target = e.target as HTMLDivElement

    if (target.id === id) {
      closeModal()
    }
  }

  return (
    <Main id={id} open={openModal} onClick={(e) => handleCloseModal(e)}>
      <Container>
        <IconContainer>
          <span></span>
          <Title>{title}</Title>
          <div onClick={(e) => closeModal()}>
            <AiOutlineCloseCircle />
          </div>
        </IconContainer>
        <Description>{resume}</Description>
        <ButtonContainer onClick={() => push(`/servico/${slug}`)}>
          Conceder detalhes do serviço
        </ButtonContainer>
        <Subtitle>Pré-requisitos </Subtitle>
        {!prerequisitesService && <Message>Nenhum pré-requisitos</Message>}
        <Grid>
          {prerequisitesService &&
            prerequisitesService.map((service) => (
              <Item
                key={service._id}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
                item={service}
                checked={handleCheck(service._id)}
              />
            ))}
        </Grid>
      </Container>
    </Main>
  )
}

export default ServicePopUp
