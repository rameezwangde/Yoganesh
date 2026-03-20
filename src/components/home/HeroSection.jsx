import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero_wellness.png'

const HeroSection = () => {
    // Dynamic Text Logic
    const [textIndex, setTextIndex] = useState(0);
    const phrases = [
        "STRENGTHEN YOUR MIND.",
        "ELEVATE YOUR SOUL.",
        "FIND YOUR BALANCE.",
        "TRANSFORM YOUR LIFE."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [phrases.length]);

    // 3D Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Background Scroll Parallax
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 800], [0, 250]);
    const bgOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    // Magnetic Button Logic
    const btnX = useMotionValue(0);
    const btnY = useMotionValue(0);
    const btnSpringX = useSpring(btnX, { stiffness: 150, damping: 15 });
    const btnSpringY = useSpring(btnY, { stiffness: 150, damping: 15 });

    const handleBtnMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        btnX.set((e.clientX - centerX) * 0.2);
        btnY.set((e.clientY - centerY) * 0.2);
    };

    const handleBtnMouseLeave = () => {
        btnX.set(0);
        btnY.set(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            role="banner"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg transition-all duration-1000"
        >
            {/* Background Decorative Elements */}
            <motion.div 
                style={{ y: bgY, opacity: bgOpacity }}
                className="absolute inset-0 pointer-events-none z-0"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red-dark/30 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [1, 1.1, 1], x: [0, 50, -20, 0], y: [0, -30, 20, 0], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red-light/20 rounded-full blur-[150px]"
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Left Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start text-left"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-6 px-5 py-2 border border-brand-red-dark/40 rounded-full bg-brand-red-dark/10 backdrop-blur-md relative overflow-hidden group shadow-[0_0_15px_rgba(192,0,0,0.15)]">
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                        <span className="text-brand-red-light font-bold text-xs uppercase tracking-widest relative z-10">A Complete Wellness Ecosystem</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-brand-text leading-tight mb-6 tracking-tight drop-shadow-lg flex flex-col">
                        <span>TRAIN YOUR BODY.</span>
                        <div className="min-h-[2.4em] sm:min-h-[1.2em] relative flex items-start mt-2">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light via-brand-red-dark to-brand-red-light animate-gradient-x drop-shadow-sm origin-bottom"
                                >
                                    {phrases[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-xl leading-relaxed mt-4">
                        Health Institute | Yoga Classes | Fitness Classes | Wellness Center | Dance Classes | Music Classes
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center w-full sm:w-auto">
                        <motion.div
                            style={{ x: btnSpringX, y: btnSpringY }}
                            onMouseMove={handleBtnMouseMove}
                            onMouseLeave={handleBtnMouseLeave}
                            className="w-full sm:w-auto z-20"
                        >
                            <Link
                                to="/contact"
                                className="relative block overflow-hidden px-8 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg shadow-[0_4px_20px_rgba(192,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(192,0,0,0.5)] transition-shadow text-center group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start Your Transformation
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                                {/* Sweeping Shine Effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
                            </Link>
                        </motion.div>

                        <Link
                            to="/divisions"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-brand-text/10 text-brand-text font-bold text-lg hover:border-brand-red-light/40 hover:bg-brand-red-dark/5 hover:-translate-y-1 transition-all text-center backdrop-blur-sm"
                        >
                            Explore Divisions
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column Visual 3D Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-center justify-center w-full h-[500px] lg:h-[700px] perspective-[1500px]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="relative w-full h-full rounded-[2rem] overflow-hidden glass-panel group shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform-style-preserve-3d"
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                    >
                        {/* Subtle theme overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/60 via-transparent to-brand-red-light/20 z-10 mix-blend-multiply transition-opacity duration-700 pointer-events-none"></div>

                        {/* Animated 3D Depth Image */}
                        <motion.img 
                            style={{
                                x: useTransform(springX, [-0.5, 0.5], [-20, 20]),
                                y: useTransform(springY, [-0.5, 0.5], [-20, 20]),
                                scale: 1.1
                            }}
                            src={heroImage} 
                            alt="YOGANESH Cinematic Integration" 
                            className="absolute inset-0 w-full h-full object-cover z-0" 
                            loading="eager" 
                        />
                    </motion.div>

                    {/* Badge 1: Holistic Approach */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        style={{
                            x: useTransform(springX, [-0.5, 0.5], [40, -40]),
                            y: useTransform(springY, [-0.5, 0.5], [40, -40]),
                            translateZ: "50px",
                        }}
                        className="absolute bottom-6 left-2 sm:left-6 md:left-auto md:-left-8 z-30 bg-white/90 backdrop-blur-2xl p-5 md:p-6 rounded-2xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_45px_rgba(192,0,0,0.15)] transition-shadow duration-300 pointer-events-auto"
                    >
                        <div className="flex items-center space-x-5">
                            <motion.div 
                                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-14 h-14 bg-gradient-to-br from-brand-red-light to-brand-red-dark rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(192,0,0,0.3)] shrink-0"
                            >
                                <span className="font-bold text-white text-2xl drop-shadow-md">✓</span>
                            </motion.div>
                            <div>
                                <h4 className="text-brand-text font-black text-lg md:text-xl mb-1 tracking-wide">Holistic Approach</h4>
                                <p className="text-brand-text-muted text-xs md:text-sm font-bold">Mind, body, and soul integration</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Badge 2: 5.0 Rating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                        transition={{ opacity: { duration: 0.8, delay: 1.2 }, scale: { duration: 0.8, delay: 1.2 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                        style={{
                            x: useTransform(springX, [-0.5, 0.5], [-30, 30]),
                            y: useTransform(springY, [-0.5, 0.5], [-30, 30]),
                            translateZ: "80px",
                        }}
                        className="absolute top-10 right-2 sm:right-6 md:-right-8 z-30 bg-white/95 backdrop-blur-2xl px-6 py-4 rounded-full border border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center gap-3 pointer-events-auto"
                    >
                        <div className="flex text-yellow-500 text-lg">
                            {'★★★★★'.split('').map((star, i) => <motion.span key={i} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}>{star}</motion.span>)}
                        </div>
                        <span className="font-extrabold text-brand-text text-sm uppercase tracking-widest hidden sm:inline-block">5.0 Rated</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
