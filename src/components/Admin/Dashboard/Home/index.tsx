import React, { useState, useEffect } from 'react'
import api from '../../../../services/api'
import Layout from '../index'
import FinancialControl from './FinancialControl/'
import Proposals from './Proposals'
import { Container, Welcome, Bold, Loading } from './styles'
import { useRouter } from 'next/router'
import token from '../../../../utils/setToken'
import PulseLoader from 'react-spinners/PulseLoader'

export interface IPlan {
  _id: string
  title: string
  slug: string
  resume: string
  price: number
  included: string[]
  includedServices: string[]
  notIncluded: string[]
}

const Home: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    loginNumber: '',
  })

  const [deadline, setDeadline] = useState('')
  const [timesParcel, setParcel] = useState('')

  const [proposals, setProposals] = useState([])
  const [financial, setFinancialControl] = useState([
    {
      _id: {
        status: '',
      },
      total: null,
    },
  ])
  const [proposalsFiltred, setProposalsFiltred] = useState([])
  const [loadingProposals, setLoadingProposals] = useState(true)

  const [search, setSearch] = useState<string>('')

  const { push } = useRouter()

  useEffect(() => {
    token()
    loadUser()
    loadProposals()
    loadFinancialControl()

    async function loadUser(): Promise<void> {
      try {
        const { data } = await api.get('/auth/loadUser')

        setUser(data)
      } catch (error) {
        push('/admin')
      }
    }
  }, [])

  async function loadProposals(): Promise<void> {
    try {
      const { data } = await api.get('/admin/proposals')
      setProposals(data)
      setProposalsFiltred(data)
      setLoadingProposals(false)
    } catch (error) {
      console.log(error)
    }
  }

  function filter(name: string): void {
    setSearch(name)

    if (!name) {
      return setProposalsFiltred(proposals)
    }

    const filtred = proposals.filter(({ client }) => {
      const { firstName, fullName } = client

      if (!fullName) {
        return fullName.toLowerCase().includes(name.toLowerCase())
      }

      return firstName.toLowerCase().includes(name.toLowerCase())
    })

    console.log(filtred)

    if (filtred.length <= 0) {
      return setProposalsFiltred([])
    }

    setProposalsFiltred(filtred)
  }

  async function loadFinancialControl(): Promise<void> {
    try {
      const { data } = await api.get('/admin/proposal/financialControl')
      setFinancialControl(data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateStatus = async (e, id, status): Promise<void> => {
    try {
      e.preventDefault()
      const { data } = await api.post(`/admin/proposal/${id}/${status}`)
      const update = proposals?.map((proposal) =>
        proposal._id === data._id ? { ...data } : proposal,
      )
      setProposals(update)
      loadProposals()
      loadFinancialControl()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(deadline)
  const updateDeadline = async (e, id): Promise<void> => {
    try {
      e.preventDefault()
      const { data } = await api.put(`/admin/proposal/${id}/deadline`, { deadline })
      const update = proposals?.map((proposal) =>
        proposal._id === data._id ? { ...data } : proposal,
      )
      setProposals(update)
      loadProposals()
      loadFinancialControl()
    } catch (error) {
      console.log(error)
    }
  }

  const updateParcel = async (e, id): Promise<void> => {
    try {
      e.preventDefault()
      const { data } = await api.put(`/admin/proposal/${id}/parcel`, { timesParcel })
      const update = proposals?.map((proposal) =>
        proposal._id === data._id ? { ...data } : proposal,
      )
      setProposals(update)
      loadProposals()
      loadFinancialControl()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Container>
        <Welcome>
          Olá,<Bold> {user?.name}! </Bold>{' '}
        </Welcome>
        <FinancialControl financial={financial} />
        {loadingProposals === true ? (
          <Loading>
            <p>Carregando...</p>
            <PulseLoader size={20} color={'rgba(0,112,192, 1)'} />
          </Loading>
        ) : (
          <>
            <Proposals
              search={search}
              proposalsFiltred={proposalsFiltred}
              filter={filter}
              updateStatus={updateStatus}
              updateDeadline={updateDeadline}
              updateParcel={updateParcel}
              setDeadline={setDeadline}
              setParcel={setParcel}
            />
            {proposalsFiltred?.length === 0 && <p>Nenhuma proposta encontrada</p>}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Home
