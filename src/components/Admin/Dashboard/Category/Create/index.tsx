import { FormEvent, useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { WrapperForm, SaveButton } from './styles'
import Header from '../../../components/Create/Header'
import Layout from '../../index'
import Input from '../../../../Bases/Input'
import api from '../../../../../services/api'
import { Error } from '../../../../index'

const Create: React.FC = () => {
  const { push } = useRouter()

  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (!title) {
        return setError('Campo vazio')
      }

      await api.post('/admin/add/category', { title })

      setError('')
      push('/L0gu1N@Dp0B4cK645olg-category')
    } catch (error) {
      console.log(error.message)
      return setError('Titulo já está em uso')
    }
  }

  return (
    <Layout>
      <Header title={`Criar categoria - ${title}`} backLink="/L0gu1N@Dp0B4cK645olg-category" />
      <WrapperForm onSubmit={(e) => onSubmit(e)}>
        {error && <Error>{error}</Error>}
        <Input
          type="text"
          placeholder="Título da categoria"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <SaveButton type="submit">Criar</SaveButton>
      </WrapperForm>
    </Layout>
  )
}

export default Create
