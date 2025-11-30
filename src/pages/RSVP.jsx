import { useEffect } from 'react'
import '../styles/RSVP.css'

function RSVP() {
  useEffect(() => {
    document.title = 'RSVP - Wedding Celebration'
  }, [])

  // Update with actual RSVP information
  const rsvpDeadline = 'November 15, 2024'
  const maxGuests = 2

  return (
    <div className="rsvp-page">
      <section className="rsvp-content section">
        <div className="container">
          <h1 className="page-title">RSVP</h1>
          <p className="page-subtitle">We hope you can join us!</p>
          <div className="rsvp-card">
            <div className="rsvp-info">
              <div className="info-item">
                <div className="info-icon">📅</div>
                <div className="info-content">
                  <h2>RSVP Deadline</h2>
                  <p className="info-value">{rsvpDeadline}</p>
                  <p className="info-description">
                    Please let us know if you'll be joining us by this date so we can make proper arrangements.
                  </p>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="info-item">
                <div className="info-icon">👥</div>
                <div className="info-content">
                  <h2>Maximum Guests</h2>
                  <p className="info-value">{maxGuests} {maxGuests === 1 ? 'Guest' : 'Guests'} per Invitation</p>
                  <p className="info-description">
                    Due to venue capacity, each invitation allows for a maximum of {maxGuests} {maxGuests === 1 ? 'guest' : 'guests'}.
                  </p>
                </div>
              </div>
            </div>

            <div className="rsvp-note">
              <p>
                <strong>Important:</strong> Please contact us directly to confirm your attendance.
                We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RSVP

