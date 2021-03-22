import { ChangeEvent, useRef, useState } from 'react'
import { Container, Main } from './styles'
interface Props {
  disabled?: boolean
  name?: string
  id?: string
  type: string
  value?: string
  required?: any
  placeholder?: string
  deafultPlaceholder?: string
  label?: string
  radius?: string
  min?: string
  borderBlue?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
  name,
  id,
  type,
  value,
  placeholder,
  deafultPlaceholder,
  label,
  min,
  required,
  onChange,
  radius,
  disabled,
  borderBlue,
}) => {
  const [focus, setFocus] = useState<boolean>(false)

  const textInput = useRef<HTMLInputElement>(null)

  return (
    <Main>
      {label && <p>{label}</p>}
      <Container focus={focus} borderBlue={borderBlue} radius={radius} label={label}>
        <input
          ref={textInput}
          name={name}
          id={id}
          type={type}
          required={required}
          onChange={onChange}
          value={value}
          placeholder={deafultPlaceholder ? deafultPlaceholder : ' '}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          disabled={disabled}
          min={min}
        />
        <label
          onClick={() => {
            setFocus(true)
            textInput.current.focus()
          }}
        >
          {placeholder}
        </label>
      </Container>
    </Main>
  )
}

export default Input
