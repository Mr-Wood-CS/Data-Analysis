import { useEffect, useState } from 'react'
import './App.css'
import { lessons } from './components/lessons'
import LandingPage from './components/LandingPage'
import LessonsPage from './components/LessonsPage'
import LessonDetailPage from './components/LessonDetailPage'

function App() {
  const [view, setView] = useState<'home' | 'lessons' | 'lesson'>('home')
  const [activeLesson, setActiveLesson] = useState<number | null>(null)
  const [activePage, setActivePage] = useState(0)
  const current = activeLesson === null ? null : lessons[activeLesson]
  const selectedIndex = activeLesson ?? 0

  useEffect(() => {
    function syncRoute() {
      const lessonRoute = /^#\/lesson\/([1-9]\d*)\/?$/.exec(window.location.hash)
      if (lessonRoute) {
        const index = Number(lessonRoute[1]) - 1
        if (index >= 0 && index < lessons.length) {
          setActiveLesson(index)
          setActivePage(0)
          setView('lesson')
          window.scrollTo({ top: 0 })
          return
        }
      }
      if (window.location.hash === '#/lessons') {
        setActiveLesson(null)
        setView('lessons')
      } else {
        setActiveLesson(null)
        setView('home')
      }
    }
    syncRoute()
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  function openLesson(index: number) {
    setActiveLesson(index)
    setActivePage(0)
    setView('lesson')
    window.scrollTo({ top: 0 })
    window.location.hash = `/lesson/${index + 1}`
  }

  function showLessons() {
    setActiveLesson(null)
    setView('lessons')
    window.scrollTo({ top: 0 })
    window.location.hash = '/lessons'
  }

  function showHome() {
    setActiveLesson(null)
    setView('home')
    window.scrollTo({ top: 0 })
    window.location.hash = '/'
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to lesson content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); showHome() }} aria-label="Data Analysis home">
          Data Analysis
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <button className={view === 'home' ? 'active' : ''} aria-current={view === 'home' ? 'page' : undefined} onClick={showHome}>Home</button>
          <button className={view !== 'home' ? 'active' : ''} aria-current={view !== 'home' ? 'page' : undefined} onClick={showLessons}>Lessons</button>
        </nav>
      </header>

      <main id="main-content">
        {view === 'lesson' && current && <LessonDetailPage lesson={current} index={selectedIndex} page={activePage} onPageChange={setActivePage} onBack={showLessons} />}
        {view === 'lessons' && <LessonsPage onOpenLesson={openLesson} />}
        {view === 'home' && <LandingPage onLessons={showLessons} />}
      </main>
      <footer className="site-footer"><span>Data Analysis</span><span>Fourth Level Computing Science</span></footer>
    </div>
  )
}

export default App
