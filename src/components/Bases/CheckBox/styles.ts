import styled, { css } from 'styled-components'

interface ContainerProps {
  focus: boolean
  modeWhite: boolean
}

export const Container = styled.label<ContainerProps>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.white};
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.greyOpacity};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  svg {
    color: ${(props) => props.theme.white};
    opacity: 0;
    transition: all 0.2s ease;
  }

  input {
    display: none;
  }

  ${(props) =>
    props.focus &&
    css`
      background: ${(props) => props.theme.blue};
      border: 2px solid ${(props) => props.theme.blue};
      transition: all 0.2s ease;

      svg {
        opacity: 1;
        transition: all 0.2s ease;
      }
    `}

  ${(props) =>
    props.modeWhite &&
    props.focus &&
    css`
      background: ${(props) => props.theme.white};
      border: 2px solid ${(props) => props.theme.white};
      transition: all 0.2s ease;

      svg {
        color: ${(props) => props.theme.blue};
        opacity: 1;
        transition: all 0.2s ease;
      }
    `}
`
