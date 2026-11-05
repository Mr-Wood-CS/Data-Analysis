import { useState } from 'react'
import './App.css'
import { lessons } from './components/lessons'
import LandingPage from './components/LandingPage'

function App() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null)
  const current = activeLesson === null ? null : lessons[activeLesson]
  const selectedIndex = activeLesson ?? 0

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to lesson content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setActiveLesson(null)} aria-label="Data Detectives home">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span>Data Detectives<small>PYTHON · DATA ANALYSIS</small></span>
        </a>
        <div className="header-meta"><span className="status-dot" /> Fourth Level <span className="header-divider">/</span> 18 lessons</div>
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
          <LandingPage lessons={lessons} onStart={() => setActiveLesson(0)} onOpenLesson={setActiveLesson} />
        )}
      </main>
      <footer className="site-footer"><span>DATA DETECTIVES</span><span>Learn by asking better questions.</span></footer>
    </div>
  )
}

export default App
