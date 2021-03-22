import styled, { css } from 'styled-components'

interface IfLogoProps {
  ifLogo: boolean
}

export const Container = styled.div<IfLogoProps>`
  position: relative;
  z-index: 999;
  width: 100%;
  padding: ${(props) => (props.ifLogo ? '10px 40px' : '30px 40px')};
  display: flex;
  justify-content: ${(props) => (props.ifLogo ? 'space-between' : 'flex-end')};
  align-items: center;
  background: ${(props) => (props.ifLogo ? props.theme.white : 'transparent')};
  border-bottom: 2px solid ${(props) => (props.ifLogo ? props.theme.lightGrey : 'transparent')};

  ul {
    display: inline;
    list-style: none;
    margin-left: ${(props) => (props.ifLogo ? '-100px' : '0')};
    margin-right: ${(props) => (props.ifLogo ? '0' : '100px')};
    padding: 0;

    @media (max-width: 1200px) {
      margin-left: 0;
    }

    @media (max-width: 900px) {
      display: none;
    }

    a {
      text-decoration: none;
      padding: 10px 20px;
      color: ${(props) => props.theme.grey};
      font-size: 17px;
      transition: all 0.3s ease;
      border-right: 1px solid ${(props) => props.theme.blue};

      &:hover {
        transition: all 0.3s ease;
        background: ${(props) => props.theme.blue};
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const ImageContainer = styled.div<IfLogoProps>`
  max-width: 170px;
  width: 100%;
  display: ${(props) => (props.ifLogo ? 'block' : 'none')};

  img {
    width: 100%;
    height: 100%;
  }
`

export const CartContainer = styled.div`
  display: flex;

  svg {
    font-size: 35px;
    cursor: pointer;
    color: ${(props) => props.theme.blue};
  }
`

interface NavBarIconProps {
  open: boolean
}

export const NavBarIcon = styled.div<NavBarIconProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-left: 15px;
  display: none;
  margin-top: 2px;
  overflow: hidden;

  @media (max-width: 900px) {
    display: flex;
  }

  section {
    width: 100%;
    height: 5px;
    background: ${(props) => props.theme.blue};
    transition: all 0.5s ease-in-out;
    border-radius: 5px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      background: ${(props) => props.theme.blue};
      transition: all 0.5s ease-in-out;
      border-radius: 5px;
    }

    &::before {
      transform: translateY(-10px);
      background: ${(props) => props.theme.blue};
    }

    &::after {
      transform: translateY(10px);
      background: ${(props) => props.theme.blue};
    }
  }

  ${(props) =>
    props.open &&
    css`
      section {
        transform: translateX(-50px);
        transition: all 0.5s ease-in-out;
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(35px, -35px);
        }

        &::after {
          transform: rotate(-45deg) translate(35px, 35px);
        }
      }
    `}
`
