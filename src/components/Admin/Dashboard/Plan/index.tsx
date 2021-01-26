import Layout from '../index'
import Header from '../../components/Header'
import { Container, Loading } from './styles'
import Item from './Item'
import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import PulseLoader from 'react-spinners/PulseLoader'

interface Service {
  slug: string
  _id: string
  title: string
}
export interface Plan {
  _id: string
  title: string
  resume: string
  price: number
  included?: any[]
  notIncluded?: any[]
  includedServices?: Service[]
}

const Plan: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPlans()

    async function loadPlans() {
      try {
        const { data } = await api.get('/admin/plans')

        setPlans(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  async function deletePlan(id: string) {
    await api.delete(`/admin/remove/plan/${id}`)

    setPlans(plans.filter((plan) => plan._id !== id))
    try {
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Header title="Plano" link="/admin-create-plan" />
      <Container>
        {loading === true ? (
          <Loading>
            <p>Carregando...</p>
            <PulseLoader size={20} color={'rgba(0,112,192, 1)'} />
          </Loading>
        ) : (
          <>
            {plans.length > 0 ? (
              plans.map((plan) => <Item key={plan._id} plan={plan} deleteItem={deletePlan} />)
            ) : (
              <section>
                <p>Nenhum plano adicionado</p>
              </section>
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Plan
