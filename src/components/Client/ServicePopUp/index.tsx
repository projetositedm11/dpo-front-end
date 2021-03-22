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
import Item from '../Services/Item'
import { MouseEvent } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
interface Props {
  id: string
  service: IService
  openModal: boolean
  closeModal: () => void
  addCartItem: (id: string) => void
  removeCartItem: (id: string) => void
  showMore: (slug: string) => void
  handleCheck: (id: string) => boolean
}

const ServicePopUp: React.FC<Props> = ({
  service: { title, resume, prerequisitesService, _id, deliverable },
  openModal,
  id,
  addCartItem,
  handleCheck,
  removeCartItem,
  showMore,
  closeModal,
}) => {
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
        <ButtonContainer onClick={() => addCartItem(_id)}>
          Selecionar serviço para cotação
        </ButtonContainer>
        <Subtitle>Entregáveis</Subtitle>
        <Description>
          <ul>
            {deliverable.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Description>
        <Subtitle>Pré-requisitos </Subtitle>
        {!prerequisitesService && <Message>Nenhum pré-requisitos</Message>}
        <Grid>
          {prerequisitesService &&
            prerequisitesService.map((service) => (
              <Item
                key={service._id}
                showMore={showMore}
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
