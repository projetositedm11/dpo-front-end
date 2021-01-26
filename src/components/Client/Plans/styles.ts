import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  background: ${(props) => props.theme.blue};
  width: 100%;
  padding: 30px 0;

  section {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;

    @media (max-width: 1250px) {
      margin: 0 30px;
    }

    a {
      text-decoration: none;

      svg {
        font-size: 30px;
        color: ${(props) => props.theme.white};
      }
    }

    p {
      color: ${(props) => props.theme.white};
      font-weight: bold;
      font-size: 27px;
      margin-left: 15px;
      margin-top: 3px;
    }
  }
`

export const Title = styled.h4`
  font-size: 40px;
  color: ${(props) => props.theme.lightDark};
  width: 100%;
  margin-top: 40px;
  margin-bottom: 45px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`

export const TitleServices = styled.h4`
  font-size: 40px;
  color: ${(props) => props.theme.lightDark};
  width: 100%;
  margin-top: 70px;
  margin-bottom: 45px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 1050px) {
    padding: 0 30px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  margin: 0 auto;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Info = styled.div`
  width: 100%;

  h3 {
    font-size: 40px;
    color: ${(props) => props.theme.blue};
    text-align: center;
  }

  button {
    margin-top: 30px;
    border: none;
    color: ${(props) => props.theme.white};
    width: 100%;
    font-weight: bold;
    font-size: 23px;
    padding: 10px 0;
    cursor: pointer;
    background: ${(props) => props.theme.blue};
  }
`

export const Resume = styled.div`
  width: 100%;

  h3 {
    font-size: 28px;
    color: ${(props) => props.theme.blue};
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 19px;
    color: ${(props) => props.theme.dark};
    text-align: justify;
  }
`

export const GridService = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin: 0 auto;
  margin-bottom: 60px;
  width: 100%;

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Message = styled.p`
  margin: 30px;
  text-align: center;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  font-size: 22px;
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

export const Form = styled.form`
  width: 100%;
  border: 1px solid red;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.greyTextOpacity};
  background: ${(props) => props.theme.white};
  padding: 10px 30px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    section {
      margin-top: -20px;
    }
  }
`

export const TitleModal = styled.h4`
  color: ${(props) => props.theme.lightDark};
  font-weight: bold;
  font-size: 22px;
  margin: 30px 0;
  text-align: center;

  span {
    color: ${(props) => props.theme.blue};
  }
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

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  max-width: 200px;
  width: 100%;
  float: right;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
  line-height: 10px;
`
