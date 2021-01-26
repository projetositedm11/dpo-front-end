import { Container, Title, WrapperIcon } from './styles'
import { IoArrowBackSharp } from 'react-icons/io5'
import Link from 'next/link'
interface HeaderProps {
  title: string
  backLink: string
}

const Header: React.FC<HeaderProps> = ({ title, backLink }) => {
  return (
    <Container>
      <WrapperIcon>
        <Link href={backLink || '/admin-dashboard'}>
          <a>
            <IoArrowBackSharp />
          </a>
        </Link>
      </WrapperIcon>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header
