import { useState, useRef, MouseEvent } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Container, Content } from './styles'

interface Props {
  title: string
  answer: string
  open: boolean
  toggleFaq: (index) => void
  index: number
}

const DropDownItem: React.FC<Props> = ({ title, answer, open, toggleFaq, index }) => {
  return (
    <Container open={open}>
      <section onClick={() => toggleFaq(index)}>
        <h3>{title}</h3>
        <IoIosArrowForward />
      </section>
      {open === true && (
        <Content>
          <div>
            <p>{answer}</p>
          </div>
        </Content>
      )}
    </Container>
  )
}

export default DropDownItem
