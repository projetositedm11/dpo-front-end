import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  background: ${(props) => props.theme.blue};
  width: 100%;
  padding: 30px 0;

  section {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;

    @media (max-width: 1250px) {
      margin: 0 30px;
    }

    a {
      text-decoration: none;

      svg {
        font-size: 30px;
        color: ${(props) => props.theme.white};
      }
    }

    p {
      color: ${(props) => props.theme.white};
      font-weight: bold;
      font-size: 27px;
      margin-left: 15px;
      margin-top: 3px;
    }
  }
`

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  height: 100%;
  @media (max-width: 950px) {
    margin: 0 0px;
    margin-bottom: 30px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;

  p {
    font-size: 23px;
    margin-right: 40px;
    color: ${(props) => props.theme.lightDark};
    margin-top: 20px;
  }

  > img {
    min-width: 100px;
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    p {
      margin-right: 0;
      text-align: center;
    }
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
