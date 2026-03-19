import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Divisions', path: '/divisions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg-alt/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="text-2xl font-black tracking-widest text-brand-text z-50 relative group">
                    <span className="text-brand-red-light group-hover:text-brand-red-dark transition-colors">YOG</span>ANESH
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-12">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-red-light ${location.pathname === link.path ? 'text-brand-red-light' : 'text-brand-text-muted'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/contact"
                        className="bg-brand-red-dark text-white px-8 py-3 rounded-full font-extrabold uppercase tracking-widest text-sm hover:bg-brand-red-light hover:shadow-[0_10px_20px_rgba(192,0,0,0.2)] transition-all hover:-translate-y-0.5"
                    >
                        Enquire Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-text text-3xl focus:outline-none z-50 relative hover:text-brand-red-light transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 h-[100dvh] w-full bg-brand-bg/95 backdrop-blur-xl flex flex-col items-center justify-center z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,0,0,0.05),transparent_70%)] pointer-events-none"></div>

                        <ul className="flex flex-col space-y-8 text-center mb-12 relative z-10 w-full px-6">
                            {navLinks.map((link, i) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                    className="border-b border-brand-text/5 pb-6 last:border-0"
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-3xl font-black tracking-tight hover:text-brand-red-light transition-colors ${location.pathname === link.path ? 'text-brand-red-light' : 'text-brand-text'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative z-10"
                        >
                            <Link
                                to="/contact"
                                className="bg-brand-red-dark text-white px-10 py-5 rounded-full font-black text-xl tracking-widest uppercase hover:bg-brand-red-light hover:shadow-[0_15px_30px_rgba(192,0,0,0.3)] transition-all inline-block"
                                onClick={() => setIsOpen(false)}
                            >
                                Enquire Now
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
