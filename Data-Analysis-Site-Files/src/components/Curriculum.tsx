import './Curriculum.css'

const outcomes = [
  {
    code: 'TCH 4-15a',
    description: 'Select development tools, create and improve solutions that process and present information, and justify design decisions.',
  },
  {
    code: 'TCH 4-14a',
    description: 'I understand constructs and data structures in a textual programming language.',
  },
]

const benchmarks = [
  'Identify the key requirements of a problem before developing a solution.',
  'Use Python variables, calculations, selection and repetition to process data.',
  'Explain how data structures represent information in a textual programming language.',
  'Apply AND, OR and NOT when combining conditions.',
  'Identify syntax and logic errors, and debug the code.',
  'Document testing and evaluate whether the solution meets its requirements.',
]

export default function Curriculum() {
  return (
    <section className="curriculum-section" aria-labelledby="curriculum-heading">
      <h2 id="curriculum-heading">Fourth Level experiences and outcomes</h2>
      <p className="curriculum-source">Plain-language summaries of the selected Fourth Level outcomes and benchmarks. <a href="https://education.gov.scot/media/irimoozl/technologiesbenchmarkspdf.pdf" target="_blank" rel="noreferrer">Read the official wording (PDF, page 24)</a>.</p>
      <div className="outcome-list">
        {outcomes.map((outcome) => (
          <article className="outcome-item" key={outcome.code}>
            <h3 className="outcome-code">{outcome.code}</h3>
            <p>{outcome.description}</p>
          </article>
        ))}
      </div>
      <div className="curriculum-benchmarks">
        <h2>Benchmarks supported by this unit</h2>
        <ul>
          {benchmarks.map((benchmark) => <li key={benchmark}>{benchmark}</li>)}
        </ul>
      </div>
    </section>
  )
}
