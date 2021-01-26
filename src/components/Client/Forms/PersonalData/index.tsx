import { Error, Input } from '../../../index'
import Select, { OptionsType } from 'react-select'
import { Container, Form, Row, SelectContainer, Button, Phone } from './styles'
import { FormEvent, useState } from 'react'
import validator from 'validator'
import NumberFormat from 'react-number-format'
import formatCnpj from '@brazilian-utils/format-cnpj'
import { validate, format } from 'cnpj'

export interface IData {
  name: string
  surname: string
  cnpj: string
  email: string
  phone: string
  company: string
  howDidYouHearAboutOurCompany: string
  expectedClosing: string
  needWork: string[]
}

interface Props {
  personalData: (data: IData) => void
}

const PersonalData: React.FC<Props> = ({ personalData }) => {
  const [knowCompany, setKnowCompany] = useState<string>('')
  const [knowCompanyOther, setKnowCompanyOther] = useState<string>('')
  const [closeExpectative, setCloseExpectative] = useState<string>('')
  const [optionsNeedWork, setOptionsNeedWork] = useState<
    OptionsType<{ label: string; value: string }>
  >([])
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [cnpj, setCnpj] = useState<string>('')

  const [error, setError] = useState<string>('')

  function onSubmit(e: FormEvent): void {
    e.preventDefault()
    setError('')

    if (
      !company ||
      !phone ||
      !email ||
      !name ||
      !surname ||
      !optionsNeedWork ||
      !closeExpectative ||
      !cnpj
    ) {
      scrollTo(0, 0)
      return setError('Campo em branco')
    }

    const formatPhone = phone.replace('_', '')

    if (formatPhone.length < 15) {
      scrollTo(0, 0)
      return setError('Campo telefone inválido')
    }

    if (!validate(format(cnpj))) {
      scrollTo(0, 0)
      return setError('Campo cnpj inválido')
    }

    if (!validator.isEmail(email)) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    let emailArray = email.split('@gmail.com')

    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@hotmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@zoho.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@icloud.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@outlook.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@gmx.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@yahoo.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@fastmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@inbox.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@lavabit.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@hotpotmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@bolmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@uol.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@yandex.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@10minutemail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@protonmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@tutanota.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@lockbin.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@aol.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@aolmail.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@ru.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    emailArray = email.split('@qq.com')
    if (emailArray.length > 1) {
      scrollTo(0, 0)
      return setError('Campo email inválido')
    }

    let howDidYouHearAboutOurCompany = ''

    if (knowCompanyOther && knowCompany === 'parceiros') {
      howDidYouHearAboutOurCompany = `${knowCompany} - ${knowCompanyOther}`
      console.log(howDidYouHearAboutOurCompany)
    } else {
      howDidYouHearAboutOurCompany = knowCompany
    }

    const needWork: string[] = []

    optionsNeedWork.map((option) => {
      needWork.push(option.value)
    })

    personalData({
      name,
      email,
      phone,
      company,
      howDidYouHearAboutOurCompany,
      expectedClosing: closeExpectative,
      needWork,
      surname,
      cnpj,
    })
  }

  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
        {error && <Error>{error}</Error>}
        <Row>
          <Input type="text" radius="5px" label="Nome" onChange={(e) => setName(e.target.value)} />
          <Input
            type="text"
            radius="5px"
            label="Sobrenome"
            onChange={(e) => setSurname(e.target.value)}
          />
        </Row>
        <Row>
          <Input
            type="email"
            radius="5px"
            label="Email Corporativo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Phone>
            <p>Telefone</p>
            <NumberFormat format="(##) #####-####" onChange={(e) => setPhone(e.target.value)} />
          </Phone>
        </Row>
        <Row>
          <Input
            type="text"
            radius="5px"
            label="Empresa"
            onChange={(e) => setCompany(e.target.value)}
          />
          <Input
            type="text"
            radius="5px"
            label="CNPJ"
            value={formatCnpj(cnpj)}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </Row>
        <Row>
          <SelectContainer>
            <p>Como conheceu nossa empresa?</p>
            <Select
              id="select"
              instanceId="select"
              onChange={(e) => setKnowCompany(e.value)}
              placeholder="Selecionar"
              noOptionsMessage={() => 'Nenhuma opção encontrada'}
              options={[
                {
                  label: 'Facebook',
                  value: 'Facebook',
                },
                {
                  label: 'Linkedin',
                  value: 'Linkedin',
                },
                {
                  label: 'Instagram',
                  value: 'Instagram',
                },
                {
                  label: 'Google',
                  value: 'Google',
                },
                {
                  label: 'Parceiros ',
                  value: 'Parceiros',
                },
              ]}
            />
          </SelectContainer>
          {knowCompany === 'Parceiros' && (
            <Input
              type="text"
              deafultPlaceholder="Parceiros"
              radius="5px"
              label="Parceiros"
              onChange={(e) => setKnowCompanyOther(e.target.value)}
            />
          )}
        </Row>
        <SelectContainer>
          <p>Expectativa de fechamento</p>
          <Select
            id="select"
            instanceId="select"
            placeholder="Selecionar"
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            options={[
              {
                label: 'Imediato - menos de 7 dias',
                value: 'Imediato - menos de 7 dias',
              },
              {
                label: 'Em até 15 dias',
                value: 'Em até 15 dias',
              },
              {
                label: 'Em até 60 dias',
                value: 'Em até 60 dias',
              },
              {
                label: 'Para o próximo trimestre',
                value: 'Para o próximo trimestre',
              },
              {
                label: 'Para o próximo semestre',
                value: 'Para o próximo semestre',
              },
              {
                label: 'Somente orçamento e/ou RFP',
                value: 'Somente orçamento e/ou RFP',
              },
            ]}
            onChange={(e) => setCloseExpectative(e.value)}
          />
        </SelectContainer>
        <SelectContainer>
          <p>Necessidade do trabalho</p>
          <Select
            isMulti
            id="select"
            className="basic-multi-select"
            classNamePrefix="select"
            instanceId="select"
            placeholder="Selecionar"
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            onChange={(e) => setOptionsNeedWork(e)}
            options={[
              {
                label: 'Testar de Controles e implementações',
                value: 'Testar de Controles e implementações',
              },
              {
                label: 'Atender alguma conformidade com normas de segurança(exemplo: PCI-DSS)',
                value: 'Atender alguma conformidade com normas de segurança(exemplo: PCI-DSS)',
              },
              {
                label: 'Melhorar no atendimento a requisitos impostos pela lei da LGPD',
                value: 'Melhorar no atendimento a requisitos impostos pela lei da LGPD',
              },
              {
                label: 'Atender requisitos de auditoria interna ou externa',
                value: 'Atender requisitos de auditoria interna ou externa',
              },
              {
                label: 'Reduzir riscos que podem gerar prejuízos',
                value: 'Reduzir riscos que podem gerar prejuízos',
              },
              {
                label: 'Zelar pela reputação de empresa',
                value: 'Zelar pela reputação de empresa',
              },
              {
                label: 'Outros',
                value: 'Outros',
              },
            ]}
          />
        </SelectContainer>
        <Button type="submit">Continuar</Button>
      </Form>
    </Container>
  )
}

export default PersonalData
