import Navbar from './Navbar'
import Footer from './Footer'
import StoryBanner from './StoryBanner'

function Layout({ children }) {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <StoryBanner />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

