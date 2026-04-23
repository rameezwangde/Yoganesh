import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

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
            </main>
        </>
    )
}

export default Testimonials
