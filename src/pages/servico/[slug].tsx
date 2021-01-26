import { useRouter } from 'next/router'
import { ServiceItem } from '../../components'
import api from '../../services/api'
import Head from 'next/head'
const Service = ({ slug, service }) => {
  return (
    <>
      <Head>
        <title>{service.title} - DPO|BackOffice </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ServiceItem slug={slug as string} service={service} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`/client/service/${params.slug}`)
  return {
    props: {
      service: data,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const { data } = await api.get(`/client/services`)
  const slugs = []
  console.log(data)
  data.map((s) => {
    s.services.map((service) => {
      slugs.push({
        params: {
          slug: service.slug,
        },
      })
    })
  })

  return {
    paths: slugs,
    fallback: false,
  }
}

export default Service
