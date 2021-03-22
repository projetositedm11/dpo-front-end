import { useState, ChangeEvent } from 'react'
import Layout from '../Layout'
import { Input } from '../../index'
import NumberFormat from 'react-number-format'
import Select, { OptionsType } from 'react-select'
import formatCnpj from '@brazilian-utils/format-cnpj'
import { BeatLoader } from 'react-spinners'
import { Error } from '../../index'
import { Service, Modal, Success } from './components'
import {
  Container,
  Header,
  Title,
  TitleServices,
  Content,
  Grid,
  Info,
  Resume,
  GridService,
  Button,
  Form,
  Row,
  SelectContainer,
  ButtonContainer,
  TitleModal,
  Message,
  Phone,
} from './styles'
import api from '../../../services/api'
import validator from 'validator'
import { format, validate } from 'cnpj'

interface Props {
  slug: string
  plan: any
}

const Plans: React.FC<Props> = ({ slug, plan }) => {
  // Modal
  const [open, setOpen] = useState<boolean>(false)
  const [successOpen, setSuccessOpen] = useState<boolean>(false)

  const [onLoad, setOnLoad] = useState<boolean>(false)

  const [knowCompany, setSnowCompany] = useState<string>('')
  const [knowCompanyOther, setKnowCompanyOther] = useState<string>('')
  const [closeExpectative, setCloseExpectative] = useState<string>('')
  const [optionsNeedWork, setOptionsNeedWork] = useState<
    OptionsType<{ label: string; value: string }>
  >([])
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [cnpj, setCnpj] = useState<string>('')

  const [error, setError] = useState<string>('')

  async function onSubmit(): Promise<void> {
    try {
      setError('')
      setOnLoad(true)

      if (
        !company ||
        !phone ||
        !surname ||
        !email ||
        !name ||
        !optionsNeedWork ||
        !closeExpectative ||
        !cnpj
      ) {
        scrollTo(0, 0)
        setOnLoad(false)
        return setError('Campo em branco')
      }

      const formatPhone = phone.replace('_', '')

      if (formatPhone.length < 15) {
        scrollTo(0, 0)
        setOnLoad(false)
        return setError('Campo telefone inválido')
      }

      if (!validate(format(cnpj))) {
        scrollTo(0, 0)
        setOnLoad(false)
        return setError('Campo cnpj inválido')
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

      await api.post('/client/send/plan-proposal', {
        firstName: name,
        surname,
        email,
        phone,
        company,
        expectedClosing: closeExpectative,
        needWork,
        howDidYouHearAboutOurCompany,
        planId: plan._id,
        cnpj,
      })

      setOpen(false)
      setSuccessOpen(true)
      setError('')
      setOnLoad(false)
    } catch (error) {
      setOnLoad(false)
      setError(error.response.data.error)
    }
  }

  return (
    <>
      <Layout ifLogo ifCompletedFooter={false}>
        {plan ? (
          <Container>
            <Header>
              <section>
                <p>Plano - {plan.title}</p>
              </section>
            </Header>
            <Content>
              <Title>Você selecionou o plano</Title>
              <Grid>
                <Info>
                  <h3>{plan.title}</h3>
                  <h3> R$ {plan.price.toLocaleString().replace(',', '.')}</h3>
                  <button type="button" onClick={() => setOpen(true)}>
                    Avançar para cotação
                  </button>
                </Info>
                <Resume>
                  <h3>Resumo</h3>
                  <p>{plan.resume}</p>
                </Resume>
              </Grid>
              <TitleServices>Saiba mais sobre os serviços inclusos</TitleServices>
              {plan.includedServices.length <= 0 && <Message>Nenhum serviço incuido</Message>}
              <GridService>
                {plan.includedServices &&
                  plan.includedServices.map((service) => (
                    <Service key={service._id} slug={service.slug} title={service.title} />
                  ))}
              </GridService>
            </Content>
          </Container>
        ) : (
          <p> Carregando </p>
        )}
      </Layout>
      <Modal id="modal" open={open} setOpen={setOpen}>
        <TitleModal>
          Por favor, nos informe os dados abaixo para que possamos enviar uma proposta{' '}
          <span> diretamente ao seu email.</span>
          <span> {'/>'}</span>
        </TitleModal>
        {error && <Error>{error}</Error>}
        <Form>
          <Row>
            <Input
              type="text"
              radius="5px"
              label="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <section>
              <Input
                type="text"
                radius="5px"
                label="Sobrenome"
                onChange={(e) => setSurname(e.target.value)}
              />
            </section>
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
                onChange={(e) => setSnowCompany(e.value)}
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
                    label: 'Parceiros',
                    value: 'Parceiros',
                  },
                ]}
              />
            </SelectContainer>
            {knowCompany === 'parceiros' && (
              <Input
                type="text"
                radius="5px"
                label="Parceiros"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setKnowCompanyOther(e.target.value)}
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
              onChange={(e) => setCloseExpectative(e.value)}
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
          <ButtonContainer>
            <Button type="button" onClick={() => onSubmit()} disabled={onLoad}>
              {onLoad ? <BeatLoader color="white" size={15} margin={2} /> : 'Enviar'}
            </Button>
          </ButtonContainer>
        </Form>
      </Modal>
      <Success id="success" open={successOpen} setOpen={setSuccessOpen} />
    </>
  )
}

export default Plans
