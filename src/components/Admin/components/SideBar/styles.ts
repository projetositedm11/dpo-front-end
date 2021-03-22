import styled, { css } from 'styled-components'

export const LeftNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 252px;
  height: 100vh;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.grey};
  padding: 1.5rem 1.5rem 2rem;
  transition: 0.5s;
  z-index: 100;
  border-radius: 0px 4px 4px 0px;

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    position: sticky;
    height: 70px;
    border-radius: 0px 0px 0px 0px;
  }
`

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const MobileLogo = styled.h3`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-weight: 600;
    font-size: 22px;
    color: white;
  }
`
export const MobileMenu = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 32px;
    margin-top: -4px;
    color: white;
  }
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavBrand = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

interface NavLinkProps {
  active?: boolean
}

export const NavLink = styled.a<NavLinkProps>`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.25rem;
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s;
  cursor: pointer;

  @media (max-width: 1500px) {
    margin-bottom: 2.4rem;
    padding: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.blue};
    opacity: ${(props) => (props.active === true ? 1 : 0.8)};
  }

  font-weight: ${(props) => props.active === true && 'bold'};
  background-color: ${(props) => props.active === true && props.theme.blue};
  opacity: ${(props) => (props.active === true ? 1 : 0.8)};
  box-shadow: ${(props) => props.active === true && '3px 3px 3px 3px rgba(0,0,0,.1)'};
`
export const NavLinkLogout = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.25rem;
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s;
  cursor: pointer;
  opacity: 0.8;

  @media (max-width: 1500px) {
    margin-bottom: 2.4rem;
    padding: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.blue};
  }
`

export const NavToggle = styled.div`
  font-size: 1.25rem;
  padding: 0.75rem;
  cursor: pointer;
`
export const NavLogo = styled.p`
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-top: 20px;
`

export const NavList = styled.div`
  margin-top: 70px;
`

export const NavIcon = styled.span`
  font-size: 32px;

  @media (max-width: 1500px) {
    font-size: 30px;
  }
`
export const ItemNavName = styled.span`
  color: white;
  font-size: 22px;
  margin-top: -3px;
  margin-left: -3px;

  @media (max-width: 1500px) {
    font-size: 19px;
  }
`
