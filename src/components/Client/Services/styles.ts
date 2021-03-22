import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 40px;
  background: ${(props) => props.theme.lightGreyOpacity};
`

export const Header = styled.header`
  background: ${(props) => props.theme.lightGrey};
  width: 100%;
  text-align: center;
  padding: 30px 0;

  h3 {
    color: ${(props) => props.theme.lightDark};
    font-size: 45px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 1050px) {
      margin: 0 30px;
    }
  }
`

export const Bold = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;

  header {
    margin-top: 50px;
    padding: 15px 0;
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.blue};
    border-bottom: 1px solid ${(props) => props.theme.blue};

    @media (max-width: 1250px) {
      margin: 0 30px;
      margin-top: 50px;
    }
  }

  @media (max-width: 950px) {
    max-width: 700px;
  }
`

export const Title = styled.h3`
  color: ${(props) => props.theme.lightDark};
  font-size: 25px;
`

export const Row = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1250px) {
    margin: 0 30px;
    margin-top: 40px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Message = styled.p`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  margin: 35px;
  font-size: 20px;
  text-align: center;
`

export const ErrorContainer = styled.p`
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;
  margin-top: 40px;

  @media (max-width: 950px) {
    max-width: 700px;
    margin: 0 auto;
    margin-top: 40px;
  }
`

export const DownBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  border-top: 1px solid ${(props) => props.theme.lightGrey};
  background: ${(props) => props.theme.white};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    padding: 20px 50px;
    z-index: 9997;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin-top: 18px;
    }
  }

  p {
    font-size: 19px;
    color: ${(props) => props.theme.lightDark};
    font-weight: bold;
    margin-top: 8px;
    display: block;
  }

  button {
    text-decoration: none;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    display: block;
    font-size: 19px;
    border-radius: 3px;
    padding: 7px 0;
    border: none;
    max-width: 250px;
    text-align: center;
    width: 100%;
  }
`

export const Loading = styled.div`
  height: 200px;
  div {
    text-align: center;
    p {
      margin-top: 120px;
      font-size: 22px;
      color: ${(props) => props.theme.blue};
    }
  }
`
