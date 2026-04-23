import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero_wellness.png'

const HeroSection = () => {
    // Dynamic Text Logic
    const [textIndex, setTextIndex] = useState(0);
    const phrases = [
        "EVOLVE YOUR PERFORMANCE.",
        "MASTER YOUR BIOLOGY.",
        "OPTIMIZE YOUR VITALITY.",
        "ENGINEER YOUR WELLNESS."
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

    // Background Scroll Parallax - Smoothed for mobile
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const bgY = useTransform(smoothScrollY, [0, 800], [0, 250]);
    const bgOpacity = useTransform(smoothScrollY, [0, 500], [1, 0.5]);

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/30 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [1, 1.1, 1], x: [0, 50, -20, 0], y: [0, -30, 20, 0], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[150px]"
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh]">
                
                {/* Background 3D Cinematic Frame - Centered and behind text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center z-0 perspective-[1500px] pointer-events-none"
                >
                    <motion.div
                        className="relative w-full max-w-6xl aspect-[21/9] md:aspect-video rounded-[3rem] overflow-hidden opacity-20 md:opacity-40 blur-[2px] md:blur-none border border-white/10 shadow-2xl"
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                    >
                        <motion.img
                            style={{
                                x: useTransform(springX, [-0.5, 0.5], [-40, 40]),
                                y: useTransform(springY, [-0.5, 0.5], [-40, 40]),
                                scale: 1.2
                            }}
                            src={heroImage}
                            alt="YOGANESH Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-transparent to-brand-bg"></div>
                    </motion.div>
                </motion.div>

                {/* Main Content Column - Centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-20 flex flex-col items-center max-w-5xl"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-10 px-6 py-2.5 border border-brand-secondary/40 rounded-full bg-brand-secondary/10 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_20px_rgba(22,163,74,0.2)]">
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                        <span className="text-brand-primary font-black text-[10px] md:text-xs uppercase tracking-[0.5em] relative z-10">A Complete Wellness Ecosystem</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-3xl md:text-[6.5rem] font-black text-brand-text leading-[0.85] mb-10 tracking-tighter drop-shadow-2xl flex flex-col items-center">
                        <span className="opacity-90">OPTIMIZE YOUR BODY.</span>
                        <div className="min-h-[1.2em] relative flex items-center justify-center mt-6 w-full">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary animate-gradient-x drop-shadow-xl inline-block"
                                >
                                    {phrases[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-base md:text-2xl text-brand-text-muted mb-14 max-w-4xl leading-relaxed font-medium tracking-tight px-4 md:px-0">
                        Health Institute <span className="mx-2 text-brand-primary/30 hidden md:inline">|</span> 
                        Yoga Classes <span className="mx-2 text-brand-primary/30 hidden md:inline">|</span> 
                        Fitness Classes <span className="mx-2 text-brand-primary/30 hidden md:inline">|</span> 
                        Wellness Center <span className="mx-2 text-brand-primary/30 hidden md:inline">|</span> 
                        Dance Classes <span className="mx-2 text-brand-primary/30 hidden md:inline">|</span> 
                        Music Classes
                        <span className="md:hidden block mt-2 text-sm opacity-60">Integrated Human Performance System</span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 items-center justify-center w-full px-8 md:px-0">
                        <motion.div
                            style={{ x: btnSpringX, y: btnSpringY }}
                            onMouseMove={handleBtnMouseMove}
                            onMouseLeave={handleBtnMouseLeave}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                to="/contact"
                                className="relative block overflow-hidden px-12 py-6 rounded-full bg-gradient-primary text-white font-black shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_20px_50px_rgba(22,163,74,0.5)] transition-all text-center group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                    Start Your Transformation
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shimmer" />
                            </Link>
                        </motion.div>

                        <Link
                            to="/divisions"
                            className="w-full sm:w-auto px-12 py-6 rounded-full border-2 border-brand-text/10 text-brand-text font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:border-brand-primary/40 hover:bg-brand-secondary/5 hover:-translate-y-1 transition-all text-center backdrop-blur-md"
                        >
                            Explore Divisions
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Floating Orbiting Badges - Strategic positioning */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                    transition={{ opacity: { duration: 1, delay: 1 }, scale: { duration: 1, delay: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute top-[15%] right-[8%] z-30 hidden 2xl:flex items-center gap-4 bg-white/80 backdrop-blur-3xl px-8 py-5 rounded-full border border-white shadow-2xl"
                >
                    <div className="flex text-yellow-500 text-xl">
                        {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                    <span className="font-black text-brand-text text-[10px] uppercase tracking-[0.4em]">5.0 Rated Mastery</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-[15%] left-[8%] z-30 hidden 2xl:flex items-center space-x-6 bg-white/80 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white shadow-2xl"
                >
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-black">✓</span>
                    </div>
                    <div className="text-left">
                        <h4 className="text-brand-text font-black text-xl mb-1 tracking-tight">Holistic Protocol</h4>
                        <p className="text-brand-text-muted text-[10px] font-bold uppercase tracking-[0.2em]">Ecosystem Integrity 100%</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
