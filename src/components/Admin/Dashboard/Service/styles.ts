import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 70%;
`

export const Message = styled.div`
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 20px;

  p {
    font-size: 22px;
  }
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
