import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="bg-brand-bg relative border-t border-brand-text/5 overflow-hidden">

            {/* Massive Parallax Brand Watermark */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
                <span className="text-[120px] md:text-[250px] lg:text-[400px] font-black tracking-tighter text-brand-text whitespace-nowrap">

                </span>
            </div>

            {/* Glowing Top Border Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red-light/30 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Col */}
                    <div className="lg:col-span-4 pr-0 lg:pr-12">
                        <Link to="/" className="text-3xl font-extrabold tracking-tight text-brand-text block mb-6 group">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark to-brand-red-light group-hover:to-brand-red-dark transition-all duration-500">Yoganesh</span> Health Institute
                        </Link>
                        <p className="text-brand-text-muted text-base leading-relaxed mb-8">
                            A Complete Wellness Ecosystem. Train your body, strengthen your mind. Heal, Learn, Prevent. We engineer your ultimate transformation.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: FaInstagram, link: "https://www.instagram.com/yoganeshhealthinstitute/" },
                                { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61560723054900" },
                                { Icon: FaYoutube, link: "https://www.youtube.com/channel/UCs2UwA0ip4vMW0Z24PZKLcA" },
                                { Icon: FaWhatsapp, link: "https://wa.me/918097923924" }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-[1rem] bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-red-light transition-colors duration-300 hover:text-white shadow-sm border border-brand-text/5"
                                >
                                    <item.Icon className="text-xl" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Discover</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Divisions', 'Gallery', 'Testimonials', 'Contact Us'].map((link, i) => (
                                <li key={i}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-brand-text-muted hover:text-brand-red-light transition-all duration-300 text-sm font-medium flex items-center group">
                                        <FaArrowRight className="mr-2 text-brand-red-light opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div className="lg:col-span-3">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Divisions</h4>
                        <ul className="space-y-4 flex flex-col">
                            {['Health Institute', 'Yoga Classes', 'Fitness Classes', 'Wellness Center', 'Dance Classes'].map((link, i) => (
                                <li key={i}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-brand-text-muted hover:text-brand-red-light transition-all duration-300 text-sm font-medium flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-text/10 mr-3 group-hover:bg-brand-red-light group-hover:scale-150 transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Headquarters</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <span className="pt-1 leading-relaxed">NMS Icon, 901, 902, Plot No. 194,<br />Near Bamandongri Railway Station,<br />Sector 19, Ulwe, Navi Mumbai - 410206</span>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaPhoneAlt className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <a href="tel:+918097923924" className="hover:text-brand-red-light transition-colors font-semibold tracking-wide">+91 8097923924</a>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaEnvelope className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <a href="mailto:yoganeshhealthinstitute@gmail.com" className="hover:text-brand-red-light transition-colors">yoganeshhealthinstitute@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://wa.me/918097923924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-brand-text-muted hover:text-[#25D366] transition-colors mt-2 group">
                                    <FaWhatsapp className="mr-3 text-xl group-hover:scale-110 transition-transform" /> Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center relative z-10">
                    <p className="text-brand-text-muted text-xs mb-4 md:mb-0 font-medium tracking-wide">
                        © {new Date().getFullYear()}. Engineered for Results. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <Link to="/privacy-policy" className="text-brand-text-muted text-xs font-semibold hover:text-brand-red-light transition-colors uppercase tracking-widest">Privacy Policy</Link>
                        <Link to="/terms" className="text-brand-text-muted text-xs font-semibold hover:text-brand-red-light transition-colors uppercase tracking-widest">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
