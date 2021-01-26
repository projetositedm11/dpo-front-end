import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WrapperHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  background: ${(props) => props.theme.lightGrey};
`

export const Message = styled.p`
  margin: 30px;
  text-align: center;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  font-size: 22px;
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.blue};
  border-top: 1px solid ${(props) => props.theme.blue};

  h3 {
    color: ${(props) => props.theme.lightDark};
    font-size: 30px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 1050px) {
      margin: 0 30px;
    }
  }
`

export const SubTitle = styled.h4`
  color: ${(props) => props.theme.lightDark};
  font-size: 30px;
  text-align: center;
  margin: 0 30px;
  font-weight: bold;

  &:last-child {
    font-size: 30px;
    font-weight: normal !important;
  }
`

export const Phrase = styled.h5`
  color: ${(props) => props.theme.lightDark};
  font-size: 25px;
  text-align: center;
  margin: 0 30px;
  font-weight: normal;
`

export const SubHeader = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 20px;
`

export const Bold = styled.span`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`

export const PlansContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
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
