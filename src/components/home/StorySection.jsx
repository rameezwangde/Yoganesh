import React from 'react'
import { motion } from 'framer-motion'

const StorySection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-text/5">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="inline-block mb-6 px-5 py-2 border border-brand-text/10 rounded-full bg-brand-text/5 text-brand-text-muted text-[10px] uppercase tracking-[0.3em] font-black"
                    >
                        The Philosophy
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-5xl md:text-7xl font-black text-brand-text mb-10 tracking-tighter leading-[0.95]"
                    >
                        More Than a Gym. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">A Wellness Ecosystem.</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-xl md:text-2xl text-brand-text/70 leading-relaxed mb-12 font-medium max-w-3xl mx-auto"
                    >
                        At Yoganesh Health Institute, we believe true fitness goes beyond lifting weights. We have engineered a unified space where physical strength meets mental clarity. By combining medical insights through our Health Institute with dynamic disciplines like Yoga, Fitness, Dance, and Music, we offer a comprehensive approach to human performance and recovery.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scaleX: 0 },
                            visible: { opacity: 1, scaleX: 1 }
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-brand-red-dark to-brand-red-light mx-auto rounded-full shadow-[0_0_15px_rgba(192,0,0,0.3)]"
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default StorySection
