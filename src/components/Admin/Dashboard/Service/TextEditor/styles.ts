import styled from 'styled-components'

export const Container = styled.div`
  padding: 14px;
  padding-bottom: 50px;
  border: 1px solid #eee;
  border-radius: 7px;
  small {
    font-size: 12px;
    margin-left: 2px;
  }
`
export const WrapperEditor = styled.div`
  margin-top: 20px;
`

interface BoldProps {
  active: any
}

export const Bold = styled.span<BoldProps>`
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? props.theme.blue : 'black')};
`

export const Actions = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`

interface ButtonProps {
  active: boolean
}

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 35px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 1px;
  background-color: ${(props) => props.theme.blue};
  opacity: ${(props) => (props.active === true ? 1 : 0.5)};
  color: white;
  border: none;
  font-size: 18px;
`
