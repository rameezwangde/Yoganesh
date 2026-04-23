import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'

const YogaHero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-text/5 pt-20 pb-20 lg:pb-32">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000&auto=format&fit=crop"
                    alt="Yoga Mudra Premium Hero"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                {/* High-end editorial overlay: fades to solid brand color on the left/top, transparent on right/bottom */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-brand-bg/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-transparent to-brand-bg"></div>

                {/* Subtle theme glows */}
                <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] bg-brand-text/5 rounded-full blur-[120px] -translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:col-span-7 xl:col-span-6 pt-10"
                >
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full bg-white/60 border border-brand-primary/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                        <span className="text-brand-text font-bold text-xs tracking-[0.2em] uppercase">
                            Welcome To
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black mb-8 leading-[1.05] tracking-tight text-brand-text">
                        Yoganesh
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            Health Institute
                        </span>
                    </h1>

                    <p className="text-brand-text-muted text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                        Transform your mind, body, and soul with our expert-led sessions. Join our holistic community and discover the power of wellness every single day.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <button className="w-full sm:w-auto px-10 py-4 bg-gradient-primary text-white font-bold rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(22,163,74,0.35)] transition-all duration-300">
                            Start Your Journey
                        </button>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-brand-primary/10 group-hover:scale-110 transition-transform">
                                <FaLeaf className="text-brand-primary text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-brand-text font-black tracking-wide">365 Days Yoga</span>
                                <span className="text-brand-text-muted text-xs font-medium uppercase tracking-widest">Consistency is Key</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[2.5rem] rotate-3 opacity-20 blur-xl"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] group">
                            <div className="absolute inset-0 bg-brand-text/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
                                alt="Yoga Masterclass"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-brand-text font-black text-lg">Expert Guidance</h3>
                                <p className="text-brand-text-muted text-sm font-medium mt-1">Personalized attention for every pose.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default YogaHero
