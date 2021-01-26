import styled from 'styled-components'

export const Container = styled.div``
export const Welcome = styled.h2`
  color: ${(props) => props.theme.lightDark};
  font-size: 33px;
`
export const Bold = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
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
