import { Container, DataText, Label } from './styles'
const Data = ({ text, label }) => {
  return (
    <Container>
      <DataText>{text}:</DataText>
      <Label>{label}</Label>
    </Container>
  )
}

export default Data
