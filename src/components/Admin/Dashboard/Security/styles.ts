import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;
  margin-top: 40px;
  margin-bottom: 50px;
`

export const Content = styled.form`
  width: 80%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h4`
  color: ${(props) => props.theme.lightDark};
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: 4px;
  }
`

export const Message = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  margin: 10px 0;
  margin-top: 15px;
`
export const Button = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 6px 10px;
  color: white;
  font-size: 19px;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.green};
  border: none;
  transition: all 0.2s ease;
  opacity: 1;

  &:disabled {
    transition: all 0.2s ease;
    opacity: 0.6;
  }
`

export const Related = styled.div`
  margin-top: 20px;

  section {
    margin-top: -10px;
  }
`

export const Text = styled.h5`
  color: ${(props) => props.theme.greyText};
  font-size: 18px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-weight: normal;

  span {
    color: ${(props) => props.theme.blue};
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const AlertContainer = styled.div`
  width: 80%;
  margin: 15px 0;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin: 15px 20px;
    width: auto;
  }
`
