import { useState, useEffect } from 'react'
import api from '../../../services/api'
import Layout from '../Layout'
import { Error, ServicePopUp } from '../../index'
import { useRouter } from 'next/router'
import ScaleLoader from 'react-spinners/ScaleLoader'
import DropDown from './DropDown'
import {
  Container,
  Header,
  Bold,
  Content,
  DownBar,
  Loading,
  ErrorContainer,
  HowToContract,
} from './styles'
import { ImRadioUnchecked } from 'react-icons/im'
import { IoIosArrowDown } from 'react-icons/io'
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
  check?: boolean
}

export interface CategoryData {
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
    image: {
      name: '',
      size: 0,
      key: '',
      url: '',
    },
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])

    loadServices()

    async function loadServices() {
      try {
        const { data } = await api.get('/client/services')

        setCategory(data)
        setLoading(false)

        const cart = JSON.parse(localStorage.getItem('cart')) as IService[]

        const newCategorys: CategoryData[] = data.map((category: CategoryData) => {
          category.services.map((service) => {
            cart.map((item) => {
              if (item._id === service._id) {
                service.check = true

                if (item.check) {
                  service = item
                }
              } else {
                service.check = false
              }
            })

            return service
          })

          return category
        })

        setCategory(newCategorys)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  function addCartItem(id: string): void {
    const newCategorys: CategoryData[] = category.map((category: CategoryData) => {
      category.services.map((service) => {
        if (service._id === id) {
          service.check = true
        }

        return service
      })

      return category
    })
    setCategory(newCategorys)

    let newItem = {} as IService

    category.map((category) => {
      category.services.map((service) => {
        if (service._id === id) {
          newItem = service
        }
      })
    })

    const newCart = cart.concat(newItem)

    localStorage.setItem('cart', JSON.stringify(newCart))

    setCart(newCart)
  }

  function removeCartItem(id: string): void {
    const newCart = cart.filter(({ _id }) => _id !== id)

    const newCategorys: CategoryData[] = category.map((category: CategoryData) => {
      category.services.map((service) => {
        if (service._id === id) {
          service.check = false
        }

        return service
      })

      return category
    })
    setCategory(newCategorys)

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
          <HowToContract>
            <section>
              <h2>Como contratar nossos serviços?</h2>
              <p>
                Para realizar um orçamento, selecione um ou mais serviços clicando no{' '}
                <ImRadioUnchecked color="rgba(0,112,192, 1)" size={20} /> e em seguida clique no
                botão <span>"Ir para cotação"</span>, localizado na parte inferior da tela.
              </p>
              <p>
                <span>Alguns serviços necessitam de pré-requisitos</span>, que podem ser contratados
                por esta mesma página. Antes de iniciar um orçamento, é muito importante
                certificar-se que você ja possui os pré-requisitos em sua organização ou que o
                selecionou aqui para orçarmos ele também.
              </p>
              <p>
                Para melhor navegação, utilize o ícone <IoIosArrowDown size={25} color="#293241" />
              </p>
            </section>
          </HowToContract>
          {error && (
            <ErrorContainer>
              <Error>{error}</Error>
            </ErrorContainer>
          )}
          <Content>
            {loading === false ? (
              category &&
              category.map((category) => (
                <DropDown
                  key={category._id}
                  category={category}
                  showMore={showMore}
                  addCartItem={addCartItem}
                  removeCartItem={removeCartItem}
                />
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
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
        handleCheck={handleCheck}
      />
    </>
  )
}

export default Services
