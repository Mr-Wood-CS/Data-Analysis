import markdown from '../../../../MD-Files/08.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson08.css'

export default function Lesson08() {
  return <div className="lesson-document lesson-08"><MarkdownDocument markdown={markdown} /></div>
}

