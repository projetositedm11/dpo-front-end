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

export const WrapperData = styled.div`
  margin-top: 10px;
  ul {
    margin-top: 10px;
    li {
      color: ${(props) => props.theme.blue};
      font-weight: bold;
    }
  }
  p {
  }
`

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

export const LogicSection = styled.div`
  padding-top: 10px;

  h5 {
    font-size: 22px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.greyText};
    svg {
      margin-top: 3px;
      margin-left: 10px;
      position: absolute;
      cursor: pointer;
    }
  }
`

export const LogicItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 4px solid #eee;
  p {
    font-size: 22px;
    color: ${(props) => props.theme.blue};
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  margin: 25px 0;
  font-size: 0.9rem;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  thead tr {
    background-color: ${(props) => props.theme.blue};
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
  th,
  td {
    padding: 12px 15px;
    font-size: 16px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddddd;
  }
  tbody tr:nth-of-type(even) {
    background: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 4px solid ${(props) => props.theme.blue};
  }
`
