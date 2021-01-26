import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 0px 10px;
`

export const Title = styled.h3`
  color: ${(props) => props.theme.blue};
  font-size: 32px;
  font-weight: bold;
`

export const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-left: 20px;
  background-color: ${(props) => props.theme.green};
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
