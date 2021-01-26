import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px 30px;
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.greyTextOpacity};
  background: ${(props) => props.theme.white};
  padding: 20px 30px;
  margin-bottom: 80px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SelectContainer = styled.div`
  margin-top: 20px;

  p {
    font-size: 16px;
    color: ${(props) => props.theme.blue};
    margin-bottom: 10px;
  }
`

export const Phone = styled.div`
  margin-top: 20px;

  p {
    color: ${(props) => props.theme.blue};
    font-size: 16px;
    margin-bottom: 9px;
  }

  input {
    border-radius: 5px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.greyOpacity};
    padding: 9px 20px;
    font-size: 16px;
    color: ${(props) => props.theme.grey};
    transition: all 0.1s ease;

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`

export const Button = styled.button`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  max-width: 200px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
  float: right;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
`
