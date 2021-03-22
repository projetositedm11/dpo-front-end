import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-bottom: 28px;
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

export const Actions = styled.div``

interface ButtonProps {
  backgroundColor?: string
}
export const Button = styled.button<ButtonProps>`
  width: 70px;
  padding: 10px 10px;
  color: white;
  font-size: 20px;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.backgroundColor === 'red' ? props.theme.redColor : props.theme.blue};
  border: none;

  @media (max-width: 768px) {
    max-width: 50px;
  }
`

export const RelatedServices = styled.div``

export const Text = styled.h5`
  color: ${(props) => props.theme.greyText};
  font-size: 18px;
  margin-bottom: 10px;
`

export const Label = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.greyText};
`

export const List = styled.ul``
export const ItemList = styled.li`
  color: ${(props) => props.theme.blue};
  font-size: 15px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    margin-left: -10px;
  }
`
