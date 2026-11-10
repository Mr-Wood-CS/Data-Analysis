import { useMemo, useRef } from 'react'
import type { LessonSummary } from './lessons'
import MarkdownDocument from './MarkdownDocument'
import './LessonDetailPage.css'
import FirstLesson from './FirstLesson'

type LessonPage = {
  title: string
  markdown: string
  objectives?: { intention: string; criteria: string }
}

const pupilCodeWords: Array<[string, string]> = [
  ['pd', 'A short name the code uses for Pandas, a Python tool for working with tables.'],
  ['df', 'A name the code uses for the data table it has loaded. This kind of name is called a variable.'],
  ['DataFrame', 'Pandas’ word for a table made of rows and columns.'],
  ['OUT', 'The folder where the script saves files it creates.'],
  ['Series', 'A single column of values from a table.'],
  ['read_csv()', 'Reads a CSV file and loads its rows and columns into a table.'],
  ['head()', 'Shows the first five rows of a table.'],
  ['shape', 'Shows the number of rows and columns in a table.'],
  ['value_counts()', 'Counts how many times each value appears.'],
  ['sort_values()', 'Puts rows in order using the values in a chosen column.'],
  ['groupby()', 'Separates rows into groups so you can compare them.'],
  ['crosstab()', 'Counts how often combinations of categories appear.'],
  ['isna()', 'Finds missing values in a table.'],
  ['duplicated()', 'Finds rows that repeat.'],
  ['to_numeric()', 'Changes suitable text values into numbers.'],
  ['to_csv()', 'Saves a table as a CSV file.'],
  ['agg()', 'Runs one or more calculations, such as a total or average.'],
  ['nunique()', 'Counts how many different values there are.'],
  ['ascending=False', 'Sorts from largest value to smallest value.'],
  ['normalize=True', 'Shows category counts as parts of the whole instead.'],
  ['errors="coerce"', 'Turns values that cannot become numbers into missing values.'],
  ['True/False', 'Python’s yes-or-no values.'],
  ['mean()', 'Finds the average by adding values and dividing by how many there are.'],
  ['median', 'The middle value after the numbers are put in order.'],
  ['mask', 'A set of True or False answers used to choose rows.'],
  ['plt', 'A short name for Matplotlib, a Python tool for drawing charts.'],
  ['&', 'Means both conditions must be true.'],
  ['|', 'Means at least one condition must be true.'],
]

function splitIntoPages(markdown: string): LessonPage[] {
  const lines = markdown.replace(/\r/g, '').split('\n')
  const titleLine = lines.findIndex(line => /^#\s/.test(line))
  const lessonTitle = titleLine >= 0 ? lines[titleLine]!.replace(/^#\s*/, '') : 'Lesson'
  const contentLines = lines.filter((_, index) => index !== titleLine && !/^\*\*Time:\*\*/.test(lines[index]!.trim()))
  const pages: LessonPage[] = []
  let sectionTitle = ''
  let sectionContent: string[] = []

  const saveSection = () => {
    if (!sectionTitle) return
    if (['Lesson route', 'Support', 'Get ready', 'Your investigation', 'Stretch', 'Stop and check', 'Save your evidence', 'Exit ticket'].includes(sectionTitle)) return

    let markdown = sectionContent.join('\n').trim()
    if (sectionTitle === 'Learning intention') {
      const intention = sectionContent.find(line => line.trim() && !line.trim().startsWith('**Success criteria:**'))?.trim() ?? ''
      const criteria = sectionContent.map(line => line.trim().match(/^\*\*Success criteria:\*\*\s*(.+)$/)?.[1]).find(Boolean) ?? ''
      pages.push({ title: 'Learning intention & success criteria', markdown: '', objectives: { intention, criteria } })
      return
    }
    if (sectionTitle === 'Key idea') {
      markdown = markdown
        .replace(' Show import, the variable df, a function call and the dot in df.head(). Explain that df is a chosen variable name.', ' In `df.head()`, `df` is a variable name and `head()` displays the first five rows.')
        .replace(' Model brackets and quoted field names.', '')
        .replace(' Demonstrate score > 80; test the boundary value 80 on paper.', ' For example, `score > 80` excludes a score of exactly 80.')
        .replace(' Use a four-row truth table before coding.', '')
        .replace(' Our teaching policy removes exact duplicate rows, trims/title-cases game labels, converts numeric fields, marks negative durations missing, and keeps incomplete records.', ' The cleaning process removes exact duplicate rows, standardises game labels, converts numeric fields, marks negative durations as missing, and keeps incomplete records.')
        .replace(' Model the division only, then let pupils choose filters, summaries and a chart.', ' Check that `played` is not zero before dividing. Then try filters, summaries and a chart to investigate your question.')
        .replace(' Show identical regional means on two charts with different axis limits; inspect labels, not just apparent bar differences.', ' When comparing charts with different axis limits, inspect the labels rather than relying on the apparent bar differences.')
        .replace('Read the assessment brief and agree scope. Pupils can choose the robot dataset or sports.csv; one focused question is sufficient. Explain permitted help and evidence requirements before work starts. Use teacher questions to check understanding without dictating a method.', 'Start with one focused question and choose the robot dataset or sports.csv. Decide what evidence could answer the question and what the data cannot prove. Record your method and its limitations.')
        .replace('Use a paired gallery review so every pupil speaks within the lesson. Reviewers check that evidence answers the question, axes and units are clear, and causal language is warranted. A fresh run catches dependence on unsaved edits. Reflection should identify a specific improvement and next step.', 'During a review, check whether the evidence answers the question, chart axes and units are clear, and causal language is justified. Rerun the script to check that results do not depend on unsaved edits. Note one specific improvement and a next step.')
    }
    if (sectionTitle === 'Worked model') {
      markdown = markdown
        .replace('The starter has already loaded', 'The starter loads')
        .replace('as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starter scripts also import `plt`.', 'as `df` and imports Pandas as `pd`. It defines `OUT` for saved results; chart lessons also import `plt`.')
        .replace('Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.', 'Before running the code, predict one output. Then run it and compare the result with your prediction. Field names and labels must match exactly.')
    }
    if (sectionTitle === 'Stop and check') markdown = markdown.replace('Show with a ', 'Use a ')
    if (markdown) pages.push({ title: sectionTitle, markdown })
  }

  for (const line of contentLines) {
    const section = line.match(/^##\s+(.+)$/)
    if (section) {
      saveSection()
      sectionTitle = section[1]!
      sectionContent = []
    } else if (sectionTitle) sectionContent.push(line)
  }
  saveSection()

  return pages.length ? pages : [{ title: lessonTitle, markdown: markdown.replace(/^#\s.*\n?/, '') }]
}

export default function LessonDetailPage({ lesson, index, page, onPageChange, onBack }: {
  lesson: LessonSummary
  index: number
  page: number
  onPageChange: (page: number) => void
  onBack: () => void
}) {
  const heading = useRef<HTMLHeadingElement>(null)
  const pages = useMemo(() => splitIntoPages(lesson.markdown), [lesson.markdown])
  const currentPage = pages[page] ?? pages[0]!

  function changePage(next: number) {
    if (next < 0 || next >= pages.length) return
    onPageChange(next)
    window.scrollTo({ top: 0 })
    window.setTimeout(() => heading.current?.focus(), 0)
  }

  if (index === 0) return <FirstLesson page={page} onPageChange={onPageChange} onBack={onBack} />

  return <section className="lesson-detail-page">
    <button className="back-link" onClick={onBack}>← All lessons</button>
    <header className="lesson-heading">
      <p className="unit-level">Lesson {index + 1}: {lesson.title.replace(/^Lesson \d+:\s*/, '')}</p>
      <p className="page-position">Page {page + 1} of {pages.length}</p>
      <h1 ref={heading} tabIndex={-1}>{currentPage.title}</h1>
    </header>
    <div className="lesson-subpage" key={`${index}-${page}`}>
      {currentPage.objectives ? <div className="pupil-objectives">
        <section className="pupil-intention"><h2>Learning intention</h2><p>We are learning to {currentPage.objectives.intention.charAt(0).toLowerCase() + currentPage.objectives.intention.slice(1)}</p></section>
        <section className="pupil-success-criteria"><h2>Success criteria</h2><p>{currentPage.objectives.criteria}</p></section>
      </div> : <>
        {currentPage.title === 'Worked model' && <section className="code-explanations" aria-labelledby="code-words-heading">
          <h2 id="code-words-heading">Code words</h2>
          <dl>{pupilCodeWords.filter(([term]) => ['pd', 'df', 'DataFrame', 'OUT'].includes(term) || (term === 'plt' ? lesson.markdown.includes('plt.') : term.length === 1 ? lesson.markdown.includes(`\`${term}\``) : lesson.markdown.includes(term))).slice(0, 10).map(([term, explanation]) => <div key={term}><dt><code>{term}</code></dt><dd>{explanation}</dd></div>)}</dl>
        </section>}
        <MarkdownDocument markdown={currentPage.markdown} />
      </>}
    </div>
    <nav className="lesson-page-navigation" aria-label="Lesson pages">
      <div className="lesson-page-selector">
        <label htmlFor="lesson-page">Go to a page</label>
        <select id="lesson-page" value={page} onChange={event => changePage(Number(event.target.value))}>
          {pages.map((lessonPage, pageIndex) => <option key={lessonPage.title} value={pageIndex}>{pageIndex + 1}. {lessonPage.title}</option>)}
        </select>
      </div>
      <div className="lesson-page-buttons">
        {page === pages.length - 1 ? <button className="button primary" onClick={onBack}>Return to lessons</button> : <>
          <button className="button previous-page" disabled={page === 0} onClick={() => changePage(page - 1)}>Previous</button>
          <button className="button primary" onClick={() => changePage(page + 1)}>Next <span aria-hidden="true">→</span></button>
        </>}
      </div>
    </nav>
  </section>
}
