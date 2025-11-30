import { useEffect } from 'react'
import '../styles/Locations.css'

function Locations() {
  useEffect(() => {
    document.title = 'Locations - Wedding Celebration'
  }, [])

  // Update these with actual addresses
  const ceremonyAddress = '123 Wedding Chapel Lane, City, State 12345'
  const receptionAddress = '456 Reception Hall Avenue, City, State 12345'

  // Google Maps embed URLs - Using search query (no API key needed)
  // Replace with actual addresses or coordinates
  const ceremonyMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576!2d-73.98811768459418!3d40.758895979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTcuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`
  const receptionMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576!2d-73.98811768459418!3d40.758895979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTcuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`

  return (
    <div className="locations-page">
      <section className="location-section section">
        <div className="container">
          <h1 className="page-title">Wedding Locations</h1>
          <p className="page-subtitle">Join us at these beautiful venues</p>
        </div>
      </section>

      {/* Ceremony Location */}
      <section className="location-section section">
        <div className="container">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">Ceremony</h2>
              <div className="location-divider"></div>
            </div>
            <div className="location-content">
              <div className="location-info">
                <h3 className="venue-name">Beautiful Wedding Chapel</h3>
                <p className="venue-address">{ceremonyAddress}</p>
                
                <div className="directions-section">
                  <h4>Directions</h4>
                  <div className="directions-grid">
                    <div className="direction-item">
                      <h5>🚗 Driving</h5>
                      <p>Take Highway 101 North, exit at Chapel Street. The venue is on the right.</p>
                    </div>
                    <div className="direction-item">
                      <h5>🚇 Public Transport</h5>
                      <p>Take Metro Line 2 to Chapel Station. Walk 5 minutes north.</p>
                    </div>
                  </div>
                </div>

                <div className="parking-info">
                  <h4>Parking</h4>
                  <p>Complimentary valet parking available. Street parking also available nearby.</p>
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
                  src={ceremonyMapUrl}
                ></iframe>
                <p className="map-note">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremonyAddress)}`}
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
      <section className="location-section section">
        <div className="container">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">Reception</h2>
              <div className="location-divider"></div>
            </div>
            <div className="location-content">
              <div className="location-info">
                <h3 className="venue-name">Elegant Reception Hall</h3>
                <p className="venue-address">{receptionAddress}</p>
                
                <div className="directions-section">
                  <h4>Directions</h4>
                  <div className="directions-grid">
                    <div className="direction-item">
                      <h5>🚗 Driving</h5>
                      <p>Take Main Street to Reception Avenue. The hall is on the left side.</p>
                    </div>
                    <div className="direction-item">
                      <h5>🚇 Public Transport</h5>
                      <p>Take Bus Route 15 to Reception Stop. The venue is across the street.</p>
                    </div>
                  </div>
                </div>

                <div className="parking-info">
                  <h4>Parking</h4>
                  <p>Large parking lot available on-site. Additional parking at adjacent lot.</p>
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
                  src={receptionMapUrl}
                ></iframe>
                <p className="map-note">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(receptionAddress)}`}
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

