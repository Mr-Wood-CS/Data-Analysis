import markdown from '../../../../MD-Files/15.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson15.css'

export default function Lesson15() {
  return <div className="lesson-document lesson-15"><MarkdownDocument markdown={markdown} /></div>
}

