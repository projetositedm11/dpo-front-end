import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
`

export const WrapperFinancial = styled.div`
  width: 100%;
  margin-left: -30px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Header = styled.h2`
  margin-top: 20px;
  color: ${(props) => props.theme.greyText};
  font-size: 32px;
  font-weight: bold;
`

interface FinancialControlItemProps {
  borderColor?: string
}

export const FinancialControlItem = styled.div<FinancialControlItemProps>`
  margin: 30px;
  width: 450px;
  height: 90px;
  background: #eee;
  padding: 10px;
  transition: all 0.3s;
  border-radius: 4px;
  border-left: 10px solid ${(props) => (props.borderColor ? props.borderColor : props.theme.blue)};
  @media (max-width: 768px) {
    margin: 30px;
    width: 100%;
    height: 90px;
  }
`
export const Title = styled.h3`
  color: ${(props) => props.theme.lightDark};
  font-size: 22px;
  margin-top: 3px;
`

export const Value = styled.h3`
  color: ${(props) => props.theme.blue};
  font-size: 20px;
  margin-top: 10px;
`
