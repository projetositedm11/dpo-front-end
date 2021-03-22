import { useRouter } from 'next/router'
import { Logo, BgIntroduction } from '../../../../../assets'
import { Content, Container, Info } from './styles'

const Introduction: React.FC = () => {
  const { push } = useRouter()

  return (
    <Container url={BgIntroduction}>
      <Content>
        <img src={Logo} alt="logo" />
        <Info>
          <p>
            Do <span>Diagnóstico</span>
          </p>
          <p>
            ao <span>Compliance</span>
          </p>
          <p>
            Um suporte completo ao <span>DPO</span>
          </p>
          <section>
            <button type="button" onClick={() => push('/#safe_wrapper')}>
              O que oferecemos
            </button>
            <br />
            <button type="button" disabled>
              O que oferecemos
            </button>
          </section>
        </Info>
      </Content>
    </Container>
  )
}

export default Introduction
