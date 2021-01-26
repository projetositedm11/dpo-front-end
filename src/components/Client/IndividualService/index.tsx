import { useState, useEffect } from 'react'
import api from '../../../services/api'
import Layout from '../Layout'
import { RenderDescription, Service } from './components'
import { useRouter } from 'next/router'

import {
  Container,
  Title,
  TextItem,
  Grid,
  RequirementsTitle,
  RequirementsParagrath,
  Loading,
  Bold,
} from './styles'
import ScaleLoader from 'react-spinners/ScaleLoader'

// interface IService {
//   _id: string
//   slug?: string
//   title: string
//   resume: string
//   description: string
//   fixedHours: Number
//   retest?: Number
//   hourValue: Number
//   finalValue: Number
//   deliverable: string[]
//   prerequisitesServices?: IService[]
//   prerequisites?: string[]
//   questions?: IProposalQuestion[]
//   category: ICategory
// }

// interface IProposalQuestion {
//   title: String
//   checkBox?: {
//     selected: boolean
//     options: string[]
//   }
//   numeric?: boolean
//   radioOption?: {
//     selected: boolean
//     options: {
//       ifTrueOrFalse: boolean
//       inputType: string
//     }
//   }
//   services?: IService[]
// }

// interface ICategory {
//   title: String
//   services?: IService[]
// }

interface Props {
  slug: string
  service: any
}

const ServiceItem: React.FC<Props> = ({ slug, service }) => {
  return (
    <Layout ifLogo ifCompletedFooter>
      <Container>
        {!service ? (
          <Loading>
            <div>
              <p>Carregando...</p>
              <ScaleLoader width={7} color={'rgba(0,112,192, 1)'} />
            </div>
          </Loading>
        ) : (
          <div>
            <Title>{service.title}</Title>
            <RenderDescription description={service.description} />
            <Bold>Entregáveis</Bold>
            {service.deliverable.length === 0 && <p>Nenhum entregável para esse serviço.</p>}
            <ul>
              {service.deliverable.map((d, index) => {
                return <TextItem key={index}>{d}</TextItem>
              })}
            </ul>
            <Bold>Pré-requisitos</Bold>
            <ul>
              {service.prerequisites.map((d, index) => {
                return <TextItem key={index}>{d}</TextItem>
              })}
            </ul>
            <Grid>
              {service.prerequisitesService.map((d, index) => {
                return <Service key={index} title={d.title} slug={d.slug} />
              })}
            </Grid>
            <Bold>O que são pré-requisitos?</Bold>
            <p>
              São itens que são necessários para iniciar um serviço. Você não pode iniciar um
              serviço sem ter os documentos necessários prontos, já em posse de sua organização.
            </p>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default ServiceItem
