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

  @media (max-width: 950px) {
    max-width: 700px;
  }
`

export const HowToContract = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1250px) {
    margin: 0 30px;
  }

  section {
    margin-top: 35px;
    h2 {
      color: ${(props) => props.theme.blue};
      font-size: 22px;
      margin-bottom: 20px;
      font-weight: normal;
    }

    border-radius: 5px;
    width: 100%;
    padding: 10px 15px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);

    p {
      margin-top: 15px;
      color: ${(props) => props.theme.dark};
      font-size: 18px;

      span {
        color: ${(props) => props.theme.blue};
      }

      svg {
        margin-bottom: -3px;

        &:last-child {
          margin-bottom: -5px;
        }
      }
    }
  }
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
