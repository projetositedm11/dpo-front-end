import { useRouter } from 'next/router'
import { ResetPassword } from '../../components'

const resetPassword: React.FC = () => {
  const { query } = useRouter()

  return <ResetPassword token={query.token as string} />
}

export default resetPassword
