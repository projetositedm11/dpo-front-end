import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../index'

import Header from '../../../../components/Create/Header'
import Input from '../../../../../Bases/Input'
import Select, { OptionsType } from 'react-select'
import { WrapperForm, FieldContainer, AddLogic, ContainerLogic, SaveButton } from './styles'
import api from '../../../../../../services/api'
import Logic from './Logic'
import { uniqueId } from 'lodash'
import Checkbox from './Checkbox'
import { Error } from '../../../../..'

import cryptoRandomString from 'crypto-random-string'

export interface IUnit {
  _id: string
  number: string
  hourValue: string
}

export interface IAddUnit {
  number: string
  hourValue: string
}

export interface ILogic {
  _id: string
  service: any
  ifUnit: IUnit[]
}
export interface Option {
  label: string
  value: string
}

const Edit = ({ id }) => {
  const { push } = useRouter()

  const [error, setError] = useState<string>('')

  const [title, setTitle] = useState('')
  const [resume, setResume] = useState('')

  const [optionsSelectServices, setOptionsSelectServices] = useState<
    OptionsType<{ label: string; value: string }>
  >([])
  const [optionsSelect, setOptions] = useState<Option[]>([])
  const [inputType, setInputType] = useState<string>()
  const [selectedInputType, setSelectedInputType] = useState({
    label: '',
    value: '',
  })
  const [inputCheckBox, setInputCheckBox] = useState({
    items: [],
    item: '',
    errorName: '',
  })

  const [inputsLogic, setInputsLogic] = useState<ILogic[]>([])
  console.log(inputsLogic)

  useEffect(() => {
    loadServices()
    loadQuestion(id)
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

  async function loadQuestion(id): Promise<void> {
    try {
      const { data } = await api.get(`/admin/question/${id}`)

      const services = []

      data.services.map((i) => {
        services.push({
          label: i.title,
          value: i._id,
        })
      })

      setTitle(data.title)
      setResume(data.resume)
      setSelectedInputType({
        value: data.kind,
        label: data.kind,
      })
      setInputType(data.kind)
      setInputsLogic(data.logic)
      setOptionsSelectServices(services)
      if (data.kind === 'Checkbox') {
        setInputCheckBox({
          ...inputCheckBox,
          items: data.checkbox,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function addNewLogic(): void {
    const newInputsLogic = inputsLogic.concat({
      _id: cryptoRandomString({ length: 24 }),
      service: '',
      ifUnit: [],
    })

    setInputsLogic(newInputsLogic)
  }

  function removeLogic(id: string): void {
    const newInputsLogic = inputsLogic.filter((logic) => logic._id !== id)
    console.log(newInputsLogic)
    setInputsLogic(newInputsLogic)
  }

  function addSelectInputItem(value: string, label: string, item: string): void {
    const update = inputsLogic?.map((service) =>
      service._id === item
        ? {
            ...service,
            service: {
              title: label,
              _id: value,
            },
          }
        : service,
    )

    setInputsLogic(update)
  }

  function addUnitLogic(unit: IAddUnit, id: string): void {
    const newInputsLogic = inputsLogic.map((item) => {
      if (item._id === id) {
        item.ifUnit = item.ifUnit.concat({
          _id: cryptoRandomString({ length: 24 }),
          number: unit.number,
          hourValue: unit.hourValue,
        })
      }

      return item
    })

    setInputsLogic(newInputsLogic)
  }

  function removeUnitLogic(idItem: string, idUnit: string): void {
    const newInputsLogic = inputsLogic.map((item) => {
      if (item._id === idItem) {
        item.ifUnit = item.ifUnit.filter((unit) => unit._id !== idUnit)
      }

      return item
    })

    setInputsLogic(newInputsLogic)
  }

  function handleInputType(value: string): void {
    setInputType(value)
  }

  console.log(inputCheckBox)

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (!title || optionsSelectServices.length <= 0 || !inputType) {
        scrollTo(0, 0)
        return setError('Campo em branco')
      }

      // if (inputType === 'number') {
      //   if (inputsLogic.length < 0) {
      //     scrollTo(0, 0)
      //     return setError('Campo em branco')
      //   }

      //   inputsLogic.map((item) => {
      //     if (item.ifUnit.length <= 0) {
      //       scrollTo(0, 0)
      //       return setError('Campo em branco')
      //     }
      //   })
      // }

      const includedServices: string[] = []

      optionsSelectServices.map((option) => {
        includedServices.push(option.value)
      })

      await api.put(`/admin/edit/question/${id}`, {
        title,
        resume,
        kind: inputType,
        services: includedServices,
        logic: inputsLogic,
        checkbox: inputCheckBox.items,
      })
      push('/admin-proposal-question')
      setError('')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(inputsLogic)

  return (
    <Layout>
      <Header title={`Editar pergunta proposta`} backLink="/admin-proposal-question" />
      <WrapperForm>
        {error && (
          <div style={{ marginTop: '15px' }}>
            <Error>{error}</Error>
          </div>
        )}
        <FieldContainer>
          <Input
            type="text"
            value={title}
            placeholder="*Título da pergunta"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="text"
            value={resume}
            placeholder="Descrição da pergunta"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setResume(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Select
            isMulti
            value={optionsSelectServices}
            id="select-services"
            instanceId="select-services"
            inputId="select-services"
            options={optionsSelect}
            className="basic-multi-select-service"
            classNamePrefix="select-service"
            placeholder="Selecionar serviços relacionados"
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => setOptionsSelectServices(e)}
          />
        </FieldContainer>
        <FieldContainer>
          <Select
            id="fieldType"
            value={selectedInputType}
            instanceId="fieldType"
            name="fieldType-colors"
            placeholder="Selecionar tipo de campo de resposta"
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            options={[
              {
                label: 'Numérico',
                value: 'Numérico',
              },
              {
                label: 'Texto',
                value: 'Texto',
              },
              {
                label: 'Radio Option - Sim ou não',
                value: 'Radio Option',
              },
            ]}
            className="basic-multi-select"
            classNamePrefix="fieldType"
            onChange={(e) => handleInputType(e.value)}
          />
        </FieldContainer>

        {/* {inputType === 'Checkbox' && (
          <Checkbox
            Input={Input}
            setInputCheckBox={setInputCheckBox}
            inputCheckBox={inputCheckBox}
          />
        )} */}

        {inputType === 'Numérico' && (
          <>
            <ContainerLogic>
              <AddLogic onClick={() => addNewLogic()}>Adicionar lógica</AddLogic>
            </ContainerLogic>
            {inputsLogic &&
              inputsLogic.map((item) => (
                <Logic
                  key={item._id}
                  item={item}
                  removeLogic={removeLogic}
                  addSelectInputItem={addSelectInputItem}
                  addUnitLogic={addUnitLogic}
                  removeUnitLogic={removeUnitLogic}
                  optionsSelect={optionsSelect}
                />
              ))}
          </>
        )}
        <SaveButton type="submit" onClick={(e) => onSubmit(e)}>
          Salvar
        </SaveButton>
      </WrapperForm>
    </Layout>
  )
}

export default Edit
