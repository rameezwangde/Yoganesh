import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import divHealthImg from '../../assets/images/div_health.png'
import divYogaImg from '../../assets/images/div_yoga.png'
import divFitnessImg from '../../assets/images/div_fitness.png'
import divWellnessImg from '../../assets/images/div_wellness.png'
import divDanceImg from '../../assets/images/div_dance.png'
import divMusicImg from '../../assets/images/div_music.png'

const divisions = [
    {
        id: 'health-institute',
        title: 'HEALTH INSTITUTE',
        tagline: 'Heal, Learn, Prevent.',
        desc: 'Medical-grade assessments, physiotherapy, and preventative care strategies to keep your body functioning at its absolute peak.',
        icon: '🏥',
        img: divHealthImg
    },
    {
        id: 'yoga-classes',
        title: 'YOGA CLASSES',
        tagline: 'Breathe, Balance, Become.',
        desc: 'Ancient wisdom meets modern biomechanics. Build flexibility, mobility, and deep core strength through guided flows.',
        icon: '🧘',
        img: divYogaImg
    },
    {
        id: 'fitness-classes',
        title: 'FITNESS CLASSES',
        tagline: 'Train With Intelligent Intensity.',
        desc: 'Elite strength training, metabolic conditioning, and structured progression without the guesswork.',
        icon: '⚡',
        img: divFitnessImg
    },
    {
        id: 'wellness-center',
        title: 'WELLNESS CENTER',
        tagline: 'Recover, Reset, Renew.',
        desc: 'Complete autonomic nervous system restoration through premium recovery protocols.',
        icon: '🌿',
        img: divWellnessImg
    },
    {
        id: 'dance-classes',
        title: 'DANCE CLASSES',
        tagline: 'Move With Freedom.',
        desc: 'Express yourself through kinetic movement, improving coordination, cardiovascular health, and rhythm.',
        icon: '💃',
        img: divDanceImg
    },
    {
        id: 'music-classes',
        title: 'MUSIC CLASSES',
        tagline: 'Find Your Inner Rhythm.',
        desc: 'Cognitive enhancement and emotional regulation through active musical engagement and learning.',
        icon: '🎵',
        img: divMusicImg
    }
]

const ScrollStorytelling = () => {
    const containerRef = useRef(null)

    return (
        <section ref={containerRef} className="py-24 bg-brand-bg-alt relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="space-y-32">
                    {divisions.map((div, index) => {
                        return (
                            <motion.div
                                key={div.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.8 }}
                            >
                                <Link
                                    to={`/${div.id}`}
                                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group block w-full transition-transform hover:-translate-y-2`}
                                >
                                    {/* Text Content */}
                                    <div className="w-full md:w-1/2">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="text-4xl group-hover:scale-110 transition-transform">{div.icon}</span>
                                            <h3 className="text-brand-red-light font-bold text-sm tracking-widest uppercase">{div.title}</h3>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 group-hover:text-brand-red-light transition-colors">
                                            {div.tagline}
                                        </h2>
                                        <p className="text-xl text-brand-text-muted leading-relaxed">
                                            {div.desc}
                                        </p>
                                        <div className="mt-6 flex items-center text-brand-red-light font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                            Explore Division <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                        </div>
                                    </div>

                                    {/* Visual Representation */}
                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-square relative rounded-2xl overflow-hidden glass-panel group-hover:shadow-[0_0_30px_rgba(192,0,0,0.3)] transition-shadow duration-500">
                                            <img src={div.img} alt={div.title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            <div className="absolute inset-0 bg-brand-red-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                                <span className="text-white/20 text-[180px] font-bold group-hover:text-white/40 transition-colors duration-700 group-hover:scale-110 drop-shadow-lg">{div.icon}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ScrollStorytelling
