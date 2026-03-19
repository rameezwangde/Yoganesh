import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

import divHealthImg from '../assets/images/div_health.png'
import divYogaImg from '../assets/images/div_yoga.png'
import divFitnessImg from '../assets/images/div_fitness.png'
import divWellnessImg from '../assets/images/div_wellness.png'
import divDanceImg from '../assets/images/div_dance.png'
import divMusicImg from '../assets/images/div_music.png'

const divisions = [
    { id: 'health-institute', title: 'Health Institute', icon: '🏥', desc: 'Medical-grade assessments and preventative care.', img: divHealthImg },
    { id: 'yoga-classes', title: 'Yoga Classes', icon: '🧘', desc: 'Mobility, flexibility, and deep core strength.', img: divYogaImg },
    { id: 'fitness-classes', title: 'Fitness Classes', icon: '⚡', desc: 'Elite strength training and metabolic conditioning.', img: divFitnessImg },
    { id: 'wellness-center', title: 'Wellness Center', icon: '🌿', desc: 'Complete recovery and restoration protocols.', img: divWellnessImg },
    { id: 'dance-classes', title: 'Dance Classes', icon: '💃', desc: 'Kinetic movement and cardiovascular rhythm.', img: divDanceImg },
    { id: 'music-classes', title: 'Music Classes', icon: '🎵', desc: 'Cognitive enhancement through musical learning.', img: divMusicImg }
]

const DivisionsLanding = () => {
    return (
        <>
            <Helmet>
                <title>Our Divisions | YOGANESH</title>
                <meta name="description" content="Explore the diverse branches of the YOGANESH ecosystem, from fitness and yoga to health and wellness." />
            </Helmet>

            <main className="min-h-screen bg-brand-bg pb-32 overflow-hidden">
                {/* Hero */}
                <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-brand-text/5 bg-brand-bg text-center">
                    
                    {/* Immersive Background Watermark */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
                        <span className="text-[120px] md:text-[250px] font-black tracking-tighter text-brand-text whitespace-nowrap">ECOSYSTEM</span>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,0,0,0.04),transparent_70%)] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">Master Your Craft</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold text-brand-text mb-8 tracking-tight leading-[1.1]"
                        >
                            A Complete <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark to-brand-red-light">Wellness Ecosystem.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed"
                        >
                            Select a discipline to learn more about our methodologies, schedules, and how we can definitively elevate your physical and mental state.
                        </motion.p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="container mx-auto px-4 md:px-8 pt-24 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {divisions.map((div, idx) => (
                            <motion.div
                                key={div.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                                className="h-full"
                            >
                                <Link to={`/${div.id}`} className="block h-full outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-4 rounded-[2.5rem]">
                                    <TiltWrapper intensity={8} scaleOnHover={1.02}>
                                        <div className="h-full bg-white/80 backdrop-blur-md border border-brand-text/5 rounded-[2.5rem] overflow-hidden hover:border-brand-red-light/30 transition-all duration-500 relative group shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(192,0,0,0.1)] flex flex-col">
                                            
                                            {/* Image Area with Premium Cover Mask */}
                                            <div className="h-[240px] relative overflow-hidden flex items-center justify-center bg-brand-bg-alt">
                                                <img 
                                                    src={div.img} 
                                                    alt={div.title} 
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0" 
                                                    loading="lazy" 
                                                />
                                                {/* Darkened overlay for contrast */}
                                                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-brand-red-dark/30 mix-blend-multiply transition-colors duration-700 z-10"></div>
                                                
                                                {/* Bottom fading mask into card body */}
                                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-20"></div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="px-10 pb-10 pt-4 flex-grow flex flex-col items-center text-center relative z-30">
                                                
                                                {/* Floating Icon Orb */}
                                                <div className="w-[84px] h-[84px] bg-white rounded-2xl flex items-center justify-center text-[40px] -mt-16 mb-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-brand-text/5 relative group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_20px_40px_rgba(192,0,0,0.15)] transition-all duration-500 overflow-hidden">
                                                    <div className="absolute inset-0 bg-brand-red-light/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                                                    <span className="relative z-10 drop-shadow-sm group-hover:brightness-125 transition-all duration-300">{div.icon}</span>
                                                </div>
                                                
                                                <h2 className="text-[28px] font-extrabold text-brand-text mb-4 group-hover:text-brand-red-dark transition-colors duration-300 tracking-tight leading-tight">{div.title}</h2>
                                                
                                                <p className="text-brand-text-muted text-lg mb-10 leading-relaxed flex-grow group-hover:text-brand-text/90 transition-colors duration-300">
                                                    {div.desc}
                                                </p>

                                                {/* Action Button Line */}
                                                <div className="flex items-center justify-center space-x-3 w-full border-t border-brand-text/5 pt-6 text-brand-red-dark font-extrabold text-sm tracking-widest uppercase group-hover:text-brand-red-light transition-colors duration-300">
                                                    <span>Explore Domain</span>
                                                    <FaArrowRight className="text-lg -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                </div>
                                            </div>

                                            {/* Subtle animated bottom structural bar */}
                                            <div className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-brand-red-light via-brand-red-dark to-brand-red-light w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-40"></div>
                                        </div>
                                    </TiltWrapper>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default DivisionsLanding
