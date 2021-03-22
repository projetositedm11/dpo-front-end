import { ChangeEvent, useRef, useState } from 'react'
import { Container, Main } from './styles'
interface Props {
  name?: string
  id?: string
  value?: string
  placeholder?: string
  deafultPlaceholder?: string
  label?: string
  radius?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement> | HTMLTextAreaElement) => void
}

const TextArea: React.FC<Props> = ({
  name,
  id,
  value,
  placeholder,
  deafultPlaceholder,
  label,
  onChange,
  radius,
}) => {
  const [focus, setFocus] = useState<boolean>(false)

  const textTextArea = useRef<HTMLTextAreaElement>(null)

  return (
    <Main>
      {label && <p>{label}</p>}
      <Container focus={focus} radius={radius} label={label}>
        <textarea
          ref={textTextArea}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          placeholder={deafultPlaceholder ? deafultPlaceholder : ' '}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <label
          onClick={() => {
            setFocus(true)
            textTextArea.current.focus()
          }}
        >
          {placeholder}
        </label>
      </Container>
    </Main>
  )
}

export default TextArea
