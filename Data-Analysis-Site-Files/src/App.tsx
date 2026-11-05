import { useState } from 'react'
import './App.css'
import { lessons } from './components/lessons'

function App() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null)
  const current = activeLesson === null ? null : lessons[activeLesson]
  const selectedIndex = activeLesson ?? 0

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to lesson content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setActiveLesson(null)} aria-label="Data Lab home">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span>Data Lab<small>PYTHON · DATA ANALYSIS</small></span>
        </a>
        <div className="header-meta"><span className="status-dot" /> 18 lessons <span className="header-divider">/</span> Beginner course</div>
      </header>

      <main id="main-content">
        {current ? (
          <section className="lesson-view" aria-live="polite">
            <button className="back-link" onClick={() => setActiveLesson(null)}>← All lessons</button>
            <div className="lesson-topline"><span>LESSON {String(selectedIndex + 1).padStart(2, '0')}</span><span>45 MIN</span></div>
            <current.Component />
            <nav className="lesson-pagination" aria-label="Lesson navigation">
              <button disabled={selectedIndex === 0} onClick={() => setActiveLesson(selectedIndex - 1)}>← Previous</button>
              <span>{selectedIndex + 1} / {lessons.length}</span>
              <button disabled={selectedIndex === lessons.length - 1} onClick={() => setActiveLesson(selectedIndex + 1)}>Next lesson →</button>
            </nav>
          </section>
        ) : (
          <>
            <section className="hero" id="home">
              <div className="hero-copy">
                <p className="eyebrow"><span /> A PRACTICAL INTRODUCTION</p>
                <h1>Make sense of<br /><em>the data.</em></h1>
                <p>Build confidence with Python and real questions. Explore a guided course in reading, cleaning and explaining data.</p>
                <button className="primary-button" onClick={() => setActiveLesson(0)}>Start learning <span>→</span></button>
                <div className="hero-meta">18 lessons <i /> 45 minutes each <i /> Python + Pandas</div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="chart-label">A question, a table, a useful answer</div>
                <div className="chart">
                  <span className="chart-axis y-axis">SCORE</span><span className="chart-axis x-axis">PLAYER</span>
                  {[42, 68, 54, 82, 61, 91, 73].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                </div>
                <div className="chart-foot"><span className="chart-key" /> Explore one row at a time</div>
              </div>
            </section>
            <section className="course-section">
              <div className="section-heading"><div><p className="eyebrow">THE COURSE</p><h2>Choose a lesson</h2></div><p>From your first CSV to a clear evidence based conclusion.</p></div>
              <div className="lesson-list">
                {lessons.map((lesson, index) => <button className="lesson-card" key={lesson.title} onClick={() => setActiveLesson(index)}>
                  <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="lesson-title">{lesson.title}<small>{lesson.summary}</small></span>
                  <span className="lesson-time">45 MIN</span><span className="lesson-arrow" aria-hidden="true">↗</span>
                </button>)}
              </div>
            </section>
          </>
        )}
      </main>
      <footer className="site-footer"><span>DATA LAB</span><span>Learn by asking better questions.</span></footer>
    </div>
  )
}

export default App
