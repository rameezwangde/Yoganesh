import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const CtaBanner = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Full width red gradient strip */}
            <div className="absolute inset-0 bg-gradient-brand shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] bg-gradient-to-r from-brand-red-dark to-brand-red-light mix-blend-multiply z-0"></div>

            {/* Overlay to darken slightly if needed */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-wide text-shadow-lg drop-shadow-2xl">
                    Your Best Self Is One Decision Away.
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        to="/contact"
                        className="px-8 py-4 rounded-full bg-white text-brand-red-dark font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto"
                    >
                        Book a Trial Class
                    </Link>
                    <a
                        href="https://wa.me/918422923924"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto"
                    >
                        <FaWhatsapp className="mr-3 text-xl" /> Talk on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CtaBanner
