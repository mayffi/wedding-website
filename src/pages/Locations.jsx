import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Locations.css'
import { ceremony, reception } from '../config/wedding'

function Locations() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Locations - Wedding Celebration'
  }, [])

  // React Router does not auto-scroll to hash anchors; do it manually after
  // the page renders. The slight delay lets layout settle (iframes etc.).
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [hash])

  return (
    <div className="locations-page">
      <section className="location-section section">
        <div className="container">
          <h1 className="page-title">Our venues</h1>
          <p className="page-subtitle">Our wedding and reception will take place in the following venues</p>
        </div>
      </section>

      {/* Ceremony Location */}
      <section id="ceremony" className="location-section section location-anchor">
        <div className="container">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">Church ceremony</h2>
              <div className="location-divider"></div>
            </div>
            <div className="location-content">
              <div className="location-info">
                <h3 className="venue-name">{ceremony.venueName}</h3>
                <p className="venue-address">{ceremony.address}</p>
                
                <div className="directions-section">

                  <div className="directions-grid">
                    {Object.entries(ceremony.directions)
                      .map(([key, value]) => (
                        <div key={key} className="direction-item">
                          <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{value}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="location-map">
                <iframe
                  title="Ceremony Location"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={ceremony.mapUrl}
                ></iframe>
                <p className="map-note">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremony.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reception Location */}
      <section id="reception" className="location-section section location-anchor">
        <div className="container">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">Reception</h2>
              <div className="location-divider"></div>
            </div>
            <div className="location-content">
              <div className="location-info">
                <h3 className="venue-name">{reception.venueName}</h3>
                
                <div className="directions-section">

                  <div className="directions-grid">
                    {Object.entries(reception.directions)
                      .filter(([key]) => key !== 'Driving & parking')
                      .map(([key, value]) => (
                        <div key={key} className="direction-item">
                          <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{value}</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="parking-info">
                  <h4>Driving &amp; parking</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{reception.directions['Driving & parking']}</p>
                </div>
              </div>

              <div className="location-map">
                <iframe
                  title="Reception Location"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={reception.mapUrl}
                ></iframe>
                <p className="map-note">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(reception.venueName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
