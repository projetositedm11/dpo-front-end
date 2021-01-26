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
import Link from 'next/link'
import Item from './Item'
import { MouseEvent } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
interface Props {
  id: string
  service: IService
  openModal: boolean
  closeModal: () => void
}

const ServicePopUp: React.FC<Props> = ({
  service: { slug, title, resume, prerequisitesService },
  openModal,
  id,
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
        <ButtonContainer>
          <Link href={`/servico/${slug}`}>
            <a>Conhecer detalhes do serviço</a>
          </Link>
        </ButtonContainer>
        <Subtitle>Pré-requisitos </Subtitle>
        {!prerequisitesService && <Message>Nenhum pré-requisitos</Message>}
        <Grid>
          {prerequisitesService &&
            prerequisitesService.map((service) => (
              <Item key={service._id} title={service.title} slug={service.slug} />
            ))}
        </Grid>
        <Subtitle>O que são pré-requisitos?</Subtitle>
        <Description>
          São itens que são necessários para iniciar um serviço. Você não pode iniciar um serviço
          sem ter os documentos necessários prontos, já em posse de sua organização.
        </Description>
      </Container>
    </Main>
  )
}

export default ServicePopUp
