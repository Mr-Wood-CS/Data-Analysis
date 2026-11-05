import markdown from '../../../../MD-Files/05.md?raw'
import MarkdownDocument from '../MarkdownDocument'
import './Lesson05.css'

export default function Lesson05() {
  return <div className="lesson-document lesson-05"><MarkdownDocument markdown={markdown} /></div>
}

