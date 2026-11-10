import { useRef, useState } from 'react'
import gamingCsv from '../../public/resources/datasets/gaming.csv?raw'
import './FirstLesson.css'

const titles = [
  'What can data tell us?',
  'The idea in everyday life',
  'One row is one record',
  'One column is one field',
  'How do we tell players apart?',
  'From a file to a Python table',
  'Ask Python for a preview',
  'How big is the whole table?',
  'What to remember',
]

// Use the downloadable dataset so the examples stay in step with pupils’ files.
const [header, ...records] = gamingCsv.trim().split(/\r?\n/).map(line => line.split(','))
const previewFields = ['player_id', 'game', 'score', 'minutes']

function TablePicture({ focus = 'none', full = false }: { focus?: 'none' | 'record' | 'field' | 'identifier'; full?: boolean }) {
  const fields = full ? header : previewFields
  const rows = records.slice(0, full ? 3 : 4)
  const explanation = full
    ? 'The first three records. The grey row labels 0, 1 and 2 are added by Pandas; they are not player IDs or an extra field.'
    : focus === 'record' ? 'Read across P02: Block Quest, 26 points, 20 minutes. All four cells belong to the same record.'
      : focus === 'field' ? 'Read down score: 23, 26, 29, 32. Each value answers the same question: how many points?'
        : focus === 'identifier' ? 'P01 and P04 both play Sky Sprint. Their different player IDs tell them apart.'
          : 'A small view of gaming.csv: the first four records and four of its six fields.'
  return <figure className="first-table-figure">
    <div className="first-figure-heading"><span>gaming.csv</span><span>{full ? 'Python preview · 3 records' : 'Table preview · 4 records'}</span></div>
    {focus !== 'none' && <p className="first-table-guide">{focus === 'record' ? '→ Follow one row: P02' : focus === 'field' ? '↓ Follow one column: score' : '↓ Look at the player_id column'}</p>}
    <div className="first-table-scroll" role="region" aria-label="Gaming data table, scroll horizontally if needed" tabIndex={0}>
      <table><thead><tr>{full && <th scope="col"><span className="first-visually-hidden">Pandas row label</span></th>}{fields.map(field => <th scope="col" key={field} className={(focus === 'field' && field === 'score') || (focus === 'identifier' && field === 'player_id') ? 'first-cell-focus' : ''}>{field}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={row[0]} className={focus === 'record' && rowIndex === 1 ? 'first-record-focus' : ''}>{full && <th className="first-row-label" scope="row">{rowIndex}</th>}{fields.map(field => <td key={field} className={(focus === 'field' && field === 'score') || (focus === 'identifier' && field === 'player_id') ? 'first-cell-focus' : ''}>{row[header.indexOf(field)]}</td>)}</tr>)}</tbody></table>
    </div><figcaption>{explanation}</figcaption>
  </figure>
}

function Check({ question, answer }: { question: string; answer: string }) {
  return <aside className="first-check"><h2><span aria-hidden="true">💭</span> Check your understanding</h2><p>{question}</p><details><summary>Answer</summary><p>{answer}</p></details></aside>
}

function Word({ term, children }: { term: string; children: React.ReactNode }) {
  return <aside className="first-word"><h2><span aria-hidden="true">🔑</span> Key word: {term}</h2><p>{children}</p></aside>
}

function Code({ code, label }: { code: string; label: string }) {
  const [status, setStatus] = useState('')
  async function copy() {
    try { await navigator.clipboard.writeText(code); setStatus('Code copied') }
    catch { setStatus('Select the code and copy it manually.') }
  }
  return <div className="first-code"><div className="first-code-heading"><span>{label}</span><button onClick={copy}>Copy code</button></div><pre><code>{code}</code></pre><span className="first-copy-status" role="status">{status}</span></div>
}

export default function FirstLesson({ page, onPageChange, onBack }: { page: number; onPageChange: (page: number) => void; onBack: () => void }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const current = Math.max(0, Math.min(page, titles.length - 1))
  function changePage(next: number) {
    if (next < 0 || next >= titles.length) return
    onPageChange(next)
    window.scrollTo({ top: 0 })
    window.setTimeout(() => heading.current?.focus(), 0)
  }
  return <section className="first-lesson">
    <button className="back-link" onClick={onBack}>← All lessons</button>
    <header className="first-heading"><p className="first-eyebrow">Lesson 1 · Reading data</p><p className="first-position">Page {current + 1} of {titles.length}</p><h1 ref={heading} tabIndex={-1}>{titles[current]}</h1></header>
    <div className="first-progress" role="progressbar" aria-label="Lesson progress" aria-valuemin={1} aria-valuemax={titles.length} aria-valuenow={current + 1} aria-valuetext={`Page ${current + 1} of ${titles.length}: ${titles[current]}`}><span style={{ width: `${(current + 1) / titles.length * 100}%` }} /></div>
    <div className="first-page" key={current}>
      {current === 0 && <>
        <p className="first-lead">A table of gaming scores can answer useful questions. First, we need to understand what we are looking at.</p>
        <div className="first-objectives"><section><h2>Learning intention</h2><p>We are learning to read a data table and display it using Python.</p></section><section><h2>Success criteria</h2><ul><li>I can explain what a row and a column represent.</li><li>I can identify a player using their ID.</li><li>I can run code to preview the table and find its size.</li></ul></section></div>
      </>}
      {current === 1 && <>
        <p className="first-lead">Imagine helping at a gaming club. The leader gives you a table of players, games and scores.</p>
        <TablePicture />
        <Check question="Which game does P03 play, and what is their score?" answer="P03 plays Orbit Arena and has a score of 29 points. Follow the P03 row across to game and score." />
      </>}
      {current === 2 && <>
        <Word term="record">One row of related data. Here, one record describes one player’s summary.</Word>
        <p className="first-lead">Read across a row to find the details that belong together.</p>
        <TablePicture focus="record" />
        <Check question="Is the line containing player_id, game and score another player record?" answer="No. That is the header row. It names the fields; it does not describe a player." />
      </>}
      {current === 3 && <>
        <Word term="field">One column of data, such as game, score or minutes. Its heading tells you what its values mean.</Word>
        <p className="first-lead">Read down a column to find the same kind of information for different players.</p>
        <TablePicture focus="field" />
        <Check question="Which field would you read to find how long each player played?" answer="The minutes field. Its values measure time in minutes; the score field measures points." />
      </>}
      {current === 4 && <>
        <Word term="identifier">A value used to identify an item. In this table, each player has a different player_id.</Word>
        <p className="first-lead">Two players can play the same game. They could even have the same score. We need a reliable way to tell them apart.</p>
        <TablePicture focus="identifier" />
        <Check question="Why would “Sky Sprint” be a poor player identifier?" answer="More than one player plays Sky Sprint. P01 and P04 share that game name, so it cannot tell us which player we mean." />
      </>}
      {current === 5 && <>
        <Word term="DataFrame">Pandas’ name for a table of rows and columns. In our starter, <code>df</code> refers to that table.</Word>
        <p className="first-lead">The table is saved in a file called <code>gaming.csv</code>. A CSV stores a table as plain text, with commas separating the values.</p>
        <figure className="first-file-flow"><div><span className="first-small-label">Saved file</span><strong>gaming.csv</strong><pre>{[header.slice(0, 3).join(','), ...records.slice(0, 2).map(row => row.slice(0, 3).join(','))].join('\n')}</pre><small>First three fields shown</small></div><span className="first-flow-arrow" aria-hidden="true">→</span><div><span className="first-small-label">Loaded into Python</span><strong>A table named <code>df</code></strong><p>Pandas reads the CSV and builds a table Python can use.</p></div><figcaption>CSV file → Pandas reads it → Python table</figcaption></figure>
        <h2>Read these lines from the starter</h2>
        <Code label="Already in lesson01.py" code={'import pandas as pd\n\ndf = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")'} />
        <dl className="first-code-notes"><div><dt><code>import pandas as pd</code></dt><dd>Loads Pandas, a tool for working with tables. We use the short name <code>pd</code>.</dd></div><div><dt><code>pd.read_csv(…)</code></dt><dd>Reads the CSV file. The starter has already set up <code>RESOURCES</code> to locate its resources folder.</dd></div><div><dt><code>df =</code></dt><dd>Stores the loaded table under the name <code>df</code>. This is a variable name chosen by the programmer.</dd></div></dl>
        <p className="first-note">These are selected lines from the starter, rather than a complete script. Keep the starter’s folder setup above the line that reads the CSV.</p>
      </>}
      {current === 6 && <>
        <p className="first-lead">Before analysing a table, look at a few records to check what has loaded.</p>
        <p>Open <code>starter-code/lesson01.py</code> from the extracted lesson pack. Save a copy beside it with your initials in the filename. Change <code>print(df.head())</code> to the line below, then run your copy.</p>
        <div className="first-code-layout"><section><h2><span aria-hidden="true">💻</span> Example code</h2><Code label="Change this preview line" code="print(df.head(3))" /></section><section><h2>Reading the code</h2><dl className="first-code-notes"><div><dt><code>df.head(3)</code></dt><dd>Asks our table for its first three records. The dot connects the table’s name to the <code>head</code> operation.</dd></div><div><dt><code>print(…)</code></dt><dd>Displays the result in the output area, sometimes called the terminal or shell.</dd></div></dl></section></div>
        <h2>What appears on screen?</h2><p>The output contains these records. Spacing may vary in your editor.</p><TablePicture full />
        <Check question="If you change head(3) to head(2), what should happen?" answer="The preview should show P01 and P02. The full table stays the same size: head() only asks for a preview." />
      </>}
      {current === 7 && <>
        <p className="first-lead">A preview shows only part of a table. To find its full size, ask for its <code>shape</code>.</p>
        <div className="first-code-layout"><section><h2><span aria-hidden="true">💻</span> Example code</h2><Code label="Already in the starter" code="print(df.shape)" /><p>There are no brackets after <code>shape</code>.</p></section><section><h2>Reading the result</h2><div className="first-shape"><code>({records.length}, {header.length})</code><div><span><strong>{records.length}</strong> rows / records</span><span><strong>{header.length}</strong> columns / fields</span></div></div></section></div>
        <p>Read the pair in order: <strong>rows first, columns second</strong>. The header is not counted as a record. Pandas’ row labels are not counted as a field.</p>
        <Check question="After displaying head(2), will shape say there are only two records?" answer={`No. There are still ${records.length} records and ${header.length} fields. The preview did not remove any rows from df.`} />
      </>}
      {current === 8 && <>
        <p className="first-lead">Understand the table first. Then use code to inspect it.</p>
        <dl className="first-recap"><div><dt>Record</dt><dd>Read across one row: one player’s summary.</dd></div><div><dt>Field</dt><dd>Read down one column: one kind of information.</dd></div><div><dt>Identifier</dt><dd>Use <code>player_id</code> to tell players apart.</dd></div><div><dt><code>df.head(3)</code></dt><dd>Preview the first three records.</dd></div><div><dt><code>df.shape</code></dt><dd>Find the full size: rows, then columns.</dd></div></dl>
        <h2>Use the data to ask a question</h2><p>We could ask which game each player plays: the <code>player_id</code> and <code>game</code> fields tell us. We cannot use this table to find players’ favourite school subjects: that information is missing.</p>
        <Check question="Can these gaming scores prove that gaming improves schoolwork?" answer="No. There is no schoolwork data here. Even if two things changed together, that alone would not prove that one caused the other." />
        <section className="first-finish"><h2><span aria-hidden="true">✏️</span> Now complete your Lesson 1 tasks</h2><p>Use these pages to help you as you work.</p></section>
      </>}
    </div>
    <nav className="first-navigation" aria-label="Lesson pages"><div><label htmlFor="first-page-select">Go to a page</label><select id="first-page-select" value={current} onChange={event => changePage(Number(event.target.value))}>{titles.map((title, index) => <option key={title} value={index}>{index + 1}. {title}</option>)}</select></div><div className="first-nav-buttons"><button className="button first-previous" disabled={current === 0} onClick={() => changePage(current - 1)}>Previous</button>{current === titles.length - 1 ? <button className="button primary" onClick={onBack}>Return to lessons</button> : <button className="button primary" onClick={() => changePage(current + 1)}>Next <span aria-hidden="true">→</span></button>}</div></nav>
  </section>
}
