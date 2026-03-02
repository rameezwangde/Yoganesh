import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

            <main className="min-h-screen bg-brand-bg pb-24">
                {/* Hero */}
                <section className="py-24 relative overflow-hidden text-center border-b border-brand-text/5 bg-brand-bg-alt">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red-dark/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-6">
                            A Complete <span className="text-gradient">Wellness Ecosystem.</span>
                        </h1>
                        <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
                            Select a discipline to learn more about our methodologies, schedules, and how we can elevate your physical and mental state.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="container mx-auto px-4 md:px-8 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {divisions.map((div, idx) => (
                            <motion.div
                                key={div.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link to={`/${div.id}`} className="block h-full group">
                                    <div className="h-full bg-brand-bg-alt border border-brand-text/10 rounded-2xl overflow-hidden hover:border-brand-red-light/50 transition-all duration-300 relative group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                        {/* Image Area */}
                                        <div className="h-48 relative overflow-hidden flex items-center justify-center">
                                            <img src={div.img} alt={div.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            <div className="absolute inset-0 bg-brand-bg/40 z-10"></div>
                                            <span className="text-7xl group-hover:scale-110 transition-transform duration-500 relative z-20 mix-blend-screen opacity-20">{div.icon}</span>
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-alt via-transparent to-transparent z-10"></div>
                                        </div>

                                        <div className="p-8 relative z-20">
                                            <div className="w-14 h-14 bg-brand-red-dark/10 rounded-full flex items-center justify-center text-2xl mb-6 shadow-inner border border-brand-red-dark/20 text-brand-red-light">
                                                {div.icon}
                                            </div>
                                            <h2 className="text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-red-light transition-colors">{div.title}</h2>
                                            <p className="text-brand-text-muted mb-6">
                                                {div.desc}
                                            </p>

                                            <div className="flex items-center text-brand-red-light font-bold text-sm tracking-widest uppercase">
                                                Explore <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </div>
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
