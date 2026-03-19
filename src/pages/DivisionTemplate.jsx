import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

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

            <main className="bg-brand-bg text-brand-text pb-24">
                {/* Hero */}
                <section className="relative py-24 lg:py-40 border-b border-brand-text/5 overflow-hidden">
                    {/* Background image configured per division */}
                    <div className="absolute inset-0 bg-brand-bg-alt z-0">
                        <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-4 z-10 relative text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide text-shadow-lg uppercase">
                            YOGANESH <br className="md:hidden" />{data.title}
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-red-light to-[#FF4500]">
                            "{data.tagline}"
                        </p>
                    </div>
                </section>

                {/* Secondary Division Navbar */}
                <nav className="sticky top-0 z-50 bg-brand-bg border-b border-brand-text/10 shadow-lg backdrop-blur-md bg-opacity-95 transition-all duration-300">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between py-4">
                            {/* Back Button */}
                            <Link to="/divisions" className="flex items-center text-brand-text-muted hover:text-brand-red-light transition-colors font-bold text-sm tracking-widest uppercase">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                Back
                            </Link>

                            {/* Desktop Nav */}
                            <ul className="hidden md:flex items-center space-x-12">
                                {data.navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-sm font-bold uppercase tracking-wider transition-colors pb-1 border-b-2 ${activeSection === item.id
                                                ? 'text-brand-red-light border-brand-red-light'
                                                : 'text-brand-text/60 border-transparent hover:text-brand-text'
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Hamburger Toggle */}
                            <button 
                                className="md:hidden text-brand-text text-2xl focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden transition-all duration-300 overflow-hidden bg-brand-bg-alt ${isMobileMenuOpen ? 'max-h-64 border-b border-brand-text/5' : 'max-h-0 border-transparent'}`}>
                        <ul className="flex flex-col px-4 py-2">
                            {data.navItems.map((item) => (
                                <li key={item.id} className="py-3 border-b border-brand-text/5 last:border-0 relative">
                                    <button
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`w-full text-left font-bold tracking-wider relative z-10 uppercase text-sm ${activeSection === item.id ? 'text-brand-red-light' : 'text-brand-text'}`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Overview */}
                <section id="overview" className="py-24 bg-brand-bg scroll-mt-32">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Division</h2>
                        <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-brand-text-muted leading-relaxed">
                            {data.overview}
                        </p>
                        <div className="mt-12 p-8 bg-brand-bg-alt border border-brand-text/10 rounded-2xl inline-block text-left w-full md:w-auto shadow-xl">
                            <h3 className="text-brand-red-light font-bold uppercase tracking-widest text-sm mb-3">Who It's For</h3>
                            <p className="text-brand-text-muted text-lg">{data.who}</p>
                        </div>
                    </div>
                </section>

                {/* Programs & Key Benefits */}
                <section id="programs" className="py-24 bg-brand-bg-alt border-y border-brand-text/5 scroll-mt-32">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Programs & Offerings</h2>
                        <div className="w-16 h-1 bg-gradient-primary mx-auto mb-16 rounded-full"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {data.programs.map((prog, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-brand-bg border border-brand-text/5 rounded-2xl hover:border-brand-red-light/30 transition-all hover:-translate-y-1 shadow-lg"
                                >
                                    <div className="flex flex-col mb-4">
                                        <h4 className="text-xl font-bold text-brand-text mb-2">{prog.name}</h4>
                                        <span className="text-sm font-bold px-3 py-1 bg-brand-red-dark/10 text-brand-red-light rounded-full inline-block w-fit">{prog.time}</span>
                                    </div>
                                    <p className="text-brand-text-muted">{prog.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="py-24 bg-brand-bg scroll-mt-32">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
                        <div className="w-16 h-1 bg-gradient-primary mx-auto mb-16 rounded-full"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            {data.benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-6 p-6 bg-brand-bg-alt border border-brand-text/5 rounded-2xl hover:shadow-[0_0_15px_rgba(192,0,0,0.1)] transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-red-dark/20 flex items-center justify-center text-brand-red-light text-xl shrink-0 shadow-inner">
                                        ✓
                                    </div>
                                    <span className="font-bold text-lg text-brand-text-muted">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enquiry Form */}
                <section id="enquiry" className="py-24 bg-brand-bg-alt border-y border-brand-text/5 scroll-mt-32">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Ready to Begin?</h2>
                            <p className="text-xl text-brand-text-muted">Fill out the form below to book a trial or request more information about {data.title}.</p>
                        </div>

                        <form className="space-y-6 p-8 md:p-12 bg-brand-bg border border-brand-text/10 rounded-3xl shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-brand-text-muted uppercase tracking-wider">Full Name</label>
                                    <input type="text" className="w-full bg-brand-bg-alt border border-brand-text/10 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-brand-text-muted uppercase tracking-wider">Phone Number</label>
                                    <input type="tel" className="w-full bg-brand-bg-alt border border-brand-text/10 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="+1 234 567 890" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2 text-brand-text-muted uppercase tracking-wider">Email Address</label>
                                <input type="email" className="w-full bg-brand-bg-alt border border-brand-text/10 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2 text-brand-text-muted uppercase tracking-wider">Message (Optional)</label>
                                <textarea rows="4" className="w-full bg-brand-bg-alt border border-brand-text/10 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder={`I'd like to book a session for ${data.title}...`}></textarea>
                            </div>

                            <div className="text-center pt-4">
                                <button type="submit" className="px-12 py-5 rounded-full bg-gradient-primary text-white font-bold text-lg tracking-wide hover:shadow-[0_0_25px_rgba(192,0,0,0.6)] transition-all transform hover:-translate-y-1 w-full md:w-auto">
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DivisionTemplate
