import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  LeftNav,
  Nav,
  NavBrand,
  NavLink,
  NavLogo,
  NavToggle,
  NavIcon,
  NavList,
  ItemNavName,
  MobileNav,
  MobileLogo,
  MobileMenu,
  NavLinkLogout,
} from './styles'
import {
  IoIosHome,
  IoIosBrowsers,
  IoLogoBuffer,
  IoMdCalculator,
  IoIosClipboard,
  IoIosFolder,
} from 'react-icons/io'
import { IoLogOut, IoDocumentText, IoMenu } from 'react-icons/io5'
import Link from 'next/link'
import SideMobileNav from '../SideMobileNav'
import token from '../../../../utils/setToken'

const SideBar: React.FC = () => {
  const router = useRouter()

  const [nav, setNav] = useState(false)

  function logout() {
    localStorage.setItem('token', '')
    token()
    router.push('/')
  }

  return (
    <LeftNav>
      <MobileNav>
        <div>
          <MobileLogo>DPOBackoffice</MobileLogo>
        </div>
        <MobileMenu>
          <IoMenu
            onClick={() => {
              setNav(!nav)
            }}
          />
        </MobileMenu>
      </MobileNav>
      <SideMobileNav open={nav} setOpenSideBar={setNav} />
      <Nav>
        <div>
          <NavBrand>
            <NavLogo>DPOBackoffice</NavLogo>
          </NavBrand>
          <NavList>
            <Link href="/L0gu1N@Dp0B4cK645olg-dashboard">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-dashboard' && true}>
                <NavIcon>
                  <IoIosHome />
                </NavIcon>
                <ItemNavName>Dashboard</ItemNavName>
              </NavLink>
            </Link>
            <Link href="/L0gu1N@Dp0B4cK645olg-category">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-category' && true}>
                <NavIcon>
                  <IoIosFolder />
                </NavIcon>
                <ItemNavName>Categoria</ItemNavName>
              </NavLink>
            </Link>
            <Link href="/L0gu1N@Dp0B4cK645olg-service">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-service' && true}>
                <NavIcon>
                  <IoDocumentText />
                </NavIcon>
                <ItemNavName>Serviço</ItemNavName>
              </NavLink>
            </Link>
            <Link href="/L0gu1N@Dp0B4cK645olg-plan">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-plan' && true}>
                <NavIcon>
                  <IoIosBrowsers />
                </NavIcon>
                <ItemNavName>Plano</ItemNavName>
              </NavLink>
            </Link>
            <Link href="/L0gu1N@Dp0B4cK645olg-proposal-question">
              <NavLink
                active={router.pathname === '/L0gu1N@Dp0B4cK645olg-proposal-question' && true}
              >
                <NavIcon>
                  <IoIosClipboard />
                </NavIcon>
                <ItemNavName>Pergunta</ItemNavName>
              </NavLink>
            </Link>
            {/* <Link href="/L0gu1N@Dp0B4cK645olg-logic">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-logic' && true}>
                <NavIcon>
                  <IoMdCalculator />
                </NavIcon>
                <ItemNavName>Lógica</ItemNavName>
              </NavLink>
            </Link> */}
            <Link href="/L0gu1N@Dp0B4cK645olg-security">
              <NavLink active={router.pathname === '/L0gu1N@Dp0B4cK645olg-security' && true}>
                <NavIcon>
                  <IoLogoBuffer />
                </NavIcon>
                <ItemNavName>Segurança</ItemNavName>
              </NavLink>
            </Link>
          </NavList>
        </div>
        <NavLinkLogout onClick={() => logout()}>
          <NavIcon>
            <IoLogOut />
          </NavIcon>
          <ItemNavName>Sair</ItemNavName>
        </NavLinkLogout>
      </Nav>
    </LeftNav>
  )
}

export default SideBar
