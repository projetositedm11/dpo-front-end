import { EditService } from '../../components'
import { useRouter } from 'next/router'

const adminEditService: React.FC = () => {
  const {
    query: { id },
  } = useRouter()

  return <EditService id={id as string} />
}

export default adminEditService
