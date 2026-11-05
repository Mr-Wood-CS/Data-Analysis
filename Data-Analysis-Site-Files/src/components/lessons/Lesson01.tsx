import markdown from '../../../../MD-Files/01.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson01.css'

export default function Lesson01() {
  return <div className="lesson-document lesson-01"><MarkdownDocument markdown={markdown} /></div>
}

