interface DataProps {
  label: string
  clientData: string
}

import { ClientDataLabel, ClientDataText } from './styles'

const Data: React.FC<DataProps> = ({ label, clientData }) => {
  return (
    <div>
      <ClientDataLabel> {label}: </ClientDataLabel>
      <ClientDataText>{clientData}</ClientDataText>
    </div>
  )
}

export default Data
