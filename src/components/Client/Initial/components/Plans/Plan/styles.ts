import styled from 'styled-components'

export const WrapperContent = styled.div`
  margin: 30px;
  width: 450px;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 350px;
  }
`
export const Content = styled.div`
  border: 2px solid #0070c0;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  min-height: 500px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #0070c0;
    color: white;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  ul {
    display: inline;
    text-decoration: none;
    list-style: none;
    width: 20px;

    li {
      margin-bottom: 30px;
      display: flex;

      label {
        margin-top: 3px;
        display: block;
        margin-left: 10px;

        @media (max-width: 768px) {
          width: 300px;
        }
      }
    }
  }
`

interface PropsPlanHeader {
  color: string
  fontSize: string
}

export const Header = styled.h3<PropsPlanHeader>`
  text-align: center;
  margin-bottom: 30px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`

export const Resume = styled.div`
  text-align: center;
  margin-top: -20px;
  margin-bottom: 30px;
  p {
    color: ${(props) => props.theme.greyText};
  }
`
