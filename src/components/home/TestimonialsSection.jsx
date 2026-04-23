import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteRight, FaStar } from 'react-icons/fa'
import TiltWrapper from '../ui/TiltWrapper'

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Yoga & Fitness Member',
        quote: 'YOGANESH completely changed my life. The combination of intense fitness conditioning and restorative yoga practices helped me recover from years of chronic pain.'
    },
    {
        name: 'David Chen',
        role: 'Health Institute Patient',
        quote: 'The level of clinical precision at the Health Institute is unmatched. They treated me like a professional athlete and got me back to peak performance.'
    },
    {
        name: 'Maria Rodriguez',
        role: 'Dance Class Enthusiast',
        quote: 'An incredible community! The dance instructors bring so much energy. Its the only workout I actually look forward to every single week.'
    }
]

const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-brand-bg relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">Success Stories</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-6 tracking-tight">
                        Real People. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Real Change.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                            className="h-full"
                        >
                            <TiltWrapper intensity={10} scaleOnHover={1.02}>
                                <div className="bg-white/80 backdrop-blur-md border border-brand-text/5 p-10 rounded-[2rem] h-full flex flex-col relative group hover:bg-white hover:border-brand-primary/20 hover:shadow-[0_20px_40px_rgba(22,163,74,0.06)] transition-all duration-500 overflow-hidden cursor-pointer">

                                    {/* Subtle Top Glow Line */}
                                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Massive Background Quote Icon */}
                                    <FaQuoteRight className="absolute -right-4 -top-4 text-[140px] text-brand-text/[0.03] group-hover:text-brand-primary/[0.05] group-hover:-rotate-6 transition-all duration-700 pointer-events-none" />

                                    {/* Ratings */}
                                    <div className="flex text-brand-primary mb-8 space-x-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.2, rotate: 180 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FaStar className="text-lg" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-xl md:text-2xl font-medium text-brand-text leading-relaxed flex-grow mb-10 relative z-10">
                                        "{t.quote}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-brand-text/10 group-hover:border-brand-primary/20 transition-colors duration-500">
                                        <div className="w-14 h-14 rounded-full bg-brand-bg-alt flex items-center justify-center font-bold text-xl text-brand-secondary shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-brand-text font-bold text-lg">{t.name}</h4>
                                            <span className="text-brand-primary text-sm font-semibold tracking-wide">{t.role}</span>
                                        </div>
                                    </div>

                                </div>
                            </TiltWrapper>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
