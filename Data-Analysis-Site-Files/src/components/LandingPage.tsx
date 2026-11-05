import type { LessonSummary } from './lessons'
import Curriculum from './Curriculum'
import './LandingPage.css'

type LandingPageProps = {
  lessons: LessonSummary[]
  onStart: () => void
  onOpenLesson: (index: number) => void
}

export default function LandingPage({ lessons, onStart, onOpenLesson }: LandingPageProps) {
  const downloadHref = `${import.meta.env.BASE_URL}downloads/data-analysis-unit.zip`

  return (
    <>
      <section className="landing-hero" id="home" aria-labelledby="hero-title">
        <div className="landing-hero-copy">
          <p className="landing-eyebrow"><span /> FOURTH LEVEL COMPUTING SCIENCE</p>
          <h1 id="hero-title">Ask better questions.<br /><em>Find the story in data.</em></h1>
          <p className="landing-description">Explore a practical introduction to Python and Pandas. Learn to read, clean and analyse data, then explain what the evidence can—and cannot—tell you.</p>
          <div className="landing-actions">
            <button className="landing-primary" onClick={onStart}>Start learning <span aria-hidden="true">→</span></button>
            <a className="landing-download" href={downloadHref} download>Download Python and CSV files <span aria-hidden="true">↓</span></a>
          </div>
          <div className="landing-meta"><span>18 guided lessons</span><i /><span>Python + Pandas</span><i /><span>Learn at your own pace</span></div>
        </div>
        <div className="landing-illustration" aria-hidden="true">
          <div className="illustration-grid" />
          <div className="data-card card-table"><span>PLAYER</span><span>GAME</span><span>SCORE</span><b>014</b><b>Arcade</b><b>82</b><b>027</b><b>Quest</b><b>91</b><b>035</b><b>Arcade</b><b>68</b></div>
          <div className="data-card card-chart"><span>PLAYER SCORES</span><div className="chart-bars">{[35, 58, 44, 78, 62, 90].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><small>Look for a pattern, then check the evidence.</small></div>
          <span className="illustration-pin pin-one" /><span className="illustration-pin pin-two" />
        </div>
      </section>
      <div className="landing-statbar"><span><b>01</b> Understand the data</span><i /><span><b>02</b> Investigate a question</span><i /><span><b>03</b> Explain your evidence</span></div>

      <Curriculum />

      <section className="landing-lessons" id="lessons" aria-labelledby="lessons-title">
        <div className="landing-section-heading"><div><p className="section-eyebrow">THE UNIT</p><h2 id="lessons-title">Choose a lesson</h2></div><p>Build your skills step by step, from your first CSV to a clear conclusion.</p></div>
        <div className="landing-lesson-list">
          {lessons.map((lesson, index) => (
            <button className="landing-lesson-card" key={lesson.title} onClick={() => onOpenLesson(index)}>
              <span className="landing-lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="landing-lesson-title">{lesson.title.replace(/^Lesson \d+:\s*/, '')}<small>{lesson.summary}</small></span>
              <span className="landing-lesson-duration">45 MIN</span><span className="landing-lesson-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="lesson-download-row"><p>Download the Python starter programs and CSV data files for all 18 lessons.</p><a href={downloadHref} download>Download Python and CSV files <span aria-hidden="true">↓</span></a></div>
      </section>
    </>
  )
}
