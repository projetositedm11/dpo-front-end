import { EditProposalQuestion } from '../../components'
import { useRouter } from 'next/router'

const adminEditProposalQuestion: React.FC = () => {
  const {
    query: { id },
  } = useRouter()

  return <EditProposalQuestion id={id as string} />
}

export default adminEditProposalQuestion
