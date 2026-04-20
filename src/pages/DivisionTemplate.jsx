import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

import divHealthImg from '../assets/images/div_health.png'
import divYogaImg from '../assets/images/div_yoga.png'
import divFitnessImg from '../assets/images/div_fitness.png'
import divWellnessImg from '../assets/images/div_wellness.png'
import divDanceImg from '../assets/images/div_dance.png'
import divMusicImg from '../assets/images/div_music.png'
import healthDiplomaImg from '../assets/images/health_diploma.png'
import healthUniversityImg from '../assets/images/health_university.png'
import yogaSpecialImg from '../assets/images/yoga_special.png'
import fitnessSpecialImg from '../assets/images/fitness_special.png'
import courseDiplomaImg from '../assets/images/course_diploma.png'
import courseTeacherImg from '../assets/images/course_teacher.png'
import courseResearchImg from '../assets/images/course_research.png'
import serviceBiomechanicalImg from '../assets/images/service_biomechanical.png'
import servicePhysioImg from '../assets/images/service_physio.png'
import healthHeroV2 from '../assets/images/health_hero_v2.png'

const divisionData = {
    'health-institute': {
        title: 'Health Institute',
        img: healthHeroV2,
        tagline: 'Clinical Precision. Human Performance.',
        overview: 'Our Health Institute operates at the intersection of medical science, academic excellence, and human performance. We provide medical-grade assessments, university-accredited yoga education, and guided rehabilitation to ensure your body functions at its peak clinical potential.',
        programs: [
            {
                name: 'Biomechanical Analysis',
                time: '90 Min Session',
                desc: 'Comprehensive movement screening using advanced sensors to identify muscle imbalances and joint dysfunction.',
                markers: ['Kinetic Chain Mapping', 'Joint Load Analysis', 'Neural Latency Test'],
                img: serviceBiomechanicalImg,
                size: 'large'
            },
            {
                name: 'Clinical Physiotherapy',
                time: 'Mon-Sat',
                desc: 'Evidence-based injury recovery and prevention protocols tailored to your specific kinetic chain.',
                markers: ['Acoustic Wave Therapy', 'Myofascial Triggering'],
                img: servicePhysioImg,
                size: 'medium'
            },
            {
                name: 'Metabolic Structuring',
                time: 'Wed & Fri',
                desc: 'Personalized nutritional counseling based on metabolic evaluation and blood chemistry analysis.',
                markers: ['Blood Chemistry', 'VO2 Optimization'],
                img: healthUniversityImg,
                size: 'small'
            }
        ],
        universityCourses: [
            { name: 'Diploma Courses', levels: 'Foundation to Mastery', icon: '📜' },
            { name: 'Certificate Courses', levels: 'Clinical Specialization', icon: '🏅' },
            { name: 'Teacher Training', levels: 'Professional Accreditation', icon: '🧘' },
            { name: 'Under Graduate', levels: 'University Degree', icon: '🎓' },
            { name: 'Post Graduate', levels: 'Research & Advanced Study', icon: '🏛️' }
        ],
        benefits: ['University Accredited Pathways', 'Medical-grade diagnostics', 'Pain-free movement patterns', 'Custom rehabilitation plans', 'Integrated clinical approach'],
        who: 'Healthcare professionals, athletes seeking peak optimization, and individuals requiring specialized clinical guidance.',
        navItems: [
            { id: 'overview', label: 'Overview' },
            { id: 'programs', label: 'Services' },
            { id: 'courses', label: 'Courses' },
            { id: 'benefits', label: 'Why Us' },
            { id: 'enquiry', label: 'Contact' }
        ]
    },
    'yoga-classes': {
        title: 'Yoga Classes',
        img: divYogaImg,
        tagline: 'Ancient Lineage. Modern Biomechanics.',
        overview: 'Experience the synthesis of traditional yogic wisdom and contemporary anatomical science. We go beyond simple poses, focusing on the profound connection between neural pathways, breath, and structural alignment.',
        programs: [
            { name: 'Vinyasa Krama', time: '7:00 AM | Daily', desc: 'Intelligent sequencing of postures connected by conscious breath and internal focus.' },
            { name: 'Structural Hatha', time: '6:30 PM | Tue-Thu', desc: 'Focusing on isometric holds and absolute alignment to build resilient joints and core power.' },
            { name: 'Dhyana & Pranayama', time: '5:30 AM | Sun', desc: 'Advanced breathwork and meditative techniques for autonomic nervous system regulation.' }
        ],
        uniqueSection: {
            title: 'The 8 Limbs Integration',
            desc: 'Our curriculum is rooted in the Ashtanga philosophy, ensuring your practice transcends the physical mat and integrates into your cognitive and emotional life.',
            items: [
                { label: 'Yama & Niyama', detail: 'Ethical & Self-discipline' },
                { label: 'Asana', detail: 'Physical Integrity' },
                { label: 'Pranayama', detail: 'Vital Energy Mastery' },
                { label: 'Pratyahara', detail: 'Sensory Withdrawal' },
                { label: 'Dharana', detail: 'Absolute Concentration' }
            ]
        },
        benefits: ['Neuromuscular coordination', 'Stress hormone regulation', 'Extraordinary mobility', 'Hyper-focus & mental clarity'],
        who: 'Individuals seeking a deep, disciplined approach to physical and mental mastery through the lens of ancient wisdom.',
        navItems: [
            { id: 'overview', label: 'Philosophy' },
            { id: 'programs', label: 'Offerings' },
            { id: 'unique', label: 'Lineage' },
            { id: 'benefits', label: 'Impact' },
            { id: 'enquiry', label: 'Connect' }
        ]
    },
    'fitness-classes': {
        title: 'Fitness Classes',
        img: divFitnessImg,
        tagline: 'Engineered for Peak Performance.',
        overview: 'Elite conditioning is not random. It is calculated, progressive, and intense. Our fitness ecosystem is designed for those who demand measurable results and surgical precision in their training.',
        programs: [
            { name: 'Hypertrophy Lab', time: '6:00 AM / PM', desc: 'Science-backed resistance training focused on structural balance and muscle development.' },
            { name: 'Metabolic Conditioning', time: 'Daily High-Intensity', desc: 'Energy system development designed to torch body fat while preserving lean tissue.' },
            { name: 'Power & Explosiveness', time: 'Sat Morning', desc: 'Olympic lifting and plyometric protocols to enhance fast-twitch fiber recruitment.' }
        ],
        uniqueSection: {
            title: 'The Performance Matrix',
            desc: 'We track your progress through five core pillars of human capability to ensure a balanced, bulletproof physique.',
            items: [
                { label: 'Relative Strength', detail: 'Force production per kg' },
                { label: 'VO2 Max', detail: 'Aerobic capacity limit' },
                { label: 'Power Output', detail: 'Explosive rate of force' },
                { label: 'Kinetic Stability', detail: 'Joint integrity & control' },
                { label: 'Metabolic Flux', detail: 'Energy efficiency' }
            ]
        },
        benefits: ['Rapid body recomposition', 'Elite athletic capability', 'Hormonal optimization', 'Unbreakable joint health'],
        who: 'Goal-oriented individuals, high-performers, and those who treat their body as a high-performance vehicle.',
        navItems: [
            { id: 'overview', label: 'Method' },
            { id: 'programs', label: 'Labs' },
            { id: 'unique', label: 'Matrix' },
            { id: 'benefits', label: 'Results' },
            { id: 'enquiry', label: 'Join' }
        ]
    },
    'wellness-center': {
        title: 'Wellness Center',
        img: divWellnessImg,
        tagline: 'The Science of Restoration.',
        overview: 'Recovery is the most underrated phase of performance. Our Wellness Center provides a sanctuary of advanced recovery technology to downshift your nervous system and accelerate cellular repair.',
        programs: [
            { name: 'Neural Recovery Pods', time: 'Scheduled Sessions', desc: 'Combining infrared light therapy and sound frequencies to induce deep parasympathetic states.' },
            { name: 'Contrast Therapy', time: 'Open Daily', desc: 'Alternating between advanced cryotherapy and sauna to stimulate systemic blood flow.' },
            { name: 'Myofascial Release', time: 'Expert Assisted', desc: 'Clinical tissue manipulation to resolve adhesions and restore fluid movement.' }
        ],
        uniqueSection: {
            title: 'Recovery Protocols',
            desc: 'Our restoration cycles are designed to reset your autonomic nervous system from "Fight or Flight" to "Rest and Digest".',
            items: [
                { label: 'Inflammation Reset', detail: 'Cellular debris clearance' },
                { label: 'Sleep Architecture', detail: 'Deep rest optimization' },
                { label: 'Cortisol Flushing', detail: 'Stress hormone removal' },
                { label: 'Fascial Hydration', detail: 'Connective tissue repair' },
                { label: 'Vagus Nerve Stimulation', detail: 'Nervous system tone' }
            ]
        },
        benefits: ['Accelerated tissue repair', 'Decreased systemic inflammation', 'Profound psychological rest', 'Enhanced immune function'],
        who: 'Busy professionals, high-intensity athletes, and anyone navigating a high-stress modern environment.',
        navItems: [
            { id: 'overview', label: 'Reset' },
            { id: 'programs', label: 'Protocols' },
            { id: 'unique', label: 'The Cycle' },
            { id: 'benefits', label: 'Recovery' },
            { id: 'enquiry', label: 'Restore' }
        ]
    },
    'dance-classes': {
        title: 'Dance Classes',
        img: divDanceImg,
        tagline: 'Kinetic Artistry. Cardio Flow.',
        overview: 'Dance is the ultimate expression of human movement. Our classes merge athletic demand with artistic freedom, creating a high-energy environment that builds coordination and cardiovascular endurance.',
        programs: [
            { name: 'Contemporary Fusion', time: 'Mon, Wed - 6:30 PM', desc: 'Merging technical modern dance with interpretive emotional storytelling.' },
            { name: 'Urban Choreography', time: 'Tue, Thu - 7:30 PM', desc: 'Fast-paced, high-precision rhythmic movement set to the latest global beats.' },
            { name: 'Rhythmic Cardio', time: 'Sat - 10:00 AM', desc: 'A relentless calorie-burning session disguised as an electrifying dance party.' }
        ],
        uniqueSection: {
            title: 'The Rhythmic Spectrum',
            desc: 'We explore movement across multiple stylistic dimensions to build a versatile and expressive physical vocabulary.',
            items: [
                { label: 'Fluidity', detail: 'Seamless transitions' },
                { label: 'Precision', detail: 'Isolated muscle control' },
                { label: 'Stamina', detail: 'Unrelenting cardio' },
                { label: 'Expression', detail: 'Emotional projection' },
                { label: 'Musicality', detail: 'Timing & Syncopation' }
            ]
        },
        benefits: ['Superior coordination', 'High-caloric expenditure', 'Enhanced endorphin release', 'Social connectivity'],
        who: 'Individuals looking for an exhilarating, musical alternative to standard gym routines.',
        navItems: [
            { id: 'overview', label: 'Artistry' },
            { id: 'programs', label: 'Styles' },
            { id: 'unique', label: 'Spectrum' },
            { id: 'benefits', label: 'Energy' },
            { id: 'enquiry', label: 'Move' }
        ]
    },
    'music-classes': {
        title: 'Music Classes',
        img: divMusicImg,
        tagline: 'Cognitive Harmony.',
        overview: 'Music is not just a skill—it is a cognitive super-tool. Our music programs focus on the intersection of technical mastery and the therapeutic power of sound for mental health and brain plasticity.',
        programs: [
            { name: 'Instrumental Mastery', time: 'Guitar | Piano | Drums', desc: 'One-on-one sessions focusing on theory, technique, and creative improvisation.' },
            { name: 'Vocal Performance', time: 'Individual / Group', desc: 'Developing breath control, pitch accuracy, and public performance confidence.' },
            { name: 'Sonic Therapy', time: 'Sun Afternoon', desc: 'Understanding the use of music and frequency for emotional regulation and focus.' }
        ],
        uniqueSection: {
            title: 'Cognitive Symphony',
            desc: 'Learning music restructures the brain, enhancing areas responsible for language, memory, and executive function.',
            items: [
                { label: 'Neural Plasticity', detail: 'New brain connections' },
                { label: 'Auditory Processing', detail: 'Sharper listening skills' },
                { label: 'Emotional IQ', detail: 'Creative catharsis' },
                { label: 'Memory Retention', detail: 'Pattern recognition' },
                { label: 'Fine Motor Control', detail: 'Manual dexterity' }
            ]
        },
        benefits: ['Enhanced brain plasticity', 'Emotional stress outlet', 'Discipline and patience', 'Increased focus duration'],
        who: 'Children and adults seeking intellectual enrichment and a powerful creative outlet.',
        navItems: [
            { id: 'overview', label: 'Insight' },
            { id: 'programs', label: 'Learning' },
            { id: 'unique', label: 'Mind' },
            { id: 'benefits', label: 'Cognition' },
            { id: 'enquiry', label: 'Create' }
        ]
    }
}

const DivisionTemplate = () => {
    const { divisionId } = useParams()
    const data = divisionData[divisionId]
    const [activeSection, setActiveSection] = useState('overview')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 800], [0, 300])
    const opacityY = useTransform(scrollY, [0, 300], [1, 0])
    const useScrollParallax = (distance) => useTransform(scrollY, [0, 2000], [0, distance])

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeCourse, setActiveCourse] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;

        const textMessage = `*New Division Enquiry: ${data.title}*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message || 'No additional message'}`;

        const whatsappUrl = `https://wa.me/918422923924?text=${encodeURIComponent(textMessage)}`;
        const mailtoUrl = `mailto:yoganeshfitnessclasses@gmail.com?subject=Enquiry for ${data.title} - ${name}&body=${encodeURIComponent(textMessage.replace(/\*/g, ''))}`;

        window.open(whatsappUrl, '_blank');
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 500);

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 5000);
    };

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
                    <div className="absolute inset-0 z-0 bg-brand-text">
                        <motion.img
                            style={{ y: heroY }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={data.img}
                            alt={data.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                        />
                        {/* Dramatic Lighting Overlays */}
                        <div className={`absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent`}></div>
                        <div className={`absolute inset-0 opacity-40 mix-blend-multiply bg-blue-900`}></div>
                        <div className="absolute inset-0 bg-black/50"></div>
                        
                        {/* Animated Scanning Line */}
                        <motion.div 
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-blue-500/20 z-0 pointer-events-none"
                        ></motion.div>
                    </div>

                    {/* Massive Division Watermark */}
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-full flex justify-center opacity-[0.04] pointer-events-none select-none z-0">
                        <span className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap uppercase italic">
                            {data.title.split(' ')[0]}
                        </span>
                    </div>

                    <motion.div
                        style={{ opacity: opacityY }}
                        className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-2xl px-8 py-3 rounded-xl border border-white/10 mb-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3B82F6] animate-pulse"></span>
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-400">System.Division.Active</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-7xl md:text-[10rem] font-black mb-10 tracking-tighter text-white leading-[0.8] uppercase italic pr-12 drop-shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                        >
                            YOGANESH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)] block mt-4">
                                {data.title}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-sm md:text-xl font-black text-blue-400 px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 tracking-[0.4em] max-w-4xl uppercase relative overflow-hidden group rounded-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
                            <span className="relative z-10 font-black tracking-[0.6em]">
                                [ {data.tagline} ]
                            </span>
                        </motion.p>
                    </motion.div>
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
                            <Link to="/divisions" className="flex items-center group text-brand-text-muted hover:text-blue-600 transition-all font-bold text-xs tracking-widest uppercase mr-4">
                                <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-text/5 flex items-center justify-center mr-2 group-hover:bg-blue-600/10 group-hover:border-blue-600/30 transition-all shadow-sm">
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
                                            className={`relative z-10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${activeSection === item.id ? 'text-white' : 'text-brand-text/50 hover:text-brand-text'
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="pill-active"
                                                className="absolute inset-0 bg-blue-600 rounded-full z-0 shadow-[0_5px_15px_rgba(37,99,235,0.2)]"
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
                                                className={`w-full text-center py-4 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all ${activeSection === item.id
                                                    ? 'bg-blue-600 text-white shadow-lg'
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
                    <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
                    <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.02),transparent_60%)] pointer-events-none"></div>

                    {/* OVERVIEW SECTION */}
                    <motion.section
                        id="overview"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="py-24 md:py-32 scroll-mt-20"
                    >
                        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
                                {/* Background Decorative Number */}
                                <div className="absolute -top-20 -left-10 text-[250px] font-black text-blue-500 opacity-[0.03] select-none pointer-events-none hidden md:block">01</div>
                                
                                <div className="w-full lg:w-3/5 relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="space-y-10"
                                    >
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-8 h-[1px] bg-blue-500"></div>
                                                <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[9px] px-3 py-1 bg-blue-500/5 rounded-full border border-blue-500/10">Strategic Blueprint</span>
                                            </div>
                                            <h2 className="text-5xl md:text-8xl font-black tracking-tight text-brand-text italic uppercase leading-[0.85] pr-16">
                                                About The <br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 inline-block pr-4">Division</span>
                                            </h2>
                                        </div>
                                        
                                        <p className="text-brand-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-2xl border-l-4 border-blue-500/10 pl-10 py-2">
                                            {data.overview}
                                        </p>
                                        

                                    </motion.div>
                                </div>

                                <div className="w-full lg:w-2/5">
                                    <TiltWrapper intensity={15}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="bg-brand-text p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group"
                                        >
                                            {/* Technical Decorations */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                                            <div className="absolute top-12 right-12 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                            
                                            <div className="relative z-10 space-y-8">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-sm rotate-45"></div>
                                                    </div>
                                                    <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Enrollment Protocol</span>
                                                </div>
                                                
                                                <h3 className="text-blue-500 font-black uppercase tracking-widest text-sm italic">Who It's For</h3>
                                                
                                                <p className="text-2xl md:text-3xl font-bold leading-tight italic tracking-tight text-white/90">
                                                    {data.who}
                                                </p>
                                                

                                            </div>
                                        </motion.div>
                                    </TiltWrapper>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* PROGRAMS & OFFERINGS SECTION - Innovative Bento Lab */}
                    <motion.section
                        id="programs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="py-24 md:py-40 scroll-mt-20 bg-white relative"
                    >
                        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-[2px] bg-blue-500"></div>
                                        <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">The Methodology</span>
                                    </div>
                                    <h2 className="text-6xl md:text-9xl font-black tracking-tight text-brand-text leading-none uppercase italic pr-12">
                                        Programs
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[300px]">
                                {data.programs.map((prog, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className={`group relative rounded-[3rem] overflow-hidden border border-brand-text/5 shadow-sm hover:shadow-2xl transition-all duration-700 ${prog.size === 'large' ? 'md:col-span-7 md:row-span-2' :
                                                prog.size === 'medium' ? 'md:col-span-5 md:row-span-1' :
                                                    'md:col-span-5 md:row-span-1'
                                            }`}
                                    >
                                        {/* Background Image Overlay */}
                                        {prog.img && (
                                            <div className="absolute inset-0 z-0 overflow-hidden">
                                                <img
                                                    src={prog.img}
                                                    alt={prog.name}
                                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-40 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 group-hover:from-brand-text/90 group-hover:via-brand-text/40 group-hover:to-transparent transition-all duration-700"></div>
                                            </div>
                                        )}

                                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="px-4 py-1.5 bg-brand-bg rounded-full text-[9px] font-black uppercase tracking-widest text-brand-text border border-brand-text/5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all">
                                                        {prog.time}
                                                    </div>
                                                    <div className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                                                        {i === 0 ? '🦾' : i === 1 ? '🔬' : '💊'}
                                                    </div>
                                                </div>

                                                <h3 className={`font-black tracking-tight leading-none uppercase italic mb-6 transition-colors duration-500 pr-8 ${prog.size === 'large' ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'
                                                    } ${prog.img ? 'group-hover:text-white' : 'text-brand-text'}`}>
                                                    {prog.name}
                                                </h3>

                                                <p className={`max-w-md text-lg leading-relaxed transition-colors duration-500 ${prog.img ? 'text-brand-text group-hover:text-white/70' : 'text-brand-text-muted'
                                                    }`}>
                                                    {prog.desc}
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                {prog.markers && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {prog.markers.map((marker, m) => (
                                                            <span key={m} className="px-3 py-1 bg-brand-text/5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-brand-text-muted group-hover:bg-white/10 group-hover:text-blue-400 transition-all">
                                                                {marker}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between pt-6 border-t border-brand-text/5 group-hover:border-white/10 transition-colors">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Protocol Insight</span>
                                                    <FaArrowRight className="text-blue-500 group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* UNIVERSITY COURSES SECTION - Immersive Explorer Layout */}
                    {data.universityCourses && (
                        <motion.section
                            id="courses"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="py-24 md:py-48 scroll-mt-20 bg-brand-text relative overflow-hidden"
                        >
                            {/* Animated Background Orbs */}
                            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>

                            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                                <div className="flex flex-col mb-20">
                                    <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 w-fit">Academic Excellence</div>
                                    <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none text-white italic uppercase pr-12">
                                        The Learning <br />
                                        <span className="text-blue-500">Ecosystem</span>
                                    </h2>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 min-h-[650px]">

                                    {/* Left: Vertical Course Selector */}
                                    <div className="w-full lg:w-1/3 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            {data.universityCourses.map((course, i) => (
                                                <motion.button
                                                    key={i}
                                                    onMouseEnter={() => setActiveCourse(i)}
                                                    onClick={() => setActiveCourse(i)}
                                                    className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 flex items-center justify-between group ${activeCourse === i
                                                            ? 'bg-white shadow-[0_30px_60px_rgba(0,0,0,0.3)] -translate-y-1'
                                                            : 'bg-white/5 border border-white/5 hover:bg-white/10'
                                                        }`}
                                                >
                                                    <div className="flex items-center space-x-6">
                                                        <span className={`text-3xl transition-transform duration-500 ${activeCourse === i ? 'scale-125 rotate-12' : 'group-hover:scale-110'}`}>
                                                            {course.icon}
                                                        </span>
                                                        <div>
                                                            <h4 className={`font-black text-xl tracking-tight transition-colors ${activeCourse === i ? 'text-brand-text' : 'text-white/60'}`}>
                                                                {course.name}
                                                            </h4>
                                                            <p className={`text-[10px] font-bold uppercase tracking-widest ${activeCourse === i ? 'text-blue-500' : 'text-white/30'}`}>
                                                                {course.levels}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <FaArrowRight className={`transition-all duration-500 ${activeCourse === i
                                                            ? 'text-blue-500 opacity-100 translate-x-0'
                                                            : 'text-white/0 -translate-x-4'
                                                        }`} />
                                                </motion.button>
                                            ))}
                                        </div>

                                        <div className="mt-12 lg:mt-0 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                                            <p className="text-white/40 text-sm italic leading-relaxed">
                                                *All courses are internationally accredited and recognized by the Global Yoga Alliance and participating universities.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Immersive Display Area */}
                                    <div className="w-full lg:w-2/3 relative">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeCourse}
                                                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                                                transition={{ duration: 0.5, ease: "circOut" }}
                                                className="h-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative"
                                            >
                                                {/* Main Visual */}
                                                <img
                                                    src={
                                                        activeCourse === 0 ? courseDiplomaImg :
                                                            activeCourse === 2 ? courseTeacherImg :
                                                                activeCourse === 4 ? courseResearchImg :
                                                                    healthUniversityImg
                                                    }
                                                    alt="Course Visualization"
                                                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                                                />

                                                {/* Content Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-transparent p-12 flex flex-col justify-end">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        className="space-y-6"
                                                    >
                                                        <div className="w-20 h-1 bg-blue-500"></div>
                                                        <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter">
                                                            {data.universityCourses[activeCourse].name}
                                                        </h3>
                                                        <p className="text-white/70 text-xl leading-relaxed max-w-xl">
                                                            {activeCourse === 0 && "Deep dive into the structural foundations of yoga therapy and clinical biomechanics."}
                                                            {activeCourse === 1 && "Specialized training in clinical assessment and advanced corrective exercise."}
                                                            {activeCourse === 2 && "The gold standard for aspiring instructors, merging technical mastery with spiritual depth."}
                                                            {activeCourse === 3 && "Full-scale academic degree programs for a career in sports science and wellness."}
                                                            {activeCourse === 4 && "Pushing the boundaries of yoga through clinical trials, biofeedback, and data-driven research."}
                                                        </p>


                                                    </motion.div>
                                                </div>


                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* UNIQUE DOMAIN SECTION (The Matrix / The Lineage / The Spectrum) */}
                    {data.uniqueSection && (
                        <motion.section
                            id="unique"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="py-24 md:py-32 scroll-mt-20 relative overflow-hidden bg-brand-text text-white"
                        >
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_50%)]"></div>
                                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.2),transparent_50%)]"></div>
                            </div>

                            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                                    <div className="w-full lg:w-1/2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="space-y-8"
                                        >
                                            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-black uppercase tracking-[0.3em] text-blue-600">System Protocol</div>
                                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none italic uppercase">{data.uniqueSection.title}</h2>
                                            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                                                {data.uniqueSection.desc}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                                {data.uniqueSection.items.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                                                    >
                                                        <h4 className="text-blue-600 font-black text-sm uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">{item.label}</h4>
                                                        <p className="text-white/50 text-sm">{item.detail}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="w-full lg:w-1/2">
                                        <TiltWrapper intensity={10}>
                                            <div className="relative group">
                                                {/* Decorative Frame */}
                                                <div className="absolute -inset-4 border border-white/10 rounded-[3rem] pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
                                                <div className="absolute -inset-8 border border-white/5 rounded-[4rem] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

                                                <img
                                                    src={divisionId === 'yoga-classes' ? yogaSpecialImg : divisionId === 'fitness-classes' ? fitnessSpecialImg : data.img}
                                                    alt={data.uniqueSection.title}
                                                    className="rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] w-full aspect-[4/5] object-cover relative z-10"
                                                />

                                                {/* Floating Stat Box */}
                                                <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl shadow-2xl z-20 max-w-[240px] transform hover:scale-105 transition-transform hidden md:block">
                                                    <div className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-80">Ecosystem Integrity</div>
                                                    <div className="text-white text-3xl font-black italic">100%</div>
                                                    <div className="text-white/60 text-[10px] mt-2 leading-tight uppercase font-bold tracking-widest">Validated Performance Protocols</div>
                                                </div>
                                            </div>
                                        </TiltWrapper>
                                    </div>

                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* BENEFITS SECTION - Premium Revamp */}
                    <motion.section
                        id="benefits"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="py-24 md:py-40 scroll-mt-20 relative overflow-hidden bg-white"
                    >
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
                            <span className="absolute -top-10 -left-10 text-[500px] font-black text-blue-500 rotate-12 uppercase tracking-tighter">WHY</span>
                            <span className="absolute -bottom-10 -right-10 text-[500px] font-black text-blue-500 -rotate-12 uppercase tracking-tighter">US</span>
                        </div>

                        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="max-w-2xl"
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-[2px] bg-blue-600"></div>
                                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">The Advantage</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-text leading-[0.9] pr-12">
                                        WHY CHOOSE <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">YOGANESH</span>
                                    </h2>
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-brand-text-muted text-xl max-w-md font-medium leading-relaxed pb-2"
                                >
                                    We bridge the gap between clinical excellence and holistic mastery to engineer your ultimate physical evolution.
                                </motion.p>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {data.benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className="group h-full"
                                    >
                                        <div className="relative h-full bg-brand-bg-alt/50 border border-brand-text/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 flex flex-col overflow-hidden">

                                            {/* Benefit Number Background */}
                                            <div className="absolute -top-6 -right-6 text-9xl font-black text-brand-text/[0.03] group-hover:text-blue-600/[0.05] transition-colors duration-500 select-none">
                                                0{i + 1}
                                            </div>

                                            {/* Icon Header */}
                                            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg border border-brand-text/5 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 relative z-10">
                                                <div className="text-3xl text-blue-600 group-hover:text-white transition-colors">
                                                    {benefit.includes('Medical') || benefit.includes('clinical') ? '🔬' :
                                                        benefit.includes('University') || benefit.includes('Accredited') ? '🎓' :
                                                            benefit.includes('Pain') || benefit.includes('rehabilitation') ? '🦾' :
                                                                benefit.includes('Integrated') || benefit.includes('Ecosystem') ? '🔄' :
                                                                    benefit.includes('movement') || benefit.includes('Performance') ? '⚡' : '✨'}
                                                </div>
                                            </div>

                                            <h4 className="text-2xl font-black text-brand-text mb-6 tracking-tight leading-tight group-hover:text-blue-700 transition-colors relative z-10">
                                                {benefit}
                                            </h4>

                                            <div className="mt-auto pt-8 border-t border-brand-text/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Domain Expertise</span>
                                                <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                                                    <FaArrowRight className="text-blue-600 text-xs" />
                                                </div>
                                            </div>

                                            {/* Subtle Animated Border Bottom */}
                                            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-blue-600 transition-all duration-700 ease-out group-hover:w-full"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* ENQUIRY CTA SECTION */}
                    <motion.section
                        id="enquiry"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="py-24 md:py-32 scroll-mt-20 relative border-t border-brand-text/5"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_70%)] z-0"></div>

                        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                            <TiltWrapper intensity={3} scaleOnHover={1.01}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="bg-white/80 backdrop-blur-xl border border-brand-text/10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] p-10 md:p-16 relative overflow-hidden group"
                                >

                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

                                    <div className="text-center mb-12 relative z-10">
                                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Begin?</h2>
                                        <p className="text-xl text-brand-text-muted">Book a consultation or request more information about {data.title}.</p>
                                    </div>

                                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                                                <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Full Name</label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
                                                    placeholder="John Doe"
                                                />
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                                                <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Phone Number</label>
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    type="tel"
                                                    className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
                                                    placeholder="+91 84229 23924"
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                                            <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Email Address</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
                                                placeholder="john@example.com"
                                            />
                                        </motion.div>

                                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                                            <label className="block text-sm font-bold mb-3 text-brand-text-muted uppercase tracking-widest pl-2">Message (Optional)</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full bg-brand-bg-alt/50 border border-brand-text/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner resize-none"
                                                placeholder={`I'd like to enquiry about ${data.title}...`}
                                            ></textarea>
                                        </motion.div>

                                        <div className="text-center pt-8">
                                            <button
                                                type="submit"
                                                className="inline-flex flex-col items-center justify-center px-12 py-5 rounded-[2rem] bg-blue-700 text-white font-extrabold text-lg tracking-widest uppercase hover:bg-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 transition-all duration-300 w-full lg:w-auto"
                                            >
                                                <div className="flex items-center">
                                                    Submit Message
                                                    <FaArrowRight className="ml-3 text-sm" />
                                                </div>
                                            </button>
                                        </div>
                                    </form>

                                    {/* Success Overlay */}
                                    <AnimatePresence>
                                        {isSubmitted && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-10"
                                            >
                                                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                                                    <svg className="w-10 h-10 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <h3 className="text-3xl font-black mb-4">Request Sent!</h3>
                                                <p className="text-brand-text-muted text-lg mb-8 max-w-sm">
                                                    We are redirecting you to WhatsApp and your Email to finalize the enquiry for <strong>{data.title}</strong>.
                                                </p>
                                                <button
                                                    onClick={() => setIsSubmitted(false)}
                                                    className="px-10 py-4 bg-brand-text text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all"
                                                >
                                                    Send Another
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </motion.div>
                            </TiltWrapper>
                        </div>
                    </motion.section>
                </div>
            </main>
        </>
    )
}

export default DivisionTemplate
