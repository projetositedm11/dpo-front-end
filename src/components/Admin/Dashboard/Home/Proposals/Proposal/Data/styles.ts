import styled from 'styled-components'

export const ClientDataText = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.blue};
  width: 100%;
  word-break: break-all;

  @media (max-width: 1500px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ClientDataLabel = styled.label`
  color: ${(props) => props.theme.lightDark};
`
