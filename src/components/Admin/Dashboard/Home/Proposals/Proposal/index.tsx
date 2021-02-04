import React, { useState, ChangeEvent } from 'react'
import Data from './Data'
// import { IProposal, IClient } from '../../index'
import Link from 'next/link'
import {
  Container,
  ProposalHeader,
  Date,
  Status,
  ButtonSeeProposal,
  ClientDataContent,
  ProposalActions,
  ActionButton,
  StatusColor,
  StatusAction,
  UpdateProposal,
  ProposalDataContent,
  Title,
  Logic,
  Answers,
  ProposalSettings,
  SubTitle,
  Item,
} from './styles'

import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

import Header from './Header'
import Input from '../../../../../Bases/Input'

const Proposal = ({
  proposal: {
    _id,
    kind,
    status,
    client: {
      firstName,
      phone,
      email,
      company,
      cnpj,
      expectedClosing,
      howDidYouHearAboutOurCompany,
      needWork,
    },
    createdAtFormatted,
    plan,
    pdf,
    deadline,
    finalValue,
    parcel,
    answers,
    totalDedicatedHours,
    logicsExecuted,
    selectedServices,
    identifier,
  },
  updateStatus,
  updateDeadline,
  updateParcel,
  setParcel,
  setDeadline,
}) => {
  const [inputDeadline, setInputDeadline] = useState(false)
  const [inputParcel, setInputParcel] = useState(false)
  const [dataClient, setDataClient] = useState(false)
  const [dataProposal, setDataProposal] = useState(false)

  const [dataLogic, setDataLogic] = useState(false)
  const [dataSelectedServices, setDataSelectedServices] = useState(false)
  const [dataQuestions, setDataQuestions] = useState(false)

  return (
    <Container>
      <Header
        ProposalHeader={ProposalHeader}
        Date={Date}
        Status={Status}
        status={status}
        StatusColor={StatusColor}
        createdAtFormatted={createdAtFormatted}
        plan={plan}
        kind={kind}
        ButtonSeeProposal={ButtonSeeProposal}
      />

      <Title>
        Dados do cliente:{' '}
        {dataClient === true ? (
          <FaArrowDown onClick={() => setDataClient(false)} />
        ) : (
          <FaArrowRight onClick={() => setDataClient(true)} />
        )}{' '}
      </Title>
      <ClientDataContent>
        {dataClient === true ? (
          <>
            <div>
              <Data label="Nome Completo" clientData={firstName} />
              <Data label="Telefone" clientData={phone} />
              <Data label="E-mail" clientData={email} />
              <Data
                label="Como conheceu a nossa empresa"
                clientData={howDidYouHearAboutOurCompany}
              />
            </div>
            <div>
              <Data label="CNPJ" clientData={cnpj} />
              <Data label="Empresa" clientData={company} />
              <Data label="Expectativa de fechamento" clientData={expectedClosing} />
              <label>Necessidade do trabalho:</label>
              <ul>{needWork && needWork.map((need, index) => <li key={index}> {need} </li>)}</ul>
            </div>
          </>
        ) : (
          <div></div>
        )}
        <ProposalActions>
          <StatusAction>
            {status === 'Aprovado' && (
              <>
                <ActionButton
                  color="rgba(1, 170, 23, 0.95)"
                  onClick={(e) => updateStatus(e, _id, 'Vendido')}
                >
                  Mudar para vendido
                </ActionButton>
                <ActionButton color="#c4314b" onClick={(e) => updateStatus(e, _id, 'Recusado')}>
                  Mudar para recusado
                </ActionButton>
              </>
            )}
            {status === 'Recusado' && (
              <>
                <ActionButton
                  color="rgba(1, 170, 23, 0.95)"
                  onClick={(e) => updateStatus(e, _id, 'Aprovado')}
                >
                  Mudar para aprovado
                </ActionButton>
              </>
            )}
            {status === 'Em análise' && (
              <>
                <ActionButton
                  color="rgba(1, 170, 23, 0.95)"
                  onClick={(e) => updateStatus(e, _id, 'Aprovado')}
                >
                  Aprovar e enviar email
                </ActionButton>
                <ActionButton color="#c4314b" onClick={(e) => updateStatus(e, _id, 'Recusado')}>
                  Recusar
                </ActionButton>
              </>
            )}
          </StatusAction>
        </ProposalActions>
      </ClientDataContent>

      <Title>
        {' '}
        Dados da Proposta{' '}
        {dataProposal === true ? (
          <FaArrowDown onClick={() => setDataProposal(false)} />
        ) : (
          <FaArrowRight onClick={() => setDataProposal(true)} />
        )}{' '}
      </Title>
      {dataProposal === true && (
        <ProposalDataContent>
          {kind === 'Serviço Avulso' && (
            <div>
              <Item>
                <SubTitle>
                  Serviços selecionados:{' '}
                  {dataSelectedServices === true ? (
                    <FaArrowDown onClick={() => setDataSelectedServices(false)} />
                  ) : (
                    <FaArrowRight onClick={() => setDataSelectedServices(true)} />
                  )}{' '}
                </SubTitle>
                {dataSelectedServices === true &&
                  selectedServices.map((item) => (
                    <Logic>
                      <div>
                        <label> Serviço: </label>
                        <p> {(item.service && item.service.title) || 'Serviço removido.'} </p>
                        <label> Valor final: </label>
                        <p>
                          {' '}
                          {item.totalValue.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}{' '}
                        </p>
                        <label> Horas necessárias para a conclusão do serviço: </label>
                        <p> {item.totalHours} horas </p>
                      </div>
                    </Logic>
                  ))}
              </Item>
              <Item>
                <SubTitle>
                  {' '}
                  Questionário:{' '}
                  {dataQuestions === true ? (
                    <FaArrowDown onClick={() => setDataQuestions(false)} />
                  ) : (
                    <FaArrowRight onClick={() => setDataQuestions(true)} />
                  )}{' '}
                </SubTitle>
                {dataQuestions === true &&
                  answers.map((a) => {
                    return (
                      <Answers>
                        <label> Pergunta: {a.title} </label>
                        <p>Resposta: {a.value}</p>
                      </Answers>
                    )
                  })}
              </Item>
              <Item>
                <SubTitle>
                  {' '}
                  Lógicas executadas:{' '}
                  {dataLogic === true ? (
                    <FaArrowDown onClick={() => setDataLogic(false)} />
                  ) : (
                    <FaArrowRight onClick={() => setDataLogic(true)} />
                  )}{' '}
                </SubTitle>
                {dataLogic === true && (
                  <div>
                    {' '}
                    {logicsExecuted.map((logic) => {
                      return (
                        <Logic>
                          <div>
                            <label> Serviço: </label>
                            <p> {logic.title} </p>
                            <label> Pergunta: </label>
                            <p> {logic.question} </p>
                            <label> Resposta:</label>
                            <p>{logic.answer}</p>
                          </div>
                          <div>
                            <label> Horas necessárias para a conclusão do serviço: </label>
                            <p> {logic.finalHours} horas </p>
                            <label> Valor hora: </label>
                            <p>
                              {' '}
                              {logic.hourValue.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                              })}{' '}
                            </p>
                            <label> Valor final:</label>
                            <p>
                              {' '}
                              {logic.finalValue.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                              })}
                            </p>
                          </div>
                        </Logic>
                      )
                    })}{' '}
                  </div>
                )}
              </Item>
            </div>
          )}
          <ProposalSettings>
            <div>
              <label> Identificador:</label>
              <p>{identifier}</p>
              <label> Valor final:</label>
              <p>{finalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
              {kind === 'Serviço Avulso' && (
                <>
                  <label> Esforço total do projeto:</label>
                  <p> {totalDedicatedHours} horas </p>
                </>
              )}
              <label> Prazo estimado:</label>
              <p> {deadline && deadline ? deadline : 'Não adicionado.'} </p>
              {parcel.selected === true && (
                <>
                  <p>
                    {' '}
                    Parcelado em: {parcel.times} vezes de{' '}
                    {parcel.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}{' '}
                  </p>
                </>
              )}
              {pdf && pdf ? (
                <Link href={pdf && pdf} passHref={true}>
                  <a target="_blank" rel="noreferrer">
                    Ver PDF
                  </a>
                </Link>
              ) : (
                <p>Não foi possível gerar o PDF.</p>
              )}
            </div>
            <UpdateProposal>
              <p onClick={(e) => setInputDeadline(!inputDeadline)}>Atualizar prazo estimado</p>
              {inputDeadline === true && (
                <>
                  <Input
                    type="text"
                    placeholder="Prazo estimado"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value)}
                  />
                  <button onClick={(e) => updateDeadline(e, _id)}>Salvar</button>
                </>
              )}
              <p onClick={(e) => setInputParcel(!inputParcel)}>Parcelar valor</p>
              {inputParcel === true && (
                <>
                  <Input
                    type="number"
                    placeholder="Número de parcelas"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setParcel(e.target.value)}
                  />
                  <button onClick={(e) => updateParcel(e, _id)}>Salvar</button>
                </>
              )}
            </UpdateProposal>
          </ProposalSettings>
        </ProposalDataContent>
      )}
    </Container>
  )
}

export default Proposal
