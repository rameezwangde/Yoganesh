import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import divHealthImg from '../assets/images/div_health.png'
import divYogaImg from '../assets/images/div_yoga.png'
import divFitnessImg from '../assets/images/div_fitness.png'
import divWellnessImg from '../assets/images/div_wellness.png'
import divDanceImg from '../assets/images/div_dance.png'
import divMusicImg from '../assets/images/div_music.png'
import healthHeroV2 from '../assets/images/health_hero_v2.png'
import serviceBiomechanicalImg from '../assets/images/service_biomechanical.png'
import servicePhysioImg from '../assets/images/service_physio.png'
import healthUniversityImg from '../assets/images/health_university.png'

const categories = ['All', 'Fitness', 'Yoga', 'Dance', 'Music', 'Events', 'Kids', 'Adults']

// Consolidated high-fidelity images from divisions
const images = [
    // Fitness
    { id: 1, category: 'Fitness', src: divFitnessImg },
    { id: 2, category: 'Fitness', src: 'https://img.freepik.com/premium-photo/group-young-athletes-crossfit-gym-doing-variety-exercise-routines-while-trainer-other-members-group-cheer-them_378494-472.jpg?w=2000' },
    { id: 3, category: 'Fitness', src: 'https://img.freepik.com/premium-photo/people-stretching-pilates-reformers_126745-3577.jpg?w=2000' },
    { id: 4, category: 'Fitness', src: 'https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg' },
    
    // Yoga
    { id: 5, category: 'Yoga', src: divYogaImg },
    { id: 6, category: 'Yoga', src: 'https://m.media-amazon.com/images/I/41I4-bzPDWL._SY445_SX342_.jpg' },
    { id: 7, category: 'Yoga', src: 'https://www.fitsri.com/wp-content/uploads/2021/12/triangle-pose-with-yoga-block-1024x683.jpg' },
    { id: 8, category: 'Yoga', src: 'https://tse1.mm.bing.net/th/id/OIP.lS5MT5YNzEXS3sv35mNwigHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' },
    
    // Dance
    { id: 9, category: 'Dance', src: divDanceImg },
    { id: 10, category: 'Dance', src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop' },
    { id: 11, category: 'Dance', src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2000&auto=format&fit=crop' },
    { id: 12, category: 'Dance', src: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=2000&auto=format&fit=crop' },
    { id: 13, category: 'Dance', src: 'https://i.pinimg.com/originals/70/e3/5d/70e35dbed223120593f2b9064bbd4291.jpg' },
    
    // Music
    { id: 14, category: 'Music', src: divMusicImg },
    { id: 15, category: 'Music', src: 'https://cdn.mos.cms.futurecdn.net/C2845HQhUYoWYJK3zMkKiX.jpg' },
    { id: 16, category: 'Music', src: 'https://th.bing.com/th/id/OIP.rUTJG1rEeRhEiQfZaZnQowHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 17, category: 'Music', src: 'https://www.amritmusic.com/wp-content/uploads/2024/09/Sitar.jpg' },
    { id: 18, category: 'Music', src: 'https://static.roland.com/assets/images/products/gallery/octapad_spd-20_pro-bk_angle_gal.jpg' },

    // Adults (Health / Medical)
    { id: 19, category: 'Adults', src: healthHeroV2 },
    { id: 20, category: 'Adults', src: serviceBiomechanicalImg },
    { id: 21, category: 'Adults', src: servicePhysioImg },
    { id: 22, category: 'Adults', src: healthUniversityImg },

    // Events / Kids (Placeholders or related)
    { id: 23, category: 'Events', src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2000&auto=format&fit=crop' },
    { id: 24, category: 'Kids', src: 'https://media.istockphoto.com/id/542718538/photo/pregnant-young-woman-doing-prenatal-yoga-chair-pose-utkatasana.jpg?s=612x612&w=is&k=20&c=HD2yPlqsRZvLdnNub3QOSR63gYeANXfFsd5eZekq1B4=' },
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
                <title>Gallery | Yoganesh Health Institute</title>
                <meta name="description" content="Take a look inside the Yoganesh Health Institute facilities, classes, and community events." />
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
                                    ? 'bg-gradient-primary text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]'
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
                                className="absolute top-6 right-8 text-white text-4xl hover:text-brand-primary transition-colors z-[70]"
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
