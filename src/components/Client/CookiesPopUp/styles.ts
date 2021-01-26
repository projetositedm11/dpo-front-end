import styled from 'styled-components'

interface ContainerProps {
  display: string
}

export const Container = styled.div<ContainerProps>`
  left: ${(props) => (props.display === 'false' ? '-500px' : '0')};
  max-width: 500px;
  width: 100%;
  background: white;
  padding: 20px;
  border-top: 2px solid #eee;
  position: fixed;
  bottom: 0;
  top: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  transition: all 0.3s ease;
`

export const Section = styled.div`
  width: 100%;
  margin-top: 20px;

  &:last-child {
    margin-top: 30px;
    border-top: 1px solid ${(props) => props.theme.greyOpacity};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    label {
      position: relative;
      display: inline-block;
      width: 80px;
      height: 27px;
      outline: none;
    }

    label input {
      position: absolute;
      top: -99999px;
      left: -99999px;
    }

    div {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 80px;
      display: flex;
      justify-content: space-between;

      h6 {
        color: ${(props) => props.theme.white};
        margin-top: 4px;
        margin-left: 7px;
        font-size: 14px;

        &:last-child {
          margin-right: 7px;
        }
      }
    }

    div:before {
      position: absolute;
      content: '';
      height: 19px;
      width: 35px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 20px;
    }

    input:checked + div {
      background-color: #2196f3;
    }

    input:focus + div {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + div:before {
      transform: translateX(37px);
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
    padding-top: 10px;
  }

  img {
    width: 100%;
    max-width: 270px;
  }
`

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  height: 40px;
  background: #0070c0;
  color: white;
  border: none;
  margin-top: 30px;
  font-size: 17px;
  border-radius: 5px;
`

export const ButtonToggle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 130px;
  z-index: 1001;
  height: 130px;

  img {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 60px;
    left: 90px;
    top: 55px;
    transform: rotate(45deg);
  }

  button {
    border: none;
    position: absolute;
    cursor: pointer;
    bottom: -70px;
    left: -70px;
    width: 100%;
    height: 100%;
    transform: rotate(-45deg);
    background: ${(props) => props.theme.blue};
  }
`

interface OpacityProps {
  show: string
}

export const Opacity = styled.div<OpacityProps>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  z-index: 1000;
  display: ${(props) => (props.show === 'false' ? 'none' : 'block')};
  transition: all 0.2s ease;
`
