import styled from 'styled-components'

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`

export const Button = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  margin-left: 10px;
  margin-top: -5px;
  border-radius: 5px;
  color: white;
  background-color: rgba(243, 108, 91, 0.95);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
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

export const FieldAnswers = styled.div`
  display: flex;
  margin-top: 10px;
  border: 2px solid #eee;
  padding: 10px;
  padding-top: 0;

  input {
    width: 95%;
  }
`

export const AddLogic = styled.button`
  width: 70px;
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

export const RemoveLogic = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  margin-left: 10px;
  margin-top: 23px;
  border-radius: 5px;
  color: white;
  background-color: rgba(243, 108, 91, 0.95);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`

export const Answers = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 5px;
  padding-bottom: 10px;
  margin-top: 20px;
  padding: 10px;
  padding-top: 0px;
  p {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    margin-top: 5px;
    font-size: 19px;
  }
  div {
    margin-top: 20px;
  }
`
