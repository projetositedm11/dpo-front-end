import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Initial } from '../components'
import api from '../services/api'
import Head from 'next/head'
const Index = ({ plans }) => {
  const { push } = useRouter()

  useEffect(() => {
    let location = window.location.href.toString().split('#')

    if (location.length === 2) {
      push('/#plans')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>DPO|BackOffice - Do Diagnóstico ao Compliance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Initial plans={plans} />
    </div>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/plans`)
  const plans = await res.json()
  if (!plans) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: { plans },
  }
}

export default Index
