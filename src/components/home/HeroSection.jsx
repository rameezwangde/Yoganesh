import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero_wellness.png'

const HeroSection = () => {
    return (
        <section
            role="banner"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg relative"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red-dark/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red-light/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start text-left"
                >
                    <div className="inline-block mb-4 px-4 py-2 border border-brand-red-dark/30 rounded-full bg-brand-red-dark/10 backdrop-blur-sm">
                        <span className="text-brand-red-light font-bold text-xs uppercase tracking-widest">A Complete Wellness Ecosystem</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text leading-tight mb-6">
                        TRAIN YOUR BODY.<br />
                        <span className="text-gradient">STRENGTHEN YOUR MIND.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-brand-text-muted mb-8 max-w-xl leading-relaxed">
                        Health Institute | Yoga Classes | Fitness Classes | Wellness Center | Dance Classes | Music Classes
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(192,0,0,0.5)] transition-all transform hover:-translate-y-1 text-center"
                        >
                            Start Your Transformation
                        </Link>
                        <Link
                            to="/divisions"
                            className="px-8 py-4 rounded-full border border-brand-text/20 text-brand-text font-bold text-lg hover:bg-black/5 transition-all text-center"
                        >
                            Explore Divisions
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden glass-panel"
                >
                    {/* Subtle red overlay to fit dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-brand-red-dark/40 z-10 mix-blend-multiply"></div>

                    {/* Actual Hero Image */}
                    <img src={heroImage} alt="YOGANESH Cinematic Integration" className="absolute inset-0 w-full h-full object-cover z-0" loading="eager" />

                    <div className="absolute bottom-8 left-8 right-8 z-20 bg-glass p-6 rounded-xl border border-black/5">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                                <span className="font-bold text-white text-xl">✓</span>
                            </div>
                            <div>
                                <h4 className="text-brand-text font-bold text-lg">Holistic Approach</h4>
                                <p className="text-brand-text-muted text-sm">Mind, body, and soul integration</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
