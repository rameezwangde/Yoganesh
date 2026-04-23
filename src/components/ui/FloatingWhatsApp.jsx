import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 rounded-full bg-brand-bg-alt border border-brand-text/10 text-brand-text flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-brand-text/10 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>

            {/* WhatsApp FAB */}
            <a
                href="https://wa.me/918097923924"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>
        </div>
    )
}

export default FloatingWhatsApp
