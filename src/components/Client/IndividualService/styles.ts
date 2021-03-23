import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px auto;
  margin-top: 50px;
  max-width: 1000px;

  @media (max-width: 1050px) {
    margin: 40px 30px;
    margin-top: 50px;
  }
`

export const Title = styled.h2`
  font-size: 33px;
  margin: 10px 0;
  margin-top: 30px;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`

export const Bold = styled.h3`
  font-size: 28px;
  margin: 10px 0;
  margin-top: 30px;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`

export const ButtonContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.blue};
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const TextItem = styled.li`
  font-size: 20px;
  color: ${(props) => props.theme.lightDark};
  margin-top: 10px;
  font-weight: bold;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RequirementsTitle = styled.h5`
  font-size: 19px;
  color: ${(props) => props.theme.lightDark};
  margin-top: 50px;
  font-weight: bold;
`

export const RequirementsParagrath = styled.p`
  font-size: 17px;
  color: ${(props) => props.theme.lightDark};
  margin-top: 20px;
  font-weight: normal;
`
export const Loading = styled.div`
  height: 200px;
  div {
    text-align: center;
    p {
      margin-top: 120px;
      font-size: 22px;
      color: ${(props) => props.theme.blue};
    }
  }
`
