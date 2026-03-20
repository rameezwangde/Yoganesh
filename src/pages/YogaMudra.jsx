import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaYinYang, FaHeartbeat, FaSpa, FaClock, FaCheckCircle, FaStar, FaPlay } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'
import { HiMenu, HiX } from 'react-icons/hi'

const YogaMudra = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [activeFaq, setActiveFaq] = useState(0)
    const [activeTab, setActiveTab] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeTestimonialTab, setActiveTestimonialTab] = useState('written')

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About us' },
        { id: 'services', label: 'Our Services' },
        { id: 'faq', label: 'FAQ' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'contact', label: 'Contact us' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -60% 0px' }
        )

        navItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const yOffset = -120 
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <>
            <Helmet>
                <title>Yoga Mudra Fitness Classes | YOGANESH</title>
                <meta name="description" content="Welcome to Yoga Mudra Fitness Classes - 365 Days Yoga under Yoganesh." />
            </Helmet>

            <main className="bg-brand-bg text-brand-text min-h-screen">
                
                {/* Secondary Division Navbar - Cooler Floating Pill */}
                <nav className="sticky top-6 z-50 px-4 pointer-events-none">
                    <div className="container mx-auto max-w-4xl pointer-events-auto">
                        <motion.div 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-2 md:px-6 py-2 flex items-center justify-between"
                        >
                            {/* Improved Back Button */}
                            <Link to="/divisions" className="flex items-center group text-brand-text-muted hover:text-brand-red-light transition-all font-bold text-xs tracking-widest uppercase mr-4">
                                <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-text/5 flex items-center justify-center mr-2 group-hover:bg-brand-red-light/10 group-hover:border-brand-red-light/30 transition-all shadow-sm">
                                    <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                </div>
                                <span className="hidden sm:inline">Back</span>
                            </Link>

                            {/* Desktop Nav with Sliding Active Indicator */}
                            <ul className="hidden lg:flex items-center bg-brand-bg-alt/30 rounded-full p-1 border border-brand-text/5">
                                {navItems.map((item) => (
                                    <li key={item.id} className="relative">
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`relative z-10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                                                activeSection === item.id ? 'text-white' : 'text-brand-text/50 hover:text-brand-text'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                        {activeSection === item.id && (
                                            <motion.div 
                                                layoutId="pill-active-yoga"
                                                className="absolute inset-0 bg-brand-red-light rounded-full z-0 shadow-[0_5px_15px_rgba(192,0,0,0.2)]"
                                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-text text-xl focus:outline-none rounded-full bg-brand-bg-alt border border-brand-text/5"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                            </button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Dropdown - Also Glassmorphic */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                                animate={{ height: 'auto', opacity: 1, scale: 1 }}
                                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                                transformTemplate={({ scale }) => `scale(${scale})`}
                                className="lg:hidden absolute top-20 left-4 right-4 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-4"
                            >
                                <ul className="flex flex-col gap-2">
                                    {navItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => {
                                                    scrollToSection(item.id);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className={`w-full text-center py-4 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all ${
                                                    activeSection === item.id 
                                                        ? 'bg-brand-red-light text-white shadow-lg' 
                                                        : 'bg-brand-bg-alt/50 text-brand-text-muted'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* PREMIUM LIGHT THEME HERO SECTION */}
                <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-text/5 pt-20 pb-20 lg:pb-32">
                    {/* Immersive Background */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000&auto=format&fit=crop" 
                            alt="Yoga Mudra Premium Hero" 
                            className="absolute inset-0 w-full h-full object-cover scale-105" 
                        />
                        {/* High-end editorial overlay: fades to solid brand color on the left/top, transparent on right/bottom */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-brand-bg/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-transparent to-brand-bg"></div>
                        
                        {/* Subtle theme glows */}
                        <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-brand-red-light/10 rounded-full blur-[100px] -translate-y-1/2"></div>
                        <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] bg-brand-text/5 rounded-full blur-[120px] -translate-x-1/4"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:col-span-7 xl:col-span-6 pt-10"
                        >
                            <div className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full bg-white/60 border border-brand-red-light/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                                <span className="text-brand-text font-bold text-xs tracking-[0.2em] uppercase">
                                    Welcome To
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black mb-8 leading-[1.05] tracking-tight text-brand-text">
                                Yoganesh
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">
                                    Fitness Classes
                                </span>
                            </h1>

                            <p className="text-brand-text-muted text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                                Transform your mind, body, and soul with our expert-led sessions. Join our holistic community and discover the power of wellness every single day.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-brand-red-light to-brand-red-dark text-white font-bold rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)] transition-all duration-300">
                                    Start Your Journey
                                </button>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-brand-red-light/10 group-hover:scale-110 transition-transform">
                                        <FaLeaf className="text-brand-red-light text-xl" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-brand-text font-black tracking-wide">365 Days Yoga</span>
                                        <span className="text-brand-text-muted text-xs font-medium uppercase tracking-widest">Consistency is Key</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end relative">
                            {/* Premium Editorial Image Card (Optional visual element to compliment the background) */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                                className="relative w-full max-w-md"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red-light to-brand-red-dark rounded-[2.5rem] rotate-3 opacity-20 blur-xl"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] group">
                                    <div className="absolute inset-0 bg-brand-text/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                                        alt="Yoga Masterclass" 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <h3 className="text-brand-text font-black text-lg">Expert Guidance</h3>
                                        <p className="text-brand-text-muted text-sm font-medium mt-1">Personalized attention for every pose.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* NEW ABOUT US SECTION */}
                <section id="about" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-text/5">
                    {/* Ambient glowing background */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-0 right-1/3 w-[40rem] h-[40rem] bg-brand-red-dark/10 rounded-full blur-[150px]"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-brand-red-light/5 rounded-full blur-[120px]"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* TOP ROW: Title & Text */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Introduction</span>
                                <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-6">
                                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Us</span>
                                </h2>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] w-12 bg-brand-red-light"></div>
                                    <FaLeaf className="text-brand-red-light text-xl" />
                                    <div className="h-[1px] w-12 bg-brand-red-light"></div>
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 text-brand-text-muted text-lg leading-relaxed font-medium"
                            >
                                <p>
                                    YogaMudraFitnessClasses offers a transformative experience through the ancient practice of yoga, enhancing both physical and mental well-being. Yoga improves flexibility, builds strength, and enhances posture. Regular practice reduces stress, boosts immunity, and improves breathing. It sharpens focus and promotes mindfulness, contributing to emotional balance and inner peace.
                                </p>
                                <p>
                                    Joining YogaMudraFitnessClasses means embracing a healthier lifestyle with expert guidance in a supportive community. You'll enjoy increased energy, better sleep, and a toned body. Yoga aids digestion, lowers blood pressure, and supports heart health. It fosters discipline, self-awareness, and resilience. Discover serenity and strength through every breath and pose.
                                </p>
                            </motion.div>
                        </div>

                        {/* MIDDLE ROW: Stats & Discover */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
                            {/* Stats Grid */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4 md:gap-6"
                            >
                                {[
                                    { number: "3+", text: "Skilled Trainer" },
                                    { number: "255+", text: "Happy Clients" },
                                    { number: "365", text: "Days Classes" },
                                    { number: "17", text: "Award Achieve" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-brand-bg-alt border border-brand-text/5 rounded-[2rem] p-6 md:p-8 text-center hover:border-brand-red-light/30 hover:shadow-[0_10px_30px_rgba(192,0,0,0.1)] transition-all duration-300">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark mb-2">{stat.number}</div>
                                        <div className="text-brand-text-muted font-bold tracking-wide uppercase text-xs md:text-sm">{stat.text}</div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Discover Text */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:pl-12"
                            >
                                <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Fun Fact</span>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                                    Discover New <br /> Way Of <span className="text-brand-red-light">Yoga!</span>
                                </h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <FaLeaf className="text-brand-red-light text-xl" />
                                </div>
                                <p className="text-brand-text-muted text-xl leading-relaxed font-medium mb-10">
                                    YogaMudraFitnessClasses blends ancient yoga with modern fitness, creating harmony, strength, and inner peace daily.
                                </p>
                                <button className="px-10 py-4 bg-gradient-to-r from-brand-red-light to-brand-red-dark text-white font-extrabold rounded-full hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 tracking-wider">
                                    GET STARTED
                                </button>
                            </motion.div>
                        </div>

                        {/* BOTTOM ROW: Video & Inner Peace Text */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-brand-bg-alt border border-brand-text/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            {/* Fancy Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-dark/10 rounded-full blur-[80px] group-hover:bg-brand-red-dark/20 transition-all duration-700 pointer-events-none"></div>

                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                                    Inner Peace To Your <br/> Body And Mind
                                </h3>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] w-8 bg-brand-red-light"></div>
                                    <FaLeaf className="text-brand-red-light text-xl" />
                                    <div className="h-[1px] w-8 bg-brand-red-light"></div>
                                </div>
                                <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] bg-black shadow-2xl border border-brand-text/10 group-hover:shadow-[0_20px_40px_rgba(192,0,0,0.15)] transition-all">
                                    <video 
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        controls 
                                        preload="metadata" 
                                        controlsList="nodownload"
                                    >
                                        <source src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Yoganesh-Health-Institute-02.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 text-brand-text-muted text-lg leading-relaxed font-medium relative z-10 lg:pl-8"
                            >
                                <p>
                                    Yoga Mudra Fitness Classes is dedicated to promoting health, wellness, and inner peace through expert-led yoga sessions. Our classes cater to all levels, helping you achieve balance, flexibility, and strength.
                                </p>
                                <p>
                                    Join our community to experience personalized guidance, mindful practices, and holistic well-being. Whether you're a beginner or an advanced yogi, our sessions nurture your body, mind, and soul for a healthier lifestyle.
                                </p>
                                <TiltWrapper intensity={15} scaleOnHover={1.05}>
                                    <img 
                                        src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/round-e1750972067386-1024x504.jpg" 
                                        alt="Yoga Mudra Focus" 
                                        className="w-full h-48 object-cover rounded-2xl mt-8 border border-brand-text/5 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </TiltWrapper>
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* YOGA BENEFITS SECTION */}
                <section id="benefits" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
                    {/* Premium Ambient Background */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-red-dark/5 rounded-full blur-[150px]"></div>
                        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-brand-red-light/5 rounded-full blur-[150px]"></div>
                        {/* Elegant glowing line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red-dark/20 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-24 flex flex-col items-center">
                            <motion.span 
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-brand-red-light font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 px-6 py-2 border border-brand-red-dark/20 rounded-full bg-brand-red-dark/5 backdrop-blur-sm shadow-[0_4px_20px_rgba(192,0,0,0.1)]"
                            >
                                Yoga Benefits
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text tracking-tight mb-8"
                            >
                                Yoga Life for Greater <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark drop-shadow-[0_4px_10px_rgba(59,130,246,0.3)]">Self Control</span>
                            </motion.h2>
                            {/* Decorative Line under title */}
                            <motion.div 
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "100px", opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-1 bg-gradient-to-r from-transparent via-brand-red-light to-transparent rounded-full"
                            ></motion.div>
                        </div>
                    </div>

                    {/* FULL-WIDTH INFINITE SCROLLING MARQUEE */}
                    <div className="relative w-full py-16 overflow-hidden z-10 group group-hover-pause" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <div className="flex w-max space-x-8 pr-8">
                            {[...Array(2)].map((_, arrayIndex) => (
                                <div 
                                    key={arrayIndex}
                                    className="flex shrink-0 space-x-8 animate-marquee"
                                >
                                    {[
                                        { 
                                            icon: FaLeaf, 
                                            title: "Reduce Stress", 
                                            desc: "Connect breath, movement, and peaceful energy.",
                                            color: "from-emerald-400 to-teal-500",
                                            hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]",
                                            iconColor: "text-emerald-500"
                                        },
                                        { 
                                            icon: FaYinYang, 
                                            title: "Balance Life", 
                                            desc: "Yoga helps balance life by reducing stress daily.",
                                            color: "from-blue-400 to-indigo-500",
                                            hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]",
                                            iconColor: "text-blue-500"
                                        },
                                        { 
                                            icon: FaHeartbeat, 
                                            title: "Body Exercise", 
                                            desc: "Daily yoga strengthens body, improves flexibility, and relaxes.",
                                            color: "from-brand-red-light to-orange-500",
                                            hoverShadow: "hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]",
                                            iconColor: "text-brand-red-light"
                                        },
                                        { 
                                            icon: FaSpa, 
                                            title: "Peace Meditations", 
                                            desc: "Peaceful meditation brings calmness to the mind.",
                                            color: "from-purple-400 to-fuchsia-500",
                                            hoverShadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]",
                                            iconColor: "text-purple-500"
                                        }
                                    ].map((item, index) => (
                                        <div 
                                            key={`${arrayIndex}-${index}`}
                                            className={`w-[320px] md:w-[380px] group relative p-10 rounded-[2.5rem] bg-white border border-brand-text/5 hover:border-transparent transition-all duration-500 hover:-translate-y-3 overflow-hidden text-center flex flex-col items-center shadow-lg ${item.hoverShadow}`}
                                        >
                                            {/* Top vibrant border highlight */}
                                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
                                            
                                            <div className={`relative w-24 h-24 mb-8 rounded-full bg-brand-bg-alt flex items-center justify-center border border-brand-text/5 transition-all mx-auto transform group-hover:-translate-y-2 duration-500`}>
                                                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inner`}></div>
                                                <item.icon className={`text-4xl ${item.iconColor} group-hover:text-white transition-colors duration-500 relative z-10`} />
                                            </div>

                                            <h3 className="text-2xl font-extrabold mb-4 text-brand-text relative z-10">
                                                {item.title}
                                            </h3>
                                            <p className="text-brand-text-muted leading-relaxed relative z-10 text-lg font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION: OUR SERVICES */}
                <section id="services" className="py-24 md:py-32 bg-brand-bg-alt relative overflow-hidden border-b border-brand-text/5">
                    {/* Background glows */}
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red-light/5 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-red-dark/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                            >
                                What We Offer
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight"
                            >
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Services</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-brand-text-muted text-lg relative"
                            >
                                We offer a wide range of holistic fitness, yoga, and wellness services designed for all levels. Experience transformation through mindfulness, movement, and community.
                            </motion.p>
                            <div className="flex justify-center mt-8">
                                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-red-light to-transparent"></div>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                            {[
                                { title: "Hath Yoga", desc: "Hatha Yoga balances mind and body through poses, breath control, and meditation.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" },
                                { title: "Restorative & Yin Yoga", desc: "Relaxing, gentle, deep stretching, mindfulness, healing, stress relief, slow-paced, meditative, rejuvenating, grounding.", img: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=600&auto=format&fit=crop" },
                                { title: "Iyengar Yoga", desc: "Iyengar Yoga focuses on alignment, precision, props, flexibility, and strength.", img: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600&auto=format&fit=crop" },
                                { title: "Flow or Vinyasa Yoga", desc: "Flow yoga, also known as Vinyasa, emphasizes movement, breath, flexibility, strength, balance, mindfulness, coordination, endurance, and relaxation.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop" },
                                { title: "Hot & Bikram Yoga", desc: "Flow, Hot, and Bikram Yoga enhance flexibility, strength, detoxification, and mindfulness.", img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop" },
                                { title: "Asthanga Yoga", desc: "Ashtanga Yoga is a dynamic, disciplined practice focusing on breath, movement, and mindfulness.", img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=600&auto=format&fit=crop" },
                                { title: "Power Yoga", desc: "Power yoga is a dynamic, fast-paced practice that builds strength, flexibility, endurance, and mindfulness while promoting overall fitness and stress relief.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
                                { title: "Shuddhikriya", desc: "Shuddhikriya Yoga involves cleansing techniques to detoxify and purify the body.", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop" },
                                { title: "Nutrition & Dietitian", desc: "Balance, wellness, mindful eating, nourishment, detox, vitality, holistic, healing, metabolism, harmony.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" },
                                { title: "Aerobic", desc: "Aerobic yoga combines movement, flexibility, energy, fun, rhythm, fitness, mindfulness, and balance.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" },
                                { title: "Aerial", desc: "Aerial yoga enhances flexibility, strength, balance, relaxation, and core stability.", img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=600&auto=format&fit=crop" },
                                { title: "ZUMBA", desc: "Zumba in yoga combines dance, movement, flexibility, energy, fun, rhythm, fitness, mindfulness, and balance.", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600&auto=format&fit=crop" }
                            ].map((service, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-text/5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(192,0,0,0.15)] transition-all duration-500 flex flex-col"
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                        <img 
                                            src={service.img} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <FaLeaf className="text-brand-red-light" />
                                        </div>
                                        <div className="absolute bottom-6 left-6 z-20 pr-6">
                                            <h3 className="text-2xl font-black text-white leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col justify-between">
                                        <p className="text-brand-text-muted leading-relaxed font-medium mb-6">
                                            {service.desc}
                                        </p>
                                        <div className="flex items-center text-brand-red-light font-bold text-sm uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                                            <span className="mr-2">Explore</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* TIMETABLE SECTION */}
                        <div className="mt-32 relative z-10">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <motion.span 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                                >
                                    Time Table
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight"
                                >
                                    Time Table <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">As Follow</span>
                                </motion.h2>
                                <div className="flex justify-center mb-8">
                                    <div className="h-[1px] w-12 bg-gradient-to-l from-brand-red-light to-transparent"></div>
                                    <FaLeaf className="text-brand-red-light text-xl mx-4" />
                                    <div className="h-[1px] w-12 bg-gradient-to-r from-brand-red-light to-transparent"></div>
                                </div>
                            </div>

                            {/* Timetable Container */}
                            <div className="max-w-6xl mx-auto space-y-6">
                                
                                {/* Monday To Saturday */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group"
                                >
                                    <div className="md:w-1/4 bg-gradient-to-br from-brand-red-light to-brand-red-dark p-8 flex items-center justify-center text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] transform translate-x-1/2 -translate-y-1/2"></div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 leading-tight">
                                            Monday<br/><span className="text-sm font-medium tracking-widest uppercase opacity-80 mt-2 block">To</span>Saturday
                                        </h3>
                                    </div>
                                    <div className="md:w-3/4 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-3 gap-4 bg-brand-bg-alt">
                                        {[
                                            ["04:00 AM - 05:00 AM", "05:00 AM - 06:00 AM"],
                                            ["06:00 AM - 07:00 AM", "07:00 AM - 08:00 AM"],
                                            ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM"],
                                            ["04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM"],
                                            ["06:00 PM - 07:00 PM", "07:30 PM - 08:30 PM"],
                                            ["08:30 PM - 09:30 PM", "09:30 PM - 10:30 PM"]
                                        ].map((block, idx) => (
                                            <div key={idx} className="bg-white rounded-2xl p-5 border border-brand-text/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/card">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-red-light to-brand-red-dark opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                                <div className="flex flex-col space-y-3">
                                                    {block.map((time, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red-light/50 group-hover/card:bg-brand-red-light transition-colors"></div>
                                                            <span className="text-brand-text font-bold text-[13px] sm:text-sm">{time}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* SUNDAY */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group"
                                >
                                    <div className="md:w-1/4 bg-gradient-to-br from-brand-red-light/80 to-brand-red-dark/80 p-8 flex items-center justify-center text-center relative overflow-hidden">
                                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 tracking-wider">
                                            SUNDAY
                                        </h3>
                                    </div>
                                    <div className="md:w-3/4 p-6 md:p-8 flex flex-wrap gap-4 bg-brand-bg-alt items-center">
                                        {[
                                            "04:00 AM - 05:00 AM",
                                            "05:00 AM - 06:00 AM",
                                            "06:00 AM - 07:00 AM",
                                            "07:00 AM - 08:00 AM",
                                            "08:00 AM - 09:00 AM"
                                        ].map((time, idx) => (
                                            <div key={idx} className="bg-white rounded-xl px-5 py-3 border border-brand-text/5 shadow-sm hover:border-brand-red-light/50 hover:shadow-md transition-all flex items-center gap-2">
                                                <span className="text-brand-text font-bold text-[13px] sm:text-sm whitespace-nowrap">{time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* ZUMBA */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group shadow-brand-red-light/5"
                                >
                                    <div className="md:w-1/4 bg-brand-red-light p-8 flex items-center justify-center text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 tracking-widest">
                                            ZUMBA
                                        </h3>
                                    </div>
                                    <div className="md:w-3/4 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-brand-bg-alt items-center">
                                        {[
                                            { day: "Tuesday", time: "07:00 PM - 08:00 PM" },
                                            { day: "Thursday", time: "07:00 PM - 08:00 PM" },
                                            { day: "Saturday", time: "07:00 PM - 08:00 PM" }
                                        ].map((slot, idx) => (
                                            <div key={idx} className="bg-white rounded-2xl p-5 border border-brand-text/5 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
                                                <div className="text-brand-red-light font-black uppercase text-[11px] sm:text-xs tracking-[0.2em] mb-2">{slot.day}</div>
                                                <div className="text-brand-text font-bold text-[13px] sm:text-sm">{slot.time}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: ABOUT & FAQ */}
                <section id="faq" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
                    {/* Background accoutrements */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-text/10 to-transparent"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red-dark/5 rounded-full blur-[100px] pointer-events-none"></div>
                    
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
                                    <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Knowledge Base</span>
                                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                                        Frequently Asked <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Questions</span>
                                    </h2>
                                    <p className="text-brand-text-muted text-lg">Everything you need to know before starting your journey with us.</p>
                                </motion.div>

                                <div className="space-y-4">
                                    {[
                                        { q: "What types of yoga classes are offered at Yoga Mudra Fitness Classes?", a: "We offer a variety of classes including Hatha Yoga, Vinyasa Flow, Power Yoga, and Meditation sessions. Each class is designed to suit different fitness levels—from beginners to advanced practitioners." },
                                        { q: "Do I need prior experience or special equipment to join?", a: "No prior experience is needed! Our classes are beginner-friendly, and instructors guide you through every step. Just bring a yoga mat, water bottle, and wear comfortable clothing." },
                                        { q: "How can I register and what are the class timings?", a: "You can register online through our website or visit our studio in person. We offer flexible morning and evening classes throughout the week to accommodate your schedule." }
                                    ].map((faq, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'bg-white border-brand-red-light/30 shadow-[0_10px_30px_rgba(192,0,0,0.05)]' : 'bg-brand-bg-alt border-brand-text/5 hover:border-brand-text/10'}`}
                                        >
                                            <button 
                                                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                            >
                                                <span className={`font-bold pr-4 transition-colors ${activeFaq === index ? 'text-brand-red-light' : 'text-brand-text'}`}>{faq.q}</span>
                                                <span className={`text-2xl transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${activeFaq === index ? 'rotate-45 text-brand-red-light' : 'text-brand-text/50'}`}>+</span>
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
                                        {["Yoga Mudra Classes", "365 Days Yoga", "YOGANESH Instructor"].map((tab, idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => setActiveTab(idx)}
                                                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 overflow-hidden ${activeTab === idx ? 'text-white shadow-[0_10px_20px_rgba(192,0,0,0.2)] scale-105' : 'bg-brand-bg-alt text-brand-text/60 hover:bg-brand-bg hover:text-brand-text hover:shadow-md'}`}
                                            >
                                                {activeTab === idx && (
                                                    <motion.div 
                                                        layoutId="activeTabBadge" 
                                                        className="absolute inset-0 bg-gradient-to-r from-brand-red-light to-brand-red-dark" 
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
                                        <div className="absolute inset-0 bg-brand-red-dark/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                        <img 
                                            src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/new11-e1750943845290.jpg" 
                                            alt="Yoga Mudra Class" 
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                        />
                                        
                                        {/* Floating Badge */}
                                        <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl hidden sm:block border border-white/20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <span className="block text-[10px] font-extrabold text-brand-text/50 uppercase tracking-[0.2em] mb-1">Established</span>
                                            <span className="block text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">365 Days</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="mt-10 relative">
                                        <h3 className="text-2xl font-extrabold text-brand-text mb-6 flex items-center gap-4">
                                            <span className="w-8 h-1 bg-gradient-to-r from-brand-red-light to-brand-red-dark rounded-full"></span>
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

                {/* SECTION: VIDEO TESTIMONIALS */}
                <section id="testimonials" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
                    {/* Premium Background Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red-light/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                            >
                                Community Voices
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6"
                            >
                                Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Students</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-brand-text-muted text-lg"
                            >
                                Discover how Yoga Mudra Fitness Classes have transformed lives. Real experiences from our dedicated practitioners.
                            </motion.p>
                        </div>

                        <div className="flex justify-center mb-12">
                            <div className="bg-brand-bg-alt p-1.5 rounded-full border border-brand-text/5 flex shadow-lg">
                                <button 
                                    onClick={() => setActiveTestimonialTab('written')}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTestimonialTab === 'written' ? 'bg-gradient-to-r from-brand-red-light to-brand-red-dark text-white shadow-[0_5px_15px_rgba(192,0,0,0.3)]' : 'text-brand-text-muted hover:text-brand-text'}`}
                                >
                                    Written Reviews
                                </button>
                                <button 
                                    onClick={() => setActiveTestimonialTab('video')}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTestimonialTab === 'video' ? 'bg-gradient-to-r from-brand-red-light to-brand-red-dark text-white shadow-[0_5px_15px_rgba(192,0,0,0.3)]' : 'text-brand-text-muted hover:text-brand-text'}`}
                                >
                                    Video Testimonials
                                </button>
                            </div>
                        </div>

                        {/* Video Content */}
                        {activeTestimonialTab === 'video' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
                            >
                                {[
                                    { name: "Dr. Minakshi Pawar", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/02-Dr.-Minakshi-Pawar.mp4" },
                                    { name: "Soma Talukdar", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Soma-Talukdar-bytes.mp4" },
                                    { name: "Mayuri Umale", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Mayuri-Umale-1.mp4" }
                                ].map((video, idx) => (
                                    <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                                    className="group relative"
                                >
                                    {/* Glassmorphic Shadow Frame */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-red-light/20 to-transparent rounded-[2rem] transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 opacity-50 blur-xl"></div>
                                    
                                    <div className="relative bg-white p-3 rounded-[2rem] shadow-xl border border-brand-text/5 overflow-hidden group-hover:shadow-[0_20px_40px_rgba(192,0,0,0.1)] transition-all duration-500">
                                        
                                        {/* Video Container */}
                                        <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black mb-4">
                                            <video 
                                                className="w-full h-full object-contain"
                                                controls 
                                                preload="metadata" 
                                                controlsList="nodownload"
                                            >
                                                <source src={video.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        {/* Reviewer Info */}
                                        <div className="px-3 pb-2 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-red-light to-brand-red-dark flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
                                                {video.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-text leading-tight">{video.name}</p>
                                                <div className="flex text-yellow-500 mt-1 space-x-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        )}

                        {/* Written Content */}
                        {activeTestimonialTab === 'written' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                            >
                                {[
                                    "I have been attending yoga sessions for the past 4 months and it has been an amazing experience! Ganesh Sir is truly passionate about guiding students on their yoga journey. He always guides us on correct postures and breathing techniques and gives personalised attention to improve our flexibility and strength. His patience, positive energy, and friendly approach make every session enjoyable. The class environment is clean, peaceful, and perfect for relaxation and self-improvement. I have noticed significant improvements in my fitness, stress levels, and overall well-being since joining. I highly recommend Yoga Mudra Fitness Centre to anyone looking for a yoga class in Ulwe.",
                                    "Mr.Ganesh is a fantastic teacher, and also a genuinely lovely person (which I feel is important when you're listening to someone talk). His directions are clear and precise so you're not looking up to check you're doing the right thing, and he's very observant, constantly checking you're positioning. These classes are truly for all levels, and although you've worked hard you'll somehow come out relaxed. The classes are stand alone, but if you attend regularly it is more of a course moving though different focuses which I love, adding new techniques every week to get more from each pose as you progress, as well as exploring new ones. Teachers at Yoga Mudra Fitness Classes are excellent and have a vast knowledge in the field of yoga. Their classes are energising and fun. I also really like the meditation at the end, it leaves me feeling very relaxed and centered. They let me know how far to go in a pose keeping in mind my weaknesses, which is really helpful. They also pay individual attention to people in the class and help me re-position to get that extra boost from a pose. Highly recommended!",
                                    "I had a great experience at YOGA MUDRA with Teacher Ganesh sir, The studio has a calming atmosphere, and Ganesh sir teaching is clear, supportive, and attentive to each student's needs. The class was well-balanced, offering a mix of asanas, breathing exercises, and meditation. I left feeling both relaxed and energized. Highly recommend it for anyone looking to enhance their yoga practice.....",
                                    "The best yoga and fitness classes at one place.They have yoga, CrossFit workouts, zumba,and many other fitness exercises which will keep you active and interested in doing more every time.They have flexibility in batches,so u don't miss out.Sir and ma'am both are highly motivated and inspire us.",
                                    "Best class to go ahead, 365 days sessions r there, to experience the change in urself. Offline class with any comfortable time of ur choice to shape ur body n fitness. Ganesh Sir always motivating n shaping our goal to remain healthy. Along with my Yoga teacher training course, was there in this class, it adds more flexibility to my body. Now I am a yoga teacher n Yoga therapist taking online classes n personal training. Very good experience I had with Yog mudra which added more knowledge to my experience n yogic training. Thank You 🤩🙏",
                                    "I have been attending Yoga Mudra Fitness Classes for a few months now, and the experience has been truly transformative. The sessions are well-structured, incorporating stretching, breathwork, meditation, and asanas that helps to improve flexibility and strength. A great place for anyone looking to deepen their yoga practice!\" KUDOS to GANESH SIR......"
                                ].map((review, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="bg-brand-bg-alt border border-brand-text/5 p-8 md:p-10 rounded-[2rem] shadow-lg hover:border-brand-red-light/30 hover:shadow-[0_15px_30px_rgba(192,0,0,0.1)] transition-all duration-300 relative group"
                                    >
                                        <div className="absolute top-6 right-8 text-6xl text-brand-red-dark/10 font-serif leading-none group-hover:text-brand-red-light/20 transition-colors duration-300">"</div>
                                        <div className="flex text-brand-red-light mb-6 space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current drop-shadow-md" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="text-brand-text-muted leading-relaxed font-medium relative z-10 text-[15px]">
                                            {review}
                                        </p>
                                        <div className="mt-8 pt-6 border-t border-brand-text/5 flex items-center gap-4 relative z-10">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-bg to-brand-bg-alt border border-brand-red-light/20 flex items-center justify-center text-brand-text font-bold shadow-inner flex-shrink-0">
                                                S
                                            </div>
                                            <div>
                                                <h4 className="text-brand-text font-bold text-sm">Student</h4>
                                                <p className="text-brand-text-muted text-xs uppercase tracking-widest mt-0.5">Yoga Mudra</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* PARALLAX CTA BANNER */}
                <section className="relative py-32 md:py-48 mt-12 mb-12 overflow-hidden group">
                    {/* Fixed Background Image for Parallax Effect */}
                    <div className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}></div>
                    
                    {/* Dark/Gradient Overlays to ensure text readability */}
                    <div className="absolute inset-0 bg-brand-text/60 mix-blend-multiply transition-colors duration-700 group-hover:bg-brand-text/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark/40 to-brand-red-light/40 opacity-60 mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.3em] font-bold uppercase mb-6 shadow-xl">
                                Your Time Is Now
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Mind & Body</span> Today
                            </h2>
                            <p className="text-white/90 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                                Take the first step towards a healthier, happier you. Join our expert-led sessions and feel the difference from day one.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-white text-brand-text hover:text-brand-red-dark font-black rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-sm md:text-base uppercase tracking-wider relative overflow-hidden group/btn">
                                    <span className="relative z-10">Book a Free Trial</span>
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-bg-alt to-white opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                </button>
                                <button onClick={() => scrollToSection('services')} className="px-10 py-4 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-bold rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider hover:-translate-y-1">
                                    Explore Classes
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION: CONTACT US */}
                <section id="contact" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red-dark/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Top Area: Image & Contact Cards */}
                        <div className="mb-24 px-0 md:px-8">
                            {/* Group Image Wrapper */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <TiltWrapper intensity={20} scaleOnHover={1.03} className="relative w-full h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group block">
                                    <div className="absolute inset-0 bg-brand-red-dark/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                    <img 
                                        src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/group-e1750968404152.jpg" 
                                        alt="Yoga Mudra Focus Group" 
                                        className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out"
                                    />
                                </TiltWrapper>
                            </motion.div>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mt-20 md:-mt-32 relative z-20 px-4 md:px-12 mx-auto max-w-6xl">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        ),
                                        title: "Location Address",
                                        desc: "901, 902 NMS ICON Building, Opp Bamandongari Railway station, Ulwe, Navi Mumbai"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        ),
                                        title: "Phone Number",
                                        desc: "Mob : +91 8422923924"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        ),
                                        title: "Email Address",
                                        desc: "yogamudrafitnessclasses@gmail.com"
                                    }
                                ].map((card, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="bg-white p-8 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-brand-text/5 text-center group hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        <div className="w-16 h-16 mx-auto bg-brand-bg rounded-full flex items-center justify-center mb-6 text-brand-red-light group-hover:scale-110 group-hover:bg-brand-red-light/10 group-hover:shadow-[0_0_20px_rgba(192,0,0,0.1)] transition-all duration-300">
                                            {card.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-text mb-4 transition-colors group-hover:text-brand-red-light">{card.title}</h4>
                                        <p className="text-brand-text-muted font-medium leading-relaxed max-w-[250px] mx-auto text-[15px]">
                                            {card.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Area: Form & Map Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto px-0 md:px-8">
                            {/* Left Text & Map */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-8 leading-tight">
                                    Feel Free To Contact <br /> And Reach Us !
                                </h2>
                                
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="mt-1 text-brand-red-light">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                    </div>
                                    <p className="text-brand-text-muted text-lg leading-relaxed font-medium">
                                        Feel free to connect and reach us at YogaMudraFitnessClasses for expert guidance on yoga, meditation, wellness tips, and personalized fitness plans tailored to your needs.
                                    </p>
                                </div>

                                {/* Gorgeous Filtered Map Frame */}
                                <div className="relative w-full h-80 rounded-[2rem] overflow-hidden shadow-xl border border-brand-text/5 group">
                                    {/* Cinematic Overlay - Fades on hover to let map be fully visible */}
                                    <div className="absolute inset-0 bg-brand-red-dark/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10 mix-blend-color"></div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-brand-text/5 rounded-[2rem] z-20 pointer-events-none"></div>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693190868846!2d73.02325011119523!3d18.968080282121045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ba8109ed8d%3A0x6b29ebd836d5b038!2sNMS%20ICON!5e0!3m2!1sen!2sin!4v1710849202157!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Yoga Mudra Location Map"
                                    ></iframe>
                                </div>
                            </motion.div>

                            {/* Right Form */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-brand-text/5"
                            >
                                <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-10 text-center lg:text-left">Contact Us</h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="group">
                                        <input 
                                            type="text" 
                                            placeholder="Your Name.." 
                                            className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 font-medium"
                                        />
                                    </div>
                                    <div className="group">
                                        <input 
                                            type="email" 
                                            placeholder="Your Email.." 
                                            className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 font-medium"
                                        />
                                    </div>
                                    <div className="group">
                                        <textarea 
                                            placeholder="Enter Your Message.." 
                                            rows="5"
                                            className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 resize-none font-medium"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full py-4 bg-gradient-to-r from-brand-red-light to-brand-red-dark text-white font-extrabold rounded-full hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 tracking-wider text-sm mt-4"
                                    >
                                        SUBMIT MESSAGE
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default YogaMudra
