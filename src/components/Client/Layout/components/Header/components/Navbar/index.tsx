import React from 'react'
import { Container, ImageContainer, CartContainer, NavBarIcon } from './styles'
import Link from 'next/link'
import { MdLocalGroceryStore } from 'react-icons/md'
import { Logo } from '../../../../../../../assets'

interface Props {
  logo: boolean
  openSideBar: boolean
  setOpenSideBar: (open: boolean) => void
}

const Navbar: React.FC<Props> = ({ openSideBar, setOpenSideBar, logo }) => {
  return (
    <Container ifLogo={logo}>
      <ImageContainer ifLogo={logo}>
        <img src={Logo} alt="logo_dm_11" />
      </ImageContainer>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/servicos">
          <a>Serviços</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
        <Link href="/#plans">
          <a>Planos</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </ul>
      <CartContainer>
        <NavBarIcon
          open={openSideBar}
          onClick={() => {
            setOpenSideBar(!openSideBar)
          }}
        >
          <section></section>
        </NavBarIcon>
      </CartContainer>
    </Container>
  )
}

export default Navbar
