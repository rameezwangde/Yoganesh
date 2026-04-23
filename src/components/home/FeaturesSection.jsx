import React from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaLeaf, FaChartLine, FaUsers } from 'react-icons/fa'

const features = [
    {
        icon: FaUserTie,
        title: 'Expert Coaches',
    },
    {
        icon: FaLeaf,
        title: 'Holistic Programs',
    },
    {
        icon: FaChartLine,
        title: 'Structured Progress',
    },
    {
        icon: FaUsers,
        title: 'Supportive Community',
    }
]

const FeaturesSection = () => {
    // Duplicate features for infinite scroll effect
    const duplicatedFeatures = [...features, ...features, ...features, ...features];

    return (
        <section className="py-12 bg-brand-bg relative overflow-hidden border-y border-brand-text/5">
            {/* Edge Fade Gradients for a smooth ticker look */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                
                {/* Fixed Trust Message */}
                <div className="flex-shrink-0 text-center md:text-left z-30 bg-brand-bg pr-8 border-r border-brand-text/10">
                    <p className="text-brand-text/60 font-black text-xs tracking-[0.2em] uppercase">
                        Curating Your <br />
                        <span className="text-brand-red-dark text-sm">Inner Sanctuary</span>
                    </p>
                </div>

                {/* Infinite Scrolling Ticker Container */}
                <div className="flex-grow overflow-hidden relative">
                    <motion.div 
                        animate={{ 
                            x: [0, -1000] 
                        }}
                        transition={{ 
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                        className="flex items-center space-x-16 md:space-x-24 lg:space-x-32 whitespace-nowrap"
                    >
                        {duplicatedFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center space-x-5 group cursor-default shrink-0"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-brand-red-light/10 flex items-center justify-center group-hover:bg-brand-red-light transition-all duration-500 shadow-sm border border-brand-red-light/20">
                                        <IconComponent className="text-xl text-brand-text/30 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-brand-text/70 font-black text-sm uppercase tracking-[0.15em] group-hover:text-brand-red-dark transition-colors">
                                        {feature.title}
                                    </h4>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
