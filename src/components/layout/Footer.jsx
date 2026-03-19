import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-brand-bg-alt pt-16 pb-8 border-t border-brand-text/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-3xl font-bold tracking-wider text-brand-text block mb-4">
                            <span className="text-brand-red-light">YOG</span>ANESH
                        </Link>
                        <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                            A Complete Wellness Ecosystem. Train your body, strengthen your mind. Heal, Learn, Prevent.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-red-light transition-colors hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-red-light transition-colors hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-red-light transition-colors hover:text-white">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-brand-text font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/divisions" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Our Divisions</Link></li>
                            <li><Link to="/gallery" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Gallery</Link></li>
                            <li><Link to="/testimonials" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Testimonials</Link></li>
                            <li><Link to="/contact" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div>
                        <h4 className="text-brand-text font-semibold mb-6 uppercase tracking-wider text-sm">Divisions</h4>
                        <ul className="space-y-3 flex flex-col">
                            <li><Link to="/health-institute" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Health Institute</Link></li>
                            <li><Link to="/yoga-classes" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Yoga Classes</Link></li>
                            <li><Link to="/fitness-classes" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Fitness Classes</Link></li>
                            <li><Link to="/wellness-center" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Wellness Center</Link></li>
                            <li><Link to="/dance-classes" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Dance Classes</Link></li>
                            <li><Link to="/music-classes" className="text-brand-text-muted hover:text-brand-text transition-colors text-sm">Music Classes</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-brand-text font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-sm text-brand-text-muted">
                                <span className="text-brand-red-light mr-3 mt-1">📍</span>
                                <span>901, 902 NMS ICON Building,<br />Opp Bamandongari Railway station,<br />Ulwe, Navi Mumbai</span>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted">
                                <span className="text-brand-red-light mr-3">📞</span>
                                <a href="tel:+918422923924" className="hover:text-brand-text transition-colors">+91 8422923924</a>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted">
                                <span className="text-brand-red-light mr-3">✉️</span>
                                <a href="mailto:yogamudrafitnessclasses@gmail.com" className="hover:text-brand-text transition-colors">yogamudrafitnessclasses@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://wa.me/918422923924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-brand-text-muted hover:text-[#25D366] transition-colors mt-2">
                                    <FaWhatsapp className="mr-2 text-lg" /> Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-brand-text-muted text-xs mb-4 md:mb-0">
                        © {new Date().getFullYear()} YOGANESH. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="text-brand-text-muted text-xs hover:text-brand-text transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-brand-text-muted text-xs hover:text-brand-text transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
