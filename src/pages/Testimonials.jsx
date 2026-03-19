import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPlay, FaQuoteRight, FaStar } from 'react-icons/fa'
import TiltWrapper from '../components/ui/TiltWrapper'

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

            <main className="min-h-screen bg-brand-bg pb-32 overflow-hidden">
                
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-brand-text/5 bg-brand-bg text-center">
                    
                    {/* Immersive Background Watermark */}
                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[150%] flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
                        <span className="text-[120px] md:text-[250px] font-black tracking-tighter text-brand-text whitespace-nowrap">STORIES</span>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,0,0,0.04),transparent_70%)] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center space-x-2 bg-brand-bg-alt px-6 py-2 rounded-full border border-brand-text/5 mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-text-muted">Real Results</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold text-brand-text mb-8 tracking-tight leading-[1.1]"
                        >
                            What Our <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-dark to-brand-red-light">Members Say.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed"
                        >
                            Don't just take our word for it. Hear from those who have engineered their success with us.
                        </motion.p>
                    </div>
                </section>

                {/* Video Testimonials */}
                <section className="py-24 border-b border-brand-text/5 bg-brand-bg relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red-dark/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Video Transformations</h2>
                        </motion.div>

                        {/* Grid container handles layout on all sizes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {[1, 2, 3].map((v, idx) => (
                                <motion.div
                                    key={v}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <TiltWrapper intensity={8} scaleOnHover={1.03}>
                                        <div className="rounded-[2rem] overflow-hidden bg-brand-bg-alt border border-brand-text/10 group cursor-pointer relative aspect-video shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-brand-red-light/40 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(192,0,0,0.15)] flex flex-col justify-end">
                                            
                                            {/* Procedural Premium Placeholder Background instead of broken external images */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-bg to-brand-bg-alt">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>
                                                <div className="absolute inset-0 bg-brand-red-dark/0 group-hover:bg-brand-red-dark/10 transition-colors duration-700 mix-blend-multiply border border-brand-text/5"></div>
                                            </div>

                                            {/* Play Button - Magnetic Center */}
                                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                                <div className="w-20 h-20 rounded-full bg-brand-red-dark/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(192,0,0,0.4)] group-hover:bg-brand-red-light group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
                                                    <FaPlay className="text-2xl ml-1 relative z-10" />
                                                    
                                                    {/* Pulsing rings */}
                                                    <div className="absolute inset-0 rounded-full border border-brand-red-light animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                                </div>
                                            </div>

                                            {/* Gradient Overlay for Text */}
                                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg-alt/90 via-brand-bg-alt/50 to-transparent z-10 pointer-events-none"></div>
                                            
                                            {/* Text Content */}
                                            <div className="relative z-20 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <h4 className="text-brand-text font-extrabold text-xl mb-1 tracking-tight">Transformation Story {v}</h4>
                                                <p className="text-brand-red-light text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Watch Now</p>
                                            </div>
                                        </div>
                                    </TiltWrapper>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Text Grid */}
                <section className="py-24 bg-brand-bg-alt relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_right,rgba(192,0,0,0.03),transparent_60%)] pointer-events-none"></div>

                    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Written Reviews</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {textualTestimonials.map((t, idx) => (
                                <motion.div
                                    key={t.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                    transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                                >
                                    <TiltWrapper intensity={8} scaleOnHover={1.02} className="h-full">
                                        <div className="h-full p-8 bg-white/80 backdrop-blur-md border border-brand-text/5 rounded-[2rem] hover:border-brand-red-light/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(192,0,0,0.05)] relative group flex flex-col overflow-hidden">
                                            
                                            {/* Background Animated Hover Mesh */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(192,0,0,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                            {/* Giant Accent Quote Icon */}
                                            <FaQuoteRight className="absolute -top-4 -right-4 text-9xl text-brand-text/5 group-hover:text-brand-red-light/5 group-hover:rotate-12 transition-all duration-700 z-0 pointer-events-none" />

                                            <div className="relative z-10 flex flex-col h-full">
                                                {/* Premium Interactive Star Rating */}
                                                <div className="flex text-brand-red-light mb-6 space-x-1">
                                                    {Array(t.rating).fill(null).map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            whileHover={{ scale: 1.3, rotate: 15 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                            className="cursor-crosshair"
                                                        >
                                                            <FaStar className="drop-shadow-sm text-lg" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                
                                                <p className="text-brand-text-muted text-lg leading-relaxed mb-8 flex-grow pr-4">"{t.quote}"</p>
                                                
                                                <div className="flex items-center mt-auto border-t border-brand-text/5 pt-6 group-hover:border-brand-red-light/10 transition-colors duration-500">
                                                    {/* Glowing Avatar */}
                                                    <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-text font-black text-xl mr-5 shadow-inner border border-brand-text/5 relative overflow-hidden group-hover:bg-brand-red-light group-hover:text-white transition-all duration-500">
                                                        <span className="relative z-10">{t.name.charAt(0)}</span>
                                                    </div>
                                                    
                                                    <div className="flex flex-col">
                                                        <h4 className="text-brand-text font-extrabold text-lg tracking-tight group-hover:text-brand-red-dark transition-colors duration-300">{t.name}</h4>
                                                        <span className="text-xs text-brand-red-light font-bold uppercase tracking-widest mt-0.5">{t.program}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltWrapper>
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
