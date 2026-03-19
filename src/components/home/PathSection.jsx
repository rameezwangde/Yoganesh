import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../ui/TiltWrapper'

const paths = [
    { name: 'Health Institute', link: '/health-institute', icon: '🏥', desc: 'Medical & preventative care' },
    { name: 'Yoga Classes', link: '/yoga-classes', icon: '🧘', desc: 'Mobility, breath & balance' },
    { name: 'Fitness Classes', link: '/fitness-classes', icon: '⚡', desc: 'Strength & conditioning' },
    { name: 'Wellness Center', link: '/wellness-center', icon: '🌿', desc: 'Recovery & restoration' },
    { name: 'Dance Classes', link: '/dance-classes', icon: '💃', desc: 'Rhythm & movement' },
    { name: 'Music Classes', link: '/music-classes', icon: '🎵', desc: 'Cognitive & creative growth' }
]

const PathSection = () => {
    return (
        <section className="py-32 bg-brand-bg relative overflow-hidden">
            {/* Ambient Background Glow (Zero-Lag Radial Gradient) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.02),transparent_60%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 text-center max-w-7xl relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-6 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-red-dark"></span>
                    <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">Explore Ecosystem</span>
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-6 tracking-tight">Choose Your Path.</h2>
                <p className="text-brand-text-muted mb-20 text-xl max-w-2xl mx-auto leading-relaxed">Select a division to explore exactly how we can engineer your physical and mental transformation.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {paths.map((path, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="h-full transform-gpu"
                        >
                            <Link to={path.link} className="block h-full outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-4 rounded-[2.5rem]">
                                <TiltWrapper intensity={12} scaleOnHover={1.03}>
                                    <div className="bg-white/80 backdrop-blur-md border border-brand-text/5 rounded-[2.5rem] p-10 flex flex-col items-start h-full relative group hover:bg-white hover:border-brand-red-light/30 hover:shadow-[0_25px_50px_rgba(192,0,0,0.08)] transition-all duration-500 overflow-hidden text-left cursor-pointer">
                                        
                                        {/* Background Hover Flare (Zero-Lag Radial Gradient) */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(192,0,0,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                                        <div className="flex items-center justify-between w-full mb-10 relative z-10">
                                            {/* Icon Morph Container */}
                                            <div className="w-[72px] h-[72px] rounded-[1.2rem] bg-brand-bg-alt border border-brand-text/5 flex items-center justify-center text-[40px] group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-red-light group-hover:border-brand-red-light transition-all duration-500 shadow-sm relative overflow-hidden">
                                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                                                <span className="drop-shadow-sm group-hover:brightness-150 transition-all duration-500 relative z-10">{path.icon}</span>
                                            </div>

                                            {/* Action Arrow */}
                                            <div className="w-14 h-14 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/30 group-hover:bg-brand-red-light group-hover:text-white group-hover:border-brand-red-light transition-all duration-500 bg-white shadow-sm">
                                                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 text-lg" />
                                            </div>
                                        </div>
                                        
                                        <div className="relative z-10">
                                            <h3 className="text-brand-text font-extrabold text-[26px] group-hover:text-brand-red-dark transition-colors duration-300 tracking-tight leading-tight mb-3">
                                                {path.name}
                                            </h3>
                                            <p className="text-brand-text-muted text-lg leading-relaxed group-hover:text-brand-text/90 transition-colors duration-300">
                                                {path.desc}
                                            </p>
                                        </div>

                                        {/* Subtle animated bottom structural bar */}
                                        <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-brand-red-light via-brand-red-dark to-brand-red-light w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                                    </div>
                                </TiltWrapper>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PathSection
