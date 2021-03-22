import { Container, Title, Button } from './styles'
interface HeaderProps {
  title: string
  showAdd?: boolean
  link?: string
}
import Link from 'next/link'
const Header: React.FC<HeaderProps> = ({ title, showAdd = true, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {showAdd && (
        <Link href={link || '/L0gu1N@Dp0B4cK645olg-dashboard'}>
          <Button> Adicionar </Button>
        </Link>
      )}
    </Container>
  )
}

export default Header
