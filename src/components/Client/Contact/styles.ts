import styled from 'styled-components'

export const Container = styled.div`
  button {
    margin-top: 25px;
    border: none;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    padding: 10px 80px;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:disabled {
      opacity: 0.7;
      cursor: auto;
      transition: all 0.2s ease;
    }
  }
`

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

export const Title = styled.h2`
  color: ${(props) => props.theme.lightDark};
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
`

export const Phrase = styled.p`
  color: ${(props) => props.theme.grey};
  max-width: 1200px;
  margin: 20px auto;
  margin-bottom: 30px;
  text-align: center;
  font-size: 19px;

  @media (max-width: 1250px) {
    margin: 0 30px;
    margin-bottom: 30px;
  }
`

export const Form = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 1050px) {
    margin: 0 30px;
    margin-top: 20px;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
    }
  }

  textarea {
    border: 1px solid ${(props) => props.theme.greyOpacity};
    color: ${(props) => props.theme.grey};
    border-radius: 10px;
    padding: 10px 20px;
    background: transparent;
    width: 100%;
    margin-top: 20px;
    resize: none;
    min-height: 80px;
    font-size: 17px;
    transition: all 0.1s ease;

    &:focus {
      transition: all 0.3s ease;
      border: 1px solid ${(props) => props.theme.blue};
    }

    &:not(:placeholder-shown) {
      transition: all 0.3s ease;
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Paragrath = styled.p`
  border-top: 1px solid ${(props) => props.theme.grey};
  margin-top: 20px;
  color: ${(props) => props.theme.grey};
  font-size: 17px;
  line-height: 25px;
  width: 100%;
  padding-top: 20px;

  a {
    text-decoration: none;
  }
`

export const CheckBoxContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;

  input {
    margin-left: 1px;
  }

  label {
    margin-left: 10px;
    color: ${(props) => props.theme.grey};
  }
`

export const Recaptcha = styled.div`
  margin: 30px auto;
  max-width: 1000px;

  div {
    width: 100%;
  }

  @media (max-width: 1050px) {
    margin: 30px;
  }
`

export const AlertContainer = styled.div`
  margin: 20px auto;
  max-width: 1000px;
`
