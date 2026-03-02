import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBullseye, FaHeart, FaFistRaised } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About YOGANESH | The Story of our Wellness Ecosystem</title>
                <meta name="description" content="Learn about the founders journey, our mission, vision, and core values that drive the YOGANESH wellness ecosystem." />
            </Helmet>

            <main className="w-full bg-brand-bg text-brand-text">
                {/* 1. Hero */}
                <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-text/5">
                    <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-[150px] mix-blend-screen pointer-events-none"></div>
                    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-extrabold mb-6"
                        >
                            The Story of <span className="text-gradient">YOGANESH</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-brand-text-muted max-w-2xl mx-auto"
                        >
                            How we transformed a single idea into a multi-disciplinary wellness ecosystem designed to engineer human potential.
                        </motion.p>
                    </div>
                </section>

                {/* 2. Founder's Journey */}
                <section className="py-20 md:py-28 bg-brand-bg relative">
                    <div className="container mx-auto px-4 md:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
                        >
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/5] rounded-2xl glass-panel relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[#E2E8F0] flex items-center justify-center">
                                        <span className="text-brand-text/30 font-bold tracking-widest uppercase">Founder Portrait</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80 z-10"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold">The Visionary Behind the Movement</h2>
                                <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
                                <p className="text-brand-text-muted leading-relaxed text-lg">
                                    What started as a personal quest for physical and mental restoration quickly grew into a blueprint for holistic health. The founder of YOGANESH realized that disjointed fitness routines and isolated medical care weren't enough. People needed an integrated ecosystem.
                                </p>
                                <p className="text-brand-text-muted leading-relaxed text-lg">
                                    By bringing together the discipline of the gym, the restorative power of yoga, the joy of dance, and the therapeutic benefits of a health institute, YOGANESH was born.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Vision & Mission & Core Values */}
                <section className="py-20 bg-brand-bg-alt border-y border-brand-text/5">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Philosophy</h2>
                            <p className="text-brand-text-muted">The foundational principles that guide every class, every treatment, and every interaction.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-8 border border-brand-text/10 bg-brand-bg rounded-2xl text-center hover:border-brand-red-light/40 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-red-dark/10 rounded-full flex items-center justify-center mb-6">
                                    <FaBullseye className="text-2xl text-brand-red-light" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">To become the global standard for integrated wellness, proving that peak physical performance and deep restorative health are deeply connected.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-8 border border-brand-text/10 bg-brand-bg rounded-2xl text-center hover:border-brand-red-light/40 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-red-dark/10 rounded-full flex items-center justify-center mb-6">
                                    <FaFistRaised className="text-2xl text-brand-red-light" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">To provide elite facilities, expert coaching, and a supportive community that empowers individuals to reclaim their health and transform their lives.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="p-8 border border-brand-text/10 bg-brand-bg rounded-2xl text-center hover:border-brand-red-light/40 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-red-dark/10 rounded-full flex items-center justify-center mb-6">
                                    <FaHeart className="text-2xl text-brand-red-light" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Core Value</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">Relentless pursuit of excellence. We don't compromise on the quality of our equipment, the standard of our coaches, or the depth of our care.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Timeline */}
                <section className="py-24 bg-brand-bg">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Milestones of Growth</h2>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-red-light before:via-brand-red-dark before:to-transparent">
                            {[
                                { year: '2020', title: 'The Blueprint', desc: 'The initial concept of an integrated wellness ecosystem was drafted.' },
                                { year: '2022', title: 'Foundation Built', desc: 'Opened the first facility focusing purely on Fitness and Yoga.' },
                                { year: '2024', title: 'Ecosystem Expansion', desc: 'Added the Health Institute, Dance, and Music disciplines.' },
                                { year: '2026', title: 'The Next Era', desc: 'Preparing to launch new branches across major cities.' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-bg bg-brand-red-light text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(192,0,0,0.5)] z-10"></div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-bg-alt border border-brand-text/10 p-6 rounded-2xl shadow-xl hover:border-brand-red-light/50 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-xl">{item.title}</h3>
                                            <span className="text-brand-red-light font-bold">{item.year}</span>
                                        </div>
                                        <p className="text-brand-text-muted">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Team Showcase */}
                <section className="py-24 bg-brand-bg-alt border-t border-brand-text/5">
                    <div className="container mx-auto px-4 md:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Elite Professionals</h2>
                        <p className="text-brand-text-muted mb-16 max-w-2xl mx-auto">Our coaches and practitioners are selected from the top 1% of their respective fields.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="aspect-[3/4] rounded-2xl glass-panel relative overflow-hidden mb-4">
                                        <div className="absolute inset-0 bg-[#E2E8F0] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                            <span className="text-brand-text/30 uppercase tracking-widest text-sm font-bold">Trainer {i}</span>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold">Trainer Name</h4>
                                    <p className="text-brand-red-light text-sm">Speciliaty Discipline</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-brand blur-[100px] opacity-20 pointer-events-none"></div>
                    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                        <h2 className="text-4xl font-bold mb-8">Join The YOGANESH Community</h2>
                        <Link
                            to="/contact"
                            className="px-10 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(192,0,0,0.4)] transition-all inline-block"
                        >
                            Start Exploring Today
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About
