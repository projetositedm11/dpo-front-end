import { MouseEvent } from 'react'
import { FiCheck } from 'react-icons/fi'
import { StyledSuccess, Container } from './styles'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  id: string
}

const Success: React.FC<Props> = ({ setOpen, open, id }) => {
  function handleClose(e: MouseEvent<HTMLDivElement | HTMLButtonElement>): void {
    const target = e.target as HTMLDivElement

    if (target.id === id) {
      setOpen(!open)
    }
  }

  return (
    <StyledSuccess id={id} open={open} onClick={(e) => handleClose(e)}>
      <Container>
        <section>
          <FiCheck />
        </section>
        <h3>Sucesso</h3>
        <p>Nas próximas horas você receberá uma proposta no formato PDF em seu email.</p>
        <button id={id} onClick={(e) => handleClose(e)}>
          Ok
        </button>
      </Container>
    </StyledSuccess>
  )
}

export default Success
