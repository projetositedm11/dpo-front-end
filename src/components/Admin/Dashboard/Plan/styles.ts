import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;
  margin-top: 40px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;

    p {
      font-size: 19px;
      color: ${(props) => props.theme.grey};
      font-weight: bold;
      margin-top: 20px;
    }
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
