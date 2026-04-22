import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Fitness', 'Yoga', 'Dance', 'Events', 'Kids', 'Adults']

// Placeholders for Gallery
const images = [
    { id: 1, category: 'Fitness', src: 'https://via.placeholder.com/600x800/1A1A1A/FFFFFF?text=Fitness+1' },
    { id: 2, category: 'Yoga', src: 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Yoga+1' },
    { id: 3, category: 'Dance', src: 'https://via.placeholder.com/800x600/1A1A1A/FFFFFF?text=Dance+1' },
    { id: 4, category: 'Events', src: 'https://via.placeholder.com/600x800/1A1A1A/FFFFFF?text=Events+1' },
    { id: 5, category: 'Fitness', src: 'https://via.placeholder.com/800x600/1A1A1A/FFFFFF?text=Fitness+2' },
    { id: 6, category: 'Adults', src: 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Adults+1' },
    { id: 7, category: 'Kids', src: 'https://via.placeholder.com/800x800/1A1A1A/FFFFFF?text=Kids+1' },
    { id: 8, category: 'Yoga', src: 'https://via.placeholder.com/600x800/1A1A1A/FFFFFF?text=Yoga+2' },
    { id: 9, category: 'Dance', src: 'https://via.placeholder.com/600x600/1A1A1A/FFFFFF?text=Dance+2' },
]

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [selectedImg, setSelectedImg] = useState(null)

    const filteredImages = activeTab === 'All'
        ? images
        : images.filter(img => img.category === activeTab)

    return (
        <>
            <Helmet>
                <title>Gallery | Inside YOGANESH</title>
                <meta name="description" content="Take a look inside the YOGANESH facilities, classes, and community events." />
            </Helmet>

            <main className="min-h-screen bg-brand-bg pb-24">
                {/* Header */}
                <section className="py-24 bg-brand-bg-alt text-center border-b border-brand-text/5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="container mx-auto px-4"
                    >
                        <h1 className="text-5xl font-extrabold text-brand-text mb-6">Inside <span className="text-gradient">Yoganesh Health Institute</span></h1>
                        <p className="text-brand-text-muted max-w-2xl mx-auto">Explore our premium facilities, vibrant community, and dynamic classes.</p>
                    </motion.div>
                </section>

                {/* Filters */}
                <section className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === cat
                                    ? 'bg-gradient-primary text-white shadow-[0_0_15px_rgba(192,0,0,0.4)]'
                                    : 'bg-brand-text/5 text-brand-text-muted hover:bg-brand-text/10 hover:text-brand-text'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Masonry-style Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence>
                            {filteredImages.map((img) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={img.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                                    onClick={() => setSelectedImg(img.src)}
                                >
                                    <img
                                        src={img.src}
                                        alt={`YOGANESH ${img.category}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-brand-text font-bold tracking-widest uppercase border border-brand-text/30 px-6 py-2 rounded-full glass-panel">
                                            {img.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-pointer"
                            onClick={() => setSelectedImg(null)}
                        >
                            <button
                                className="absolute top-6 right-8 text-white text-4xl hover:text-brand-red-light transition-colors z-[70]"
                                onClick={() => setSelectedImg(null)}
                            >
                                &times;
                            </button>
                            <motion.img
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                src={selectedImg}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                alt="Enlarged view"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </>
    )
}

export default Gallery
