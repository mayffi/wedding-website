import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import '../styles/Home.css'
import { couple, contact, notices, welcome, story, schedule, rsvp } from '../config/wedding'

function Home() {

  useEffect(() => {
    document.title = 'Home - Wedding Celebration'
  }, [])

  return (
    <div className="home-page">
      {/* Hero Section with Image */}
      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </section>

      {/* Couple Names and Date Section */}
      <section className="names-section">
        <div className="container">
          <h1 className="couple-names">{couple.name1} & {couple.name2}</h1>
          <p className="wedding-date">{couple.weddingDateFormatted}</p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <p className="welcome-text">
              {welcome.message}
            </p>
            <div className="divider-line"></div>
            
            {/* Adults-Only Notice */}
            <div className="adults-only-notice">
              <p className="adults-only-text">
                {notices.adultsOnly}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2 className="story-title">Our Story</h2>
          <h3 className="story-subtitle">How We Met</h3>
          <p className="story-text">
            {story.text}
          </p>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="countdown-section section">
        <div className="container">
          <h2 className="section-title">Counting Down to Our Special Day</h2>
          <CountdownTimer targetDate={couple.weddingDate} />
        </div>
      </section>

      {/* Schedule Card Section */}
      <section className="schedule-section section">
        <div className="container">
          <h2 className="section-title">Wedding Schedule</h2>
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

      {/* RSVP Section */}
      <section className="rsvp-section section">
        <div className="container">
          <div className="rsvp-info-card">
            <div className="rsvp-info-content">
              <h2 className="rsvp-info-title">RSVP</h2>
              <p className="rsvp-deadline">Please RSVP by <strong>{rsvp.deadline}</strong></p>
              <Link to="/rsvp" className="rsvp-link btn">
                RSVP Now
              </Link>
            </div>
            <div className="rsvp-contact-info">
              <div className="rsvp-contact-icon">📞</div>
              <div className="rsvp-contact-details">
                <h3 className="rsvp-contact-title">RSVP & Enquiries Contact Number</h3>
                <p className="rsvp-contact-number">{contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
