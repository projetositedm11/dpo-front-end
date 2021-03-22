import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { Container, Opacity } from './styles'

interface Props {
  open: boolean
  setOpenSideBar: (open: boolean) => void
}

const SideBar: React.FC<Props> = ({ open, setOpenSideBar }) => {
  return (
    <>
      <Container open={open}>
        <header>
          <CgClose onClick={() => setOpenSideBar(!open)} />
        </header>
        <ul>
          <Link href="/">
            <a onClick={() => setOpenSideBar(!open)}>Home</a>
          </Link>
          <Link href="/servicos">
            <a onClick={() => setOpenSideBar(!open)}>Serviços</a>
          </Link>
          <Link href="/contato">
            <a onClick={() => setOpenSideBar(!open)}>Contato</a>
          </Link>
          <Link href="/#plans">
            <a onClick={() => setOpenSideBar(!open)}>Planos</a>
          </Link>
          <Link href="/faq">
            <a onClick={() => setOpenSideBar(!open)}>FAQ</a>
          </Link>
        </ul>
      </Container>
      <Opacity show={open} onClick={() => setOpenSideBar(!open)} />
    </>
  )
}

export default SideBar
