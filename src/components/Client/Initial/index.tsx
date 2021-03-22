import api from '../../../services/api'
import Layout from '../Layout'
import { NextPage } from 'next'

import {
  Plans,
  Introduction,
  SafeWrapper,
  KnowServices,
  Start,
  Questions,
  WhyDpo,
} from './components'

interface Props {
  plans?: any
}

const Initial: NextPage<Props> = ({ plans }) => {
  return (
    <Layout ifLogo={false} ifCompletedFooter>
      <Introduction />
      <SafeWrapper />
      <WhyDpo />
      <Plans data={plans} />
      <KnowServices />
      <Questions />
    </Layout>
  )
}

export default Initial
