import { lessons } from './lessons'
import './LandingPage.css'

export default function LessonsPage({ onOpenLesson }: { onOpenLesson: (index: number) => void }) {
  return <section className="lessons-page" id="lessons" aria-labelledby="lessons-title">
    <header className="lessons-introduction">
      <p className="unit-level">Fourth Level Computing Science</p>
      <h1 id="lessons-title">Lessons</h1>
      <p>Choose a lesson to explore its key ideas, worked examples and investigation tasks. Each lesson is divided into short pages that you can move through at your own pace.</p>
    </header>
    <div className="section-heading"><h2>Data analysis with Python</h2><span>{lessons.length} lessons</span></div>
    <div className="landing-lesson-list">
      {lessons.map((lesson, index) => <button className="landing-lesson-card" key={lesson.title} onClick={() => onOpenLesson(index)}>
        <span className="landing-lesson-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="landing-lesson-title">{lesson.title.replace(/^Lesson \d+:\s*/, '')}<small>{lesson.summary}</small></span>
        <span className="landing-lesson-arrow" aria-hidden="true">→</span>
      </button>)}
    </div>
  </section>
}
