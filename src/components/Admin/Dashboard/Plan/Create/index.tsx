import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Create/Header'
import Layout from '../../index'
import Input from '../../../../Bases/Input'
import Select, { OptionsType } from 'react-select'
import api from '../../../../../services/api'
import { WrapperForm, SaveButton, FieldContainer, Row, ErrorContainer } from './styles'
import { Error, TextArea } from '../../../../index'
import { Include } from './components'

interface Option {
  label: string
  value: string
}

interface Service {
  _id: string
  title: string
}

const Create: React.FC = () => {
  const { push } = useRouter()

  const [itemInclude, setItemInclude] = useState([])

  const [itemNotInclude, setItemNotInclude] = useState([])

  const [optionsSelect, setOptionsSelect] = useState<Option[]>([])

  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [options, setOptions] = useState<OptionsType<{ label: string; value: string }>>([])
  const [resume, setResume] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    loadServices()

    async function loadServices(): Promise<void> {
      try {
        const { data } = await api.get('/admin/services')

        const newOptions: Option[] = []

        data.map((service: Service) => {
          newOptions.push({
            label: service.title,
            value: service._id,
          })
        })

        setOptionsSelect(newOptions)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function onSubmit(): Promise<void> {
    try {
      setError('')
      const includedServices: string[] = []

      options.map((option) => {
        includedServices.push(option.value)
      })
      if (!resume || !price || !resume) {
        scrollTo(0, 0)
        return setError('Campo em branco')
      }

      await api.post('/admin/add/plan', {
        title,
        price,
        resume,
        includedServices: includedServices,
        included: itemInclude,
        notIncluded: itemNotInclude,
      })

      setError('')
      push('/L0gu1N@Dp0B4cK645olg-plan')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const finalPrice = parseInt(price)

  return (
    <Layout>
      <Header
        title={`Criar plano - ${title} ${
          isNaN(finalPrice) === false ? `(R$ ${finalPrice.toLocaleString().replace(',', '.')})` : ''
        } `}
        backLink="/L0gu1N@Dp0B4cK645olg-plan"
      />
      {error && (
        <ErrorContainer>
          <Error>{error}</Error>
        </ErrorContainer>
      )}
      <WrapperForm>
        <Row>
          <FieldContainer>
            <Input
              type="text"
              label="Título do plano"
              deafultPlaceholder="Título do plano"
              radius="5px"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Input
              type="number"
              label="Preço"
              deafultPlaceholder="Preço"
              radius="5px"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
            />
          </FieldContainer>
        </Row>
        <TextArea
          label="Resumo"
          deafultPlaceholder="Resumo"
          radius="5px"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setResume(e.target.value)}
        />
        <FieldContainer>
          <p>Serviços a serem incluidos:</p>
          <Select
            isMulti
            id="select"
            instanceId="select"
            name="colors"
            options={optionsSelect}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Selecionar..."
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => setOptions(e)}
          />
        </FieldContainer>
        <FieldContainer>
          <Include
            title="O que inclui:"
            label="Inclui"
            items={itemInclude}
            setInclude={setItemInclude}
          />
        </FieldContainer>
        <FieldContainer>
          <Include
            title="O que não inclui:"
            label="Não inclui"
            items={itemNotInclude}
            setInclude={setItemNotInclude}
          />
        </FieldContainer>
        <SaveButton type="button" onClick={() => onSubmit()}>
          Cadastrar
        </SaveButton>
      </WrapperForm>
    </Layout>
  )
}

export default Create
