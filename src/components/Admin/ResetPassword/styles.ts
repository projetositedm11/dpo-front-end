import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  border-radius: 5px;
  padding: 50px 30px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.greyTextOpacity};
  max-width: 500px;
  width: 100%;
  margin: 0 30px;
  display: flex;
  min-height: 520px;
  align-items: center;
  flex-direction: column;
`

export const LogoContainer = styled.img`
  max-width: 220px;
  width: 100%;
  margin-left: -14px;
`

export const Title = styled.h3`
  font-size: 24px;
  margin-top: 35px;
  max-width: 304px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.blue};
  font-weight: normal;
`

export const Input = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.grey};
  color: ${(props) => props.theme.grey};
  border-radius: 5px;
  padding: 15px 20px;
  max-width: 304px;
  align-self: center;
  width: 100%;
  font-size: 15px;
  margin-top: 15px;
  background: ${(props) => props.theme.white};
`

export const Button = styled.button`
  border-radius: 5px;
  padding: 15px 20px;
  max-width: 304px;
  font-size: 15px;
  border: none;
  width: 100%;
  margin: 10px 0;
  margin-top: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  opacity: 1;
  transition: all 0.2s ease;

  &:disabled {
    transition: all 0.2s ease;
    opacity: 0.7;
  }
`

export const BackToLogin = styled.button`
  background: transparent;
  border: none;
  max-width: 304px;
  width: 100%;
  text-align: right;
  color: ${(props) => props.theme.blue};
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`

export const Recaptcha = styled.div`
  margin-top: 15px;
  width: 100%;
  max-width: 304px;

  div {
    width: 100%;
    align-self: flex-start;
  }
`

export const AlertContainer = styled.div`
  margin-top: 20px;
  margin-bottom: -15px;
  width: 100%;
  max-width: 304px;
`
