import { useState } from 'react'

const Item = ({ title, DropDownCategory, Row, items, DropDownItem, toggleFaq }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <DropDownCategory title={title} open={show} setShow={setShow} />
      {show === true && (
        <Row>
          {items.map((question, index) => {
            return (
              <DropDownItem
                key={index}
                index={index}
                title={question.question}
                answer={question.answer}
                open={question.open}
                toggleFaq={toggleFaq}
              />
            )
          })}
        </Row>
      )}
    </>
  )
}

export default Item
