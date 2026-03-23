import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../ui/FloatingWhatsApp'
import BreathingBackground from '../ui/BreathingBackground'

const PageLayout = ({ children }) => {
    const location = useLocation();
    
    // Check if current route is a division page with its own specific navbar
    const isDivisionPage = [
        '/yoga-classes', 
        '/health-institute', 
        '/fitness-classes', 
        '/wellness-center', 
        '/dance-classes', 
        '/music-classes'
    ].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden relative">
            <BreathingBackground />
            {!isDivisionPage && <Navbar />}
            <main className={`flex-grow ${!isDivisionPage ? 'pt-[72px]' : ''}`}>
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default PageLayout
