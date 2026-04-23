import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import TiltWrapper from '../ui/TiltWrapper'
import heroImage from '../../assets/images/hero_wellness.png'

const CtaBanner = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    return (
        <section className="py-12 md:py-32 relative overflow-hidden bg-brand-bg px-4 md:px-8 font-mastery">
            <div className="container mx-auto max-width-6xl relative z-10">
                <motion.div
                    style={{ scale, opacity }}
                    className="relative"
                >
                    <TiltWrapper intensity={3} scaleOnHover={1.01}>
                        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden p-6 md:p-32 shadow-[0_50px_100px_rgba(0,0,0,0.2)] group border-none md:border md:border-white/20 min-h-[400px] md:min-h-[600px] flex items-center justify-center">
                            
                            {/* Cinematic Background Image */}
                            <div className="absolute inset-0 z-0">
                                <motion.img 
                                    initial={{ scale: 1.1 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                    src={heroImage} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                                    alt="Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-secondary/95 to-brand-primary/80 mix-blend-multiply"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]"></div>
                            </div>

                            {/* Floating Visual Particles */}
                            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ 
                                            y: [0, -100, 0],
                                            opacity: [0, 0.3, 0],
                                            scale: [1, 1.5, 1]
                                        }}
                                        transition={{ 
                                            duration: 10 + i * 2, 
                                            repeat: Infinity, 
                                            ease: "easeInOut",
                                            delay: i * 1.5
                                        }}
                                        className="absolute w-32 h-32 bg-white/10 rounded-full blur-3xl"
                                        style={{ 
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Core Content */}
                            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl">

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl px-8 py-3 rounded-full border border-white/10 mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse"></span>
                                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/70">Transformation Integrity</span>
                                </motion.div>

                                <h2 className="text-3xl md:text-8xl font-black text-white mb-8 md:mb-12 tracking-tighter leading-[0.9] drop-shadow-2xl">
                                    Your Best Self Is<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic">
                                        One Decision Away.
                                    </span>
                                </h2>

                                <p className="text-white/60 text-sm md:text-xl font-medium mb-8 md:mb-12 max-w-2xl leading-relaxed tracking-tight">
                                    Join the elite circle of individuals mastering their biology and spirit through our integrated human performance ecosystem.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
                                    <Link
                                        to="/contact"
                                        className="relative overflow-hidden flex items-center justify-center px-8 py-4 md:px-12 md:py-6 rounded-full bg-white text-brand-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:-translate-y-1.5 transition-all duration-500 w-full sm:w-auto group shadow-2xl"
                                    >
                                        <span className="relative z-10">Initiate Contact</span>
                                        <FaArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-500 text-sm" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                    </Link>

                                    <a
                                        href="https://wa.me/918097923924"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-8 py-4 md:px-12 md:py-6 rounded-full border-2 border-white/10 backdrop-blur-md text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] w-full sm:w-auto hover:bg-white/10 hover:border-white/40 hover:-translate-y-1.5 transition-all duration-500 group"
                                    >
                                        <FaWhatsapp className="mr-3 text-xl group-hover:scale-125 group-hover:text-[#25D366] transition-all duration-500" />
                                        Direct WhatsApp
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
