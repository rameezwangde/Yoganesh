import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBullseye, FaHeart, FaFistRaised, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About YOGANESH | The Story of our Wellness Ecosystem</title>
                <meta name="description" content="Learn about the founders journey, our mission, vision, and core values that drive the YOGANESH wellness ecosystem." />
            </Helmet>

            <main className="w-full bg-brand-bg text-brand-text overflow-hidden">

                {/* 1. Hero */}
                <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-brand-text/5">
                    {/* Immersive Background Watermark */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
                        <span className="text-[100px] md:text-[200px] font-black tracking-tighter text-brand-text whitespace-nowrap uppercase">Yoganesh Health Institute</span>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,0,0,0.05),transparent_70%)] pointer-events-none"></div>

                    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">Our Heritage</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]"
                        >
                            The Story of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark to-brand-red-light">YOGANESH</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed"
                        >
                            How we transformed a singular vision into a multi-disciplinary wellness ecosystem designed to engineer absolute human potential.
                        </motion.p>
                    </div>
                </section>

                {/* 2. Founder's Journey */}
                <section className="py-24 md:py-32 bg-brand-bg relative">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* Founder Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-1/2"
                            >
                                <TiltWrapper intensity={10} scaleOnHover={1.02}>
                                    <div className="aspect-[4/5] rounded-[3rem] relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-brand-text/5 bg-brand-bg-alt cursor-pointer">
                                        <div className="absolute inset-0 bg-brand-red-dark/5 group-hover:bg-brand-red-dark/10 transition-colors duration-500 flex items-center justify-center">
                                            <span className="text-brand-text/20 font-black tracking-widest uppercase text-2xl rotate-[-90deg]">Founder Portrait</span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80 z-10"></div>

                                        {/* Premium Overlay Trim */}
                                        <div className="absolute inset-6 border border-brand-text/10 rounded-[2rem] z-20 pointer-events-none group-hover:border-brand-red-light/30 transition-colors duration-500"></div>
                                    </div>
                                </TiltWrapper>
                            </motion.div>

                            {/* Founder Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text">The Visionary Behind the Movement.</h2>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-brand-red-dark to-brand-red-light rounded-full"></div>

                                <div className="space-y-6 text-brand-text-muted text-lg md:text-xl leading-relaxed">
                                    <p>
                                        What began as a rigorous personal quest for physical restoration rapidly evolved into a definitive blueprint for holistic health. We recognized that disconnected fitness routines and isolated medical treatments were fundamentally broken.
                                    </p>
                                    <p>
                                        People required more than just a gym or a clinic—they required an <strong className="text-brand-text font-bold">integrated ecosystem</strong>.
                                    </p>
                                    <p>
                                        By seamlessly uniting the brutal discipline of elite fitness, the profound restorative power of yoga, the kinetic joy of dance, and the absolute clinical precision of a health institute, YOGANESH was born.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. Vision & Mission & Core Values */}
                <section className="py-32 bg-brand-bg-alt border-y border-brand-text/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.03),transparent_60%)] pointer-events-none"></div>

                    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Core Philosophy.</h2>
                            <p className="text-brand-text-muted text-xl">The unyielding principles that dictate every class, every treatment, and every single interaction under our roof.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Our Vision', icon: FaBullseye, desc: 'To permanently establish the global standard for integrated wellness, proving that elite physical performance and deep restorative health are inextricably linked.' },
                                { title: 'Our Mission', icon: FaFistRaised, desc: 'To provide world-class facilities, uncompromising coaching, and an environment that demands excellence while empowering individuals to transform their lives.' },
                                { title: 'Core Value', icon: FaHeart, desc: "A relentless pursuit of excellence. We do not compromise on the quality of our equipment, the standard of our practitioners, or the profound depth of our care." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <TiltWrapper intensity={10} scaleOnHover={1.03}>
                                        <div className="bg-white/80 backdrop-blur-md border border-brand-text/5 p-10 rounded-[2rem] h-full flex flex-col group hover:bg-white hover:border-brand-red-light/30 hover:shadow-[0_20px_40px_rgba(192,0,0,0.08)] transition-all duration-500 overflow-hidden relative text-center">

                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(192,0,0,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                            <div className="w-20 h-20 mx-auto bg-brand-bg-alt rounded-2xl flex items-center justify-center mb-8 border border-brand-text/5 group-hover:scale-110 group-hover:bg-brand-red-light group-hover:-rotate-3 transition-all duration-500 shadow-sm relative z-10">
                                                <item.icon className="text-3xl text-brand-red-dark group-hover:text-white transition-colors duration-500" />
                                            </div>

                                            <h3 className="text-2xl font-extrabold mb-4 group-hover:text-brand-red-dark transition-colors duration-300 relative z-10">{item.title}</h3>

                                            <p className="text-brand-text-muted text-lg leading-relaxed group-hover:text-brand-text/80 transition-colors duration-300 relative z-10 flex-grow">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </TiltWrapper>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Timeline */}
                <section className="py-32 bg-brand-bg">
                    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Milestones of Growth.</h2>
                            <p className="text-brand-text-muted text-xl max-w-2xl mx-auto">From an architectural concept to a fully operational, multi-disciplinary empire.</p>
                        </div>

                        <div className="relative">
                            {/* Central Line */}
                            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red-dark via-brand-red-light to-transparent md:-translate-x-1/2 opacity-20"></div>

                            <div className="space-y-16">
                                {[
                                    { year: '2020', title: 'The Blueprint', desc: 'The initial architectural and theoretical concept of a fully integrated wellness ecosystem was aggressively drafted.' },
                                    { year: '2022', title: 'Foundation Built', desc: 'Successfully launched our flagship facility focusing purely on high-intensity Fitness and restorative Yoga.' },
                                    { year: '2024', title: 'Ecosystem Expansion', desc: 'Officially integrated the Health Institute, Dance, and Music disciplines, completing the core vision.' },
                                    { year: '2026', title: 'The Next Era', desc: 'Scaling the ecosystem. Preparing to launch new elite branches across major metropolitan cities.' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ duration: 0.8 }}
                                        className={`relative flex flex-col md:flex-row items-center md:justify-between group cursor-pointer ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Timeline Node */}
                                        <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full border-4 border-brand-bg bg-brand-bg-alt flex items-center justify-center z-10 group-hover:bg-brand-red-light group-hover:scale-125 transition-all duration-500 shadow-md">
                                            <div className="w-3 h-3 rounded-full bg-brand-red-dark group-hover:bg-white group-hover:animate-ping transition-colors"></div>
                                        </div>

                                        {/* Spacer for MD */}
                                        <div className="hidden md:block w-[45%]"></div>

                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%] pl-20 md:pl-0">
                                            <TiltWrapper intensity={8} scaleOnHover={1.02}>
                                                <div className={`bg-brand-bg-alt border border-brand-text/5 p-8 rounded-[2rem] shadow-lg group-hover:border-brand-red-light/30 group-hover:shadow-[0_20px_40px_rgba(192,0,0,0.08)] transition-all duration-500 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                                    <span className="text-brand-red-light font-black text-2xl mb-2 block">{item.year}</span>
                                                    <h3 className="font-extrabold text-2xl mb-4 text-brand-text group-hover:text-brand-red-dark transition-colors duration-300">{item.title}</h3>
                                                    <p className="text-brand-text-muted leading-relaxed text-lg">{item.desc}</p>
                                                </div>
                                            </TiltWrapper>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Team Showcase */}
                <section className="py-32 bg-brand-bg-alt border-t border-brand-text/5 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Elite Professionals.</h2>
                            <p className="text-brand-text-muted text-xl max-w-2xl mx-auto">Our coaches, therapists, and practitioners are aggressively vetted and selected from the top 1% of their respective domains.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                            {[
                                { name: "Marcus Thorne", role: "Head Performance Coach" },
                                { name: "Dr. Elena Rostova", role: "Lead Physiotherapist" },
                                { name: "Sarah Jenkins", role: "Master Yoga Instructor" },
                                { name: "David Chen", role: "Director of Dance" }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                    transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                    className="group"
                                >
                                    <TiltWrapper intensity={8} scaleOnHover={1.03}>
                                        <div className="aspect-[3/4] rounded-[2rem] relative overflow-hidden mb-6 bg-brand-bg shadow-lg border border-brand-text/5 cursor-pointer">
                                            <div className="absolute inset-0 bg-brand-bg-alt flex items-center justify-center">
                                                <span className="text-brand-text/20 uppercase tracking-widest text-sm font-bold rotate-[-90deg]">Portrait</span>
                                            </div>

                                            {/* Hover Profile Reveal Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-red-dark/90 via-brand-red-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                                                <div className="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-red-dark transition-colors">
                                                        <FaInstagram className="text-lg" />
                                                    </a>
                                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-red-dark transition-colors">
                                                        <FaLinkedinIn className="text-lg" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltWrapper>
                                    <div className="text-center md:text-left pl-2">
                                        <h4 className="text-xl font-extrabold text-brand-text group-hover:text-brand-red-light transition-colors duration-300">{member.name}</h4>
                                        <p className="text-brand-text-muted text-sm font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Stunning CTA */}
                <section className="py-24 md:py-32 relative overflow-hidden bg-brand-bg">
                    {/* Immersive Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,0,0,0.08),transparent_70%)] pointer-events-none z-0"></div>

                    <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
                        <TiltWrapper intensity={5} scaleOnHover={1.02}>
                            <div className="w-full max-w-5xl bg-brand-bg-alt border border-brand-text/10 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-dark/5 to-transparent z-0"></div>

                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">Become the 1%. <br className="hidden md:block" />Join The YOGANESH Community.</h2>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center px-10 py-5 rounded-[2rem] bg-brand-red-dark text-white font-extrabold text-lg hover:bg-brand-red-light hover:shadow-[0_20px_40px_rgba(192,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group/btn"
                                    >
                                        Start Exploring Today
                                        <FaArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </TiltWrapper>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About
