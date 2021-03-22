import React, { useEffect, useMemo, useState, useCallback, KeyboardEvent } from 'react'
import { createEditor, Editor, Transforms, Text, Node } from 'slate'

import { Bold, DataText } from './styles'

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
const TextEditor = ({ description }) => {
  const editor = useMemo<any>(() => withReact(createEditor()), [])
  const [value, setValue] = useState(description)
  const renderElement = useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      default:
        return <p {...attributes}>{children}</p>
    }
  }, [])

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />
  }, [])

  return (
    <>
      <DataText>Descrição:</DataText>
      <Slate editor={editor} value={description} onChange={(value) => setValue(value)}>
        <Editable readOnly renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </>
  )
}

const Leaf = (props) => {
  return (
    <Bold {...props.attributes} active={props.leaf.bold}>
      {props.children}
    </Bold>
  )
}

export default TextEditor
