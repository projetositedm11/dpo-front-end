import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;
  margin-top: 40px;
`
export const ErrorContainer = styled.div`
  width: 70%;
`
export const Loading = styled.div`
  text-align: center;
  margin-top: 150px;
  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.lightDark};
    font-size: 25px;
  }
`
