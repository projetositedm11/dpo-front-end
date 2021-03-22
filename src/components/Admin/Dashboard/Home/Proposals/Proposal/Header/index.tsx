const Header = ({
  ProposalHeader,
  Status,
  kind,
  StatusColor,
  ButtonSeeProposal,
  plan,
  createdAtFormatted,
  Date,
  status,
}) => {
  return (
    <ProposalHeader>
      <Date>Data de cadastro: {createdAtFormatted}</Date>

      <Status>
        {' '}
        {kind === 'Plano' && plan ? `Plano selecionado: ${plan.title}` : 'Serviços avulsos'}{' '}
      </Status>
      <Status>
        {' '}
        Status:{' '}
        <StatusColor
          color={
            status === 'Em análise'
              ? '#f29339'
              : status === 'Recusado'
              ? '#c4314b'
              : status === 'Aprovado'
              ? 'rgba(0, 214, 62, 0.62)'
              : 'rgba(0,112,192, 1)'
          }
        >
          {status}
        </StatusColor>{' '}
      </Status>
      {kind === 'Serviços avulsos' && <ButtonSeeProposal> Ver proposta &rarr;</ButtonSeeProposal>}
    </ProposalHeader>
  )
}

export default Header
