import styled from 'styled-components'

interface MainProps {
  open: boolean
}

export const Main = styled.div<MainProps>`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.darkOpacity};
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? 0 : '-100%')};
  z-index: 10000;
  overflow-y: scroll;
  padding: 30px;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.open ? 1 : 0)};
`

export const Container = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  width: 100%;
  border-radius: 5px;
  padding: 30px 50px;
  background: ${(props) => props.theme.white};
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`

export const Message = styled.p`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  margin: 35px;
  font-size: 17px;
  text-align: center;
`

export const Title = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`

export const Description = styled.p`
  font-size: 19px;
  margin-bottom: 50px;
  color: ${(props) => props.theme.dark};
`

export const ButtonContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    a {
      font-size: 14px;
    }
  }
`

export const Subtitle = styled.h5`
  font-size: 20px;
  margin: 20px 0;
  font-weight: bold;
  color: ${(props) => props.theme.lightDark};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 36px;
    color: #c4314b;
  }
  h3 {
    text-align: center;
  }
  @media (max-width: 750px) {
    svg {
      font-size: 30px;
      color: #c4314b;
      margin-left: 2px;
    }
  }
`
