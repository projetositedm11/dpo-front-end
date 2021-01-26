import React, { useState, useEffect } from 'react'
import api from '../../../../../services/api'
import Header from '../../../components/Header'
import Layout from '../../index'
import PulseLoader from 'react-spinners/PulseLoader'
import { Loading } from './styles'
import Item from './Item'
const ProposalQuestion = () => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getQuestions()
  }, [])

  async function getQuestions(): Promise<void> {
    try {
      const { data } = await api.get('/admin/questions')
      setQuestions(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteQuestion(id: string): Promise<void> {
    try {
      await api.delete(`/admin/remove/question/${id}`)

      const newQuestions = questions.filter(({ _id }) => _id !== id)

      setQuestions(newQuestions)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Header title="Pergunta - Proposta" link="/admin-create-proposal-question" />
      {loading === true ? (
        <Loading>
          <p>Carregando...</p>
          <PulseLoader size={20} color={'rgba(0,112,192, 1)'} />
        </Loading>
      ) : (
        <div>
          {questions.map((q, index) => {
            return <Item question={q} key={index} deleteQuestion={deleteQuestion} />
          })}
        </div>
      )}
    </Layout>
  )
}

export default ProposalQuestion
