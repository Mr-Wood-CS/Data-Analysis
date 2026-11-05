import markdown from '../../../../MD-Files/12.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson12.css'

export default function Lesson12() {
  return <div className="lesson-document lesson-12"><MarkdownDocument markdown={markdown} /></div>
}

