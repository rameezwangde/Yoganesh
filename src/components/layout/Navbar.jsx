import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

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

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg-alt/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wider text-brand-text">
                    <span className="text-brand-red-light">YOG</span>ANESH
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand-red-light ${location.pathname === link.path ? 'text-brand-red-light' : 'text-brand-text-muted'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/contact"
                        className="bg-gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    >
                        Enquire Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-text text-2xl focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-brand-bg/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <ul className="flex flex-col space-y-8 text-center mb-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-2xl font-semibold tracking-wider text-brand-text hover:text-brand-red-light transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/contact"
                            className="text-2xl font-semibold tracking-wider text-brand-text hover:text-brand-red-light transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link
                    to="/contact"
                    className="bg-gradient-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsOpen(false)}
                >
                    Enquire Now
                </Link>
            </div>
        </header>
    )
}

export default Navbar
