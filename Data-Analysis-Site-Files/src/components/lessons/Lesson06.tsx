import markdown from '../../../../MD-Files/06.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson06.css'

export default function Lesson06() {
  return <div className="lesson-document lesson-06"><MarkdownDocument markdown={markdown} /></div>
}

