import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import '../styles/Home.css'

function Home() {
  // Set wedding date - Update this with actual wedding date
  const weddingDate = '2026-06-06T11:30:00'
  const coupleName1 = 'Samuel Awini'
  const coupleName2 = 'Mayfred Appiah'

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
          <h1 className="couple-names">{coupleName1} & {coupleName2}</h1>
          <p className="wedding-date">JUNE 6, 2026</p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <p className="welcome-text">
              WELCOME TO OUR WEDDING WEBSITE. HERE YOU CAN FIND THE MOST UP TO DATE INFORMATION 
              REGARDING OUR WEDDING INCLUDING IMPORTANT HOTEL AND CONTACT INFORMATION. WE ARE SO 
              EXCITED TO CELEBRATE WITH EVERYONE. PLEASE CHECK BACK FOR MORE UPDATES CLOSER TO OUR DATE.
            </p>
            <div className="divider-line"></div>
            
            {/* Adults-Only Notice */}
            <div className="adults-only-notice">
              <p className="adults-only-text">
                While we love our little ones, we have decided to make our wedding an adults-only celebration. Thank you for understanding.
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
            SAMUEL AND MAYFRED MET THROUGH MUTUAL FRIENDS AT A SPECIAL GATHERING. THEY CONNECTED 
            INSTANTLY AND DISCOVERED THEY SHARED MANY COMMON INTERESTS AND VALUES. A FEW MONTHS 
            LATER THEY DECIDED TO DATE AND HAVE BEEN INSEPARABLE EVER SINCE. THEIR LOVE STORY 
            CONTINUES TO GROW WITH EACH PASSING DAY, AND THEY ARE THRILLED TO CELEBRATE THEIR 
            UNION WITH FAMILY AND FRIENDS.
          </p>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="countdown-section section">
        <div className="container">
          <h2 className="section-title">Counting Down to Our Special Day</h2>
          <CountdownTimer targetDate={weddingDate} />
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
                <p className="schedule-time">11:30 AM - 1:00 PM</p>
              </div>
            </div>
            <div className="schedule-divider"></div>
            <div className="schedule-item">
              <div className="schedule-icon">🍾</div>
              <div className="schedule-content">
                <h3>Reception</h3>
                <p className="schedule-time">2:30 PM - 8:00 PM</p>
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
              <p className="rsvp-deadline">Please RSVP by <strong>10.05.2026</strong></p>
              <Link to="/rsvp" className="rsvp-link btn">
                RSVP Now
              </Link>
            </div>
            <div className="rsvp-contact-info">
              <div className="rsvp-contact-icon">📞</div>
              <div className="rsvp-contact-details">
                <h3 className="rsvp-contact-title">RSVP & Enquiries Contact Number</h3>
                <p className="rsvp-contact-number">+358 XX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
