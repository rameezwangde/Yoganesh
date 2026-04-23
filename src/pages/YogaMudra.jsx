import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

// Components
import YogaHero from '../components/yoga/YogaHero'
import YogaAbout from '../components/yoga/YogaAbout'
import YogaBenefits from '../components/yoga/YogaBenefits'
import YogaServices from '../components/yoga/YogaServices'
import YogaTimetable from '../components/yoga/YogaTimetable'
import YogaFAQ from '../components/yoga/YogaFAQ'
import YogaTestimonials from '../components/yoga/YogaTestimonials'
import YogaCTA from '../components/yoga/YogaCTA'
import YogaContact from '../components/yoga/YogaContact'

const YogaMudra = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <Helmet>
                <title>Yoga Mudra Fitness Classes | YOGANESH</title>
                <meta name="description" content="Welcome to Yoga Mudra Fitness Classes - 365 Days Yoga under Yoganesh." />
            </Helmet>

            <main className="bg-brand-bg text-brand-text min-h-screen">
                {/* Secondary Division Navbar */}
                <nav className="sticky top-6 z-50 px-4 pointer-events-none">
                    <div className="container mx-auto max-w-4xl pointer-events-auto">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-2 md:px-6 py-2 flex items-center justify-between"
                        >
                            <Link to="/divisions" className="flex items-center group text-brand-text-muted hover:text-brand-primary transition-all font-bold text-xs tracking-widest uppercase mr-4">
                                <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-text/5 flex items-center justify-center mr-2 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all shadow-sm">
                                    <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                </div>
                                <span className="hidden sm:inline">Back</span>
                            </Link>

                            <ul className="hidden lg:flex items-center bg-brand-bg-alt/30 rounded-full p-1 border border-brand-text/5">
                                {navItems.map((item) => (
                                    <li key={item.id} className="relative">
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`relative z-10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${activeSection === item.id ? 'text-white' : 'text-brand-text/50 hover:text-brand-text'
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="pill-active-yoga"
                                                className="absolute inset-0 bg-brand-primary rounded-full z-0 shadow-[0_5px_15px_rgba(22,163,74,0.2)]"
                                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-text text-xl focus:outline-none rounded-full bg-brand-bg-alt border border-brand-text/5"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                            </button>
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                                animate={{ height: 'auto', opacity: 1, scale: 1 }}
                                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                                className="lg:hidden absolute top-20 left-4 right-4 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-4"
                            >
                                <ul className="flex flex-col gap-2 shadow-inner">
                                    {navItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full text-center py-4 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all ${activeSection === item.id
                                                    ? 'bg-brand-primary text-white shadow-lg'
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

                <YogaHero />
                <YogaAbout />
                <YogaBenefits />
                <YogaServices />
                <YogaTimetable />
                <YogaFAQ />
                <YogaTestimonials />
                <YogaCTA scrollToSection={scrollToSection} />
                <YogaContact />
            </main>
        </>
    )
}

export default YogaMudra
