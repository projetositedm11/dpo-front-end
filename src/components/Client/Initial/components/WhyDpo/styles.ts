import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.blue};
  border-top: 1px solid ${(props) => props.theme.blue};

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
  margin: 40px auto;
  display: grid;
  grid-template-columns: 40fr 60fr;
  grid-gap: 80px;

  @media (max-width: 1050px) {
    margin: 40px 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
    margin: 0 auto;
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

    article {
      margin-top: 25px;
      text-align: center;
      margin-bottom: -10px;

      h4 {
        color: ${(props) => props.theme.white};
        font-size: 24px;
      }

      p {
        color: ${(props) => props.theme.white};
        margin-top: 20px;
        font-size: 18px;
      }

      :nth-child(3) {
        text-align: justify;

        h4 {
          text-align: center;
        }
      }

      :nth-child(2),
      :nth-child(4) {
        border: 2px solid ${(props) => props.theme.darkBlue};
        background: ${(props) => props.theme.white};
        width: 120%;
        border-radius: 30px;
        padding: 20px 40px;
        text-align: justify;
        margin-left: -10%;

        h4 {
          text-align: center;
          color: ${(props) => props.theme.blue};
        }

        p {
          color: ${(props) => props.theme.blue};
        }

        @media (max-width: 900px) {
          width: 120%;
        }
      }
    }

    :nth-child(2) {
      border: 2px solid ${(props) => props.theme.darkBlue};
      background: ${(props) => props.theme.blue};
      border-radius: 100px;
      padding: 0 25px;
    }
  }
`
