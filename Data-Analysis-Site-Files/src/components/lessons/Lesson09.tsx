import markdown from '../../../../MD-Files/09.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson09.css'

export default function Lesson09() {
  return <div className="lesson-document lesson-09"><MarkdownDocument markdown={markdown} /></div>
}

