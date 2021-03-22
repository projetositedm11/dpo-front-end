import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background: #eee;
  height: auto;
  bottom: 0;
  padding: 20px;
`

export const Section = styled.div`
  width: 40%;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

export const WrapperContent = styled.div`
  max-width: 1530px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1268px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const WrapperLinks = styled.div`
  margin-top: 20px;
  text-align: center;
  ul {
    p {
      color: black;
      font-size: 30px;
      color: #0070c0;
      font-weight: bold;
    }
    list-style: none;
    margin-left: 10px;
    text-align: justify;
    transition: all 0.3s ease-in-out;
    li {
      font-size: 18px;
      margin-top: 20px;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #0070c0;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
  @media (max-width: 768px) {
    ul {
      text-align: left;
      margin-left: -34px;
      margin-bottom: 20px;
    }
  }
`

interface ButtonProps {
  color: string
  background: string
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  font-size: 22px;
  border-radius: 5px;
  cursor: pointer;
`

export const WrapperText = styled.div`
  background: #4e4545;
  text-align: center;
  padding: 20px;
  bottom: 0;
  width: 100%;
  p {
    color: white;
  }
`

export const WrapperLogo = styled.div`
  padding: 2px;
  @media (max-width: 768px) {
    img {
      width: 81%;
    }
    margin-left: -9px;
  }

  ul {
    display: inline;
    text-align: center;
    list-style: none;
    li {
      img {
        margin-left: 30px;
        width: 10%;
        cursor: pointer;
      }
    }
    @media (max-width: 768px) {
      text-align: left;
    }
  }
`
