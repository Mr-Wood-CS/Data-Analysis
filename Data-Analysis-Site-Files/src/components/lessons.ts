import Lesson01 from './lessons/Lesson01'
import Lesson02 from './lessons/Lesson02'
import Lesson03 from './lessons/Lesson03'
import Lesson04 from './lessons/Lesson04'
import Lesson05 from './lessons/Lesson05'
import Lesson06 from './lessons/Lesson06'
import Lesson07 from './lessons/Lesson07'
import Lesson08 from './lessons/Lesson08'
import Lesson09 from './lessons/Lesson09'
import Lesson10 from './lessons/Lesson10'
import Lesson11 from './lessons/Lesson11'
import Lesson12 from './lessons/Lesson12'
import Lesson13 from './lessons/Lesson13'
import Lesson14 from './lessons/Lesson14'
import Lesson15 from './lessons/Lesson15'
import Lesson16 from './lessons/Lesson16'
import Lesson17 from './lessons/Lesson17'
import Lesson18 from './lessons/Lesson18'

export const lessons = [
  { title: 'Lesson 1: What can data tell us?', summary: 'CSV, records, fields, read_csv and head', Component: Lesson01 },
  { title: 'Lesson 2: Selecting fields and summarising', summary: 'Series, column selection, min, max and mean', Component: Lesson02 },
  { title: 'Lesson 3: Filtering records', summary: 'Boolean masks with >, < and ==', Component: Lesson03 },
  { title: 'Lesson 4: Combining conditions', summary: 'Parentheses, & and |', Component: Lesson04 },
  { title: 'Lesson 5: Counting categories', summary: 'value_counts and percentages', Component: Lesson05 },
  { title: 'Lesson 6: Sorting and ranking fairly', summary: 'sort_values, head and algorithm comparison', Component: Lesson06 },
  { title: 'Lesson 7: Auditing dirty data', summary: 'isna, duplicated and to_numeric', Component: Lesson07 },
  { title: 'Lesson 8: Cleaning with an audit trail', summary: 'String normalisation, conversion, missing values and export', Component: Lesson08 },
  { title: 'Lesson 9: Bar charts that answer questions', summary: 'Bar charts, labels and saving PNG', Component: Lesson09 },
  { title: 'Lesson 10: Choosing a suitable chart', summary: 'Line charts, ordered data and chart selection', Component: Lesson10 },
  { title: 'Lesson 11: Looking for relationships', summary: 'Scatter charts and cautious interpretation', Component: Lesson11 },
  { title: 'Lesson 12: The sports data challenge', summary: 'Transfer: derived fields, filtering, grouping and ranking', Component: Lesson12 },
  { title: 'Lesson 13: When data stories mislead', summary: 'Mean, median, outliers and axes', Component: Lesson13 },
  { title: 'Lesson 14: The robot outbreak begins', summary: 'New information model, questions and investigation planning', Component: Lesson14 },
  { title: 'Lesson 15: Patterns, rates and group sizes', summary: 'groupby, crosstab and denominators', Component: Lesson15 },
  { title: 'Lesson 16: Build and challenge your case', summary: 'Reproducible analysis and sensitivity checks', Component: Lesson16 },
  { title: 'Lesson 17: Final independent investigation', summary: 'Plan, analyse, verify and communicate', Component: Lesson17 },
  { title: 'Lesson 18: Present, review and reflect', summary: 'Fresh-run checks, peer review and evaluation', Component: Lesson18 },
]

