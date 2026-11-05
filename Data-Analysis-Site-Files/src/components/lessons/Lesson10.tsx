import markdown from '../../../../MD-Files/10.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson10.css'

export default function Lesson10() {
  return <div className="lesson-document lesson-10"><MarkdownDocument markdown={markdown} /></div>
}

