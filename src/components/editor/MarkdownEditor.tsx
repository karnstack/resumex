import CodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { EditorView } from '@codemirror/view'

export function MarkdownEditor({
  value,
  onChange,
}: {
  value: string
  onChange: (next: string) => void
}) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={[markdown(), EditorView.lineWrapping]}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
      }}
      className="rounded border border-neutral-200 text-sm"
    />
  )
}
