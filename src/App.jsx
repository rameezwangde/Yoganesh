import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

// Layout
import PageLayout from './components/layout/PageLayout'

// Pages - Lazy Loaded for Production Performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const DivisionsLanding = lazy(() => import('./pages/DivisionsLanding'))
const DivisionTemplate = lazy(() => import('./pages/DivisionTemplate'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const YogaMudra = lazy(() => import('./pages/YogaMudra'))

// Loading Component
const PageLoader = () => (
  <div className="fixed inset-0 bg-brand-bg flex flex-col items-center justify-center z-[9999]">
    <div className="relative flex items-center justify-center">
      {/* Outer Pulse Rings */}
      <motion.div
        animate={{
          scale: [1, 2],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute w-12 h-12 rounded-full border-2 border-brand-red-light"
      />
      <motion.div
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5
        }}
        className="absolute w-12 h-12 rounded-full border-2 border-brand-red-light"
      />
      
      {/* Central Pulsing Dot */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-4 h-4 bg-brand-red-light rounded-full shadow-[0_0_20px_rgba(192,0,0,0.5)] z-10"
      />
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8 text-[10px] font-black tracking-[0.4em] uppercase text-brand-red-light/60"
    >
      YOGANESH
    </motion.div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </PageLayout>
      </Router>
    </HelmetProvider>
  )
}

export default App
