import { useEffect } from 'react'
import '../styles/Locations.css'
import { ceremony, reception } from '../config/wedding'

function Locations() {
  useEffect(() => {
    document.title = 'Locations - Wedding Celebration'
  }, [])

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
                <h3 className="venue-name">{ceremony.venueName}</h3>
                <p className="venue-address">{ceremony.address}</p>
                
                <div className="directions-section">
                  <h4>Directions</h4>
                  <div className="directions-grid">
                    <div className="direction-item">
                      <h5>🚗 Driving</h5>
                      <p>{ceremony.directions.driving}</p>
                    </div>
                    <div className="direction-item">
                      <h5>🚇 Public Transport</h5>
                      <p>{ceremony.directions.transit}</p>
                    </div>
                  </div>
                </div>

                <div className="parking-info">
                  <h4>Parking</h4>
                  <p>{ceremony.directions.parking}</p>
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
      <section className="location-section section">
        <div className="container">
          <div className="location-card">
            <div className="location-header">
              <h2 className="location-title">Reception</h2>
              <div className="location-divider"></div>
            </div>
            <div className="location-content">
              <div className="location-info">
                <h3 className="venue-name">{reception.venueName}</h3>
                <p className="venue-address">{reception.address}</p>
                
                <div className="directions-section">
                  <h4>Directions</h4>
                  <div className="directions-grid">
                    <div className="direction-item">
                      <h5>🚗 Driving</h5>
                      <p>{reception.directions.driving}</p>
                    </div>
                    <div className="direction-item">
                      <h5>🚇 Public Transport</h5>
                      <p>{reception.directions.transit}</p>
                    </div>
                  </div>
                </div>

                <div className="parking-info">
                  <h4>Parking</h4>
                  <p>{reception.directions.parking}</p>
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
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(reception.address)}`}
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

