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

export interface IUnit {
  id: string
  number: string
  hourValue: string
}

export interface IAddUnit {
  number: string
  hourValue: string
}

export interface ILogic {
  id: string
  service: string
  ifUnit: IUnit[]
}
export interface Option {
  label: string
  value: string
}

const Create = () => {
  const { push } = useRouter()

  const [error, setError] = useState<string>('')

  const [title, setTitle] = useState('')
  const [resume, setResume] = useState('')

  const [optionsSelectServices, setOptionsSelectServices] = useState<
    OptionsType<{ label: string; value: string }>
  >([])
  const [optionsSelect, setOptions] = useState<Option[]>([])
  const [inputType, setInputType] = useState<string>()

  const [inputCheckBox, setInputCheckBox] = useState({
    items: [],
    item: '',
    errorName: '',
  })

  const [inputsLogic, setInputsLogic] = useState<ILogic[]>([])
  console.log(inputsLogic)

  useEffect(() => {
    loadServices()
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

  function addNewLogic(): void {
    const newInputsLogic = inputsLogic.concat({
      id: uniqueId(),
      service: '',
      ifUnit: [],
    })

    setInputsLogic(newInputsLogic)
  }

  function removeLogic(id: string): void {
    const newInputsLogic = inputsLogic.filter((logic) => logic.id !== id)

    setInputsLogic(newInputsLogic)
  }

  function addSelectInputItem(value: string, id: string): void {
    inputsLogic.map((item) => {
      if (item.id === id) {
        item.service = value
      }

      return item
    })

    setInputsLogic(inputsLogic)
  }

  function addUnitLogic(unit: IAddUnit, id: string): void {
    const newInputsLogic = inputsLogic.map((item) => {
      if (item.id === id) {
        item.ifUnit = item.ifUnit.concat({
          id: uniqueId(),
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
      if (item.id === idItem) {
        item.ifUnit = item.ifUnit.filter((unit) => unit.id !== idUnit)
      }

      return item
    })

    setInputsLogic(newInputsLogic)
  }

  function handleInputType(value: string): void {
    setInputType(value)
    addNewLogic()
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

      await api.post('/admin/add/question', {
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

  return (
    <Layout>
      <Header title={`Criar pergunta para proposta - `} backLink="/admin-proposal-question" />
      <WrapperForm>
        {error && (
          <div style={{ marginTop: '15px' }}>
            <Error>{error}</Error>
          </div>
        )}
        <FieldContainer>
          <Input
            type="text"
            placeholder="*Título da pergunta"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type="text"
            placeholder="Descrição da pergunta"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setResume(e.target.value)}
          />
        </FieldContainer>
        <FieldContainer>
          <Select
            isMulti
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
                  key={item.id}
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

export default Create
