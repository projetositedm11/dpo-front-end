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
import ItemPreRequisites from '../Create/components/itemPreRequisites'
import ItemDeliverable from '../Create/components/itemDeliverable'
import { DefaultService } from '../../../../../assets'
import TextEditor from '../TextEditor'
import fileSize from 'filesize'

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

const Edit = ({ id }) => {
  const { push } = useRouter()

  const [categoryOptions, setCategoryOptions] = useState<Option[]>([])
  const [optionsSelect, setOptions] = useState<Option[]>([])
  const [file, setFile] = useState<IFile>({
    name: 'nenhuma imagem selecionada',
    preview: DefaultService,
    readableSize: '',
  })
  const { name, preview, readableSize } = file

  const [description, setDescription] = useState<any>([
    {
      kind: 'paragraph',
      children: [{ text: '' }],
    },
  ])

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
  const [selectCategory, setSelectCategory] = useState({
    label: '',
    value: '',
  })

  useEffect(() => {
    loadCategories()
    loadService(id)
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

    async function loadService(id): Promise<void> {
      try {
        const { data } = await api.get(`/admin/service/${id}`)
        console.log(data.category._id)

        const prerequisitesValues = []
        const deliverablesValues = []
        const includedServicesValues = []
        data.prerequisites.map((i) => {
          prerequisitesValues.push(i)
        })

        data.deliverable.map((i) => {
          deliverablesValues.push(i)
        })

        setPreRequisites({
          ...itemPreRequisites,
          items: prerequisitesValues,
        })

        setDeliverable({
          ...itemDeliverable,
          items: deliverablesValues,
        })

        data.prerequisitesService.map((i) => {
          includedServicesValues.push({
            label: i.title,
            value: i._id,
          })
        })

        setTitle(data.title)
        setResume(data.resume)
        setCategory(data.category._id)
        setSelectCategory({
          label: data.category.title,
          value: data.category._id,
        })
        setDescription(data.description)
        setRunningHours(data.runningHours)
        setFixedHours(data.fixedHours)
        setRetest(data.retest)
        setHourValue(data.hourValue)
        setOptionsSelectServices(includedServicesValues)
        setFile({
          ...file,
          preview: data.image.url || DefaultService,
        })
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

      await api.put(`/admin/edit/service/${id}`, {
        title,
        description,
        resume,
        fixedHours,
        retest,
        hourValue,
        runningHours,
        category,
        prerequisitesService: prerequisitesServices,
        prerequisites: itemPreRequisites.items,
        deliverable: itemDeliverable.items,
      })

      console.log(
        title,
        description,
        resume,
        fixedHours,
        retest,
        hourValue,
        runningHours,
        category,
        prerequisitesServices,
        itemPreRequisites.items,
        itemDeliverable.items,
      )

      if (file) {
        const data = new FormData()
        data.append('file', file.file)
        await api.put(`/admin/uploadImage/${id}`, data)
      }

      push('/L0gu1N@Dp0B4cK645olg-service')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(selectCategory)
  console.log(category)

  console.log(optionsSelectServices)

  return (
    <Layout>
      <Header title={`Editar serviço - ${title}`} backLink="/L0gu1N@Dp0B4cK645olg-service" />
      <WrapperForm>
        <FieldContainer>
          <Input
            type="text"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="*Título do serviço"
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="text"
            value={resume}
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
            value={selectCategory}
            instanceId="select-category"
            name="select-categories"
            options={categoryOptions}
            className="basic-multi-select-category"
            classNamePrefix="select-category"
            placeholder="Selecionar..."
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => {
              setCategory(e.value)
              setSelectCategory({
                label: e.label,
                value: e.value,
              })
            }}
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
            value={optionsSelectServices}
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

export default Edit
