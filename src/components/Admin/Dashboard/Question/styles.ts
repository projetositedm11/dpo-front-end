import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;
  margin-top: 40px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;

    p {
      font-size: 19px;
      color: ${(props) => props.theme.grey};
      font-weight: bold;
      margin-top: 20px;
    }
  }
`

export const QuestionItem = styled.div`
  width: 30%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0, 0.4);
  height: 120px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.blue};
  border-radius: 5px;
  p {
    color: white;
    font-size: 22px;
    padding: 20px;
  }
  a {
    padding: 20px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
