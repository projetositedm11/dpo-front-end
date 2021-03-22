import { useEffect, FormEvent, useState, ChangeEvent } from 'react'

import Header from '../../../components/Create/Header'
import Layout from '../../index'
import Input from '../../../../Bases/Input'
import { useRouter } from 'next/router'

import Select, { OptionsType } from 'react-select'
import api from '../../../../../services/api'
import {
  WrapperForm,
  SaveButton,
  FieldContainer,
  Textarea,
  ContainerFinalValue,
  InputFile,
} from './styles'
import { FaPlus } from 'react-icons/fa'
import { FiEdit, FiTrash } from 'react-icons/fi'
import ItemPreRequisites from './components/itemPreRequisites'
import ItemDeliverable from './components/itemDeliverable'
import TextEditor from '../TextEditor'
import { DefaultService } from '../../../../../assets'
import fileSize from 'filesize'
import { Bold } from '../../Home/styles'

interface Option {
  label: string
  value: string
}

interface IFile {
  file?: File
  name: string
  readableSize: string
  preview: string
}

const Create: React.FC = () => {
  const { push } = useRouter()
  const [description, setDescription] = useState<any>([
    {
      kind: 'paragraph',
      children: [{ text: '' }],
    },
  ])

  const [categoryOptions, setCategoryOptions] = useState<Option[]>([])
  const [optionsSelect, setOptions] = useState<Option[]>([])

  const [optionsSelectServices, setOptionsSelectServices] = useState<
    OptionsType<{ label: string; value: string }>
  >([])

  const [itemPreRequisites, setPreRequisites] = useState({
    items: [],
    item: '',
    editItem: false,
    error: false,
    errorNoName: false,
  })

  const [itemDeliverable, setDeliverable] = useState({
    items: [],
    item: '',
    editItem: false,
    error: false,
    errorNoName: false,
  })

  const [title, setTitle] = useState<string>('')
  const [resume, setResume] = useState<string>('')
  const [fixedHours, setFixedHours] = useState<string>('')
  const [retest, setRetest] = useState<string>('')
  const [runningHours, setRunningHours] = useState<string>('')
  const [hourValue, setHourValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [file, setFile] = useState<IFile>({
    name: 'nenhuma imagem selecionada',
    preview: DefaultService,
    readableSize: '',
  })
  const { name, preview, readableSize } = file

  useEffect(() => {
    loadCategories()
    loadServices()

    async function loadCategories(): Promise<void> {
      try {
        const { data } = await api.get('/admin/all/categories')

        const newOptions: Option[] = []

        data.map((category: any) => {
          newOptions.push({
            label: category.title,
            value: category._id,
          })
        })

        setCategoryOptions(newOptions)
      } catch (error) {
        console.log(error)
      }
    }

    async function loadServices(): Promise<void> {
      try {
        const { data } = await api.get('/admin/services')

        const newOptionsServices: Option[] = []

        data.map((service: any) => {
          newOptionsServices.push({
            label: service.title,
            value: service._id,
          })
        })

        setOptions(newOptionsServices)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function onSubmit(): Promise<void> {
    try {
      const prerequisitesServices: string[] = []

      optionsSelectServices.map((option) => {
        prerequisitesServices.push(option.value)
      })

      const fileForm = new FormData()

      fileForm.append('file', file.file)

      const { data } = await api.post('/admin/add/service', {
        title,
        resume,
        description,
        fixedHours,
        hourValue,
        prerequisitesService: prerequisitesServices,
        prerequisites: itemPreRequisites.items,
        category,
        deliverable: itemDeliverable.items,
        retest,
        runningHours,
      })

      await api.put(`/admin/uploadImage/${data._id}`, fileForm)

      push('/L0gu1N@Dp0B4cK645olg-service')
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
    }
  }

  return (
    <Layout>
      <Header title={`Criar serviço - ${title}`} backLink="/L0gu1N@Dp0B4cK645olg-service" />
      <WrapperForm>
        <FieldContainer>
          <Input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="*Título do serviço"
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="text"
            placeholder="*Resumo"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setResume(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <TextEditor description={description} setDescription={setDescription} />
        </FieldContainer>
        <FieldContainer>
          <p style={{ marginBottom: '12px', marginTop: '20px' }}>*Categoria:</p>
          <Select
            id="select-category"
            instanceId="select-category"
            name="select-categories"
            options={categoryOptions}
            className="basic-multi-select-category"
            classNamePrefix="select-category"
            placeholder="Selecionar..."
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => setCategory(e.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="number"
            value={runningHours}
            placeholder="* Horas de execução"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRunningHours(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="number"
            value={hourValue}
            placeholder="*Valor hora"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHourValue(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="number"
            value={fixedHours}
            placeholder="Horas fixas"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFixedHours(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="number"
            value={retest}
            placeholder="Reteste / Margem de negociação ( % )"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRetest(e.target.value)}
          />
        </FieldContainer>

        {/* <ContainerFinalValue>
          <h3>Cálculo valor final:</h3>
          <p>
            Horas Fixas: <span> {fixedHours} </span>
          </p>
          <p>
            Valor hora: <span> {hourValue} </span>
          </p>
          <p>
            Valor minuto: <span> {isNaN(valueMinute) !== true ? valueMinute.toFixed(2) : ''} </span>
          </p>
          <p>
            Reteste: <span> {`${isNaN(parseFloat(retest)) === true ? '' : `${retest}%`} `}</span>
          </p>

          <p>
            Valor Final:{' '}
            <b>
              {isNaN(finalValue) === true
                ? ' Não foi possível chegar ao resultado'
                : `R$ ${finalValue.toLocaleString().replace(',', '.')}`}
            </b>
          </p>
        </ContainerFinalValue> */}

        <ItemPreRequisites
          items={itemPreRequisites}
          setPreRequisites={setPreRequisites}
          Input={Input}
          FaPlus={FaPlus}
          FiEdit={FiEdit}
          FiTrash={FiTrash}
        />

        <ItemDeliverable
          items={itemDeliverable}
          setDeliverable={setDeliverable}
          Input={Input}
          FaPlus={FaPlus}
          FiEdit={FiEdit}
          FiTrash={FiTrash}
        />

        <FieldContainer>
          <p style={{ marginBottom: '12px', marginTop: '20px' }}>
            Pré-requisitos relacionados a serviços:
          </p>
          <Select
            isMulti
            id="select-services"
            instanceId="select-services"
            inputId="select-services"
            options={optionsSelect}
            className="basic-multi-select-service"
            classNamePrefix="select-service"
            placeholder="Selecionar..."
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => setOptionsSelectServices(e)}
          />
        </FieldContainer>
        <FieldContainer>
          <p style={{ marginBottom: '12px', marginTop: '20px' }}>Adicionar imagem:</p>
          <InputFile url={preview}>
            <section>
              <div />
              <p>{readableSize}</p>
            </section>
            <label htmlFor="file">
              <div>Escolher imagem</div>
              <p>{name}</p>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                const { name, size } = e.target
                setFile({
                  name,
                  readableSize: fileSize(size, { bits: true }),
                  file: e.target.files[0],
                  preview: URL.createObjectURL(e.target.files[0]),
                })
              }}
            />
          </InputFile>
        </FieldContainer>
        <SaveButton onClick={() => onSubmit()}>Salvar</SaveButton>
      </WrapperForm>
    </Layout>
  )
}

export default Create
