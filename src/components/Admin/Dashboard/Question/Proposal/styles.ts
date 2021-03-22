import styled from 'styled-components'

export const Loading = styled.div`
  text-align: center;
  margin-top: 150px;
  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.lightDark};
    font-size: 25px;
  }
`
