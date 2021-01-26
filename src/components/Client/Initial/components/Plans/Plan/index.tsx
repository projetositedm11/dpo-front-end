import Link from 'next/link'
import { WrapperContent, Header, Content, Resume } from './styles'
import { Check, NoCheck } from '../../../../../../assets'

interface Plan {
  plan: {
    title: string
    price: string
    slug: string
  }
  titleColor: string
}

const Plan = ({ plan: { title, price, resume, slug, included, notIncluded }, titleColor }) => {
  return (
    <WrapperContent>
      <Link href={`/plano/${slug}`}>
        <a>
          <Header color={titleColor} fontSize="28px">
            {title} <br />
            R${price.toLocaleString().replace(',', '.')}
          </Header>
          <Resume>
            <p>{resume}</p>
          </Resume>
          <Content>
            <ul>
              {included.map((i, index) => (
                <li key={index}>
                  <img src={Check} width={22} height={22} alt="Check" />
                  <label> {i.title} </label>
                </li>
              ))}
              {notIncluded.map((i, index) => (
                <li key={index}>
                  <img src={NoCheck} width={22} height={22} alt="Check" />
                  <label> {i.title} </label>
                </li>
              ))}
            </ul>
          </Content>
        </a>
      </Link>
    </WrapperContent>
  )
}

export default Plan
