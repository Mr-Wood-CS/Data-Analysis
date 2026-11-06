import type { ReactNode } from 'react'
import './MarkdownDocument.css'

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const value = match[0]
    const index = match.index ?? 0
    if (index > last) parts.push(text.slice(last, index))
    if (value.startsWith('`')) parts.push(<code key={index}>{value.slice(1, -1)}</code>)
    else if (value.startsWith('**')) parts.push(<strong key={index}>{value.slice(2, -2)}</strong>)
    else if (value.startsWith('*')) parts.push(<em key={index}>{value.slice(1, -1)}</em>)
    else {
      const link = value.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!
      const href = link[2].startsWith('../resources/')
        ? `${import.meta.env.BASE_URL}resources/${link[2].slice('../resources/'.length)}`
        : link[2].startsWith('../reference/')
          ? `${import.meta.env.BASE_URL}resources/reference/${link[2].slice('../reference/'.length)}`
          : link[2]
      parts.push(<a key={index} href={href}>{link[1]}</a>)
    }
    last = index + value.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

function cells(line: string) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim())
}

export default function MarkdownDocument({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r/g, '').split('\n')
  const blocks: ReactNode[] = []
  let index = 0
  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) { index++; continue }
    const diagram = line.match(/^!\[([^\]]+)\]\(\.\.\/resources\/(diagrams\/lesson\d{2}\.png)\)$/)
    if (diagram) {
      blocks.push(<figure className="lesson-diagram" key={`diagram-${index}`}>
        <img src={`${import.meta.env.BASE_URL}resources/${diagram[2]}`} alt={diagram[1]} />
      </figure>)
      index++; continue
    }
    if (line.startsWith('```')) {
      const language = line.slice(3).trim()
      const code: string[] = []
      index++
      while (index < lines.length && !lines[index].trim().startsWith('```')) code.push(lines[index++])
      index++
      blocks.push(<pre className="md-code" key={`code-${index}`}><span className="code-language">{language || 'CODE'}</span><code>{code.join('\n')}</code></pre>)
      continue
    }
    if (/^#{1,3}\s/.test(line)) {
      const level = line.match(/^#+/)![0].length
      const title = line.replace(/^#+\s*/, '')
      if (level === 1) blocks.push(<h1 key={`h-${index}`}>{inline(title)}</h1>)
      else if (level === 2) blocks.push(<h2 key={`h-${index}`}>{inline(title)}</h2>)
      else blocks.push(<h3 key={`h-${index}`}>{inline(title)}</h3>)
      index++; continue
    }
    if (line.startsWith('|') && index + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[index + 1])) {
      const headers = cells(line)
      index += 2
      const rows: string[][] = []
      while (index < lines.length && lines[index].trim().startsWith('|')) rows.push(cells(lines[index++]))
      blocks.push(<div className="table-scroll" key={`table-${index}`}><table><thead><tr>{headers.map((item, itemIndex) => <th key={itemIndex}>{inline(item)}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((item, itemIndex) => <td key={itemIndex}>{inline(item)}</td>)}</tr>)}</tbody></table></div>)
      continue
    }
    if (/^\d+\.\s/.test(line) || /^[-*]\s/.test(line)) {
      const ordered = /^\d+\./.test(line)
      const items: ReactNode[] = []
      while (index < lines.length && (ordered ? /^\s*\d+\.\s/.test(lines[index]) : /^\s*[-*]\s/.test(lines[index]))) {
        items.push(<li key={index}>{inline(lines[index].replace(/^\s*(?:\d+\.|[-*])\s+/, ''))}</li>); index++
      }
      blocks.push(ordered ? <ol key={`list-${index}`}>{items}</ol> : <ul key={`list-${index}`}>{items}</ul>)
      continue
    }
    if (line.startsWith('>')) {
      const quote: string[] = []
      while (index < lines.length && lines[index].trim().startsWith('>')) quote.push(lines[index++].trim().replace(/^>\s?/, ''))
      blocks.push(<blockquote key={`quote-${index}`}>{inline(quote.join(' '))}</blockquote>); continue
    }
    const paragraph = [line]
    index++
    while (index < lines.length && lines[index].trim() && !/^(#{1,3}\s|```|\||\d+\.\s|[-*]\s|>)/.test(lines[index].trim())) paragraph.push(lines[index++].trim())
    blocks.push(<p key={`p-${index}`}>{inline(paragraph.join(' '))}</p>)
  }
  return <article className="markdown-document">{blocks}</article>
}
