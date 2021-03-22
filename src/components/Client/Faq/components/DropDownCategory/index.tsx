import { useState, useRef, MouseEvent, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Container, Content } from './styles'

interface Props {
  title: string
  open: boolean
  setShow: (open) => void
}

const DropDownCategory: React.FC<Props> = ({ title, open, setShow }) => {
  return (
    <Container open={open}>
      <header onClick={() => setShow(!open)}>
        <h3>{title}</h3>
        <IoIosArrowForward />
      </header>
    </Container>
  )
}

export default DropDownCategory
