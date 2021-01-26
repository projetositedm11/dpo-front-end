import styled, { css } from 'styled-components'

interface ContainerProps {
  focus: boolean
  borderBlue?: boolean
  radius?: string
  label?: string
}

export const Main = styled.div`
  margin-top: 20px;
  width: 100%;

  p {
    color: ${(props) => props.theme.blue};
    font-size: 16px;
  }
`

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 40px;
  margin-top: ${(props) => props.label && '8px'};

  input {
    /* position: absolute; */
    top: 0;
    margin-top: 0;
    border: 1px solid ${(props) => (props.borderBlue ? props.theme.blue : props.theme.greyOpacity)};
    color: ${(props) => props.theme.grey};
    border-radius: ${(props) => (props.radius ? props.radius : '10px')};
    padding: 10px 20px;
    background: transparent;
    width: 100%;
    font-size: 16px;
    transition: all 0.1s ease;

    ::placeholder {
      color: ${(props) => props.theme.grey};
      font-size: 16px;
    }
  }

  label {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 15px;
    color: ${(props) => props.theme.grey};
    transition: all 0.1s ease;
  }

  ${(props) =>
    props.focus &&
    css`
      label {
        top: -7px;
        left: 15px;
        font-size: 12px;
        background: white;
        transition: all 0.1s ease;
        color: ${(props) => props.theme.blue};
        padding: 0 5px;
      }

      input {
        border: 1px solid ${(props) => props.theme.blue};
        transition: all 0.1s ease;
      }
    `}

  input:not(:placeholder-shown) + label {
    top: -7px;
    left: 15px;
    background: ${(props) => props.theme.white};
    font-size: 12px;
    transition: all 0.1s ease;
    color: ${(props) => props.theme.blue};
    padding: 0 5px;
  }

  input:not(:placeholder-shown) {
    /* border: 1px solid ${(props) => props.theme.blue}; */
    transition: all 0.1s ease;
  }
`
