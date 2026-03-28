import { useEffect } from 'react'
import '../styles/RSVP.css'
import { rsvp, contact, notices } from '../config/wedding'

function RSVP() {
  useEffect(() => {
    document.title = 'RSVP - Wedding Celebration'

    // Load Tally embed script for auto-resizing
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    script.onload = () => {
      if (window.Tally) window.Tally.loadEmbeds()
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="rsvp-page">
      <section className="rsvp-content section">
        <div className="container">
          <div className="rsvp-header">
            <h1 className="page-title">RSVP</h1>
            <p className="page-subtitle">Kindly confirm your attendance below.</p>
          </div>

          {/* Adults-Only Notice */}
          <div className="adults-only-notice-rsvp">
            <p className="adults-only-text-rsvp">
              {notices.adultsOnly}
            </p>
          </div>

          {/* Tally Form Embed */}
          <div className="form-container">
            <iframe
              data-tally-src={rsvp.tallyFormUrl}
              loading="lazy"
              width="100%"
              height="200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Form"
              className="rsvp-form"
            />
          </div>

          {/* Contact Information Section */}
          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <div className="contact-content">
              <h2 className="contact-title">RSVP & Enquiries Contact Number</h2>
              <p className="contact-number">{contact.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RSVP
