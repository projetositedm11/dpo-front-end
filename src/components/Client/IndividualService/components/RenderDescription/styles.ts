import styled from 'styled-components'

interface BoldProps {
  active: any
}

export const Bold = styled.span<BoldProps>`
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? props.theme.blue : 'black')};
`
export const DText = styled.p`
  color: ${(props) => props.theme.lightDark};
  font-size: 18px;
`
