import React from 'react'
import { motion } from 'framer-motion'

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
        <section className="py-24 bg-brand-bg-alt relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red-dark/10 blur-[100px] pointer-events-none rounded-full"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                <h2 className="text-4xl font-bold text-brand-text mb-16">
                    Real People. <span className="text-gradient">Real Change.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-brand-bg border border-brand-text/10 p-8 rounded-2xl relative flex flex-col items-center text-center"
                        >
                            {/* Thin red accent line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-primary rounded-b-md"></div>

                            {/* Placeholder Avatar */}
                            <div className="w-20 h-20 rounded-full bg-[#E2E8F0] border-2 border-brand-red-dark mb-6 flex items-center justify-center overflow-hidden">
                                <span className="text-brand-text/30 font-bold text-xl">{t.name.charAt(0)}</span>
                            </div>

                            <div className="flex text-brand-red-light mb-4">
                                {'★★★★★'.split('').map((star, idx) => <span key={idx}>{star}</span>)}
                            </div>

                            <p className="text-brand-text-muted italic mb-6 flex-grow leading-relaxed">
                                "{t.quote}"
                            </p>

                            <div>
                                <h4 className="text-brand-text font-bold">{t.name}</h4>
                                <span className="text-brand-red-light text-sm">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
