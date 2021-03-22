import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.blue};

  h3 {
    color: ${(props) => props.theme.lightDark};
    font-size: 30px;
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
  max-width: 1000px;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 1050px) {
    margin: 80px 30px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  section {
    p {
      font-size: 16px;
      margin-top: 20px;
      line-height: 30px;
      text-align: justify;
      color: ${(props) => props.theme.dark};

      span {
        color: ${(props) => props.theme.blue};
      }
    }

    :nth-child(2) {
      p {
        margin-top: 40px;
        font-size: 18px;
      }
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  margin-top: 60px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
  }
`
