import { useEffect } from 'react'
import '../styles/Photos.css'

function Photos() {
  useEffect(() => {
    document.title = 'Photos - Wedding Celebration'
  }, [])

  // Update with actual photo sharing link
  const photoLink = 'https://drive.google.com/drive/folders/your-photo-folder-id'
  const uploadInstructions = `
    To share your photos with us:
    1. Click the button below to access our shared photo album
    2. Upload your favorite moments from the wedding
    3. Feel free to add captions or comments
    4. Thank you for helping us capture these precious memories!
  `

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
                  {uploadInstructions.split('\n').map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="photos-link-container">
                <a
                  href={photoLink}
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

