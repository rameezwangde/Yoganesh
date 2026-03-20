import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

import divHealthImg from '../assets/images/div_health.png'
import divYogaImg from '../assets/images/div_yoga.png'
import divFitnessImg from '../assets/images/div_fitness.png'
import divWellnessImg from '../assets/images/div_wellness.png'
import divDanceImg from '../assets/images/div_dance.png'
import divMusicImg from '../assets/images/div_music.png'

const divisionData = {
    'health-institute': {
        title: 'Health Institute',
        img: divHealthImg,
        tagline: 'Heal, Learn, Prevent.',
        overview: 'Our Health Institute operates at the intersection of medical science and human performance. We provide comprehensive assessments, preventative care, and guided rehabilitation to ensure your body functions optimally.',
        programs: [
            { name: 'Biomechanical Analysis', time: 'By Appointment', desc: 'Comprehensive movement screening.' },
            { name: 'Physiotherapy', time: 'Mon-Sat', desc: 'Injury recovery and prevention protocols.' },
            { name: 'Nutritional Counseling', time: 'Wed & Fri', desc: 'Metabolic evaluation and diet structuring.' }
        ],
        benefits: ['Medical-grade diagnostics', 'Pain-free movement', 'Custom rehabilitation plans', 'Integrated wellness approach'],
        who: 'Individuals recovering from injuries, athletes seeking optimization, and anyone looking to proactively manage their physical health.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Services' },
            { id: 'benefits', label: 'Why Choose Us' },
            { id: 'enquiry', label: 'Book Consultation' }
        ]
    },
    'yoga-classes': {
        title: 'Yoga Classes',
        img: divYogaImg,
        tagline: 'Breathe, Balance, Become.',
        overview: 'Experience the perfect synthesis of ancient wisdom and modern biomechanics. Our yoga practice is designed to build deep core strength, extraordinary flexibility, and profound mental clarity.',
        programs: [
            { name: 'Vinyasa Flow', time: 'Mon, Wed, Fri - 7:00 AM', desc: 'Dynamic, breath-synchronized movement.' },
            { name: 'Restorative Yin', time: 'Tue, Thu - 6:30 PM', desc: 'Deep tissue stretching and mental calm.' },
            { name: 'Power Yoga', time: 'Sat - 9:00 AM', desc: 'Strength-focused advancing postures.' }
        ],
        benefits: ['Increased mobility', 'Stress reduction', 'Enhanced proprioception', 'Better sleep patterns'],
        who: 'All levels from absolute beginners seeking flexibility to advanced practitioners deepening their practice.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Programs' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'enquiry', label: 'Enquire' }
        ]
    },
    'fitness-classes': {
        title: 'Fitness Classes',
        img: divFitnessImg,
        tagline: 'Train With Intelligent Intensity.',
        overview: 'Step away from random workouts. Our fitness classes emphasize structured progression, elite strength training, and safe metabolic conditioning to architect a stronger, leaner physique.',
        programs: [
            { name: 'Strength & Conditioning', time: 'Daily - 6AM / 6PM', desc: 'Barbell fundamentals and hypertrophy.' },
            { name: 'HIIT Protocol', time: 'Tue, Thu - 7AM / 7PM', desc: 'High-intensity metabolic circuits.' },
            { name: 'Functional Core', time: 'Wed, Sat - 8AM', desc: 'Trunk stability and dynamic power.' }
        ],
        benefits: ['Measurable strength gains', 'Fat loss & muscle growth', 'Improved cardiovascular health', 'Form optimization'],
        who: 'Anyone looking to build muscle, lose body fat, and improve their general physical preparedness under expert guidance.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Programs' },
            { id: 'benefits', label: 'Transformations' },
            { id: 'enquiry', label: 'Join Now' }
        ]
    },
    'wellness-center': {
        title: 'Wellness Center',
        img: divWellnessImg,
        tagline: 'Recover, Reset, Renew.',
        overview: 'True progress happens during recovery. The Wellness Center provides premium restoration tools designed to downshift your nervous system and accelerate muscular repair.',
        programs: [
            { name: 'Infrared Sauna', time: 'Open Access', desc: 'Deep cellular detoxification.' },
            { name: 'Cold Plunge Therapy', time: 'Open Access', desc: 'Inflammation reduction & CNS reset.' },
            { name: 'Guided Meditation', time: 'Sun - 10:00 AM', desc: 'Mental recalibration.' }
        ],
        benefits: ['Faster workout recovery', 'Reduced inflammation', 'Mental clarity', 'Immune system support'],
        who: 'Athletes, busy professionals, and those seeking relief from high-stress lifestyles.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Treatments' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'enquiry', label: 'Book Session' }
        ]
    },
    'dance-classes': {
        title: 'Dance Classes',
        img: divDanceImg,
        tagline: 'Move With Freedom.',
        overview: 'Express yourself through the joy of kinetic movement. Our dance classes combine diverse choreographic styles to improve cardiovascular endurance, coordination, and rhythm in an electrifying environment.',
        programs: [
            { name: 'Contemporary Flow', time: 'Tue, Thu - 5:30 PM', desc: 'Fluid, interpretive movement.' },
            { name: 'Urban / Hip-Hop', time: 'Wed, Fri - 7:30 PM', desc: 'High-energy rhythmic choreography.' },
            { name: 'Latin Fusion', time: 'Mon - 6:30 PM', desc: 'Salsa, Reggaeton, and Bachata basics.' }
        ],
        benefits: ['Cardiovascular health', 'Enhanced coordination', 'Creative expression', 'High calorie burn'],
        who: 'Those who prefer a dynamic, community-driven, and musical approach to fitness rather than traditional gym settings.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Styles' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'enquiry', label: 'Enquire' }
        ]
    },
    'music-classes': {
        title: 'Music Classes',
        img: divMusicImg,
        tagline: 'Find Your Inner Rhythm.',
        overview: 'We believe wellness extends to cognitive and creative stimulation. Our music classes provide a structured environment to learn, create, and appreciate music as a form of active emotional regulation.',
        programs: [
            { name: 'Acoustic Guitar', time: 'Mon, Wed - 4:00 PM', desc: 'Fundamentals of chords and rhythm.' },
            { name: 'Vocal Training', time: 'Tue, Thu - 5:00 PM', desc: 'Breath control and pitch.' },
            { name: 'Percussion Workshop', time: 'Sat - 11:00 AM', desc: 'Developing internal timing.' }
        ],
        benefits: ['Cognitive enhancement', 'Emotional outlet', 'Fine motor skill development', 'Focus and discipline'],
        who: 'Children and adults looking to enrich their minds and develop a lifelong creative skill.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Instruments' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'enquiry', label: 'Enquire' }
        ]
    }
}

const DivisionTemplate = () => {
    const { divisionId } = useParams()
    const data = divisionData[divisionId]
    const [activeSection, setActiveSection] = useState('overview')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (!data) return;

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

        data.navItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [data, divisionId])

    if (!data) {
        return <Navigate to="/divisions" replace />
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const yOffset = -120 // Account for both navbars
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <>
            <Helmet>
                <title>YOGANESH {data.title} | {data.tagline}</title>
                <meta name="description" content={`Join YOGANESH ${data.title}. ${data.overview.substring(0, 100)}...`} />
            </Helmet>

            <main className="bg-brand-bg text-brand-text min-h-screen overflow-hidden">

                {/* Cinematic Hero */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Parallax Background */}
                    <div className="absolute inset-0 z-0 bg-brand-bg-alt">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={data.img}
                            alt={data.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        {/* Dramatic Lighting Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-brand-red-dark/10 mix-blend-multiply"></div>
                    </div>

                    {/* Massive Division Watermark */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[150%] flex justify-center opacity-[0.03] pointer-events-none select-none z-0">
                        <span className="text-[12vw] font-black tracking-tighter text-brand-text whitespace-nowrap uppercase">
                            {data.title.split(' ')[0]}
                        </span>
                    </div>

                    <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 mb-8 shadow-2xl"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                            <span className="text-sm font-bold tracking-widest uppercase text-white/90">Ecosystem Division</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-lg"
                        >
                            YOGANESH <br className="md:hidden" />
                            <span className="text-brand-red-light mix-blend-screen">{data.title}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-3xl font-extrabold text-white/80 tracking-wide max-w-3xl"
                        >
                            "{data.tagline}"
                        </motion.p>
                    </div>
                </section>

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
                            <ul className="hidden md:flex items-center bg-brand-bg-alt/30 rounded-full p-1 border border-brand-text/5">
                                {data.navItems.map((item) => (
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
                                                layoutId="pill-active"
                                                className="absolute inset-0 bg-brand-red-light rounded-full z-0 shadow-[0_5px_15px_rgba(192,0,0,0.2)]"
                                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                className="md:hidden w-10 h-10 flex items-center justify-center text-brand-text text-xl focus:outline-none rounded-full bg-brand-bg-alt border border-brand-text/5"
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
                                className="md:hidden absolute top-20 left-4 right-4 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-4"
                            >
                                <ul className="flex flex-col gap-2">
                                    {data.navItems.map((item) => (
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

                {/* Content Sections */}
                <div className="relative">
                    {/* Ambient Background Lighting */}
                    <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.03),transparent_60%)] pointer-events-none"></div>
                    <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.02),transparent_60%)] pointer-events-none"></div>

                    {/* OVERVIEW SECTION */}
                    <section id="overview" className="py-24 md:py-32 scroll-mt-20">
                        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full lg:w-1/2 space-y-8"
                                >
                                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">About the Division</h2>
                                    <div className="w-20 h-1.5 bg-gradient-to-r from-brand-red-dark to-brand-red-light rounded-full shadow-[0_0_10px_rgba(192,0,0,0.4)]"></div>
                                    <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed">
                                        {data.overview}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full lg:w-1/2"
                                >
                                    <TiltWrapper intensity={10} scaleOnHover={1.03}>
                                        <div className="bg-white/80 backdrop-blur-md border border-brand-text/5 p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            <h3 className="text-brand-red-light font-black uppercase tracking-widest text-sm mb-4 relative z-10 flex items-center">
                                                <span className="w-6 h-[2px] bg-brand-red-light mr-3"></span> Who It's For
                                            </h3>
                                            <p className="text-brand-text text-xl md:text-2xl font-bold leading-relaxed relative z-10">
                                                {data.who}
                                            </p>
                                        </div>
                                    </TiltWrapper>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* PROGRAMS SECTION */}
                    <section id="programs" className="py-24 md:py-32 scroll-mt-20 border-y border-brand-text/5 relative overflow-hidden">
                        {/* Mesh background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(192,0,0,0.04),transparent_50%)]"></div>

                        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                            <div className="text-center mb-20 max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Programs & Offerings</h2>
                                <p className="text-brand-text-muted text-xl">Expert-led structures designed for absolute progression.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {data.programs.map((prog, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ delay: i * 0.15, duration: 0.6 }}
                                        className="h-full"
                                    >
                                        <TiltWrapper intensity={8} scaleOnHover={1.02} className="h-full">
                                            <div className="h-full bg-brand-bg-alt border border-brand-text/5 p-10 rounded-[2.5rem] shadow-lg hover:shadow-[0_20px_40px_rgba(192,0,0,0.1)] hover:border-brand-red-light/30 transition-all duration-500 flex flex-col group relative overflow-hidden">

                                                {/* Hover Glow */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red-dark/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                                <div className="flex flex-col mb-4 relative z-10">
                                                    <h4 className="text-2xl font-extrabold text-brand-text mb-4 group-hover:text-brand-red-light transition-colors duration-300">{prog.name}</h4>
                                                    <span className="text-xs font-bold tracking-widest uppercase px-4 py-2 bg-brand-bg border border-brand-text/10 text-brand-red-light rounded-full inline-block w-fit shadow-inner group-hover:border-brand-red-light/40 transition-colors">
                                                        {prog.time}
                                                    </span>
                                                </div>
                                                <p className="text-brand-text-muted text-lg leading-relaxed flex-grow relative z-10">{prog.desc}</p>
                                            </div>
                                        </TiltWrapper>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* BENEFITS SECTION */}
                    <section id="benefits" className="py-24 md:py-32 scroll-mt-20">
                        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Choose Us</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <div className="flex items-center p-6 sm:p-8 bg-brand-bg border border-brand-text/5 rounded-3xl hover:border-brand-red-light/20 hover:bg-brand-bg-alt transition-all duration-300 group shadow-sm hover:shadow-[0_15px_30px_rgba(192,0,0,0.06)] relative overflow-hidden">
                                            {/* Line accent on hover */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red-light scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300"></div>

                                            <div className="w-14 h-14 rounded-2xl bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light shrink-0 shadow-inner mr-6 group-hover:bg-brand-red-light group-hover:text-white transition-colors duration-300">
                                                <FaCheck className="text-xl" />
                                            </div>
                                            <span className="font-extrabold text-xl tracking-tight text-brand-text group-hover:text-brand-red-dark transition-colors duration-300">{benefit}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ENQUIRY CTA SECTION */}
                    <section id="enquiry" className="py-24 md:py-32 scroll-mt-20 relative border-t border-brand-text/5">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,0,0,0.05),transparent_70%)] z-0"></div>

                        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                            <TiltWrapper intensity={3} scaleOnHover={1.01}>
                                <div className="bg-white/80 backdrop-blur-xl border border-brand-text/10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] p-10 md:p-16 relative overflow-hidden group">

                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red-dark/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

                                    <div className="text-center mb-12 relative z-10">
                                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Begin?</h2>
                                        <p className="text-xl text-brand-text-muted">Book a consultation or request more information about {data.title}.</p>
                                    </div>

                                    <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Full Name</label>
                                                <input type="text" className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Phone Number</label>
                                                <input type="tel" className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner" placeholder="+1 234 567 890" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Email Address</label>
                                            <input type="email" className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner" placeholder="john@example.com" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Message (Optional)</label>
                                            <textarea rows="4" className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-red-light focus:bg-white transition-all shadow-inner resize-none" placeholder={`I'd like to book a session for ${data.title}...`}></textarea>
                                        </div>

                                        <div className="text-center pt-8">
                                            <button
                                                type="submit"
                                                className="inline-flex flex-col items-center justify-center px-12 py-5 rounded-[2rem] bg-brand-red-dark text-white font-extrabold text-lg tracking-widest uppercase hover:bg-brand-red-light hover:shadow-[0_20px_40px_rgba(192,0,0,0.3)] transform hover:-translate-y-1 transition-all duration-300 w-full lg:w-auto"
                                            >
                                                <div className="flex items-center">
                                                    Submit Registration
                                                    <FaArrowRight className="ml-3 text-sm" />
                                                </div>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </TiltWrapper>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default DivisionTemplate
