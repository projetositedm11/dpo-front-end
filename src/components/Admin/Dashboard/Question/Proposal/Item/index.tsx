import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
  Container,
  Header,
  Title,
  Actions,
  Button,
  WrapperData,
  Table,
  Text,
  LogicSection,
  LogicItem,
} from './styles'
import { FaCheck, FaArrowRight, FaArrowDown } from 'react-icons/fa'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Data from './components'
const Item = ({ question, deleteQuestion }) => {
  const { push } = useRouter()

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const [showLogic, setShowLogic] = useState<boolean>(false)
  function handleClick() {
    deleteQuestion(question._id)
    setConfirmDelete(!confirmDelete)
  }
  return (
    <Container>
      <Header>
        <Title>{question.title} </Title>
        <Actions>
          <Button
            onClick={() => push(`/L0gu1N@Dp0B4cK645olg-edit-proposal-question/${question._id}`)}
          >
            <FiEdit />
          </Button>
          {confirmDelete ? (
            <Button backgroundColor="red" onClick={(e) => handleClick()}>
              <FaCheck />
            </Button>
          ) : (
            <Button backgroundColor="red" onClick={() => setConfirmDelete(!confirmDelete)}>
              <FiTrash />
            </Button>
          )}
        </Actions>
      </Header>
      <WrapperData>
        <Data text="Tipo" label={question.kind} />
        <Data
          text="Descrição"
          label={
            question.resume && question.resume.length >= 1
              ? question.resume
              : 'Nenhuma descrição adicionada.'
          }
        />
        <Text>Serviços relacionados:</Text>
        <ul>
          {question.services.map((s) => (
            <li key={s._id}> {s.title}</li>
          ))}
        </ul>

        {question.kind === 'Checkbox' && (
          <>
            <Text>Opções:</Text>
            {question.checkbox.length >= 1 ? (
              <ul>
                {question.checkbox.map((s, index) => (
                  <li key={index}> {s}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma opção adicionada</p>
            )}
          </>
        )}
        {question.kind === 'Numérico' && (
          <LogicSection>
            <h5>
              Lógica{' '}
              {showLogic === true ? (
                <FaArrowDown onClick={() => setShowLogic(false)} />
              ) : (
                <FaArrowRight onClick={() => setShowLogic(true)} />
              )}{' '}
            </h5>
            {question.logic.length >= 1 ? (
              showLogic === true &&
              question.logic.map((i) => (
                <LogicItem>
                  <p> Serviço - {i.service.title} </p>
                  <div>
                    <Table>
                      <thead>
                        <tr>
                          <th> Resposta </th>
                          <th>Valor hora</th>
                        </tr>
                      </thead>
                      <tbody>
                        {i.ifUnit.map((unit, index) => (
                          <tr key={index}>
                            <td>{unit.number}</td>
                            <td> R$ {unit.hourValue} </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </LogicItem>
              ))
            ) : (
              <p>Nenhuma lógica adicionada</p>
            )}
          </LogicSection>
        )}
      </WrapperData>
    </Container>
  )
}

export default Item
