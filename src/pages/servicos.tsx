import { Services } from '../components'
import Head from 'next/head'
const servicos: React.FC = () => {
  return (
    <>
      <Head>
        <title>DPO|BackOffice - Do Diagnóstico ao Compliance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Services />
    </>
  )
}

export default servicos
