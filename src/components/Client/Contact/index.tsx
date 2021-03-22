import { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'
import RecaptchaGoogle from 'react-google-recaptcha'
import emailjs from 'emailjs-com'
import { Input, TextArea, CheckBox, Success, Error } from '../../index'
import Layout from '../Layout'
import validator from 'validator'
import {
  Container,
  Header,
  Title,
  Phrase,
  Form,
  Paragrath,
  CheckBoxContainer,
  Recaptcha,
  AlertContainer,
} from './styles'

interface FormData {
  name: string
  last_name: string
  company: string
  email: string
  role: string
  phone: string
  message: string
  service_terms: boolean
}

const Contact: React.FC = () => {
  const [recapcha, setRecapcha] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    last_name: '',
    message: '',
    phone: '',
    role: '',
    service_terms: false,
  })
  const { name, company, email, last_name, message, phone, role, service_terms } = formData

  function onChange(e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
  }

  function onSubmit(e: FormEvent): void {
    e.preventDefault()
    setOnLoad(true)

    if (
      !name ||
      !company ||
      !email ||
      !last_name ||
      !message ||
      !phone ||
      !role ||
      !service_terms ||
      !recapcha
    ) {
      setOnLoad(false)
      return setError('Campo em branco, preencha todos os campos para continuar')
    }

    if (!validator.isEmail(email)) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    let emailArray = email.split('@gmail.com')

    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@hotmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@zoho.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@icloud.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@outlook.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@gmx.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@yahoo.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@fastmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@inbox.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@lavabit.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@hotpotmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@bolmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@uol.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@yandex.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@10minutemail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@protonmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@tutanota.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@lockbin.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@aol.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@aolmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@ru.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@qq.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      setOnLoad(false)
      return setError('Campo email inválido')
    }

    emailjs
      .sendForm(
        'service_668wce3',
        'template_mvdxvk6',
        e.target as HTMLFormElement,
        'user_IlFl2az7Oc0NnYu3gPVmD',
      )
      .then(
        (result) => {
          setError('')
          setSuccess('Formulário enviado com sucesso')
          setOnLoad(false)
          scrollTo(0, 0)
        },
        (error) => {
          setOnLoad(false)
          scrollTo(0, 0)
          setError('Erro no envio, tente novamente mais tarde')
        },
      )
  }

  return (
    <Layout ifLogo ifCompletedFooter={false}>
      <Container>
        <Header>
          <section>
            <p>Fale Conosco</p>
          </section>
        </Header>
        <Title>Contate a equipe DPOBackOffice para sanar as suas dúvidas</Title>
        <Phrase>
          Preencha o formulário abaixo que em breve um especialista entrará em contato com você.
        </Phrase>
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
        <Form data-netlify="true" onSubmit={(e) => onSubmit(e)}>
          <section>
            <Input type="text" name="name" placeholder="* Nome" onChange={(e) => onChange(e)} />
            <Input
              type="text"
              name="last_name"
              placeholder="* Sobrenome"
              onChange={(e) => onChange(e)}
            />
          </section>
          <Input type="text" name="company" placeholder="* Empresa" onChange={(e) => onChange(e)} />
          <Input
            type="email"
            name="email"
            placeholder="* Email (Apenas email corporativo)"
            onChange={(e) => onChange(e)}
          />
          <section>
            <Input type="text" name="role" placeholder="Cargo" onChange={(e) => onChange(e)} />
            <Input
              type="number"
              name="phone"
              placeholder="Telefone"
              onChange={(e) => onChange(e)}
            />
          </section>
          <TextArea
            name="message"
            placeholder="Mensagem"
            onChange={(e) => onChange(e as ChangeEvent<HTMLTextAreaElement>)}
          ></TextArea>
          <Paragrath>
            Para receber nosso contato, você nos informará seu nome, empresa, email (obrigatórios),
            cargo e telefone (opcionais). Ao clicar em enviar, você declara que está ciente a
            aceitar os termos e condições de nossa{' '}
            <Link href="/politica-de-privacidade">
              <a>Política de privacidade</a>
            </Link>{' '}
            e que poderá receber emails ou mensagens com ofertas de nossos serviços.
          </Paragrath>
          <CheckBoxContainer>
            <CheckBox
              id="service_terms"
              name="service_terms"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  service_terms: !formData.service_terms,
                })
              }}
            />
            <label htmlFor="service_terms">Eu concordo com os termos de uso</label>
          </CheckBoxContainer>
          <Recaptcha>
            <RecaptchaGoogle
              sitekey="6Lee5QoaAAAAACDG46h5oXutMgy4B_BQndbSJEcO"
              onChange={() => setRecapcha(!recapcha)}
            />
            <button type="submit" disabled={onLoad}>
              Enviar
            </button>
          </Recaptcha>
        </Form>
      </Container>
    </Layout>
  )
}

export default Contact
