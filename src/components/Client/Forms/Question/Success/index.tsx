import { MouseEvent } from 'react'
import { FiCheck } from 'react-icons/fi'
import { StyledSuccess, Container } from './styles'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  redirect: () => void
  id: string
}

const Success: React.FC<Props> = ({ setOpen, open, id, redirect }) => {
  function handleClose(e: MouseEvent<HTMLDivElement | HTMLButtonElement>): void {
    const target = e.target as HTMLDivElement

    if (target.id === id) {
      setOpen(!open)
      redirect()
    }
  }

  return (
    <StyledSuccess id={id} open={open} onClick={(e) => handleClose(e)}>
      <Container>
        <section>
          <FiCheck />
        </section>
        <h3>Sucesso</h3>
        <p>
          Estamos analisando as propriedades de seu ambiente e nas próximas horas enviaremos uma
          proposta em PDF para você.
        </p>
        <button id={id} onClick={(e) => handleClose(e)}>
          Ok
        </button>
      </Container>
    </StyledSuccess>
  )
}

export default Success
