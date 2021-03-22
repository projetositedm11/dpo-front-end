import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  background: ${(props) => props.theme.blue};
  width: 100%;
  padding: 40px 0;

  div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;

    @media (max-width: 1250px) {
      margin: 0 30px;
    }
    p {
      color: ${(props) => props.theme.white};
      font-weight: bold;
      font-size: 27px;
      margin-left: 15px;
      margin-top: 3px;
    }
  }
`

export const WrapperPrivacyContent = styled.div`
  width: 100%;
  padding: 40px 0;
  div {
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1250px) {
      margin: 0 30px;
    }
    @media (max-width: 768px) {
      margin: 0 10px;
    }
  }
`

interface TextBoldProps {
  fontWeight: string
  underline: boolean
}

export const TextBold = styled.span<TextBoldProps>`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.theme.blue};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'normal')};
  cursor: ${(props) => (props.underline ? 'pointer' : 'text')};
  a {
    color: none;
  }
`

interface TitleProps {
  marginTop: string
  marginBottom: string
}

export const Title = styled.h2<TitleProps>`
  color: ${(props) => props.theme.lightDark};
  font-weight: bold;
  font-size: 27px;
  margin-left: 15px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`

export const Content = styled.div`
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`

interface PhraseProps {
  color: string
  marginTop: string
  marginBottom: string
  bold: boolean
}

export const Phrase = styled.p<PhraseProps>`
  color: ${(props) => (props.color === 'cinza' ? props.theme.greyText : props.theme.blue)};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 35px;
`
export const List = styled.ul`
  li {
    color: ${(props) => props.theme.greyText};
    margin-top: 20px;
    line-height: 25px;
  }
  @media (max-width: 768px) {
    margin-left: -20px;
  }
`
export const BackToTheTop = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  p {
    color: ${(props) => props.theme.lightDark};
    font-weight: bold;
    font-size: 27px;
    cursor: pointer;
  }
`
