import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 50px 30px;
  margin-bottom: 30px;
  max-width: 1000px;
  border-top: 1px solid ${(props) => props.theme.blue};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 45fr 65fr;
  grid-gap: 50px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  section {
    h4 {
      margin-top: 20px;
      font-size: 28px;
      font-weight: normal;
      color: ${(props) => props.theme.dark};

      span {
        color: ${(props) => props.theme.blue};
        font-weight: bold;
      }
    }

    p {
      margin-top: 30px;
      font-size: 17px;
      color: ${(props) => props.theme.dark};
    }

    a {
      text-decoration: none;
      margin-top: 20px;
      display: block;
      text-align: center;
      width: 100% !important;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.blue};
      border: 1px solid ${(props) => props.theme.blue};
      border-radius: 7px;
      padding: 8px 20px;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      transition: all 0.3s ease;

      &:hover {
        transition: all 0.3s ease;
        color: ${(props) => props.theme.blue};
        background: ${(props) => props.theme.white};
      }
    }
  }
`

export const Topics = styled.div`
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.blue};
  padding: 40px 70px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 700px) {
    margin: 0 auto;
  }
`
