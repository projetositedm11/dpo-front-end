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
        <Link href="/admin-dashboard">
          <a onClick={() => setOpenSideBar(!open)}>Dashboard</a>
        </Link>
        <Link href="/admin-category">
          <a onClick={() => setOpenSideBar(!open)}>Categorias</a>
        </Link>
        <Link href="/admin-service">
          <a onClick={() => setOpenSideBar(!open)}>Serviços</a>
        </Link>
        <Link href="/admin-plan">
          <a onClick={() => setOpenSideBar(!open)}>Planos</a>
        </Link>
        <Link href="/admin-question">
          <a onClick={() => setOpenSideBar(!open)}>Perguntas</a>
        </Link>
        <Link href="/admin-security">
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
