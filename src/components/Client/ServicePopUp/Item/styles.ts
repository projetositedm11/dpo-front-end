import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 20px;
  padding: 20px;
  width: 100%;

  p {
    font-size: 20px;
    color: ${(props) => props.theme.blue};
    text-align: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 70px;
    font-weight: 600;
  }

  a {
    display: block;
    border: none;
    color: ${(props) => props.theme.white};
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 8px;
    background: ${(props) => props.theme.blue};
  }
`
