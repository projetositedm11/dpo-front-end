import styled from 'styled-components'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-300px')};
  z-index: 998;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.blue};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    a {
      margin-top: 15px;
      text-decoration: none;
      color: white;
      padding: 0 20px;
      padding-bottom: 15px;
      max-width: 100px;
      width: 100%;
      padding-left: 2px;
      /* border-bottom: 1px solid ${(props) => props.theme.blue}; */
      font-size: 19px;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`
