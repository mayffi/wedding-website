import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import WelcomeAnimation from '../components/WelcomeAnimation'
import '../styles/Home.css'
import { couple, notices, story, schedule, rsvp } from '../config/wedding'

function Home() {
  useEffect(() => {
    document.title = 'Home - Wedding Celebration'
  }, [])

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
      <section className="story-section">
        <div className="container">
          <h2 className="story-title">Our Story</h2>
          <p className="story-text">
            {story.text}
          </p>
        </div>
      </section>

      {/* Schedule Card Section */}
      <section className="schedule-section section">
        <div className="container">
          <h2 className="section-title">Know the schedule</h2>
          <div className="schedule-card">
            <div className="schedule-item">
              <div className="schedule-icon">💒</div>
              <div className="schedule-content">
                <h3>Ceremony</h3>
                <p className="schedule-time">{schedule.ceremony}</p>
              </div>
            </div>
            <div className="schedule-divider"></div>
            <div className="schedule-item">
              <div className="schedule-icon">🍾</div>
              <div className="schedule-content">
                <h3>Reception</h3>
                <p className="schedule-time">{schedule.reception}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
