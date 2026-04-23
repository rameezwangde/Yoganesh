import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const YogaFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(0)
    const [activeTab, setActiveTab] = useState(0)

    const faqs = [
        { q: "What types of yoga classes are offered at Yoga Mudra Fitness Classes?", a: "We offer a variety of classes including Hatha Yoga, Vinyasa Flow, Power Yoga, and Meditation sessions. Each class is designed to suit different fitness levels—from beginners to advanced practitioners." },
        { q: "Do I need prior experience or special equipment to join?", a: "No prior experience is needed! Our classes are beginner-friendly, and instructors guide you through every step. Just bring a yoga mat, water bottle, and wear comfortable clothing." },
        { q: "How can I register and what are the class timings?", a: "You can register online through our website or visit our studio in person. We offer flexible morning and evening classes throughout the week to accommodate your schedule." }
    ]

    const tabs = ["Yoga Mudra Classes", "365 Days Yoga", "YOGANESH Instructor"]

    return (
        <section id="faq" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Background accoutrements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-text/10 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

                    {/* LEFT COLUMN - FAQ */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="text-brand-primary font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Knowledge Base</span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                                Frequently Asked <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Questions</span>
                            </h2>
                            <p className="text-brand-text-muted text-lg">Everything you need to know before starting your journey with us.</p>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'bg-white border-brand-primary/30 shadow-[0_10px_30px_rgba(22,163,74,0.05)]' : 'bg-brand-bg-alt border-brand-text/5 hover:border-brand-text/10'}`}
                                >
                                    <button
                                        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                        onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                    >
                                        <span className={`font-bold pr-4 transition-colors ${activeFaq === index ? 'text-brand-primary' : 'text-brand-text'}`}>{faq.q}</span>
                                        <span className={`text-2xl transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${activeFaq === index ? 'rotate-45 text-brand-primary' : 'text-brand-text/50'}`}>+</span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 pb-6 text-brand-text-muted leading-relaxed border-t border-brand-text/5 pt-4 mt-2 font-medium">
                                            {faq.a}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - IMAGE & ABOUT */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[2.5rem] border border-brand-text/5 p-4 sm:p-6 md:p-8 shadow-2xl relative"
                        >
                            {/* Premium Tabs */}
                            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                                {tabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 overflow-hidden ${activeTab === idx ? 'text-white shadow-[0_10px_20px_rgba(22,163,74,0.2)] scale-105' : 'bg-brand-bg-alt text-brand-text/60 hover:bg-brand-bg hover:text-brand-text hover:shadow-md'}`}
                                    >
                                        {activeTab === idx && (
                                            <motion.div
                                                layoutId="activeTabBadge"
                                                className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{tab}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Image Wrapper */}
                            <div className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden group shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-brand-secondary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                <img
                                    src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/new11-e1750943845290.jpg"
                                    alt="Yoga Mudra Class"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl hidden sm:block border border-white/20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <span className="block text-[10px] font-extrabold text-brand-text/50 uppercase tracking-[0.2em] mb-1">Established</span>
                                    <span className="block text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">365 Days</span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="mt-10 relative">
                                <h3 className="text-2xl font-extrabold text-brand-text mb-6 flex items-center gap-4">
                                    <span className="w-8 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></span>
                                    About Yoga Mudra Fitness Classes
                                </h3>
                                <div className="space-y-4 text-brand-text-muted leading-relaxed font-medium text-[15px] md:text-base">
                                    <p>
                                        Yoga Mudra Fitness Classes offer a holistic approach to wellness, blending traditional yoga techniques with modern fitness methods. Each session enhances flexibility, builds strength, and promotes inner peace.
                                    </p>
                                    <p>
                                        Classes are suitable for all levels—beginners to advanced practitioners. Certified instructors guide participants through mindful movements, breathing exercises, and meditative practices to support physical health and mental clarity.
                                    </p>
                                    <p>
                                        With a welcoming environment and personalized attention, Yoga Mudra fosters a community centered on well-being. Regular practice helps reduce stress, improve posture, and cultivate a balanced, energized lifestyle.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default YogaFAQ
