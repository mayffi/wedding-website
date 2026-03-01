import { useEffect } from 'react'
import '../styles/Photos.css'
import { photos } from '../config/wedding'

function Photos() {
  useEffect(() => {
    document.title = 'Photos - Wedding Celebration'
  }, [])

  return (
    <div className="photos-page">
      <section className="photos-content section">
        <div className="container">
          <h1 className="page-title">Wedding Photos</h1>
          <p className="page-subtitle">Share your memories with us</p>
          <div className="photos-card">
            <div className="photos-info">
              <h2>Share Your Photos</h2>
              <p className="photos-description">
                We'd love to see your photos from our special day! Please upload your favorite moments
                to our shared album.
              </p>
              
              <div className="upload-instructions">
                <h3>Upload Instructions</h3>
                <div className="instructions-text">
                  {photos.uploadInstructions.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="photos-link-container">
                <a
                  href={photos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photos-link btn"
                >
                  View & Upload Photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Photos

