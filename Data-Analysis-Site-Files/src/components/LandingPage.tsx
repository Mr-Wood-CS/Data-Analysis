import Curriculum from './Curriculum'
import './LandingPage.css'

type LandingPageProps = {
  onLessons: () => void
}

export default function LandingPage({ onLessons }: LandingPageProps) {

  return (
    <>
      <header className="landing-introduction" id="home">
        <p className="unit-level">Fourth Level Computing Science</p>
        <h1>Data analysis with Python</h1>
        <p>Learn how to use Python and Pandas to investigate data. Across 18 lessons, you will read and clean datasets, look for patterns, make charts and explain what the evidence can—and cannot—tell you.</p>
        <p>Each lesson introduces an idea through examples and guided activities. Start at the beginning or choose a lesson to continue.</p>
        <button className="button primary" onClick={onLessons}>Go to lessons <span aria-hidden="true">→</span></button>
      </header>

      <Curriculum />
    </>
  )
}
