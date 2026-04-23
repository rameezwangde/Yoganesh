import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'

const InstagramFeed = () => {
    // Note: Fetching actual Instagram Reel cover images or videos directly is strictly blocked by 
    // Instagram's API to prevent scraping. The official iframe also fails if the Reel uses copyrighted music.
    // For a production site, you will need to link your account via a free widget like Elfsight or EmbedSocial.
    // Here are beautiful vertical placeholders designed specifically to mockup a Reels feed.
    const feedItems = [
        { id: 1, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', likes: 124, comments: 12 },
        { id: 2, image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800&auto=format&fit=crop', likes: 89, comments: 5 },
        { id: 3, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', likes: 256, comments: 24 },
        { id: 4, image: 'https://images.unsplash.com/photo-1552286450-37bdf51fd8b8?q=80&w=800&auto=format&fit=crop', likes: 167, comments: 8 },
        { id: 5, image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop', likes: 312, comments: 45 },
        { id: 6, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop', likes: 198, comments: 14 },
    ];

    // Duplicate array for seamless infinite scrolling marquee
    const marqueeItems = [...feedItems, ...feedItems];

    return (
        <section className="py-24 bg-brand-bg-alt relative overflow-hidden border-t border-brand-text/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-6">
                            <FaInstagram className="text-3xl text-brand-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Follow Our Journey</h2>
                        <a 
                            href="https://www.instagram.com/yoganeshfitnessclasses?igsh=MTNwczhobHJsNXo1Nw%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xl text-brand-text font-bold hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-1"
                        >
                            @yoganeshfitnessclasses
                        </a>
                        <p className="mt-6 text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
                            Join our community online. We share daily tips, routine highlights, and moments from our classes directly to our Instagram feed.
                        </p>
                    </motion.div>
                </div>

                {/* Infinite Scrolling Marquee */}
                <div className="relative w-full overflow-hidden flex py-10 -mx-4 md:-mx-8 px-4 md:px-8">
                    {/* Left and Right Gradient Masks for smooth fade out */}
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-bg-alt to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-bg-alt to-transparent z-10 pointer-events-none"></div>

                    <motion.div 
                        className="flex space-x-6 min-w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                    >
                        {marqueeItems.map((item, index) => (
                            <a
                                key={`${item.id}-${index}`}
                                href="https://www.instagram.com/yoganeshfitnessclasses?igsh=MTNwczhobHJsNXo1Nw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-64 md:w-72 lg:w-80 aspect-[9/16] group overflow-hidden rounded-3xl shadow-xl shadow-brand-text/5 border border-brand-text/10 bg-black block shrink-0 hover:z-20 transform transition-transform"
                            >
                                <img 
                                    src={item.image} 
                                    alt="Instagram Reel Placeholder" 
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Reel Play Icon Indicator */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                    <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 backdrop-blur-[2px] z-20">
                                    <div className="flex flex-col items-center text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <FaHeart className="mb-2 text-2xl text-brand-primary drop-shadow-md" /> 
                                        <span>{item.likes}</span>
                                    </div>
                                    <div className="flex flex-col items-center text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <FaComment className="mb-2 text-2xl drop-shadow-md" /> 
                                        <span>{item.comments}</span>
                                    </div>
                                </div>
                                <div className="absolute top-5 right-5 text-white opacity-90 drop-shadow-md bg-black/30 p-2 rounded-full backdrop-blur-md z-20">
                                    <FaInstagram className="text-xl" />
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="https://www.instagram.com/yoganeshfitnessclasses?igsh=MTNwczhobHJsNXo1Nw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold text-lg shadow-[0_4px_20px_rgba(253,29,29,0.3)] transition-all transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(253,29,29,0.5)]"
                        >
                            <FaInstagram className="mr-3 text-2xl" /> View Latest Posts
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default InstagramFeed
