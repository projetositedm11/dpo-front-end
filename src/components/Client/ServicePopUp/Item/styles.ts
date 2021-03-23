import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.05);
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.lightGrey};
  padding: 20px 40px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.blue};
    font-size: 25px;
    margin-right: -30px;
    margin-top: -10px;
  }

  button {
    text-decoration: none;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    margin: 0 auto;
    margin-top: 30px;
    display: block;
    font-size: 16px;
    border-radius: 3px;
    padding: 7px 0;
    border: none;
    max-width: 150px;
    width: 100%;
    cursor: pointer;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme.blue};
    font-size: 19px;
    margin-right: 10px;
  }
`

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  min-width: 70px;
  min-height: 70px;
  width: 70px;
  height: 70px;
  background: url(${(props) => props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`
