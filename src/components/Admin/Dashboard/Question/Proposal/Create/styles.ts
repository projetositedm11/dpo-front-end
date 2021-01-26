import styled from 'styled-components'

export const WrapperForm = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 20px;
  padding-bottom: 100px;
  margin-left: 10px;
  margin-top: 20px;
  width: 80%;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    margin-top: 20px;
    width: auto;
  }
`
export const SaveButton = styled.button`
  width: 100%;
  max-width: 220px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.green};
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  float: right;
  margin-top: 30px;
`

export const FieldContainer = styled.div`
  margin-top: 10px;
`

export const FieldLogic = styled.div`
  margin-top: 10px;
  border: 5px solid #eee;
  border-radius: 5px;
  padding: 20px;
  h5 {
    color: ${(props) => props.theme.lightDark};
    font-size: 22px;
  }
`
export const FieldIfAnswer = styled.div`
  display: flex;
  margin-top: 10px;
  border: 2px solid #eee;
  padding: 10px;
  input {
    width: 95%;
  }
`

export const ContainerLogic = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AddLogic = styled.button`
  width: 170px;
  height: 35px;
  border: none;
  margin-left: 10px;
  margin-top: 23px;
  border-radius: 5px;
  color: white;
  background-color: rgba(1, 170, 23, 0.95);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`
