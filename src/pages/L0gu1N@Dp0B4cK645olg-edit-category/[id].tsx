import { EditCategory } from '../../components'
import { useRouter } from 'next/router'

const adminEditCategory: React.FC = () => {
  const {
    query: { id },
  } = useRouter()

  return <EditCategory id={id as string} />
}

export default adminEditCategory
