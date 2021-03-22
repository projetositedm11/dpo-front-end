import styled from 'styled-components'

interface StyledModalProps {
  open: boolean
}

export const StyledModal = styled.div<StyledModalProps>`
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
  overflow-y: scroll;

  @media (max-width: 1050px) {
    padding: 0 30px;
  }

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  background: ${(props) => props.theme.white};
  padding: 30px 40px;
  z-index: 9998;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 30px auto;

  @media (max-width: 600px) {
    padding: 30px 20px;
  }

  header {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;

    svg {
      font-size: 30px;
      cursor: pointer;
      color: ${(props) => props.theme.lightDark};
    }
  }
`
