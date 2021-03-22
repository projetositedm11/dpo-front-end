import { ChangeEvent, FormEvent, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiEdit, FiTrash } from 'react-icons/fi'

import { FieldAddComponent, AddComponent, Button, Item } from './styles'

import { Error, Input } from '../../../../../../index'
import { uniqueId } from 'lodash'

const Include = ({ items, setInclude, title, label }) => {
  const [titleIncluded, setTitleIncluded] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  function handleAddIncluded(e: FormEvent): void {
    e.preventDefault()
    if (titleIncluded) {
      const itemIncluded = {
        id: uniqueId(),
        title: titleIncluded,
        description,
      }
      const itemsIncluded = items.concat(itemIncluded)

      setInclude(itemsIncluded)
      setTitleIncluded('')
      setDescription('')
    }
  }

  function removeItemIncluded(id: string): void {
    const newItems = items.filter((item) => item.id !== id)

    setInclude(newItems)
  }

  return (
    <FieldAddComponent>
      <h4>{title}</h4>
      <AddComponent>
        <Input
          type="text"
          placeholder="Título"
          value={titleIncluded}
          onChange={(e) => setTitleIncluded(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          type="submit"
          background={'rgba(1, 170, 23, 0.95)'}
          onClick={(e) => handleAddIncluded(e)}
        >
          <FaPlus />
        </Button>
      </AddComponent>
      {items.map((item: any, index: string) => (
        <Item key={index}>
          <div>
            <label> Título: </label>
            <p>{item.title}</p>
            <label> Descrição: </label>
            <p>
              {item.description && item.description
                ? item.description
                : 'Nenhuma descrição adicionada.'}
            </p>
          </div>
          <div>
            <Button
              type="button"
              background="rgba(243, 108, 91, 0.95)"
              onClick={() => removeItemIncluded(item.id)}
            >
              <FiTrash />
            </Button>
          </div>
        </Item>
      ))}
    </FieldAddComponent>
  )
}

export default Include
