import styled from 'styled-components'

interface IContainerProps {
  open: boolean
}

export const Container = styled.div<IContainerProps>`
  article {
    max-height: ${(props) => (props.open ? 'auto' : '0px')};
    transition: all 0.3s ease;
    overflow: hidden;
  }
`

export const Title = styled.h3`
  color: ${(props) => props.theme.lightDark};
  font-size: 25px;
`

export const Header = styled.header`
  margin-top: 50px;
  padding: 15px 0;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.blue};
  border-bottom: 1px solid ${(props) => props.theme.blue};
  position: relative;
  cursor: pointer;

  section {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 50px;
    height: 50px;

    svg {
      font-size: 40px;
      color: ${(props) => props.theme.dark};
      text-align: center;
      margin-top: 5px;
    }
  }

  @media (max-width: 1250px) {
    margin: 0 30px;
    margin-top: 50px;
  }
`

export const Row = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1250px) {
    margin: 0 30px;
    margin-top: 40px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Message = styled.p`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  margin: 35px;
  font-size: 20px;
  text-align: center;
`
