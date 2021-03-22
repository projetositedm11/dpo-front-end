import styled from 'styled-components'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  margin-top: 20px;

  cursor: pointer;
  header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
    h3 {
      font-size: 25px;
      font-weight: bold;
      margin-right: 20px;
      color: ${(props) => props.theme.blue};
      line-height: 40px;
    }
    svg {
      font-size: 40px;
      color: ${(props) => props.theme.dark};
      transform: ${(props) => (props.open ? 'rotate(90deg)' : 0)};
      transition: all 0.3s ease;
    }
  }
  @media (max-width: 768px) {
    padding: 10px;
    h3 {
      width: 300px;
    }
  }
`

interface ContentProps {
  height: string
  open: boolean
}

export const Content = styled.div<ContentProps>`
  max-height: ${(props) => props.height};
  transition: all 0.2s ease;
  overflow: ${(props) => (props.open ? 'visible' : 'hidden')};
`
