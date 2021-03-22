import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 60px;

  @media (max-width: 1050px) {
    margin: 0 30px;
    margin-bottom: 60px;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;

    @media (max-width: 900px) {
      grid-gap: 0;
      grid-template-columns: repeat(1, 1fr);
    }

    a {
      text-decoration: none;
      border: 1px solid ${(props) => props.theme.blue};
      font-size: 20px;
      border-radius: 7px;
      padding: 0 15px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      width: 100%;
      cursor: pointer;
      font-weight: bold;
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      transition: all 0.3s ease;
    }
  }
`

export const Header = styled.header`
  background: ${(props) => props.theme.lightGrey};
  width: 100%;
  text-align: center;
  padding: 30px 0;

  h3 {
    color: ${(props) => props.theme.lightDark};
    font-size: 45px;
  }
`

export const Bold = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`
