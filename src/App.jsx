import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Layout
import PageLayout from './components/layout/PageLayout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import DivisionsLanding from './pages/DivisionsLanding'
import DivisionTemplate from './pages/DivisionTemplate'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

// ScrollToTop strictly for routing transitions
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/divisions" element={<DivisionsLanding />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch specific divisions */}
            <Route path="/:divisionId" element={<DivisionTemplate />} />
          </Routes>
        </PageLayout>
      </Router>
    </HelmetProvider>
  )
}

export default App
