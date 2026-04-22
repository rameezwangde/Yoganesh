import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Divisions', path: '/divisions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [visible, setVisible] = useState(true)
    const location = useLocation()
    const { scrollY } = useScroll()

    // Handle scroll visibility and background
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        
        // Dynamic background trigger
        setScrolled(latest > 20)

        // Auto-hide logic
        if (latest > previous && latest > 150) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    })

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ 
                y: visible ? 0 : -100,
                backgroundColor: scrolled ? "rgba(253, 251, 247, 0.85)" : "rgba(253, 251, 247, 0)",
                backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
                boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                paddingTop: scrolled ? "12px" : "20px",
                paddingBottom: scrolled ? "12px" : "20px"
            }}
            transition={{ duration: 0.4, ease: [0.32, 1, 0.2, 1] }}
            className="fixed top-0 w-full z-50 border-b border-transparent transition-colors duration-500"
            style={{ 
                borderBottomColor: scrolled ? "rgba(0,0,0,0.05)" : "transparent"
            }}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="flex flex-col z-50 relative group leading-none py-1">
                    <div className="flex items-center space-x-1 md:space-x-2">
                        <span className="text-lg sm:text-xl md:text-3xl font-black tracking-tighter text-brand-red-light group-hover:text-brand-red-dark transition-colors">Yoganesh</span>
                        <span className="text-lg sm:text-xl md:text-3xl font-black tracking-tighter text-brand-text">Health</span>
                    </div>
                    <span className="text-lg sm:text-xl md:text-3xl font-black tracking-tighter text-brand-text">
                        Institute
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-12 px-6 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
                    <ul className="flex space-x-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-red-light relative group ${location.pathname === link.path ? 'text-brand-red-light' : 'text-brand-text/60 hover:text-brand-text'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-red-light transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/contact"
                        className="bg-brand-text text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-brand-red-light hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] transition-all transform hover:-translate-y-1"
                    >
                        Start Journey
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-brand-bg-alt/50 border border-brand-text/5 text-brand-text text-2xl focus:outline-none z-50 relative hover:text-brand-red-light transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 h-[100dvh] w-full bg-brand-bg flex flex-col items-center justify-center z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,0,0,0.1),transparent_60%)] pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none"></div>

                        <ul className="flex flex-col space-y-10 text-center mb-12 relative z-10 w-full px-12">
                            {navLinks.map((link, i) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-black tracking-tighter hover:text-brand-red-light transition-all ${location.pathname === link.path ? 'text-brand-red-light' : 'text-brand-text'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="relative z-10 pt-8"
                        >
                            <Link
                                to="/contact"
                                className="bg-brand-red-dark text-white px-12 py-5 rounded-full font-black text-xl tracking-widest uppercase hover:bg-brand-red-light shadow-2xl transition-all inline-block mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar
