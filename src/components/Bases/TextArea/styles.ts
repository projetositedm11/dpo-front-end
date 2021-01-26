import styled, { css } from 'styled-components'

interface ContainerProps {
  focus: boolean
  radius?: string
  label?: string
}

export const Main = styled.div`
  margin-top: 20px;

  p {
    color: ${(props) => props.theme.blue};
    font-size: 16px;
  }
`

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 80px;
  margin-top: ${(props) => props.label && '8px'};

  textarea {
    position: absolute;
    top: 0;
    margin-top: 0;
    border: 1px solid ${(props) => props.theme.greyOpacity};
    color: ${(props) => props.theme.grey};
    border-radius: ${(props) => (props.radius ? props.radius : '10px')};
    padding: 10px 20px;
    background: transparent;
    width: 100%;
    resize: none;
    min-height: 80px;
    font-size: 17px;
    transition: all 0.1s ease;
  }

  label {
    position: absolute;
    top: 13px;
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

      textarea {
        border: 1px solid ${(props) => props.theme.blue};
        transition: all 0.1s ease;
      }
    `}

  textarea:not(:placeholder-shown) + label {
    top: -7px;
    left: 15px;
    background: ${(props) => props.theme.white};
    font-size: 12px;
    transition: all 0.1s ease;
    color: ${(props) => props.theme.blue};
    padding: 0 5px;
  }

  textarea:not(:placeholder-shown) {
    border: 1px solid ${(props) => props.theme.blue};
    transition: all 0.1s ease;
  }
`
