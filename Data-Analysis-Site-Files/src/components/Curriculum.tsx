import './Curriculum.css'

const outcomes = [
  {
    code: 'TCH 4-13a',
    focus: 'Compare real-world solution processes and justify a choice.',
    opportunity: 'Lessons 8, 13 and 16–18: compare cleaning or analysis approaches, then explain and defend a method.',
    scope: 'Fourth Level extension evidence depends on explanation and comparison, not only completing the core activity.',
  },
  {
    code: 'TCH 4-13b',
    focus: 'Informally compare algorithm correctness and efficiency.',
    opportunity: 'Lesson 6 stretch: compare a maximum scan with a paper sorting process, test ties and count comparisons.',
    scope: 'This is an optional focused opportunity. Using Pandas sorting does not, by itself, demonstrate algorithm analysis.',
  },
  {
    code: 'TCH 4-14a',
    focus: 'Use textual language constructs and data structures.',
    opportunity: 'Lessons 4, 8, 12 and 17: explain and adapt Python expressions, a loop and tabular structures.',
    scope: 'This unit provides a selected programming context; it does not establish broad programming coverage on its own.',
  },
]

export default function Curriculum() {
  return (
    <section className="curriculum-section" aria-labelledby="curriculum-heading">
      <div className="curriculum-heading">
        <p className="section-eyebrow">CURRICULUM LINKS</p>
        <h2 id="curriculum-heading">Fourth Level experiences<br />and outcomes</h2>
        <p>Focused opportunities for learners to explain, compare and justify their approach to data analysis.</p>
      </div>
      <div className="outcome-list">
        {outcomes.map((outcome) => (
          <article className="outcome-item" key={outcome.code}>
            <span className="outcome-code">{outcome.code}</span>
            <div className="outcome-copy">
              <h3>{outcome.focus}</h3>
              <p>{outcome.opportunity}</p>
              <small>{outcome.scope}</small>
            </div>
          </article>
        ))}
      </div>
      <p className="curriculum-note">Planning interpretations from the curriculum mapping file. Match each outcome with a range of evidence; completing a lesson alone does not confirm achievement.</p>
    </section>
  )
}
