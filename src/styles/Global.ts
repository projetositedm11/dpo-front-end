import ThemeType from './theme'
import { createGlobalStyle } from 'styled-components'

interface Props {
  theme: typeof ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
  }

  body{
    font-family: 'Montserrat', sans-serif;
  }

  ::placeholder {
      font-family: 'Montserrat', sans-serif;
    }

  html {
    scroll-behavior: smooth;
  }

  a{
    color: ${(props) => props.theme.blue};
  }

`

export default GlobalStyle
