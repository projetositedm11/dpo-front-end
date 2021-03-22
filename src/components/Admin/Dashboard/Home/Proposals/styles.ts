import styled from 'styled-components'

export const Container = styled.div``

export const WrapperProposals = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  width: 96%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeaderTitle = styled.h3`
  margin-top: 20px;
  color: ${(props) => props.theme.greyText};
  font-size: 32px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  width: 340px;
  @media (max-width: 768px) {
    max-width: 340px;
  }
`
