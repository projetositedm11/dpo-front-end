import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0px 10px;
  width: 100%;
  text-align: center;
`

export const Title = styled.h3`
  font-size: 32px;
  color: ${(props) => props.theme.blue};
  text-align: center;
  height: auto;
  font-weight: bold;
  margin-left: 20px;
`

export const WrapperIcon = styled.div`
  a {
    text-decoration: none;

    svg {
      color: ${(props) => props.theme.dark};
    }
  }
  margin-top: 5px;
  cursor: pointer;
  font-size: 32px;
`
