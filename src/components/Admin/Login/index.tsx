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
  LabelNumber,
  ForgotPassword,
  Recaptcha,
  AlertContainer,
} from './styles'
import { Logo } from '../../../assets'
import api from '../../../services/api'
import { motion } from 'framer-motion'
import token from '../../../utils/setToken'
import { Success, Error } from '../../../components'

const Login: React.FC = () => {
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [recapcha, setRecapcha] = useState<boolean>(false)
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [number, setNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPass, setShowPass] = useState<boolean>(false)
  const [forgotPassword, setForgotPassword] = useState<boolean>(false)

  const { push } = useRouter()

  async function onSubmit(e: FormEvent): Promise<void> {
    try {
      e.preventDefault()

      if (forgotPassword) {
        setOnLoad(true)
        setSuccess('')
        // call api to forgot password
        if (number.length <= 0) {
          setOnLoad(false)
          return setError('Campo em branco')
        }

        try {
          await api.post('/auth/forgotPassword', { loginNumber: number })

          setError('')
          setSuccess('Link enviado')
          setOnLoad(false)
        } catch (error) {
          setOnLoad(false)
          return setError('PIN inválido')
        }
      } else if (!showPass) {
        try {
          setOnLoad(true)
          setSuccess('')
          // call api to validate pin
          if (number.length <= 0) {
            return setError('Campo em branco')
          }

          if (!recapcha) {
            return setError('É necessário confirmar que você não é um robô')
          }
          setError('')

          const { data } = await api.post('/auth/checkLoginNumber', { loginNumber: number })

          if (data.success) {
            setError('')
            setShowPass(true)
          }

          setOnLoad(false)
        } catch (error) {
          setOnLoad(false)
          return setError('PIN inválido')
        }
      } else {
        try {
          setError('')
          setSuccess('')
          setOnLoad(true)
          // call api to validate password
          if (password.length <= 0) {
            return setError('Campo em branco')
          }
          setError('')

          const { data } = await api.post('/auth/login', {
            loginNumber: number,
            password,
          })

          localStorage.setItem('token', JSON.stringify(data.token))
          token()

          setOnLoad(false)
          push('/L0gu1N@Dp0B4cK645olg-dashboard')
        } catch (error) {
          setOnLoad(false)
          return setError('Senha inválida')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleForgotPassword() {
    setError('')
    setShowPass(false)
    setForgotPassword(true)
  }

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Container>
        <Form onSubmit={(e) => onSubmit(e)}>
          <LogoContainer src={Logo} alt="dm11-logo" />
          <Title changeFont={forgotPassword}>
            {forgotPassword ? 'Enviar link de redefinição de senha' : 'Acesse a sua conta'}
          </Title>
          {showPass && (
            <LabelNumber>
              Número de identificação: <span>{number}</span>
            </LabelNumber>
          )}
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
          {showPass ? (
            <>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <Input
                type="number"
                placeholder="Número de identificação"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Recaptcha>
                <RecaptchaGoogle
                  onChange={() => setRecapcha(!recapcha)}
                  sitekey="6Lee5QoaAAAAACDG46h5oXutMgy4B_BQndbSJEcO"
                />
              </Recaptcha>
            </>
          )}
          <Button type="submit" disabled={onLoad}>
            {forgotPassword ? 'Enviar' : 'Entrar'}
          </Button>
          {showPass && (
            <ForgotPassword type="submit" onClick={() => handleForgotPassword()}>
              Esqueceu a senha?
            </ForgotPassword>
          )}
          {forgotPassword && (
            <ForgotPassword
              type="button"
              onClick={() => {
                setForgotPassword(false)
                setShowPass(true)
              }}
            >
              Já tem uma conta? Entrar
            </ForgotPassword>
          )}
        </Form>
      </Container>
    </motion.div>
  )
}

export default Login
