import { useState } from 'react'
import { Navbar, SideBar } from './components'

interface Props {
  logo: boolean
}

const Header: React.FC<Props> = ({ logo }) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false)

  return (
    <>
      <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} logo={logo} />
      <SideBar open={openSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  )
}

export default Header
