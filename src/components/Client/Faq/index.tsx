import Layout from '../Layout'
import { FaqImage as FaqImage } from '../../../assets'
import { DropDownCategory, DropDownItem } from './components'
import { Container, Header, Content, TitleContainer, Row } from './styles'
import { useState } from 'react'
import LGPDquestions from './components/questionsLGPD.json'
import DPOquestions from './components/questionsDPO.json'

import Item from './Item'
const Faq: React.FC = () => {
  const [itemsLGPD, setItemsLGPD] = useState(LGPDquestions)
  const [itemsDPO, setItemsDPO] = useState(DPOquestions)

  const toggleFaqLGPD = (index) => {
    setItemsLGPD(
      itemsLGPD.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }
        return faq
      }),
    )
  }
  const toggleFaqDPO = (index) => {
    setItemsDPO(
      itemsDPO.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }
        return faq
      }),
    )
  }
  return (
    <Layout ifLogo ifCompletedFooter={true}>
      <Container>
        <Header>
          <section>
            <p>Faq</p>
          </section>
        </Header>
        <Content>
          <TitleContainer>
            <p>Fique por dentro de tudo sobre a LGPD e o Data Protection Officer</p>
            <img src={FaqImage} alt="faq" />
          </TitleContainer>
          <Item
            title={'Lei geral de Proteção de dados (LGPD)'}
            DropDownCategory={DropDownCategory}
            Row={Row}
            items={itemsLGPD}
            DropDownItem={DropDownItem}
            toggleFaq={toggleFaqLGPD}
          />
          <Item
            title={'Data Protection Officer (DPO)'}
            DropDownCategory={DropDownCategory}
            Row={Row}
            items={itemsDPO}
            DropDownItem={DropDownItem}
            toggleFaq={toggleFaqDPO}
          />
        </Content>
      </Container>
    </Layout>
  )
}

export default Faq
