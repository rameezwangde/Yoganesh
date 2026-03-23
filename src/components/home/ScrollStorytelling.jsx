import React, { useState, memo, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

import divHealthImg from '../../assets/images/div_health.png'
import divYogaImg from '../../assets/images/div_yoga.png'
import divFitnessImg from '../../assets/images/div_fitness.png'
import divWellnessImg from '../../assets/images/div_wellness.png'
import divDanceImg from '../../assets/images/div_dance.png'
import divMusicImg from '../../assets/images/div_music.png'

const divisions = [
    {
        id: 'health-institute',
        title: 'HEALTH INSTITUTE',
        tagline: 'Heal, Learn, Prevent.',
        desc: 'Medical-grade assessments, physiotherapy, and preventative care strategies to keep your body functioning at its absolute peak. We bridge the gap between clinical healthcare and active wellness.',
        icon: '🏥',
        img: divHealthImg
    },
    {
        id: 'yoga-classes',
        title: 'YOGA CLASSES',
        tagline: 'Breathe, Balance, Become.',
        desc: 'Ancient wisdom meets modern biomechanics. Build flexibility, mobility, and deep core strength through guided flows that connect your physical motion to mental stillness.',
        icon: '🧘',
        img: divYogaImg
    },
    {
        id: 'fitness-classes',
        title: 'FITNESS CLASSES',
        tagline: 'Train With Intelligent Intensity.',
        desc: 'Elite strength training, metabolic conditioning, and structured progression without the guesswork. Push your limits safely under the guidance of world-class performance coaches.',
        icon: '⚡',
        img: divFitnessImg
    },
    {
        id: 'wellness-center',
        title: 'WELLNESS CENTER',
        tagline: 'Recover, Reset, Renew.',
        desc: 'Complete autonomic nervous system restoration through premium recovery protocols, spanning from deep-tissue recovery to cryotherapy and advanced relaxation tech.',
        icon: '🌿',
        img: divWellnessImg
    },
    {
        id: 'dance-classes',
        title: 'DANCE CLASSES',
        tagline: 'Move With Freedom.',
        desc: 'Express yourself through kinetic movement, improving coordination, cardiovascular health, and rhythm in an electrifying, supportive group environment.',
        icon: '💃',
        img: divDanceImg
    },
    {
        id: 'music-classes',
        title: 'MUSIC CLASSES',
        tagline: 'Find Your Inner Rhythm.',
        desc: 'Cognitive enhancement and emotional regulation through active musical engagement and learning. Discover the therapeutic power of sound and frequency.',
        icon: '🎵',
        img: divMusicImg
    }
]

const ScrollStorytelling = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-brand-bg relative border-y border-brand-text/5 z-10 w-full">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
                
                {/* Desktop: Pinned Sticky Left Side */}
                <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center py-24 pr-16 lg:pr-24 perspective-1000">
                    <div className="w-full aspect-[4/5] relative rounded-[2.5rem] overflow-hidden bg-brand-bg-alt shadow-2xl border border-brand-text/5 group transform-gpu z-0">
                        
                        <AnimatePresence mode="popLayout">
                            <motion.img 
                                key={activeIndex}
                                src={divisions[activeIndex].img}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
                                loading="lazy"
                            />
                        </AnimatePresence>
                        
                        {/* High Performance Overlays (Pure Opacity) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10"></div>
                        <div className="absolute inset-0 bg-brand-red-dark/10 opacity-60 z-10"></div>
                        
                        <AnimatePresence mode="popLayout">
                            <motion.div 
                                key={`icon-${activeIndex}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none will-change-transform will-change-opacity"
                            >
                                <span className="text-white/40 text-[160px] lg:text-[200px] font-bold">
                                    {divisions[activeIndex].icon}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-30">
                            {divisions.map((_, i) => (
                                <motion.div 
                                    key={i}
                                    className={`w-1.5 rounded-full transition-all duration-300 transform-gpu ${i === activeIndex ? 'h-8 bg-brand-red-light' : 'h-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Scrolling Narrative */}
                <div className="w-full md:w-1/2 pb-[10vh] md:pb-[40vh] md:pt-[25vh]">
                    {divisions.map((div, i) => (
                        <StoryBlock 
                            key={div.id} 
                            div={div} 
                            index={i} 
                            setActiveIndex={setActiveIndex} 
                            isActive={activeIndex === i}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const StoryBlock = memo(({ div, index, setActiveIndex, isActive }) => {
    return (
        <motion.div
            onViewportEnter={() => setActiveIndex(index)}
            viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
            className={`min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center py-16 transition-opacity duration-500 will-change-opacity ${isActive ? 'opacity-100' : 'opacity-30 md:opacity-20 hover:opacity-100'}`}
        >
            {/* Mobile Visual Representation with Parallax */}
            <div className="md:hidden w-full aspect-square rounded-3xl overflow-hidden relative mb-10 shadow-xl border border-brand-text/5 transform-gpu">
                <MobileParallaxImage src={div.img} title={div.title} />
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent z-11 opacity-90 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center z-12 pointer-events-none">
                    <span className="text-white/50 text-[100px] font-bold">{div.icon}</span>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="pr-0 md:pr-8 will-change-transform will-change-opacity transform-gpu"
            >
                <div className="flex items-center mb-6">
                    <motion.span 
                        animate={{ width: isActive ? 48 : 16 }}
                        transition={{ duration: 0.4 }}
                        className="h-[2px] bg-brand-red-light mr-4 origin-left transform-gpu"
                    ></motion.span>
                    <span className="text-brand-red-light font-bold text-sm tracking-widest uppercase">
                        {div.title}
                    </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-text mb-8 tracking-tight leading-[1.1]">
                    {div.tagline}
                </h2>
                
                <p className="text-lg md:text-2xl text-brand-text-muted leading-relaxed mb-10">
                    {div.desc}
                </p>
                
                <Link to={`/${div.id}`} className="inline-flex items-center text-brand-text font-extrabold text-sm tracking-widest uppercase group hover:text-brand-red-light transition-colors duration-300 transform-gpu">
                    <span>Explore Division</span>
                    <span className="ml-4 w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center group-hover:border-brand-red-light group-hover:bg-brand-red-light/5 transition-all duration-300 overflow-hidden relative">
                        <span className="absolute inset-0 bg-brand-red-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">→</span>
                    </span>
                </Link>
            </motion.div>
        </motion.div>
    )
})

const MobileParallaxImage = ({ src, title }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.img 
            ref={ref}
            src={src} 
            style={{ y: smoothY, scale: 1.2 }}
            className="w-full h-full object-cover" 
            alt={title} 
            loading="lazy" 
        />
    );
};

StoryBlock.displayName = 'StoryBlock'

export default ScrollStorytelling
