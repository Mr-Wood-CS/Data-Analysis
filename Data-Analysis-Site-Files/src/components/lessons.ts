import pupilTeaching from './pupilTeaching.json'
import lessonMarkdown01 from '../../../MD-Files/01.md?raw'
import lessonMarkdown02 from '../../../MD-Files/02.md?raw'
import lessonMarkdown03 from '../../../MD-Files/03.md?raw'
import lessonMarkdown04 from '../../../MD-Files/04.md?raw'
import lessonMarkdown05 from '../../../MD-Files/05.md?raw'
import lessonMarkdown06 from '../../../MD-Files/06.md?raw'
import lessonMarkdown07 from '../../../MD-Files/07.md?raw'
import lessonMarkdown08 from '../../../MD-Files/08.md?raw'
import lessonMarkdown09 from '../../../MD-Files/09.md?raw'
import lessonMarkdown10 from '../../../MD-Files/10.md?raw'
import lessonMarkdown11 from '../../../MD-Files/11.md?raw'
import lessonMarkdown12 from '../../../MD-Files/12.md?raw'
import lessonMarkdown13 from '../../../MD-Files/13.md?raw'
import lessonMarkdown14 from '../../../MD-Files/14.md?raw'
import lessonMarkdown15 from '../../../MD-Files/15.md?raw'
import lessonMarkdown16 from '../../../MD-Files/16.md?raw'
import lessonMarkdown17 from '../../../MD-Files/17.md?raw'
import lessonMarkdown18 from '../../../MD-Files/18.md?raw'


const lessonMarkdown = [
  lessonMarkdown01,
  lessonMarkdown02,
  lessonMarkdown03,
  lessonMarkdown04,
  lessonMarkdown05,
  lessonMarkdown06,
  lessonMarkdown07,
  lessonMarkdown08,
  lessonMarkdown09,
  lessonMarkdown10,
  lessonMarkdown11,
  lessonMarkdown12,
  lessonMarkdown13,
  lessonMarkdown14,
  lessonMarkdown15,
  lessonMarkdown16,
  lessonMarkdown17,
  lessonMarkdown18,
].map((markdown, index) => {
  const { concept, worked } = pupilTeaching[index]
  const resources = markdown.split(/^## Get ready\s*$/m)[1]?.trim().split('\n')[0] ?? ''
  return markdown
    .replace(/^## Key idea\s*\n[\s\S]*?(?=^## )/m, () => `## Key idea\n\n${concept}\n\n`)
    .replace(/^## Worked model\s*\n[\s\S]*?(?=^## )/m, () => `## Worked model\n\n${resources}\n\n${worked}\n\n`)
})

export const lessons = [
  { title: 'Lesson 1: What can data tell us?', summary: 'CSV, records, fields, read_csv and head', markdown: lessonMarkdown[0] },
  { title: 'Lesson 2: Selecting fields and summarising', summary: 'Series, column selection, min, max and mean', markdown: lessonMarkdown[1] },
  { title: 'Lesson 3: Filtering records', summary: 'Boolean masks with >, < and ==', markdown: lessonMarkdown[2] },
  { title: 'Lesson 4: Combining conditions', summary: 'Parentheses, & and |', markdown: lessonMarkdown[3] },
  { title: 'Lesson 5: Counting categories', summary: 'value_counts and percentages', markdown: lessonMarkdown[4] },
  { title: 'Lesson 6: Sorting and ranking fairly', summary: 'sort_values, head and algorithm comparison', markdown: lessonMarkdown[5] },
  { title: 'Lesson 7: Auditing dirty data', summary: 'isna, duplicated and to_numeric', markdown: lessonMarkdown[6] },
  { title: 'Lesson 8: Cleaning with an audit trail', summary: 'String normalisation, conversion, missing values and export', markdown: lessonMarkdown[7] },
  { title: 'Lesson 9: Bar charts that answer questions', summary: 'Bar charts, labels and saving PNG', markdown: lessonMarkdown[8] },
  { title: 'Lesson 10: Choosing a suitable chart', summary: 'Line charts, ordered data and chart selection', markdown: lessonMarkdown[9] },
  { title: 'Lesson 11: Looking for relationships', summary: 'Scatter charts and cautious interpretation', markdown: lessonMarkdown[10] },
  { title: 'Lesson 12: The sports data challenge', summary: 'Transfer: derived fields, filtering, grouping and ranking', markdown: lessonMarkdown[11] },
  { title: 'Lesson 13: When data stories mislead', summary: 'Mean, median, outliers and axes', markdown: lessonMarkdown[12] },
  { title: 'Lesson 14: The robot outbreak begins', summary: 'New information model, questions and investigation planning', markdown: lessonMarkdown[13] },
  { title: 'Lesson 15: Patterns, rates and group sizes', summary: 'groupby, crosstab and denominators', markdown: lessonMarkdown[14] },
  { title: 'Lesson 16: Build and challenge your case', summary: 'Reproducible analysis and sensitivity checks', markdown: lessonMarkdown[15] },
  { title: 'Lesson 17: Final independent investigation', summary: 'Plan, analyse, verify and communicate', markdown: lessonMarkdown[16] },
  { title: 'Lesson 18: Present, review and reflect', summary: 'Fresh-run checks, peer review and evaluation', markdown: lessonMarkdown[17] },
]

export type LessonSummary = typeof lessons[number]

