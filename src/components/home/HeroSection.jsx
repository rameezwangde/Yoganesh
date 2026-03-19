import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero_wellness.png'

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            role="banner"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg transition-all duration-1000"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red-dark/30 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [1, 1.1, 1], x: [0, 50, -20, 0], y: [0, -30, 20, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red-light/20 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Left Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start text-left"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-6 px-5 py-2 border border-brand-red-dark/40 rounded-full bg-brand-red-dark/10 backdrop-blur-md relative overflow-hidden group shadow-[0_0_15px_rgba(192,0,0,0.15)]">
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                        />
                        <span className="text-brand-red-light font-bold text-xs uppercase tracking-widest relative z-10">A Complete Wellness Ecosystem</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-brand-text leading-tight mb-6 tracking-tight drop-shadow-lg">
                        TRAIN YOUR BODY.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light via-brand-red-dark to-brand-red-light animate-gradient-x drop-shadow-sm">
                            STRENGTHEN YOUR MIND.
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-xl leading-relaxed">
                        Health Institute | Yoga Classes | Fitness Classes | Wellness Center | Dance Classes | Music Classes
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/contact"
                            className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg shadow-[0_4px_20px_rgba(192,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(192,0,0,0.6)] transition-all transform hover:-translate-y-1 text-center group"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                        </Link>
                        <Link
                            to="/divisions"
                            className="px-8 py-4 rounded-full border-2 border-brand-text/10 text-brand-text font-bold text-lg hover:border-brand-red-light/40 hover:bg-brand-red-dark/10 transition-all text-center backdrop-blur-sm"
                        >
                            Explore Divisions
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden glass-panel group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    style={{ perspective: 1000 }}
                >
                    {/* Subtle red overlay to fit dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/90 via-transparent to-brand-red-light/30 z-10 mix-blend-multiply group-hover:opacity-70 transition-opacity duration-700"></div>

                    {/* Actual Hero Image */}
                    <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src={heroImage} 
                        alt="YOGANESH Cinematic Integration" 
                        className="absolute inset-0 w-full h-full object-cover z-0" 
                        loading="eager" 
                    />

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 bg-black/50 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform transition-transform group-hover:-translate-y-2 duration-500"
                    >
                        <div className="flex items-center space-x-5">
                            <motion.div 
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-14 h-14 bg-gradient-to-br from-brand-red-light to-brand-red-dark rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(192,0,0,0.6)]"
                            >
                                <span className="font-bold text-white text-2xl drop-shadow-md">✓</span>
                            </motion.div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1 tracking-wide">Holistic Approach</h4>
                                <p className="text-white/80 text-sm font-medium">Mind, body, and soul integration</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
