import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
        <section className="py-24 bg-brand-bg relative">
            <div className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
                <h2 className="text-4xl font-bold text-brand-text mb-4">Choose Your Path.</h2>
                <p className="text-brand-text-muted mb-16 text-lg">Select a division to explore exactly how we can engineer your transformation.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paths.map((path, idx) => (
                        <Link key={idx} to={path.link}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-5%" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-brand-bg-alt border border-brand-text/10 rounded-xl p-6 flex items-center space-x-6 hover:bg-brand-text/5 hover:border-brand-red-light/50 hover:shadow-[0_0_20px_rgba(192,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 group text-left"
                            >
                                <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    {path.icon}
                                </div>
                                <div>
                                    <h3 className="text-brand-text font-bold text-lg group-hover:text-brand-red-light transition-colors">{path.name}</h3>
                                    <p className="text-brand-text-muted text-sm mt-1">{path.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PathSection
