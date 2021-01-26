// import React, { useEffect, useState } from 'react'
import api from '../../../../../services/api'
import Plan from './Plan'
import ScaleLoader from 'react-spinners/ScaleLoader'

import {
  Container,
  Header,
  SubHeader,
  PlansContent,
  Wrapper,
  Bold,
  Message,
  SubTitle,
  Phrase,
  Loading,
} from './styles'

export interface Plans {
  included: string[]
  notIncluded: string[]
  includedServices: string[]
  price: number
  resume: string
  slug: string
  title: string
  _id: string
}

export default function Plans({ data }) {
  return (
    <Container id="plans">
      <Wrapper>
        <Header>
          <h3>
            Como o <Bold>DPO|BackOffice</Bold> pode me ajudar?
          </h3>
        </Header>
      </Wrapper>
      <br />
      <br />
      <SubTitle>
        Trabalhamos de <Bold>2 Formas</Bold>
      </SubTitle>
      <br />
      <br />
      <Phrase>
        <Bold> 1 - </Bold> Obtenha uma experiência completa através de <Bold>nossos planos</Bold>
      </Phrase>
      <br />
      <SubHeader>
        Se você precisa do apoio geral em todos os serviços, <br /> podemos oferecer um pacote{' '}
        <Bold> determinado de horas para cada serviço.</Bold>
      </SubHeader>
      {data ? (
        <PlansContent>
          {data[0] && <Plan plan={data[0]} titleColor="#7f7f7f" />}
          {data[1] && <Plan plan={data[1]} titleColor="#3f3f3f" />}
          {data[2] && <Plan plan={data[2]} titleColor="rgba(0,112,192, 1)" />}
          {data.length <= 0 && <Message>Nenhum plano disponível</Message>}
        </PlansContent>
      ) : (
        <Loading>
          <div>
            <p>Carregando...</p>
            <ScaleLoader width={7} color={'rgba(0,112,192, 1)'} />
          </div>
        </Loading>
      )}
    </Container>
  )
}
