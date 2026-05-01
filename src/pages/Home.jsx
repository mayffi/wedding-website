import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import WelcomeAnimation from '../components/WelcomeAnimation'
import '../styles/Home.css'
import { couple, notices, story, schedule, rsvp } from '../config/wedding'

function Home() {
  const [storyOpen, setStoryOpen] = useState(false)
  const storyRef = useRef(null)
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Home - Wedding Celebration'
  }, [])

  // When the visitor lands on the home page via /#story (e.g. from the
  // sticky banner), open the story automatically and scroll to the section.
  useEffect(() => {
    if (hash !== '#story') return
    setStoryOpen(true)
    requestAnimationFrame(() => {
      storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash])

  const toggleStory = () => {
    setStoryOpen((prev) => {
      const next = !prev
      // When collapsing, scroll back up to the story heading so the reader
      // is not stranded far below the page.
      if (!next && storyRef.current) {
        storyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return next
    })
  }

  return (
    <div className="home-page">
      {/* Unified Card: Animation + Countdown + RSVP */}
      <section className="names-section">
        <div className="container">
          <WelcomeAnimation />
          <p className="wedding-date">{couple.weddingDateFormatted}</p>
          <div className="names-divider"></div>
          <CountdownTimer targetDate={couple.weddingDate} />
          <p className="compact-rsvp-text">
            RSVP by <strong>{rsvp.deadline}</strong>
          </p>
          <Link to="/rsvp" className="btn compact-rsvp-btn">
            RSVP Now
          </Link>
        </div>
      </section>

      {/* Hero Section with Image */}
      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </section>

      {/* Welcome Message Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            {/* Adults-Only Notice */}
            <div className="adults-only-notice">
              <p className="adults-only-text">{notices.adultsOnly}</p>
              <p className="adults-only-subtext">{notices.adultsOnlySubtext}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="story-section" ref={storyRef}>
        <div className="container">
          <div className="story-card">
            <h2 className="story-title">Our Genesis 1.1</h2>

            <div className="story-prose">
              {story.teaser.map((para, i) => (
                <p key={`teaser-${i}`} className="story-paragraph">
                  {para}
                </p>
              ))}

              <div
                id="story-full-content"
                className={`story-expandable${storyOpen ? ' open' : ''}`}
                aria-hidden={!storyOpen}
              >
                <div className="story-expandable-inner">
                  <div className="story-divider" aria-hidden="true">
                    · · ·
                  </div>
                  {story.sections.map((section, sIdx) => (
                    <Fragment key={`section-${sIdx}`}>
                      {section.map((para, pIdx) => (
                        <p
                          key={`section-${sIdx}-p-${pIdx}`}
                          className="story-paragraph"
                        >
                          {para}
                        </p>
                      ))}
                      {sIdx < story.sections.length - 1 && (
                        <div className="story-divider" aria-hidden="true">
                          · · ·
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="story-toggle-wrap">
              <button
                type="button"
                className="btn story-toggle-btn"
                aria-expanded={storyOpen}
                aria-controls="story-full-content"
                onClick={toggleStory}
              >
                {storyOpen ? 'See you there!' : 'Ok, here it goes'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Card Section */}
      <section className="schedule-section section">
        <div className="container">
          <h2 className="section-title">Know the schedule</h2>
          <div className="schedule-card">
            <Link to="/locations#ceremony" className="schedule-item">
              <div className="schedule-icon">💒</div>
              <div className="schedule-content">
                <h3>Ceremony</h3>
                <p className="schedule-time">{schedule.ceremony}</p>
              </div>
              <span className="schedule-chevron" aria-hidden="true">→</span>
            </Link>
            <div className="schedule-divider"></div>
            <Link to="/locations#reception" className="schedule-item">
              <div className="schedule-icon">🍾</div>
              <div className="schedule-content">
                <h3>Reception</h3>
                <p className="schedule-time">{schedule.reception}</p>
              </div>
              <span className="schedule-chevron" aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="schedule-hint">Tap a row for venue details</p>
        </div>
      </section>
    </div>
  )
}

export default Home
