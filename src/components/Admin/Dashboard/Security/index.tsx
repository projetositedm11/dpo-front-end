import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Layout from '../index'
import Header from '../../components/Header'
import { Content, Button, Related, Text, Row, Container, AlertContainer } from './styles'
import { Input, Error, Success } from '../../../index'
import api from '../../../../services/api'

const Security: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    loginNumber: '',
    loading: true,
  })
  const [lastPassword, setLastPassword] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  useEffect(() => {
    loadUser()
    async function loadUser() {
      try {
        const { data } = await api.get('/admin/security/profile')
        console.log(data)
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (!lastPassword || !password) {
        return setError('Campo em branco')
      }

      await api.put('/admin/security/changePassword', {
        lastPassword,
        password,
      })

      setError('')
      setLastPassword('')
      setPassword('')
      setSuccess('Alterado com sucesso')

      setTimeout(() => {
        setSuccess('')
      }, 3000)
    } catch (error) {
      error.response.data.errors.map((erro) => {
        setError(erro.message)
      })
      setLastPassword('')
      setPassword('')
    }
  }

  return (
    <Layout>
      <Header title="Segurança" showAdd={false} />
      <Container>
        <Content>
          <Row>
            <Related>
              <Text>
                Nome: <span>{user?.name}</span>
              </Text>
            </Related>
            <Related>
              <Text>
                Número de login: <span>{user?.loginNumber}</span>
              </Text>
            </Related>
          </Row>
          <Row>
            <Related>
              <Text>
                Email: <span>{user?.email}</span>
              </Text>
            </Related>
          </Row>
        </Content>
        {error && (
          <AlertContainer>
            <Error>{error}</Error>
          </AlertContainer>
        )}
        {success && (
          <AlertContainer>
            <Success>{success}</Success>
          </AlertContainer>
        )}
        <Content onSubmit={(e) => onSubmit(e)}>
          <Related>
            <Text>
              <span>Redefinir senha:</span>
            </Text>
            <Row>
              <section>
                <Input
                  type="password"
                  placeholder="Senha antiga"
                  radius="5px"
                  value={lastPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLastPassword(e.target.value)}
                />
              </section>
              <section>
                <Input
                  type="password"
                  placeholder="Nova senha"
                  radius="5px"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </section>
            </Row>
          </Related>
          <Button type="submit" disabled={!password || !lastPassword}>
            Salvar
          </Button>
        </Content>
      </Container>
    </Layout>
  )
}

export default Security
