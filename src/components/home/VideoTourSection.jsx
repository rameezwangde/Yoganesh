import React from 'react'
import { motion } from 'framer-motion'
import TiltWrapper from './../ui/TiltWrapper'
import yogaImage from './../../assets/yoga_zen_serenity_1776663193234.png'

const VideoTourSection = () => {
    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red-dark/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red-light/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4 px-4 py-1.5 border border-brand-red-dark/20 rounded-full bg-brand-red-dark/5 backdrop-blur-sm"
                    >
                        <span className="text-brand-red-light font-bold text-xs uppercase tracking-widest flex items-center">
                            <span className="w-2 h-2 rounded-full bg-brand-red-light mr-2 animate-pulse"></span>
                            Studio Sanctuary
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight drop-shadow-sm"
                    >
                        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Peace</span> Meets Practice
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed"
                    >
                        Immerse yourself in our meticulously designed space. A sanctuary built to foster mindfulness, strength, and inner harmony.
                    </motion.p>
                </div>

                <TiltWrapper intensity={10} scaleOnHover={1.02}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/5 group"
                    >
                        {/* Glowing Aura Behind Image */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-red-light/20 via-brand-red-dark/10 to-brand-red-light/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 -z-10"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[21/9] md:aspect-video flex items-center justify-center">
                            <img 
                                src={yogaImage}
                                alt="Serene Yoga Studio Sanctuary"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            
                            {/* Subtle Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            
                            {/* Decorative Corner Element */}
                            <div className="absolute bottom-8 left-8 flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-brand-red-light animate-ping"></div>
                                </div>
                                <div className="text-white/90">
                                    <p className="text-xs uppercase tracking-widest font-semibold opacity-60">Location</p>
                                    <p className="text-sm font-medium">Main Studio Hall</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </TiltWrapper>
            </div>
        </section>
    )
}

export default VideoTourSection

