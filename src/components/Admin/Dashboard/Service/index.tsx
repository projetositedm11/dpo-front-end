import React, { useState, useEffect, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import Layout from '../index'
import Header from '../../components/Header'
import api from '../../../../services/api'
import Item from './Item'
import Input from '../../../Bases/Input'
import PulseLoader from 'react-spinners/PulseLoader'

import { InputContainer, Message, Loading } from './styles'

const Service: React.FC = () => {
  const [services, setServices] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const { push } = useRouter()

  useEffect(() => {
    loadServices()
    async function loadServices(): Promise<void> {
      try {
        const { data } = await api.get('/admin/services')

        setServices(data)
        setLoading(false)
      } catch (error) {
        push('/admin')
      }
    }
  }, [])

  async function deleteService(id: string): Promise<void> {
    try {
      await api.delete(`/admin/remove/service/${id}`)

      const newServices = services.filter(({ _id }) => _id !== id)

      setServices(newServices)
    } catch (error) {
      console.log(error)
    }
  }

  const filteredServices = services.filter((service) => {
    return (
      service.title.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1 ||
      service.category.title.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    )
  })

  return (
    <Layout>
      <Header title="Serviço" link="/admin-create-service" />
      <InputContainer>
        <Input
          type="text"
          placeholder="Pesquisar serviço ou categoria"
          name="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </InputContainer>
      {loading === true ? (
        <Loading>
          <p>Carregando...</p>
          <PulseLoader size={20} color={'rgba(0,112,192, 1)'} />
        </Loading>
      ) : (
        <div>
          {filteredServices.length === 0 && (
            <Message>
              <p>Nenhum serviço encontrado. </p>{' '}
            </Message>
          )}
          {filteredServices.map((service, index) => (
            <Item service={service} key={index} deleteService={deleteService} />
          ))}
        </div>
      )}
    </Layout>
  )
}

export default Service
