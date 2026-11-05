import markdown from '../../../../MD-Files/13.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson13.css'

export default function Lesson13() {
  return <div className="lesson-document lesson-13"><MarkdownDocument markdown={markdown} /></div>
}

