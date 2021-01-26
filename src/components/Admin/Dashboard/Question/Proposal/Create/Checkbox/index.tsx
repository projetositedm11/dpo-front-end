import React, { ChangeEvent } from 'react'
import { FieldAddComponent, AddComponent, Button, Options } from './styles'
import { FaPlus, FaTrash } from 'react-icons/fa'

const Checkbox = ({ Input, setInputCheckBox, inputCheckBox }) => {
  const submitItemCheckBox = (e) => {
    e.preventDefault()

    const newItem = inputCheckBox.item

    if (newItem.trim().length === 0) {
      setInputCheckBox({
        ...inputCheckBox,
        errorName: 'Campo em branco',
      })
    } else {
      const updateItems = [newItem, ...inputCheckBox.items]

      setInputCheckBox({
        items: updateItems,
        item: '',
        errorName: '',
      })
    }
  }
  const handleDelete = (name) => {
    const filterItems = inputCheckBox.items.filter((item) => item !== name)
    setInputCheckBox({
      ...inputCheckBox,
      items: filterItems,
    })
  }
  return (
    <FieldAddComponent>
      <h4>Adicionar: </h4>
      <AddComponent>
        <Input
          type="text"
          placeholder="Opção"
          value={inputCheckBox.item}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputCheckBox({
              ...inputCheckBox,
              item: e.target.value,
            })
          }
        />
        <Button background="rgba(1, 170, 23, 0.95)" onClick={(e) => submitItemCheckBox(e)}>
          {' '}
          <FaPlus />{' '}
        </Button>
      </AddComponent>
      {inputCheckBox.items.map((i) => (
        <Options>
          <p>{i}</p>
          <Button background=" rgba(243, 108, 91, 0.95)" onClick={(e) => handleDelete(i)}>
            {' '}
            <FaTrash />{' '}
          </Button>
        </Options>
      ))}
    </FieldAddComponent>
  )
}

export default Checkbox
