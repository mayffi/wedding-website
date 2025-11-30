import { useEffect } from 'react'
import '../styles/Registry.css'

function Registry() {
  useEffect(() => {
    document.title = 'Registry - Wedding Celebration'
  }, [])

  // Update with actual registry link
  const registryLink = 'https://www.example-registry.com/our-wedding'

  return (
    <div className="registry-page">
      <section className="registry-content section">
        <div className="container">
          <h1 className="page-title">Wedding Registry</h1>
          <div className="registry-card">
            <p className="registry-message">
              Your presence at our wedding is the greatest gift we could ask for.
            </p>
            <p className="registry-intro">
              For those who would like to celebrate with a gift, we've created a registry
              with items we would love to have in our new home together.
            </p>
            
            <div className="registry-link-container">
              <a
                href={registryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="registry-link btn"
              >
                View Our Registry
              </a>
            </div>

            <p className="registry-footer">
              Thank you for being part of our special day!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registry

