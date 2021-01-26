import { ChangeEvent } from 'react'
import { FieldAddComponent, AddComponent, Button, Item } from './styles'
import { Error } from '../../../../../index'

const ItemDeliverable = ({ items, setDeliverable, Input, FaPlus, FiEdit, FiTrash }) => {
  const submitItemPreRequisites = (e) => {
    e.preventDefault()

    const newItem = items.item

    if (newItem.trim().length === 0) {
      setDeliverable({
        ...items,
        errorNoName: true,
      })
    } else {
      const selectedItems = items.items.find((item) => item.toLowerCase() === newItem.toLowerCase())
      if (selectedItems !== undefined && items.items.length >= 1) {
        setDeliverable({
          ...items,
          error: true,
        })
      } else {
        const updateItems = [newItem, ...items.items]

        setDeliverable({
          items: updateItems,
          item: '',
          editItem: false,
          error: false,
          errorNoName: false,
        })
      }
    }
  }

  const handleDeleteItemPreRequisites = (name) => {
    const filterItems = items.items.filter((item) => item !== name)
    setDeliverable({
      ...items,
      items: filterItems,
    })
  }

  const handleEditItemPreRequisites = (name) => {
    const filterItems = items.items.filter((item) => item !== name)
    const selectedItems = items.items.find((item) => item === name)
    setDeliverable({
      ...items,
      items: filterItems,
      item: selectedItems,
      editItem: true,
    })
  }

  return (
    <FieldAddComponent>
      <h4>Entregáveis</h4>
      {items.items.length >= 1 && items.error === true && (
        <Error>
          <p>Não é possivel adicionar um entregável o com o mesmo nome</p>
        </Error>
      )}
      {items.errorNoName === true && (
        <Error>
          <p>O campo não pode ficar vazio</p>
        </Error>
      )}
      <AddComponent>
        <Input
          type="text"
          placeholder="Entregável"
          value={items.item}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDeliverable({
              ...items,
              item: e.target.value,
            })
          }
        />
        <Button
          background={items.editItem === true ? 'rgba(0, 112, 192, 1)' : 'rgba(1, 170, 23, 0.95)'}
          onClick={(e) => submitItemPreRequisites(e)}
        >
          {items.editItem === true ? <FiEdit /> : <FaPlus />}
        </Button>
      </AddComponent>
      {items.items.map((item, index) => (
        <Item key={index}>
          <p>{item}</p>
          <div>
            <Button
              background="rgba(0,112,192, 1)"
              onClick={(e) => handleEditItemPreRequisites(item)}
            >
              <FiEdit />
            </Button>
            <Button
              background="rgba(243, 108, 91, 0.95)"
              onClick={(e) => handleDeleteItemPreRequisites(item)}
            >
              <FiTrash />
            </Button>
          </div>
        </Item>
      ))}
    </FieldAddComponent>
  )
}

export default ItemDeliverable
