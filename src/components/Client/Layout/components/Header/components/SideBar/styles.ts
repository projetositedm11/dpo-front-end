import styled from 'styled-components'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-300px')};
  z-index: 1001;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  background: ${(props) => props.theme.white};
  padding: 0 30px;

  header {
    margin: 10px 0;

    svg {
      color: ${(props) => props.theme.grey};
      font-size: 25px;
      margin-top: 10px;
      cursor: pointer;
    }

    h4 {
      color: ${(props) => props.theme.dark};
      margin-top: -31px;
      text-align: center;
      width: 100%;
      font-size: 23px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 30px;

    a {
      margin-top: 15px;
      text-decoration: none;
      color: ${(props) => props.theme.lightDark};
      text-align: left;
      padding-bottom: 13px;
      width: 100%;
      font-size: 17px;
      font-weight: bold;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`

interface OpacityProps {
  show: boolean
}

export const Opacity = styled.div<OpacityProps>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  z-index: 1000;
  display: ${(props) => (props.show ? 'block' : 'none')};
  transition: all 0.2s ease;
`
