import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'

const YogaServices = () => {
    const services = [
        { title: "Hath Yoga", desc: "Hatha Yoga balances mind and body through poses, breath control, and meditation.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" },
        { title: "Restorative & Yin Yoga", desc: "Relaxing, gentle, deep stretching, mindfulness, healing, stress relief, slow-paced, meditative, rejuvenating, grounding.", img: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=600&auto=format&fit=crop" },
        { title: "Iyengar Yoga", desc: "Iyengar Yoga focuses on alignment, precision, props, flexibility, and strength.", img: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600&auto=format&fit=crop" },
        { title: "Flow or Vinyasa Yoga", desc: "Flow yoga, also known as Vinyasa, emphasizes movement, breath, flexibility, strength, balance, mindfulness, coordination, endurance, and relaxation.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop" },
        { title: "Hot & Bikram Yoga", desc: "Flow, Hot, and Bikram Yoga enhance flexibility, strength, detoxification, and mindfulness.", img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop" },
        { title: "Asthanga Yoga", desc: "Ashtanga Yoga is a dynamic, disciplined practice focusing on breath, movement, and mindfulness.", img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=600&auto=format&fit=crop" },
        { title: "Power Yoga", desc: "Power yoga is a dynamic, fast-paced practice that builds strength, flexibility, endurance, and mindfulness while promoting overall fitness and stress relief.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
        { title: "Shuddhikriya", desc: "Shuddhikriya Yoga involves cleansing techniques to detoxify and purify the body.", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop" },
        { title: "Nutrition & Dietitian", desc: "Balance, wellness, mindful eating, nourishment, detox, vitality, holistic, healing, metabolism, harmony.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" },
        { title: "Aerobic", desc: "Aerobic yoga combines movement, flexibility, energy, fun, rhythm, fitness, mindfulness, and balance.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" },
        { title: "Aerial", desc: "Aerial yoga enhances flexibility, strength, balance, relaxation, and core stability.", img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=600&auto=format&fit=crop" },
        { title: "ZUMBA", desc: "Zumba in yoga combines dance, movement, flexibility, energy, fun, rhythm, fitness, mindfulness, and balance.", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600&auto=format&fit=crop" }
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-brand-bg-alt relative overflow-hidden border-b border-brand-text/5">
            {/* Background glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-primary font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-text-muted text-lg relative"
                    >
                        We offer a wide range of holistic fitness, yoga, and wellness services designed for all levels. Experience transformation through mindfulness, movement, and community.
                    </motion.p>
                    <div className="flex justify-center mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-text/5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(22,163,74,0.15)] transition-all duration-500 flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaLeaf className="text-brand-primary" />
                                </div>
                                <div className="absolute bottom-6 left-6 z-20 pr-6">
                                    <h3 className="text-2xl font-black text-white leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <p className="text-brand-text-muted leading-relaxed font-medium mb-6">
                                    {service.desc}
                                </p>
                                <div className="flex items-center text-brand-primary font-bold text-sm uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300 cursor-pointer">
                                    <span className="mr-2">Explore</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YogaServices
