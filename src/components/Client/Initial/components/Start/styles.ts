import styled from 'styled-components'

export const Hr = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background: ${(props) => props.theme.blue};
`

export const Container = styled.div`
  padding: 40px 0;

  @media (max-width: 1050px) {
    padding: 40px 30px;
  }
`

export const Header = styled.header`
  background: ${(props) => props.theme.lightGrey};
  width: 100%;
  text-align: center;
  padding: 30px 0;
  max-width: 1000px;
  margin: 0 auto;

  h3 {
    color: ${(props) => props.theme.lightDark};
    font-size: 45px;
  }
`

export const Bold = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 1050px) {
    margin: 0 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
      width: 100%;
      margin-bottom: 20px;
    }

    h4 {
      margin-right: auto;
      font-size: 27px;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      line-height: 60px;
      max-width: 300px;
    }

    p {
      font-size: 19px;
      color: ${(props) => props.theme.dark};
      text-align: center;
      padding: 0 40px;
    }

    button {
      margin-top: 50px;
      width: 100%;
      border: 1px solid ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.blue};
      border-radius: 7px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      transition: all 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.blue};
        background: ${(props) => props.theme.white};
      }
    }
  }
`

export const Topics = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    max-width: 350px;
    margin: 30px auto;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 35px;

    @media (max-width: 900px) {
      padding: 0;
    }
  }
`
