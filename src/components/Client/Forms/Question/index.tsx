import React, { useState, useEffect, ChangeEvent } from 'react'
import api from '../../../../services/api'
import Input from '../../../Bases/Input'
import Layout from '../../Layout'
import { Logo } from '../../../../assets/index'
import { CheckBox, Error } from '../../../index'
import Success from './Success'
import PersonalData from '../PersonalData'
import { IData } from '../PersonalData/index'
import { IService } from '../../Services/index'
import {
  Form,
  Header,
  Title,
  CheckContainer,
  Submit,
  RadioContainer,
  ErrorContainer,
} from './styles'
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { TitleForm, Resume } from './styles'

interface IQuestions {
  _id: string
  kind: string
  title: string
  checkbox?: string[]
  radioOption?: {
    selected: boolean
    options: {
      ifTrueOrFalse: boolean
      inputType: string
    }
  }
  numeric?: boolean
  value: string
  resume: string
}

interface IAnswer {
  value: string
  question: string
  title: string
}

const Question: React.FC = () => {
  const { push } = useRouter()

  const [error, setError] = useState<string>('')
  const [showQuestion, setShowQuestion] = useState<boolean>(false)
  const [questions, setQuestions] = useState<IQuestions[]>([
    {
      _id: '',
      kind: '',
      title: '',
      checkbox: [],
      value: '',
      resume: '',
      numeric: false,
      radioOption: {
        selected: true,
        options: {
          ifTrueOrFalse: true,
          inputType: 'date',
        },
      },
    },
  ])

  const [answer, setAnswer] = useState<IAnswer[]>([])
  const [personalData, setPersonalData] = useState<IData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    howDidYouHearAboutOurCompany: '',
    expectedClosing: '',
    needWork: [],
    cnpj: '',
    surname: '',
  })
  const {
    name: firstName,
    cnpj,
    surname,
    email,
    phone,
    company,
    howDidYouHearAboutOurCompany,
    expectedClosing,
    needWork,
  } = personalData
  const [successOpen, setSuccessOpen] = useState<boolean>(false)

  useEffect(() => {
    getQuestions()

    const cookie = localStorage.getItem('cookie')
    if (!JSON.parse(cookie)) {
      push('/')
    }

    async function getQuestions(): Promise<void> {
      try {
        const services = JSON.parse(localStorage.getItem('cart')) as IService[]

        let query = ''
        services.map((service) => {
          query += `&services=${service._id}`
        })
        query = query.substring(1)

        const { data } = await api.get(`/client/questions?${query}`)

        setQuestions(data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }, [])

  const addAnswer = (e: ChangeEvent<HTMLInputElement>, question: string, title: string) => {
    const newItem = {
      value: e.target.value,
      question: question,
      title: title,
    }

    const elementsIndex = answer?.findIndex((element) => element.question == question)

    if (elementsIndex !== -1) {
      let newArray = [...answer]
      newArray[elementsIndex] = { ...newArray[elementsIndex], value: e.target.value }
      setAnswer(newArray)
    } else {
      const updateItems = [newItem, ...answer]
      setAnswer(updateItems)
    }
  }

  function personalDataInfo(data: IData): void {
    setPersonalData(data)
    setShowQuestion(true)
  }

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (answer.length === 0 || answer.length < questions.length) {
        scrollTo(0, 0)
        return setError('Campo em branco')
      }

      const services = JSON.parse(localStorage.getItem('cart')) as IService[]
      const selectedServices = []
      services.map((service) => {
        selectedServices.push(service._id)
      })
      await api.post('/client/send/service-proposal', {
        firstName,
        surname,
        email,
        phone,
        company,
        expectedClosing,
        howDidYouHearAboutOurCompany,
        needWork,
        cnpj,
        selectedServices: selectedServices,
        answers: answer,
      })

      setError('')
      setSuccessOpen(true)
    } catch (error) {
      console.log(error)
    }
  }

  function redirect(): void {
    setTimeout(() => {
      scrollTo(0, 0)
      push('/')
    }, 1000)
  }

  return (
    <>
      <Layout ifLogo ifCompletedFooter={false}>
        <TitleForm>Formulação de proposta</TitleForm>
        {!showQuestion ? (
          <PersonalData personalData={personalDataInfo} />
        ) : (
          <Form onSubmit={(e) => onSubmit(e)}>
            <Header>
              <h4>Questionario de serviços</h4>
              <img src={Logo} alt="Logo" />
            </Header>
            {error && (
              <ErrorContainer>
                <Error>{error}</Error>
              </ErrorContainer>
            )}
            {questions &&
              questions.map((question) => (
                <div key={question._id}>
                  <Title>{question.title}</Title>
                  <Resume>{question.resume}</Resume>
                  <section>
                    {question.kind === 'Texto' && (
                      <input
                        type="text"
                        name="text"
                        onChange={(e) => addAnswer(e, question._id, question.title)}
                      />
                    )}
                    {question.kind === 'Numérico' && (
                      <input
                        type="number"
                        name="number"
                        onChange={(e) => addAnswer(e, question._id, question.title)}
                      />
                    )}
                    {question.radioOption && (
                      <RadioContainer>
                        <main>
                          <CheckContainer>
                            <input
                              id="yes"
                              type="radio"
                              name="radio"
                              value="Sim"
                              onChange={(e) => addAnswer(e, question._id, question.title)}
                            />
                            <label htmlFor="yes">Sim</label>
                          </CheckContainer>
                          <CheckContainer>
                            <input
                              id="no"
                              type="radio"
                              name="radio"
                              value="Não"
                              onChange={(e) => addAnswer(e, question._id, question.title)}
                            />
                            <label htmlFor="no">Não</label>
                          </CheckContainer>
                        </main>
                      </RadioContainer>
                    )}
                  </section>
                </div>
              ))}
            <div style={{ textAlign: 'right' }}>
              <Submit type="submit">Enviar</Submit>
            </div>
          </Form>
        )}
      </Layout>
      <Success id="success" redirect={redirect} open={successOpen} setOpen={setSuccessOpen} />
    </>
  )
}

export default Question
