import styled from 'styled-components'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  box-shadow: 2px 2px 4px 2px ${(props) => (props.open ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
  transition: all 0.3s ease;
  cursor: pointer;
  section {
    display: flex;
    justify-content: space-between;
    padding: 10px 4px;
    transition: all 0.3s ease;
    box-shadow: 2px 2px 4px 2px ${(props) => (!props.open ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
    h3 {
      font-size: 20px;
      font-weight: normal;
      margin-right: 10px;
      width: 300px;
      color: ${(props) => props.theme.blue};
      line-height: 30px;
    }
    svg {
      font-size: 40px !important;
      color: ${(props) => props.theme.dark};
      transition: all 0.3s ease;
      transform: ${(props) => (props.open ? 'rotate(90deg)' : 0)};
    }
  }
`

export const Content = styled.div`
  max-height: 400px;
  transition: all 0.2s ease;
  overflow: hidden;

  div {
    margin: 30px 25px;
    margin-top: 15px;

    p {
      font-size: 17px;
      line-height: 28px;
      color: ${(props) => props.theme.lightDark};
    }
  }
`
