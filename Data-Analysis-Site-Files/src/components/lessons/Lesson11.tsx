import markdown from '../../../../MD-Files/11.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson11.css'

export default function Lesson11() {
  return <div className="lesson-document lesson-11"><MarkdownDocument markdown={markdown} /></div>
}

