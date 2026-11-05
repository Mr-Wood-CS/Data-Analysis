import markdown from '../../../../MD-Files/03.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson03.css'

export default function Lesson03() {
  return <div className="lesson-document lesson-03"><MarkdownDocument markdown={markdown} /></div>
}

