import markdown from '../../../../MD-Files/02.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson02.css'

export default function Lesson02() {
  return <div className="lesson-document lesson-02"><MarkdownDocument markdown={markdown} /></div>
}

