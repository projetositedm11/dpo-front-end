import { GrClose } from 'react-icons/gr'
import { StyledModal, Container } from './styles'
import { MouseEvent } from 'react'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  id: string
}

const Modal: React.FC<Props> = ({ id, setOpen, open, children }) => {
  function handleClose(e: MouseEvent<HTMLDivElement>): void {
    const target = e.target as HTMLDivElement

    if (target.id === id) {
      setOpen(!open)
    }
  }

  return (
    <StyledModal id={id} open={open} onClick={(e) => handleClose(e)}>
      <Container>
        <header>
          <GrClose onClick={() => setOpen(!open)} />
        </header>
        {children}
      </Container>
    </StyledModal>
  )
}

export default Modal
