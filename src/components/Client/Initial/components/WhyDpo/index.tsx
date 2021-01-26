import { Header, Bold, Container, Content } from './styles'

const WhyDpo: React.FC = () => {
  return (
    <Container>
      <Header>
        <h3>
          Por que toda empresa deve ter <Bold>DPO/Encarregado de dados</Bold>?
        </h3>
      </Header>
      <Content>
        <section>
          <p>
            O <span>Artigo 41 da Lei 13.709/2018 Lei Geral de proteção de dados</span> determina que
            qualquer pessoa física ou Jurídica que trata dados pessoas deve indicar um encarregado
            (Data Protection Officer), que deverá ser a pessoa indicada pelo controlador a atuar
            como uma ponte entre as empresas, os titulares de dados pessoais e a ANPD.
          </p>
          <p>
            A importância do DPO dentro da organização é imensa. É uma figura que deve atuar
            diretamente com executivos C-Level para tomar decisões que impactam o negócio como um
            todo. A expertise desse profissional deve abranger conceitos jurídicos sobre a lei e
            também conhecimentos na área de cibersegurança.
          </p>
          <p>
            Entendemos que encontrar um profissional que atenda a essas duas áreas pode ser um tanto
            difícil. Para isso, estamos aqui para ajudar o seu colaborador, encarregado dos dados, a
            conhecer e dominar todas as etapas da LGPD através do trabalho prático e conjunto ao
            compliance, do diagnóstico à governança de dados pessoais.
          </p>
        </section>
        <section>
          <article>
            <h4>Titulares de dados</h4>
            <p>É a pessoa física dona do dado pessoal. Você é o titular de seus dados pessoais!</p>
          </article>
          <article>
            <h4>Controlador</h4>
            <p>
              é a empresa ou a pessoa que coordena e define como o dado pessoal coletado será
              tratado. O controlador é a parte mais interessada no tratamento dos dados. O DPO
              Responde pelo controlador
            </p>
          </article>
          <article>
            <h4>Operador</h4>
            <p>
              é a pessoa ou a empresa que processa e trata os dados pessoais, em nome do
              controlador. Por exemplo, uma empresa de backup contratada pelo controlador
            </p>
          </article>
          <article>
            <h4>Autoridade Nacional de Dados Pessoais</h4>
            <p>
              A Autoridade Nacional de Proteção de Dados (ANPD) é um órgão da administração pública
              direta federal do Brasil que faz parte da Presidência da República e possui
              atribuições relacionadas a proteção de dados pessoais e da privacidade e, sobretudo,
              deve realizar a fiscalização do cumprimento da Lei LGPD.
            </p>
          </article>
        </section>
      </Content>
    </Container>
  )
}

export default WhyDpo
