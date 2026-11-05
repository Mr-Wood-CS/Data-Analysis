import markdown from '../../../../MD-Files/04.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson04.css'

export default function Lesson04() {
  return <div className="lesson-document lesson-04"><MarkdownDocument markdown={markdown} /></div>
}

