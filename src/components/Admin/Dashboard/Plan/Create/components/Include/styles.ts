import styled from 'styled-components'

export const FieldAddComponent = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin-top: 20px;
  h4 {
    color: ${(props) => props.theme.lightDark};
    margin-top: 10px;
    margin-left: 2px;
  }
`
export const AddComponent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 20px;
  input {
    width: 90%;
  }
`

interface ButtonProps {
  background: string
}

export const Button = styled.button<ButtonProps>`
  width: 60px;
  height: 35px;
  border: none;
  margin-left: 10px;
  margin-top: 23px;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 10px;
  label {
    color: ${(props) => props.theme.blue} !important;
  }
  p {
    font-size: 17px;
    margin-top: 8px;
    margin-left: 4px;
    color: ${(props) => props.theme.lightDark} !important;
  }
  div {
    margin-top: 20px;
  }
`
