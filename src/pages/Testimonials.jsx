import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const textualTestimonials = [
    { id: 1, name: 'Michael T.', program: 'Fitness Classes', quote: 'The structured approach here changed my entire perspective on training. No more random workouts.', rating: 5 },
    { id: 2, name: 'Sonia K.', program: 'Yoga Classes', quote: 'The instructors truly care about form and breathing. I feel more flexible and centered after just a month.', rating: 5 },
    { id: 3, name: 'James W.', program: 'Health Institute', quote: 'After my knee injury, the Health Institute built a complete rehab plan that got me back on my feet faster than expected.', rating: 5 },
    { id: 4, name: 'Aaliyah R.', program: 'Dance Classes', quote: 'Honestly the most fun I have all week! The community is incredible and so supportive.', rating: 5 },
    { id: 5, name: 'David L.', program: 'Wellness Center', quote: 'The recovery protocols here are elite. The contrast therapy completely eliminated my chronic back soreness.', rating: 5 },
    { id: 6, name: 'Priya & Sam', program: 'Music Classes', quote: 'We enrolled our kids in the music program, and their confidence has skyrocketed.', rating: 5 },
]

const Testimonials = () => {
    return (
        <>
            <Helmet>
                <title>Testimonials | YOGANESH</title>
                <meta name="description" content="Read reviews and watch testimonials from real members of the YOGANESH community." />
            </Helmet>

            <main className="min-h-screen bg-brand-bg pb-24">
                {/* Header */}
                <section className="py-24 bg-brand-bg-alt text-center border-b border-brand-text/5 relative overflow-hidden">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-red-dark/10 blur-[100px] rounded-full"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="container mx-auto px-4 relative z-10"
                    >
                        <h1 className="text-5xl font-extrabold text-brand-text mb-6">What Our Members Say</h1>
                        <p className="text-brand-text-muted max-w-2xl mx-auto">Don't just take our word for it. Hear from those who have engineered their success with us.</p>
                    </motion.div>
                </section>

                {/* Video Testimonials */}
                <section className="py-20 border-b border-brand-text/5">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold text-center mb-12"
                        >
                            Video Transformations
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((v) => (
                                <motion.div
                                    key={v}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: v * 0.1 }}
                                    className="rounded-2xl overflow-hidden glass-panel border border-brand-text/10 group cursor-pointer relative aspect-video bg-[#E2E8F0]"
                                >
                                    <img src={`https://via.placeholder.com/640x360/1A1A1A/FFFFFF?text=Video+Thumbnail+${v}`} alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-brand-red-light flex items-center justify-center text-white shadow-[0_0_20px_rgba(192,0,0,0.6)] group-hover:scale-110 transition-transform">
                                            <FaPlay className="text-xl ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                        <h4 className="text-white font-bold">Transformation Story {v}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Text Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold text-center mb-12"
                        >
                            Written Reviews
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {textualTestimonials.map((t, idx) => (
                                <motion.div
                                    key={t.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="p-8 bg-brand-bg-alt border border-brand-text/10 rounded-2xl hover:border-brand-red-light/30 transition-colors"
                                >
                                    <div className="flex text-brand-red-light mb-4">
                                        {Array(t.rating).fill(null).map((_, i) => <span key={i}>★</span>)}
                                    </div>
                                    <p className="text-brand-text-muted italic leading-relaxed mb-6">"{t.quote}"</p>
                                    <div className="flex items-center mt-auto">
                                        <div className="w-12 h-12 bg-brand-text/5 rounded-full flex items-center justify-center text-brand-red-light font-bold mr-4">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-brand-text font-bold">{t.name}</h4>
                                            <span className="text-xs text-brand-text-muted uppercase tracking-wider">{t.program}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Testimonials
