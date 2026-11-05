import markdown from '../../../../MD-Files/07.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson07.css'

export default function Lesson07() {
  return <div className="lesson-document lesson-07"><MarkdownDocument markdown={markdown} /></div>
}

