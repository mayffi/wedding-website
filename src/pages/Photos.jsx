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
          <h1 className="page-title">Share Your Photos & Videos</h1>
          <p className="page-subtitle">Thank you for helping us preserve these beautiful memories! Please share your photos and videos with us.</p>
          <div className="photos-card">
            <div className="photos-info">

              <div className="upload-instructions">
                <h2>How to share with us</h2>
                <div className="instructions-text">
                  {photos.uploadInstructions.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="qr-code-container">
                <img src="/photosqr.png" alt="QR code to upload wedding photos" className="qr-code" />
                <p className="qr-label">Scan to share</p>
              </div>

              <div className="photos-link-container">
                <a
                  href={photos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photos-link btn"
                >
                   Share Photos and Videos
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

