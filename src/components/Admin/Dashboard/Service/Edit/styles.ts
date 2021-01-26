import styled from 'styled-components'

export const WrapperForm = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 40px;
  margin-bottom: 130px;
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

interface ButtonProps {
  background: string
}

export const Button = styled.button<ButtonProps>`
  width: 40px;
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

export const Textarea = styled.textarea`
  border: 1px solid ${(props) => props.theme.greyOpacity};
  color: ${(props) => props.theme.grey};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background: transparent;
  width: 100%;
  margin-top: 20px;
  height: 200px;
`
export const FieldContainer = styled.div`
  margin-top: 10px;
`
export const ContainerFinalValue = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin-top: 10px;
  p {
    margin-bottom: 13px;
    margin-top: 13px;
    font-size: 19px;
    span {
      color: ${(props) => props.theme.blue};
    }
    b {
      color: ${(props) => props.theme.blue};
    }
  }
`

interface InputFileProps {
  url: string
}

export const InputFile = styled.div<InputFileProps>`
  display: flex;
  margin-bottom: 20px;
  margin-top: 15px;

  section {
    div {
      width: 70px;
      height: 70px;
      min-width: 70px;
      min-height: 70px;
      border-radius: 50%;
      background: url(${(props) => props.url});
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border: 1px solid ${(props) => props.theme.greyOpacity};

      @media (max-width: 550px) {
        margin: 0 auto;
      }
    }

    p {
      margin-top: 5px;
      font-size: 14px;
      color: ${(props) => props.theme.blue};
      text-align: center;
    }
  }

  label {
    display: flex;
    margin-top: 20px;
    margin-left: 20px;

    div {
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      text-align: center;
      cursor: pointer;
      padding: 0px 40px;
      height: 30px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1130px) {
        height: 60px;
      }

      @media (max-width: 768px) {
        height: 30px;
      }
    }

    p {
      margin-top: 5px;
      margin-left: 10px;
      font-size: 16px;
      color: ${(props) => props.theme.lightDark};

      @media (max-width: 550px) {
        text-align: center;
        margin-bottom: 10px;
      }
    }

    @media (max-width: 1130px) {
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
      margin-left: 0;
    }

    @media (max-width: 550px) {
      flex-direction: column-reverse;
    }
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
