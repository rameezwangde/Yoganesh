import React from 'react'
import { motion } from 'framer-motion'

const StorySection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-text/5">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 border border-brand-text/10 rounded-full bg-brand-text/5 text-brand-text-muted text-xs uppercase tracking-widest font-semibold">
                        The Philosophy
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-8">
                        More Than a Gym. <br />
                        <span className="text-gradient">A Wellness Ecosystem.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed mb-10">
                        At YOGANESH, we believe true fitness goes beyond lifting weights. We have engineered a unified space where physical strength meets mental clarity. By combining medical insights through our Health Institute with dynamic disciplines like Yoga, Fitness, Dance, and Music, we offer a comprehensive approach to human performance and recovery.
                    </p>

                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default StorySection
