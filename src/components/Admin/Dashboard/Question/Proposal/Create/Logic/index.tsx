import { FaPlus, FaTrash } from 'react-icons/fa'
import Select from 'react-select'
import { Input } from '../../../../../../index'
import { FieldContainer } from '../styles'
import {
  FieldLogic,
  FieldIfAnswer,
  AddLogic,
  Header,
  Button,
  RemoveLogic,
  FieldAnswers,
  Answers,
} from './styles'
import { ILogic, IAddUnit } from '../index'
import { useState } from 'react'

interface IOption {
  label: string
  value: string
}
interface Props {
  removeLogic(id: string): void
  addSelectInputItem(value: string, id: string): void
  addUnitLogic(unit: IAddUnit, id: string): void
  removeUnitLogic(idItem: string, idUnit: string): void
  optionsSelect: IOption[]
  item: ILogic
}

const Logic: React.FC<Props> = ({
  optionsSelect,
  removeLogic,
  addSelectInputItem,
  addUnitLogic,
  removeUnitLogic,
  item,
}) => {
  const [hourValue, setHourValue] = useState<string>('')
  const [res, setRes] = useState<string>('')

  function handleAddUnit(id: string): void {
    if (hourValue && res) {
      const unit = {
        hourValue,
        number: res,
      }

      addUnitLogic(unit, id)
      setHourValue('')
      setRes('')
    }
  }

  return (
    <FieldLogic>
      <Header>
        <h5>Lógica</h5>
        <Button onClick={() => removeLogic(item.id)}>
          <FaTrash />
        </Button>
      </Header>
      <FieldContainer>
        <Select
          id={`select-services-${item.id}`}
          instanceId={`select-services-${item.id}`}
          inputId={`select-services-${item.id}`}
          options={optionsSelect}
          name={`service-${item.id}`}
          className="basic-multi-select-service"
          classNamePrefix={`select-services-${item.id}`}
          placeholder="Selecionar serviço relacionado"
          noOptionsMessage={() => 'Nenhuma opção encontrada'}
          onChange={(e) => addSelectInputItem(e.value, item.id)}
        />
      </FieldContainer>
      <FieldIfAnswer>
        <Input
          type="number"
          value={res}
          min="0"
          placeholder="*Resposta"
          onChange={(e) => setRes(e.target.value)}
        />
        <Input
          type="number"
          value={hourValue}
          min="0"
          placeholder="*Valor hora"
          onChange={(e) => setHourValue(e.target.value)}
        />
        <AddLogic onClick={() => handleAddUnit(item.id)}>
          <FaPlus />
        </AddLogic>
      </FieldIfAnswer>
      {item.ifUnit &&
        item.ifUnit.map((unit) => (
          <Answers key={unit.id}>
            <div>
              <label> Resposta: </label>
              <p> {unit.number} </p>
            </div>
            <div>
              <label> Valor hora: </label>
              <p> R$ {unit.hourValue}</p>
            </div>

            <RemoveLogic onClick={() => removeUnitLogic(item.id, unit.id)}>
              <FaTrash />
            </RemoveLogic>
          </Answers>
        ))}
    </FieldLogic>
  )
}

export default Logic
