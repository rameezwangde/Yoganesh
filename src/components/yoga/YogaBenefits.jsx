import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaYinYang, FaHeartbeat, FaSpa } from 'react-icons/fa'

const YogaBenefits = () => {
    const benefitItems = [
        {
            icon: FaLeaf,
            title: "Reduce Stress",
            desc: "Connect breath, movement, and peaceful energy.",
            color: "from-emerald-400 to-teal-500",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]",
            iconColor: "text-emerald-500"
        },
        {
            icon: FaYinYang,
            title: "Balance Life",
            desc: "Yoga helps balance life by reducing stress daily.",
            color: "from-blue-400 to-indigo-500",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]",
            iconColor: "text-blue-500"
        },
        {
            icon: FaHeartbeat,
            title: "Body Exercise",
            desc: "Daily yoga strengthens body, improves flexibility, and relaxes.",
            color: "from-brand-red-light to-orange-500",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]",
            iconColor: "text-brand-red-light"
        },
        {
            icon: FaSpa,
            title: "Peace Meditations",
            desc: "Peaceful meditation brings calmness to the mind.",
            color: "from-purple-400 to-fuchsia-500",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]",
            iconColor: "text-purple-500"
        }
    ];

    return (
        <section id="benefits" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-red-dark/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-brand-red-light/5 rounded-full blur-[150px]"></div>
                {/* Elegant glowing line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red-dark/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-brand-red-light font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 px-6 py-2 border border-brand-red-dark/20 rounded-full bg-brand-red-dark/5 backdrop-blur-sm shadow-[0_4px_20px_rgba(192,0,0,0.1)]"
                    >
                        Yoga Benefits
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text tracking-tight mb-8"
                    >
                        Yoga Life for Greater <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark drop-shadow-[0_4px_10px_rgba(59,130,246,0.3)]">Self Control</span>
                    </motion.h2>
                    {/* Decorative Line under title */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-transparent via-brand-red-light to-transparent rounded-full"
                    ></motion.div>
                </div>
            </div>

            {/* FULL-WIDTH INFINITE SCROLLING MARQUEE */}
            <div className="relative w-full py-16 overflow-hidden z-10 group group-hover-pause" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="flex w-max space-x-8 pr-8">
                    {[...Array(2)].map((_, arrayIndex) => (
                        <div
                            key={arrayIndex}
                            className="flex shrink-0 space-x-8 animate-marquee"
                        >
                            {benefitItems.map((item, index) => (
                                <div
                                    key={`${arrayIndex}-${index}`}
                                    className={`w-[320px] md:w-[380px] group relative p-10 rounded-[2.5rem] bg-white border border-brand-text/5 hover:border-transparent transition-all duration-500 hover:-translate-y-3 overflow-hidden text-center flex flex-col items-center shadow-lg ${item.hoverShadow}`}
                                >
                                    {/* Top vibrant border highlight */}
                                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>

                                    <div className={`relative w-24 h-24 mb-8 rounded-full bg-brand-bg-alt flex items-center justify-center border border-brand-text/5 transition-all mx-auto transform group-hover:-translate-y-2 duration-500`}>
                                        <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inner`}></div>
                                        <item.icon className={`text-4xl ${item.iconColor} group-hover:text-white transition-colors duration-500 relative z-10`} />
                                    </div>

                                    <h3 className="text-2xl font-extrabold mb-4 text-brand-text relative z-10">
                                        {item.title}
                                    </h3>
                                    <p className="text-brand-text-muted leading-relaxed relative z-10 text-lg font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YogaBenefits
