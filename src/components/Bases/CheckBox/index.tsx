import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { BiCheck } from 'react-icons/bi'
import { ChangeEvent } from 'react'

interface Props {
  id: string
  checked?: boolean
  modeWhite?: boolean
  name?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<Props> = ({ id, checked, modeWhite, name, onChange, value }) => {
  const [focus, setFocus] = useState<boolean>(false)

  useEffect(() => {
    if (checked) {
      setFocus(true)
    } else {
      setFocus(false)
    }
  }, [checked])

  return (
    <Container htmlFor={id} focus={focus} modeWhite={modeWhite}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          setFocus(!focus)
          if (onChange) {
            onChange(e)
          }
        }}
      />
      <BiCheck />
    </Container>
  )
}

export default CheckBox
