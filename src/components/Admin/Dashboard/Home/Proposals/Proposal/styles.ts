import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #eee;
  justify-content: center;
  width: 96%;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.blue};
  @media (max-width: 768px) {
    width: 100%;
  }
`

interface StatusColorProps {
  color: string
}

export const StatusColor = styled.span<StatusColorProps>`
  color: white;
  background: ${(props) => props.color};
  padding: 8px;
  font-size: 18px;
  border-radius: 5px;
`

export const ProposalHeader = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 18px;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`

export const Date = styled.p`
  font-size: 23px;
  color: ${(props) => props.theme.lightDark};
  @media (max-width: 768px) {
    font-size: 17px;
  }
`
export const Status = styled.p`
  font-size: 23px;
  color: ${(props) => props.theme.lightDark};

  @media (max-width: 1500px) {
    font-size: 17px;
    margin-top: 10px;
  }
`
export const ButtonSeeProposal = styled.a`
  font-size: 19px;
  cursor: pointer;
  margin-right: 14px;
  margin-top: 3px;
  @media (max-width: 1500px) {
    margin-top: 10px;
  }
`

export const ProposalActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
`

export const InputContainer = styled.div`
  width: 340px;
`

export const ClientDataContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  ul {
    margin-top: 10px;
    margin-left: -20px;
    li {
      color: ${(props) => props.theme.blue};
      margin-bottom: 10px;
    }
  }
  p {
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.blue};
    width: 100%;
    word-break: break-all;

    @media (max-width: 1500px) {
      width: 85%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  label {
    color: ${(props) => props.theme.lightDark};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ClientDataText = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.blue};
`
export const ClientDataLabel = styled.label`
  color: ${(props) => props.theme.lightDark};
`

interface ActionButtonProps {
  color?: string
}

export const ActionButton = styled.a<ActionButtonProps>`
  font-size: 18px;
  color: ${(props) => props.color};
  text-decoration: underline;
  margin-top: 28px;
  padding-left: 10px;
  cursor: pointer;
`

export const StatusAction = styled.div`
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`

export const Title = styled.h5`
  font-size: 22px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.greyText};
  svg {
    margin-top: 3px;
    margin-left: 10px;
    position: absolute;
    cursor: pointer;
  }
`
export const SubTitle = styled.h6`
  font-size: 17px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.blue};
  svg {
    margin-top: 3px;
    margin-left: 10px;
    position: absolute;
    cursor: pointer;
  }
`

export const Item = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ProposalDataContent = styled.div``

export const Answers = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  p {
    margin-top: 10px;
    color: ${(props) => props.theme.blue};
  }
`

export const Logic = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  p {
    margin-top: 1px;
    color: ${(props) => props.theme.blue};
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
  }
`

export const ProposalSettings = styled.div`
  border: 2px solid ${(props) => props.theme.blue};
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  p {
    margin-top: 1px;
    color: ${(props) => props.theme.blue};
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
  }
`
export const UpdateProposal = styled.div`
  margin-top: 10px;
  width: 100% !important;
  p {
    cursor: pointer;
  }
  input {
  }
  button {
    width: 20%;
    height: 35px;
    border: none;
    margin-left: 0px;
    margin-top: 9px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.blue};
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`
