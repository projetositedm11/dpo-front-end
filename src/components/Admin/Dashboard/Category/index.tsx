import { useEffect, useState } from 'react'
import Layout from '../index'
import Header from '../../components/Header'
import { Container, ErrorContainer, Loading } from './styles'
import Item from './Item'
import api from '../../../../services/api'
import { Error } from '../../../index'
import PulseLoader from 'react-spinners/PulseLoader'

interface Category {
  _id: string
  title: string
  services?: string[]
}

const Category: React.FC = () => {
  const [categories, setCategory] = useState<Category[]>([])
  const [error, setError] = useState({
    show: false,
    message: '',
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCategories()

    async function loadCategories(): Promise<void> {
      try {
        const { data } = await api.get('/admin/all/categories')

        setCategory(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function deleteCategory(id: string): Promise<void> {
    try {
      await api.delete(`/admin/remove/category/${id}`)

      const newCategories = categories.filter(({ _id }) => _id !== id)

      setCategory(newCategories)
    } catch (error) {
      if (error.response.status === 400) {
        setError({
          show: true,
          message: error.response.data.message,
        })
      }
    }
  }

  return (
    <Layout>
      <Header title="Categoria" link="/L0gu1N@Dp0B4cK645olg-create-category" />
      <Container>
        <ErrorContainer>
          {error.show === true && (
            <Error>
              <p>{error.message}</p>
            </Error>
          )}
        </ErrorContainer>
        {loading === true ? (
          <Loading>
            <p>Carregando...</p>
            <PulseLoader size={20} color={'rgba(0,112,192, 1)'} />
          </Loading>
        ) : (
          categories &&
          categories.map((category) => (
            <Item
              key={category._id}
              id={category._id}
              title={category.title}
              relatedServices={category.services ?? []}
              deleteItem={deleteCategory}
            />
          ))
        )}
      </Container>
    </Layout>
  )
}

export default Category
