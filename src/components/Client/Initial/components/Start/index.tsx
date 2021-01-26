import { Container, Header, Bold, Hr, Content } from './styles'
import { StartImage } from '../../../../../assets'

const Start: React.FC = () => {
  return (
    <>
      <Hr />
      <Container>
        <Header>
          <h3>
            Não sabe por onde começar?<Bold>{`/>`}</Bold>
          </h3>
        </Header>
        <Content>
          <section>
            <h4>
              Fique tranquilo, ajudamos você a filtrar quais serviços são necessários à sua
              organização.
            </h4>
          </section>
          <section>
            <img src={StartImage} alt="start_image" />
            <p>
              Responda a esse breve questionário e saiba o caminho para tornar sua empresa em
              conformidade com a LGPD
            </p>
            <button type="button">Iniciar questionário</button>
          </section>
        </Content>
      </Container>
      <Hr />
    </>
  )
}

export default Start
