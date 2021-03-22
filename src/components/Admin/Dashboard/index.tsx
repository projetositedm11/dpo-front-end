import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SideBar from '../components/SideBar'
import { Container } from './styles'
import { motion } from 'framer-motion'
import token from '../../../utils/setToken'
import api from '../../../services/api'

const Dashboard: React.FC = ({ children }) => {
  const { push } = useRouter()

  useEffect(() => {
    token()
    loaduser()

    async function loaduser(): Promise<void> {
      try {
        await api.get('/auth/loadUser')
      } catch (error) {
        push('/admin')
      }
    }
  }, [])

  return (
    <>
      <SideBar />
      <motion.div exit={{ opacity: 0 }}>
        <Container>{children}</Container>
      </motion.div>
    </>
  )
}

export default Dashboard
