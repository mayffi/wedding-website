import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Registry from './pages/Registry'
import Menu from './pages/Menu'
import Photos from './pages/Photos'
import RSVP from './pages/RSVP'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

