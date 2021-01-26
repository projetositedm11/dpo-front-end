import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../store'
import { CookiesPopUp } from '../components'
import { GlobalStyle, theme } from '../styles'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps, router: routerProps }) => {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      {router.pathname === '/' ||
      router.pathname === '/contato' ||
      router.pathname === '/politica-de-privacidade' ||
      router.pathname === '/servicos' ? (
        <CookiesPopUp />
      ) : (
        ''
      )}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={routerProps.route} />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp
