import { useRouter } from 'next/router'
import RecaptchaGoogle from 'react-google-recaptcha'
import { FormEvent, useState } from 'react'
import {
  Container,
  Form,
  LogoContainer,
  Title,
  Input,
  Button,
  BackToLogin,
  Recaptcha,
  AlertContainer,
} from './styles'
import { Logo } from '../../../assets'
import api from '../../../services/api'
import { motion } from 'framer-motion'
import { Success, Error } from '../../../components'

interface Props {
  token: string
}

const ResetPassword: React.FC<Props> = ({ token }) => {
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [recapcha, setRecapcha] = useState<boolean>(false)
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [passwordComfirmation, setPasswordComfirmation] = useState<string>('')
  const [number, setNumber] = useState<string>('')

  const { push } = useRouter()

  async function onSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()

    try {
      setError('')
      setSuccess('')
      setOnLoad(true)

      if (!password || !passwordComfirmation || !recapcha || !number) {
        setOnLoad(false)
        return setError('Campo em branco')
      }

      if (password !== passwordComfirmation) {
        setOnLoad(false)
        return setError('As senhas não coincidem')
      }
      setError('')

      await api.post(`/auth/resetPassword/${token}`, {
        password,
        loginNumber: number,
      })

      setSuccess('Alterado com sucesso')
      setOnLoad(false)
      setTimeout(() => {
        push('/L0gu1N@Dp0B4cK645olg')
      }, 2000)
    } catch (error) {
      setOnLoad(false)
      return setError('Senha inválida')
    }
  }

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Container>
        <Form onSubmit={(e) => onSubmit(e)}>
          <LogoContainer src={Logo} alt="dm11-logo" />
          <Title>Resetar senha</Title>
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
          <>
            <Input
              type="number"
              placeholder="Número de identificação"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirmar senha"
              value={passwordComfirmation}
              onChange={(e) => setPasswordComfirmation(e.target.value)}
            />
            <BackToLogin type="button" onClick={() => push('/admin')}>
              Voltar ao login
            </BackToLogin>
            <Recaptcha>
              <RecaptchaGoogle
                onChange={() => setRecapcha(!recapcha)}
                sitekey="6Lee5QoaAAAAACDG46h5oXutMgy4B_BQndbSJEcO"
              />
            </Recaptcha>
          </>
          <Button type="submit" disabled={onLoad}>
            Alterar
          </Button>
        </Form>
      </Container>
    </motion.div>
  )
}

export default ResetPassword
