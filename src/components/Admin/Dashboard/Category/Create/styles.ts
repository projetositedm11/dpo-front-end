import styled from 'styled-components'

export const WrapperForm = styled.form`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 40px;
  margin-left: 10px;
  margin-top: 20px;
  width: 80%;
`

export const SaveButton = styled.button`
  width: 30%;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.green};
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  margin-top: 20px;
`
