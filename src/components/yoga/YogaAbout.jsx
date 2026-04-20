import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'
import TiltWrapper from '../ui/TiltWrapper'

const YogaAbout = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-text/5">
            {/* Ambient glowing background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/3 w-[40rem] h-[40rem] bg-brand-red-dark/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-brand-red-light/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* TOP ROW: Title & Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Introduction</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Us</span>
                        </h2>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-brand-red-light"></div>
                            <FaLeaf className="text-brand-red-light text-xl" />
                            <div className="h-[1px] w-12 bg-brand-red-light"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-brand-text-muted text-lg leading-relaxed font-medium"
                    >
                        <p>
                            YOGANESH Fitness Classes offers a transformative experience through the ancient practice of yoga, enhancing both physical and mental well-being. Yoga improves flexibility, builds strength, and enhances posture. Regular practice reduces stress, boosts immunity, and improves breathing. It sharpens focus and promotes mindfulness, contributing to emotional balance and inner peace.
                        </p>
                        <p>
                            Joining YOGANESH Fitness Classes means embracing a healthier lifestyle with expert guidance in a supportive community. You'll enjoy increased energy, better sleep, and a toned body. Yoga aids digestion, lowers blood pressure, and supports heart health. It fosters discipline, self-awareness, and resilience. Discover serenity and strength through every breath and pose.
                        </p>
                    </motion.div>
                </div>

                {/* MIDDLE ROW: Stats & Discover */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 md:gap-6"
                    >
                        {[
                            { number: "3+", text: "Skilled Trainer" },
                            { number: "255+", text: "Happy Clients" },
                            { number: "365", text: "Days Classes" },
                            { number: "17", text: "Award Achieve" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-brand-bg-alt border border-brand-text/5 rounded-[2rem] p-6 md:p-8 text-center hover:border-brand-red-light/30 hover:shadow-[0_10px_30px_rgba(192,0,0,0.1)] transition-all duration-300">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark mb-2">{stat.number}</div>
                                <div className="text-brand-text-muted font-bold tracking-wide uppercase text-xs md:text-sm">{stat.text}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Discover Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pl-12"
                    >
                        <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Fun Fact</span>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                            Discover New <br /> Way Of <span className="text-brand-red-light">Yoga!</span>
                        </h3>
                        <div className="flex items-center gap-4 mb-6">
                            <FaLeaf className="text-brand-red-light text-xl" />
                        </div>
                        <p className="text-brand-text-muted text-xl leading-relaxed font-medium mb-10">
                            YOGANESH Fitness Classes blends ancient yoga with modern fitness, creating harmony, strength, and inner peace daily.
                        </p>
                        <button className="px-10 py-4 bg-gradient-primary text-white font-extrabold rounded-full hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 tracking-wider">
                            GET STARTED
                        </button>
                    </motion.div>
                </div>

                {/* BOTTOM ROW: Video & Inner Peace Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-brand-bg-alt border border-brand-text/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    {/* Fancy Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-dark/10 rounded-full blur-[80px] group-hover:bg-brand-red-dark/20 transition-all duration-700 pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight">
                            Inner Peace To Your <br /> Body And Mind
                        </h3>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-8 bg-brand-red-light"></div>
                            <FaLeaf className="text-brand-red-light text-xl" />
                            <div className="h-[1px] w-8 bg-brand-red-light"></div>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] bg-black shadow-2xl border border-brand-text/10 group-hover:shadow-[0_20px_40px_rgba(192,0,0,0.15)] transition-all">
                            <video
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                controls
                                preload="metadata"
                                controlsList="nodownload"
                            >
                                <source src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Yoganesh-Health-Institute-02.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-brand-text-muted text-lg leading-relaxed font-medium relative z-10 lg:pl-8"
                    >
                        <p>
                            YOGANESH Fitness Classes is dedicated to promoting health, wellness, and inner peace through expert-led yoga sessions. Our classes cater to all levels, helping you achieve balance, flexibility, and strength.
                        </p>
                        <p>
                            Join our community to experience personalized guidance, mindful practices, and holistic well-being. Whether you're a beginner or an advanced yogi, our sessions nurture your body, mind, and soul for a healthier lifestyle.
                        </p>
                        <TiltWrapper intensity={15} scaleOnHover={1.05}>
                            <img
                                src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/round-e1750972067386-1024x504.jpg"
                                alt="Yoga Mudra Focus"
                                className="w-full h-48 object-cover rounded-2xl mt-8 border border-brand-text/5 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </TiltWrapper>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default YogaAbout
