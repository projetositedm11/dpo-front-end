import { useRouter } from 'next/router'
import { Plans } from '../../components'
import api from '../../services/api'

const Plan = ({ slug, plan }) => {
  return <Plans slug={slug as string} plan={plan} />
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`/client/plan/${params.slug}`)

  return {
    props: {
      plan: data,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const { data } = await api.get(`/client/plans`)
  const slugs = []

  data.map((plan) => {
    slugs.push({
      params: {
        slug: plan.slug,
      },
    })
  })

  return {
    paths: slugs,
    fallback: false,
  }
}

export default Plan
