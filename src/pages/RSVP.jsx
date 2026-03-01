import { useEffect } from 'react'
import '../styles/RSVP.css'

function RSVP() {
  useEffect(() => {
    document.title = 'RSVP - Wedding Celebration'
  }, [])

  // Google Form embed URL for RSVP submissions
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScGguQVSes3_aAqgILJgXdykI5jjYtP0fydbI_J3Ml0nsZ6lw/viewform?embedded=true'

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
              While we love our little ones, we have decided to make our wedding an adults-only celebration. Thank you for understanding.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="form-container">
            <iframe
              src={googleFormUrl}
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Form"
              className="rsvp-form"
            >
              Loading…
            </iframe>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <div className="contact-content">
              <h2 className="contact-title">RSVP & Enquiries Contact Number</h2>
              <p className="contact-number">+358 XX XXX XXXX</p>
              <p className="contact-note">(placeholder - please update with actual contact number)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RSVP
