import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

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
import YogaMudra from './pages/YogaMudra'

// ScrollToTop strictly for routing transitions
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<DivisionsLanding />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* Custom Yoga Mudra Division Page */}
          <Route path="/yoga-classes" element={<YogaMudra />} />
          {/* Catch specific divisions */}
          <Route path="/:divisionId" element={<DivisionTemplate />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PageLayout>
          <AnimatedRoutes />
        </PageLayout>
      </Router>
    </HelmetProvider>
  )
}

export default App
