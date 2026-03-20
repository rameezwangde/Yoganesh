import React from 'react'
import { motion } from 'framer-motion'

const YogaCTA = ({ scrollToSection }) => {
    return (
        <section className="relative py-32 md:py-48 mt-12 mb-12 overflow-hidden group">
            {/* Fixed Background Image for Parallax Effect */}
            <div className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}></div>

            {/* Dark/Gradient Overlays to ensure text readability */}
            <div className="absolute inset-0 bg-brand-text/60 mix-blend-multiply transition-colors duration-700 group-hover:bg-brand-text/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark/40 to-brand-red-light/40 opacity-60 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.3em] font-bold uppercase mb-6 shadow-xl">
                        Your Time Is Now
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                        Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Mind & Body</span> Today
                    </h2>
                    <p className="text-white/90 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                        Take the first step towards a healthier, happier you. Join our expert-led sessions and feel the difference from day one.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-white text-brand-text hover:text-brand-red-dark font-black rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-sm md:text-base uppercase tracking-wider relative overflow-hidden group/btn">
                            <span className="relative z-10">Book a Free Trial</span>
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-bg-alt to-white opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        </button>
                        <button onClick={() => scrollToSection('services')} className="px-10 py-4 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-bold rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider hover:-translate-y-1">
                            Explore Classes
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default YogaCTA
