import { Link } from 'react-router-dom'
import '../styles/StoryBanner.css'

function StoryBanner() {
  return (
    <div className="story-banner" role="region" aria-label="Story link">
      Read our story{' '}
      <Link to="/#story" className="story-banner-link">
        here
      </Link>
    </div>
  )
}

export default StoryBanner
