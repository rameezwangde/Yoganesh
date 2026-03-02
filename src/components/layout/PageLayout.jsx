import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from '../ui/FloatingWhatsApp'

const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[72px]">
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default PageLayout
