import { ChangeEvent, useEffect, useState } from 'react'
import api from '../../../../../services/api'
import Input from '../../../../Bases/Input'
import Proposal from './Proposal'
import { Container, WrapperProposals, Header, HeaderTitle, InputContainer } from './styles'

const Proposals = ({
  search,
  proposalsFiltred,
  filter,
  updateStatus,
  updateParcel,
  updateDeadline,
  setParcel,
  setDeadline,
}) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Propostas</HeaderTitle>
        <InputContainer>
          <Input
            type="text"
            name="search"
            placeholder="Pesquisar por cliente"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => filter(e.target.value)}
          />
        </InputContainer>
      </Header>
      <WrapperProposals>
        {proposalsFiltred.map((proposal) => (
          <Proposal
            key={proposal._id}
            proposal={proposal}
            updateStatus={updateStatus}
            updateParcel={updateParcel}
            updateDeadline={updateDeadline}
            setParcel={setParcel}
            setDeadline={setDeadline}
          />
        ))}
      </WrapperProposals>
    </Container>
  )
}

export default Proposals
