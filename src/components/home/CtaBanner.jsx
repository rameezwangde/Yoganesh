import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import TiltWrapper from '../ui/TiltWrapper'

const CtaBanner = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-bg px-4 md:px-8">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <TiltWrapper intensity={5} scaleOnHover={1.01}>
                        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 shadow-[0_40px_80px_rgba(0,0,0,0.1)] group border border-white/10">

                            {/* Island Backgrounds */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red-dark to-brand-red-light z-0"></div>

                            {/* Animated Inner Meshes (Zero-Lag Opacity Based) */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] z-0 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.4),transparent_50%)] z-0 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>

                            {/* Core Content */}
                            <div className="relative z-10 text-center flex flex-col items-center">

                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-8 shadow-inner"
                                >
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">Take The Leap</span>
                                </motion.div>

                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.1] drop-shadow-md">
                                    Your Best Self Is<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">One Decision Away.</span>
                                </h2>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto mt-4">
                                    <Link
                                        to="/contact"
                                        className="relative overflow-hidden flex items-center justify-center px-10 py-5 rounded-[2rem] bg-white text-brand-red-dark font-extrabold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group/btn shadow-xl"
                                    >
                                        <span className="relative z-10">Contact Us</span>
                                        <FaArrowRight className="ml-3 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0"></div>
                                    </Link>

                                    <a
                                        href="https://wa.me/918422923924"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-10 py-5 rounded-[2rem] border-2 border-white/30 backdrop-blur-sm text-white font-extrabold text-lg w-full sm:w-auto hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 group/btn2"
                                    >
                                        <div className="relative flex items-center justify-center mr-3 w-8 h-8 rounded-full bg-white/10 group-hover/btn2:bg-[#25D366] transition-colors duration-300">
                                            <FaWhatsapp className="text-xl group-hover/btn2:scale-110 transition-transform duration-300" />
                                        </div>
                                        Talk on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TiltWrapper>
                </motion.div>
            </div>
        </section>
    )
}

export default CtaBanner
