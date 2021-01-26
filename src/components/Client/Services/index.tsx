import { useState, useEffect } from 'react'
import api from '../../../services/api'
import Layout from '../Layout'
import Item from './Item'
import { Error, ServicePopUp } from '../../index'
import { useRouter } from 'next/router'
import ScaleLoader from 'react-spinners/ScaleLoader'
import {
  Container,
  Header,
  Bold,
  Content,
  Title,
  Row,
  Message,
  DownBar,
  Loading,
  ErrorContainer,
} from './styles'

export interface IService {
  _id: string
  slug?: string
  title: string
  resume: string
  description: any
  fixedHours: number
  retest?: number
  hourValue: number
  runningHours: number
  minuteValue?: string
  finalValue?: number | undefined
  deliverable: string[]
  prerequisitesService?: IService[]
  prerequisites?: string[]
  image?: {
    name: string
    size: number
    key: string
    url: string
  }
}

interface CategoryData {
  _id: string
  title: string
  services: IService[]
}

const Services: React.FC = () => {
  const { push } = useRouter()

  const [category, setCategory] = useState<CategoryData[]>([])
  const [cart, setCart] = useState<IService[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [serviceModal, setServiceModal] = useState<IService>({
    _id: '',
    slug: '',
    title: '',
    resume: '',
    description: [],
    fixedHours: 0,
    hourValue: 0,
    runningHours: 0,
    deliverable: [],
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadServices()

    async function loadServices() {
      try {
        const { data } = await api.get('/client/services')

        setCategory(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  function addCartItem(id: string): void {
    var services: IService[] = []

    category.map((category) => {
      category.services.map((service) => services.push(service))
    })

    const newItem = services.filter(({ _id }) => _id === id)

    const newCart = cart.concat(newItem)

    localStorage.setItem('cart', JSON.stringify(newCart))

    setCart(newCart)
  }

  function removeCartItem(id: string): void {
    const newCart = cart.filter(({ _id }) => _id !== id)

    localStorage.setItem('cart', JSON.stringify(newCart))

    setCart(newCart)
  }

  function handleCheck(id: string): boolean {
    let isCheck = false
    cart?.map(({ _id }) => {
      if (_id === id) isCheck = true
    })

    return isCheck
  }

  function closeModal(): void {
    setOpenModal(false)
  }

  async function showMore(slug: string): Promise<void> {
    try {
      const { data } = await api.get(`/client/service/${slug}`)

      setServiceModal(data)
      setOpenModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  function handleClickLink(): void {
    const cookie = JSON.parse(localStorage.getItem('cookie'))

    if (cookie) {
      push('/perguntas-proposta')
    } else {
      scrollTo(0, 0)
      setError('Necessario ativar os cookies do site')
    }
  }

  return (
    <>
      <Layout ifLogo={true} ifCompletedFooter={true}>
        <Container>
          <Header>
            <h3>
              Nossos serviços <Bold>{'/>'}</Bold>
            </h3>
          </Header>
          {error && (
            <ErrorContainer>
              <Error>{error}</Error>
            </ErrorContainer>
          )}
          <Content>
            {loading === false ? (
              category &&
              category.map((category) => (
                <div key={category._id}>
                  <header>
                    <Title>{category.title}</Title>
                  </header>
                  {category.services.length <= 0 && (
                    <Message>Nenhum serviço nesta categoria</Message>
                  )}
                  <Row>
                    {category.services &&
                      category.services.map((service) => (
                        <Item
                          showMore={showMore}
                          key={service._id}
                          addCartItem={addCartItem}
                          removeCartItem={removeCartItem}
                          item={service}
                          checked={handleCheck(service._id)}
                        />
                      ))}
                  </Row>
                </div>
              ))
            ) : (
              <Loading>
                <div>
                  <p>Carregando...</p>
                  <ScaleLoader width={7} color={'rgba(0,112,192, 1)'} />
                </div>
              </Loading>
            )}
          </Content>
        </Container>
        <DownBar>
          <p>{cart?.length || 0} serviços selecionados</p>
          <button onClick={() => handleClickLink()}>Ir para Cotação</button>
        </DownBar>
      </Layout>

      <ServicePopUp
        id="service-modal"
        openModal={openModal}
        service={serviceModal}
        closeModal={closeModal}
      />
    </>
  )
}

export default Services
