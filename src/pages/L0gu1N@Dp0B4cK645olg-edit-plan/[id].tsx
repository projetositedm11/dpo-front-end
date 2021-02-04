import { EditPlan } from '../../components'
import { useRouter } from 'next/router'

const adminEditPlan: React.FC = () => {
  const {
    query: { id },
  } = useRouter()

  return <EditPlan id={id as string} />
}

export default adminEditPlan
