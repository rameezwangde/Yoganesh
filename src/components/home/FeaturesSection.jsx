import React from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaLeaf, FaChartLine, FaUsers } from 'react-icons/fa'

const features = [
    {
        icon: <FaUserTie className="text-3xl text-brand-red-light" />,
        title: 'Expert Coaches',
        desc: 'Train with certified professionals dedicated to engineering your success through science-backed methodologies.'
    },
    {
        icon: <FaLeaf className="text-3xl text-brand-red-light" />,
        title: 'Holistic Programs',
        desc: 'Unifying physical strength, mental resilience, and restorative health into one cohesive wellness journey.'
    },
    {
        icon: <FaChartLine className="text-3xl text-brand-red-light" />,
        title: 'Structured Progress',
        desc: 'Stop guessing. We implement meticulously tracked systems to guarantee continuous, measurable improvement.'
    },
    {
        icon: <FaUsers className="text-3xl text-brand-red-light" />,
        title: 'Supportive Community',
        desc: 'Thrive alongside like-minded individuals in an environment that demands excellence and fosters incredible growth.'
    }
]

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-brand-text mb-6">
                        Why YOGANESH Works.
                    </h2>
                    <p className="text-brand-text-muted text-lg">
                        We leave nothing to chance. Our entire ecosystem is designed to deliver transformational results efficiently and safely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-brand-bg-alt border border-brand-text/5 p-8 rounded-2xl hover:border-brand-red-dark/50 transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-red-dark/10 flex items-center justify-center mb-6 group-hover:bg-brand-red-dark/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-4">{feature.title}</h3>
                            <p className="text-brand-text-muted leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
