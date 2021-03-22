import React, { useEffect, useMemo, useState, useCallback, KeyboardEvent } from 'react'
import { createEditor, Editor, Transforms, Text, Node } from 'slate'

import { Container, Button, WrapperEditor, Actions, Bold } from './styles'

import { Slate, Editable, withReact } from 'slate-react'

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match]: any = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    )
  },
}
const TextEditor = ({ description, setDescription }) => {
  const editor = useMemo<any>(() => withReact(createEditor()), [])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />
  }, [])

  return (
    <Container>
      <p>*Descrição:</p>
      <small> CTRL + B = bold </small>
      {loading && (
        <WrapperEditor>
          <Slate
            editor={editor}
            value={description}
            onChange={(newValue) => {
              setDescription(newValue)
            }}
          >
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return
                }

                // Replace the `onKeyDown` logic with our new commands.
                switch (event.key) {
                  case 'b': {
                    event.preventDefault()
                    CustomEditor.toggleBoldMark(editor)
                    break
                  }
                }
              }}
              placeholder="Digite..."
            />
          </Slate>
        </WrapperEditor>
      )}
    </Container>
  )
}

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>
}

const Leaf = (props) => {
  return (
    <Bold {...props.attributes} active={props.leaf.bold}>
      {props.children}
    </Bold>
  )
}

export default TextEditor
