import React from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaLeaf, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../ui/TiltWrapper'

const features = [
    {
        icon: FaUserTie,
        title: 'Expert Coaches',
        desc: 'Train with certified professionals dedicated to engineering your success through science-backed methodologies.'
    },
    {
        icon: FaLeaf,
        title: 'Holistic Programs',
        desc: 'Unifying physical strength, mental resilience, and restorative health into one cohesive wellness journey.'
    },
    {
        icon: FaChartLine,
        title: 'Structured Progress',
        desc: 'Stop guessing. We implement meticulously tracked systems to guarantee continuous, measurable improvement.'
    },
    {
        icon: FaUsers,
        title: 'Supportive Community',
        desc: 'Thrive alongside like-minded individuals in an environment that demands excellence and fosters incredible growth.'
    }
]

const FeaturesSection = () => {
    return (
        <section className="py-32 bg-brand-bg relative overflow-hidden border-y border-brand-text/5">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,0,0,0.03),transparent_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">The Core Pillars</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-8 tracking-tight">
                        Why YOGANESH Works.
                    </h2>
                    <p className="text-brand-text-muted text-xl leading-relaxed">
                        We leave nothing to chance. Our entire ecosystem is designed to deliver transformational results efficiently and safely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                                className="h-full"
                            >
                                <TiltWrapper intensity={15} scaleOnHover={1.03}>
                                    <div className="bg-white/80 backdrop-blur-sm border border-brand-text/5 p-10 rounded-[2rem] h-full flex flex-col group hover:bg-white hover:border-brand-red-light/30 hover:shadow-[0_30px_60px_rgba(192,0,0,0.08)] transition-all duration-500 overflow-hidden relative cursor-pointer">
                                        
                                        {/* Animated Top Glow */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red-light/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Animated Background Mesh */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red-light/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 scale-110"></div>

                                        <div className="relative z-10 flex-grow flex flex-col">
                                            {/* Icon Morphing Container */}
                                            <div className="w-16 h-16 rounded-[1rem] bg-brand-bg-alt border border-brand-text/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-brand-red-light group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
                                                <IconComponent className="text-3xl text-brand-red-dark group-hover:text-white transition-colors duration-500 drop-shadow-sm" />
                                            </div>
                                            
                                            <h3 className="text-2xl font-extrabold text-brand-text mb-4 tracking-tight group-hover:text-brand-red-dark transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            
                                            <p className="text-lg text-brand-text-muted leading-relaxed flex-grow">
                                                {feature.desc}
                                            </p>
                                            
                                            {/* Hidden Interactive Arrow that slides up */}
                                            <div className="mt-8 overflow-hidden h-6 flex items-center">
                                                <span className="text-brand-red-light font-bold text-sm tracking-widest uppercase flex items-center translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    Discover More <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltWrapper>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
