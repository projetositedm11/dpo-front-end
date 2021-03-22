import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  svg {
    color: ${(props) => props.theme.blue};
    font-size: 25px;
    margin-right: 30px;
  }

  p {
    font-size: 17px;
    color: ${(props) => props.theme.dark};
  }
`
