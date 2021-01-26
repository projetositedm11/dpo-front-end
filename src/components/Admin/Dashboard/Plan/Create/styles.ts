import styled from 'styled-components'

export const WrapperForm = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 20px;
  padding-bottom: 100px;
  margin-left: 10px;
  margin-top: 20px;
  width: 80%;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    margin-top: 20px;
    width: auto;
  }
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`

export const ErrorContainer = styled.div`
  width: 80%;
  margin: 15px 0;
  margin-left: 10px;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin: 15px 20px;
    width: auto;
  }
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -15px;
  padding-top: 10px;
`

export const SaveButton = styled.button`
  width: 100%;
  max-width: 220px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.green};
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  float: right;
  margin-top: 30px;
`

export const FieldContainer = styled.div`
  margin-top: 20px;

  .css-g1d714-ValueContainer {
    padding: 2px 17px;
  }

  p {
    color: ${(props) => props.theme.blue};
    font-size: 17px;
    margin-bottom: 8px;
  }
`
