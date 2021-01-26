import { useEffect, FormEvent, useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { WrapperForm, SaveButton } from './styles'
import Header from '../../../components/Create/Header'
import Layout from '../../index'
import Input from '../../../../Bases/Input'
import token from '../../../../../utils/setToken'
import api from '../../../../../services/api'
import { Error } from '../../../../index'

interface Props {
  id: string
}

const Edit: React.FC<Props> = ({ id }) => {
  const { push } = useRouter()

  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    token()
    loaduser()
    loadCategory()

    async function loaduser(): Promise<void> {
      try {
        await api.get('/auth/loadUser')
      } catch (error) {
        push('/admin')
      }
    }

    async function loadCategory(): Promise<void> {
      try {
        const { data } = await api.get(`/admin/category/${id}`)

        setTitle(data.title)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (!title) {
        return setError('Campo vazio')
      }

      await api.put(`/admin/edit/category/${id}`, { title })

      setError('')
      push('/admin-category')
    } catch (error) {
      return setError('Titulo já está em uso')
    }
  }

  return (
    <Layout>
      <Header title="Editar categoria" backLink="/admin-category" />
      <WrapperForm onSubmit={(e) => onSubmit(e)}>
        {error && <Error>{error}</Error>}
        <Input
          type="text"
          value={title}
          placeholder="Título da categoria"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <SaveButton type="submit">Editar</SaveButton>
      </WrapperForm>
    </Layout>
  )
}

export default Edit
