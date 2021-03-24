import { useState, useEffect } from 'react'
import Layout from '../Layout'
import { RenderDescription, Service } from './components'

import { Container, Title, TextItem, Grid, Loading, Bold, ButtonContainer } from './styles'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { IService, CategoryData } from '../Services/index'
import api from '../../../services/api'

interface Props {
  slug: string
  service: IService
}

const ServiceItem: React.FC<Props> = ({ service }) => {
  const [isServiceInCart, setIsServiceInCart] = useState<boolean>(false)
  const [category, setCategory] = useState<CategoryData[]>([])

  useEffect(() => {
    loadServices()

    async function loadServices() {
      try {
        const { data } = await api.get('/client/services')

        setCategory(data)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  useEffect(() => {
    let cart = [] as IService[]

    cart = JSON.parse(localStorage.getItem('cart')) || []

    cart.map((item) => {
      if (item._id === service._id) {
        setIsServiceInCart(true)
      } else {
        setIsServiceInCart(false)
      }
    })

    service.prerequisitesService.map((service) => {
      cart.map((item) => {
        if (item._id === service._id) {
          service.check = true
        } else {
          service.check = false
        }
      })

      return service
    })
  }, [])

  function addCartItem(id?: string): void {
    let cart = [] as IService[]

    cart = JSON.parse(localStorage.getItem('cart')) || []

    let filtredItem = {} as IService

    if (id) {
      category.map((category) => {
        category.services.map((item) => {
          if (item._id === id) {
            filtredItem = item
            filtredItem.check = true
          }
        })
      })
    } else {
      filtredItem = service
      filtredItem.check = true
    }

    const newCart = cart.concat(filtredItem)

    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  function removeCartItem(id?: string): void {
    const cart = JSON.parse(localStorage.getItem('cart')) as IService[]

    let newCart = [] as IService[]

    if (id) {
      newCart = cart.filter(({ _id }) => _id !== id)
    } else {
      newCart = cart.filter(({ _id }) => _id !== service._id)
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <Layout ifLogo ifCompletedFooter>
      <Container>
        {!service ? (
          <Loading>
            <div>
              <p>Carregando...</p>
              <ScaleLoader width={7} color={'rgba(0,112,192, 1)'} />
            </div>
          </Loading>
        ) : (
          <div>
            <Title>{service.title}</Title>
            <RenderDescription description={service.description} />
            <ButtonContainer
              onClick={() => {
                if (isServiceInCart) {
                  removeCartItem()
                } else {
                  addCartItem()
                }
                setIsServiceInCart(!isServiceInCart)
              }}
            >
              {isServiceInCart
                ? 'Desmarcar serviço para cotação'
                : 'Selecionar serviço para cotação'}
            </ButtonContainer>
            <Bold>Entregáveis</Bold>
            {service.deliverable.length === 0 && <p>Nenhum entregável para esse serviço.</p>}
            <ul>
              {service.deliverable.map((d, index) => {
                return <TextItem key={index}>{d}</TextItem>
              })}
            </ul>
            <Bold>Pré-requisitos</Bold>
            <ul>
              {service.prerequisites.map((d, index) => {
                return <TextItem key={index}>{d}</TextItem>
              })}
            </ul>
            <Grid>
              {service.prerequisitesService.map((d) => {
                return (
                  <Service
                    key={d._id}
                    item={d}
                    addCartItem={addCartItem}
                    removeCartItem={removeCartItem}
                    checked={d.check}
                  />
                )
              })}
            </Grid>
            <Bold>O que são pré-requisitos?</Bold>
            <p>
              São itens que são necessários para iniciar um serviço. Você não pode iniciar um
              serviço sem ter os documentos necessários prontos, já em posse de sua organização.
            </p>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default ServiceItem
