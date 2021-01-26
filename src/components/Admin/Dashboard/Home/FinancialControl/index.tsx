import React from 'react'
import { Container, WrapperFinancial, Header, FinancialControlItem, Title, Value } from './styles'

const FinancialControl = ({ financial }) => {
  return (
    <Container>
      {financial.length >= 1 ? (
        <>
          <Header>Financeiro</Header>
          <WrapperFinancial>
            {financial.map((i, index) => {
              if (i._id.status === 'Vendido') {
                return (
                  <FinancialControlItem key={index}>
                    <Title>Vendido</Title>
                    <Value>
                      {' '}
                      {i.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Value>
                  </FinancialControlItem>
                )
              }
            })}
            {financial.map((i, index) => {
              if (i._id.status === 'Aprovado') {
                return (
                  <FinancialControlItem key={index} borderColor="rgba(0, 214, 62, 0.62)">
                    <Title>Aprovado</Title>
                    <Value>
                      {' '}
                      {i.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Value>
                  </FinancialControlItem>
                )
              }
            })}
            {financial.map((i, index) => {
              if (i._id.status === 'Recusado') {
                return (
                  <FinancialControlItem key={index} borderColor="#c4314b">
                    <Title>Recusado</Title>
                    <Value>
                      {' '}
                      {i.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Value>
                  </FinancialControlItem>
                )
              }
            })}
            {financial.map((i, index) => {
              if (i._id.status === 'Em análise') {
                return (
                  <FinancialControlItem key={index} borderColor="rgba(255, 130, 5, 0.65)">
                    <Title>Em análise</Title>
                    <Value>
                      {' '}
                      {i.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Value>
                  </FinancialControlItem>
                )
              }
            })}
          </WrapperFinancial>
        </>
      ) : (
        ''
      )}
    </Container>
  )
}

export default FinancialControl
