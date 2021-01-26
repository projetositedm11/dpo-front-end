import styled from 'styled-components'

interface ContainerProps {
  url: string
}

export const Container = styled.div<ContainerProps>`
  background: url(${(props) => props.url});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 720px;
  margin-top: -10px;
  border-bottom: 1px solid ${(props) => props.theme.blue};
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  margin-bottom: 100px;
  display: grid;
  padding-top: 150px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  img {
    max-width: 500px;
    width: 100%;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid ${(props) => props.theme.lightDark};
    background: ${(props) => props.theme.white};
    border-radius: 30px;
    padding: 10px 20px;
    margin-left: -120px;
    @media (max-width: 800px) {
      margin: 0 auto;
    }
  }

  @media (max-width: 1300px) {
    margin: 0 30px;
    img {
      margin-left: -10px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Info = styled.div`
  @media (max-width: 900px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
  margin-right: 110px !important;
  p {
    font-size: 32px;
    color: ${(props) => props.theme.lightDark};
    margin-top: 20px;
    font-weight: bold;
    margin-right: 190px;
    text-align: right;

    @media (max-width: 1050px) {
      margin-right: 0;
      text-align: left;

      :nth-child(2),
      :nth-child(3) {
        text-align: right;
      }
    }

    span {
      color: ${(props) => props.theme.blue};
    }

    :nth-child(2) {
      margin-top: 0;
      margin-right: 0;
    }

    :nth-child(3) {
      font-size: 40px;
      margin-top: 40px;
      max-width: 270px;
      width: 100%;
      margin-left: auto;
      margin-right: 0;

      span {
        padding-right: 5px;
        animation: blinkCaret 0.5s infinite;

        @keyframes blinkCaret {
          0% {
            border-right: 0.14em solid ${(props) => props.theme.blue};
          }

          50% {
            border-right: 0.14em solid ${(props) => props.theme.white};
          }

          100% {
            border-right: 0.14em solid ${(props) => props.theme.blue};
          }
        }
      }
    }
  }

  section {
    margin-top: 70px;
    text-align: right;

    button {
      background: ${(props) => props.theme.blue};
      border: 1px solid ${(props) => props.theme.blue};
      border-radius: 7px;
      color: ${(props) => props.theme.white};
      padding: 10px 40px;
      cursor: pointer;
      font-size: 19px;
      transition: all 0.3s ease;

      &:hover {
        transition: all 0.3s ease;
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.blue};
      }

      &:last-child {
        opacity: 0.4;
        border: none;
        background: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.4),
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.8),
          rgba(0, 112, 192, 0.2),
          rgba(0, 112, 192, 0.4),
          rgba(0, 112, 192, 0.6),
          rgba(0, 112, 192, 0.8),
          rgba(0, 112, 192, 1)
        );
        transform: rotate(-180deg);

        &:hover {
          cursor: auto;
          transition: all 0.3s ease;
          color: ${(props) => props.theme.white};
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.8),
            rgba(0, 112, 192, 0.2),
            rgba(0, 112, 192, 0.4),
            rgba(0, 112, 192, 0.6),
            rgba(0, 112, 192, 0.8),
            rgba(0, 112, 192, 1)
          );
        }
      }
    }
  }
`
