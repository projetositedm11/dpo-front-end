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
  addSelectInputItem(value: string, label: string, id: string): void
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

  const serviceSelected = {
    label: item.service.title,
    value: item.service._id,
  }

  return (
    <FieldLogic>
      <Header>
        <h5>Lógica</h5>
        <Button onClick={() => removeLogic(item._id)}>
          <FaTrash />
        </Button>
      </Header>
      <FieldContainer>
        <Select
          value={serviceSelected}
          id={`select-services-${item._id}`}
          instanceId={`select-services-${item._id}`}
          inputId={`select-services-${item._id}`}
          options={optionsSelect}
          name={`service-${item._id}`}
          className="basic-multi-select-service"
          classNamePrefix={`select-services-${item._id}`}
          placeholder="Selecionar serviço relacionado"
          noOptionsMessage={() => 'Nenhuma opção encontrada'}
          onChange={(e) => addSelectInputItem(e.value, e.label, item._id)}
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
        <AddLogic onClick={() => handleAddUnit(item._id)}>
          <FaPlus />
        </AddLogic>
      </FieldIfAnswer>
      {item.ifUnit &&
        item.ifUnit.map((unit) => (
          <Answers key={unit._id}>
            <div>
              <label> Resposta: </label>
              <p> {unit.number} </p>
            </div>
            <div>
              <label> Valor hora: </label>
              <p> R$ {unit.hourValue}</p>
            </div>

            <RemoveLogic onClick={() => removeUnitLogic(item._id, unit._id)}>
              <FaTrash />
            </RemoveLogic>
          </Answers>
        ))}
    </FieldLogic>
  )
}

export default Logic
