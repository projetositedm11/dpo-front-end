import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`
export const DataText = styled.h5`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.greyText};
`

export const Label = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.dark};
`
