import styled from 'styled-components'

interface StyledSuccessProps {
  open: boolean
}

export const StyledSuccess = styled.div<StyledSuccessProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? 0 : '-100%')};
  width: 100%;
  height: 100vh;
  z-index: 9999;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.3s ease;
  background: ${(props) => props.theme.darkOpacity};
  border: none;
  padding: 0 30px;
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  max-width: 500px;
  width: 100%;
  background: ${(props) => props.theme.white};
  z-index: 9998;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  text-align: center;
  padding: 0;
  border-radius: 3px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  section {
    background: #8cc33b;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: -35px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      text-align: center;
      color: ${(props) => props.theme.white};
      font-size: 40px;
    }
  }

  h3 {
    font-size: 25px;
    color: ${(props) => props.theme.lightDark};
    margin-top: 25px;
    font-weight: bold;
  }

  p {
    margin: 0 15px;
    margin-top: 20px;
    font-size: 19px;
    color: ${(props) => props.theme.dark};
  }

  button {
    width: 100%;
    padding: 12px;
    background: ${(props) => props.theme.blue} !important;
    text-align: center;
    font-size: 18px;
    margin: 0;
    margin-top: 30px;
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`
