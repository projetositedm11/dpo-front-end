import {
  Container,
  WrapperLogo,
  WrapperContent,
  Button,
  Section,
  WrapperLinks,
  WrapperText,
} from './styles'
import { Logo } from '../../../../../assets'
import Facebook from '../../../../../assets/social/facebook.png'
import Linkedin from '../../../../../assets/social/instagram.png'
import Instagram from '../../../../../assets/social/linkedin.png'

import Link from 'next/link'

interface Props {
  ifCompleted: boolean
}

const Footer: React.FC<Props> = ({ ifCompleted }) => (
  <>
    {ifCompleted && (
      <Container>
        <WrapperContent>
          <Section>
            <WrapperLogo>
              <img src={Logo} width="100%" />
              <ul>
                <li>
                  <img src={Facebook} alt="Logo - Facebook" />
                  <img src={Linkedin} alt="Logo - Linkedin" />
                  <img src={Instagram} alt="Logo - Instagram" />
                </li>
              </ul>
            </WrapperLogo>
          </Section>
          <Section>
            <WrapperLinks>
              <ul>
                <p> Site </p>
                <li>
                  <Link href="/">
                    <a> Home </a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a> Serviços </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contato">
                    <a> Contato </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#plans">
                    <a> Planos </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a> Faq </a>
                  </Link>
                </li>
              </ul>
            </WrapperLinks>
          </Section>
          <Section>
            <Button color="#595959" background="white" onClick={(e) => scrollTo(0, 0)}>
              Voltar ao topo do site
            </Button>
            <Link href="/politica-de-privacidade">
              <Button color="white" background="#0070c0">
                Politica de Privacidade
              </Button>
            </Link>
          </Section>
        </WrapperContent>
      </Container>
    )}
    <WrapperText>
      <p> © 2020 - DPOBackOffice® é uma marca registrada </p>
    </WrapperText>
  </>
)

export default Footer
