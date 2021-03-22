import { Header, Footer } from './components'
import { motion } from 'framer-motion'

interface Props {
  ifLogo: boolean
  ifCompletedFooter: boolean
}

const Layout: React.FC<Props> = ({ children, ifLogo, ifCompletedFooter }) => {
  return (
    <>
      <Header logo={ifLogo} />
      <motion.div exit={{ opacity: 0 }}>{children}</motion.div>
      <Footer ifCompleted={ifCompletedFooter} />
    </>
  )
}

export default Layout
