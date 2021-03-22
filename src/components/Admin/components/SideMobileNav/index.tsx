import React from 'react'
import Link from 'next/link'
import { Container } from './styles'
import token from '../../../../utils/setToken'

interface Props {
  open: boolean
  setOpenSideBar: (open: boolean) => void
}

const SideMobileNav: React.FC<Props> = ({ open, setOpenSideBar }) => {
  function logout() {
    localStorage.setItem('token', '')
    token()
    setOpenSideBar(!open)
  }

  return (
    <Container open={open}>
      <ul>
        <Link href="/L0gu1N@Dp0B4cK645olg-dashboard">
          <a onClick={() => setOpenSideBar(!open)}>Dashboard</a>
        </Link>
        <Link href="/L0gu1N@Dp0B4cK645olg-category">
          <a onClick={() => setOpenSideBar(!open)}>Categorias</a>
        </Link>
        <Link href="/L0gu1N@Dp0B4cK645olg-service">
          <a onClick={() => setOpenSideBar(!open)}>Serviços</a>
        </Link>
        <Link href="/L0gu1N@Dp0B4cK645olg-plan">
          <a onClick={() => setOpenSideBar(!open)}>Planos</a>
        </Link>
        <Link href="/L0gu1N@Dp0B4cK645olg-question">
          <a onClick={() => setOpenSideBar(!open)}>Perguntas</a>
        </Link>
        <Link href="/L0gu1N@Dp0B4cK645olg-security">
          <a onClick={() => setOpenSideBar(!open)}>Segurança</a>
        </Link>
        <Link href="/">
          <a onClick={() => logout()}>Sair</a>
        </Link>
      </ul>
    </Container>
  )
}

export default SideMobileNav
