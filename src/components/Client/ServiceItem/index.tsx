import { useState } from 'react'
import Layout from '../Layout'
// import { RenderDescription, Service } from './components'
// import {
//   Container,
//   Title,
//   TextItem,
//   Grid,
//   RequirementsTitle,
//   RequirementsParagrath,
// } from './styles'

interface IService {
  _id: string
  slug?: string
  title: string
  resume: string
  description: string
  fixedHours: Number
  retest?: Number
  hourValue: Number
  finalValue: Number
  deliverable: string[]
  prerequisitesServices?: IService[]
  prerequisites?: string[]
  questions?: IProposalQuestion[]
  category: ICategory
}

interface IProposalQuestion {
  title: String
  checkBox?: {
    selected: boolean
    options: string[]
  }
  numeric?: boolean
  radioOption?: {
    selected: boolean
    options: {
      ifTrueOrFalse: boolean
      inputType: string
    }
  }
  services?: IService[]
}

interface ICategory {
  title: String
  services?: IService[]
}

interface Props {
  id: string
}

const ServiceItem: React.FC<Props> = ({ id }) => {
  const [service, setService] = useState<IService>({
    _id: '',
    category: {
      title: '',
      services: [],
    },
    deliverable: [],
    description: '',
    finalValue: 0,
    fixedHours: 0,
    hourValue: 0,
    resume: '',
    title: 'Relatório de Impacto sobre proteção de dados (RIPD)',
    prerequisites: [],
    prerequisitesServices: [],
    questions: [],
    retest: 0,
    slug: '',
  })
  const { title } = service

  return (
    <Layout ifLogo ifCompletedFooter>
      {/* <Container>
        <Title>{title}</Title>
        <RenderDescription description="" />
        <Title>Entregáveis</Title>
        <ul>
          <TextItem>Item um e doi</TextItem>
        </ul>
        <Title>Pré-requisitos</Title>
        <ul>
          <TextItem>Item um e doi</TextItem>
        </ul>
        <Grid>
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
          <Service _id="09" title="servico 1" />
        </Grid>
        <RequirementsTitle>O que são pré-requisitos?</RequirementsTitle>
        <RequirementsParagrath>
          Explicação sólida e resumida para entender porque tem de fazer
        </RequirementsParagrath>
      </Container> */}
    </Layout>
  )
}

export default ServiceItem
