import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const YogaTestimonials = () => {
    const [activeTestimonialTab, setActiveTestimonialTab] = useState('written')

    const videoTestimonials = [
        { name: "Dr. Minakshi Pawar", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/02-Dr.-Minakshi-Pawar.mp4" },
        { name: "Soma Talukdar", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Soma-Talukdar-bytes.mp4" },
        { name: "Mayuri Umale", url: "https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/Mayuri-Umale-1.mp4" }
    ]

    const writtenReviews = [
        "I have been attending yoga sessions for the past 4 months and it has been an amazing experience! Ganesh Sir is truly passionate about guiding students on their yoga journey. He always guides us on correct postures and breathing techniques and gives personalised attention to improve our flexibility and strength. His patience, positive energy, and friendly approach make every session enjoyable. The class environment is clean, peaceful, and perfect for relaxation and self-improvement. I have noticed significant improvements in my fitness, stress levels, and overall well-being since joining. I highly recommend Yoga Mudra Fitness Centre to anyone looking for a yoga class in Ulwe.",
        "Mr.Ganesh is a fantastic teacher, and also a genuinely lovely person (which I feel is important when you're listening to someone talk). His directions are clear and precise so you're not looking up to check you're doing the right thing, and he's very observant, constantly checking you're positioning. These classes are truly for all levels, and although you've worked hard you'll somehow come out relaxed. The classes are stand alone, but if you attend regularly it is more of a course moving though different focuses which I love, adding new techniques every week to get more from each pose as you progress, as well as exploring new ones. Teachers at Yoga Mudra Fitness Classes are excellent and have a vast knowledge in the field of yoga. Their classes are energising and fun. I also really like the meditation at the end, it leaves me feeling very relaxed and centered. They let me know how far to go in a pose keeping in mind my weaknesses, which is really helpful. They also pay individual attention to people in the class and help me re-position to get that extra boost from a pose. Highly recommended!",
        "I had a great experience at YOGA MUDRA with Teacher Ganesh sir, The studio has a calming atmosphere, and Ganesh sir teaching is clear, supportive, and attentive to each student's needs. The class was well-balanced, offering a mix of asanas, breathing exercises, and meditation. I left feeling both relaxed and energized. Highly recommend it for anyone looking to enhance their yoga practice.....",
        "The best yoga and fitness classes at one place.They have yoga, CrossFit workouts, zumba,and many other fitness exercises which will keep you active and interested in doing more every time.They have flexibility in batches,so u don't miss out.Sir and ma'am both are highly motivated and inspire us.",
        "Best class to go ahead, 365 days sessions r there, to experience the change in urself. Offline class with any comfortable time of ur choice to shape ur body n fitness. Ganesh Sir always motivating n shaping our goal to remain healthy. Along with my Yoga teacher training course, was there in this class, it adds more flexibility to my body. Now I am a yoga teacher n Yoga therapist taking online classes n personal training. Very good experience I had with Yog mudra which added more knowledge to my experience n yogic training. Thank You 🤩🙏",
        "I have been attending Yoga Mudra Fitness Classes for a few months now, and the experience has been truly transformative. The sessions are well-structured, incorporating stretching, breathwork, meditation, and asanas that helps to improve flexibility and strength. A great place for anyone looking to deepen their yoga practice!\" KUDOS to GANESH SIR......"
    ];

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-primary font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        Community Voices
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6"
                    >
                        Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Students</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-text-muted text-lg"
                    >
                        Discover how Yoga Mudra Fitness Classes have transformed lives. Real experiences from our dedicated practitioners.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-brand-bg-alt p-1.5 rounded-full border border-brand-text/5 flex shadow-lg">
                        <button
                            onClick={() => setActiveTestimonialTab('written')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTestimonialTab === 'written' ? 'bg-gradient-primary text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)]' : 'text-brand-text-muted hover:text-brand-text'}`}
                        >
                            Written Reviews
                        </button>
                        <button
                            onClick={() => setActiveTestimonialTab('video')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTestimonialTab === 'video' ? 'bg-gradient-primary text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)]' : 'text-brand-text-muted hover:text-brand-text'}`}
                        >
                            Video Testimonials
                        </button>
                    </div>
                </div>

                {/* Video Content */}
                <AnimatePresence mode="wait">
                    {activeTestimonialTab === 'video' && (
                        <motion.div
                            key="video-testimonials"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
                        >
                            {videoTestimonials.map((video, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                                    className="group relative"
                                >
                                    {/* Glassmorphic Shadow Frame */}
                                    <div className="absolute inset-0 bg-brand-primary/20 to-transparent rounded-[2rem] transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 opacity-50 blur-xl"></div>

                                    <div className="relative bg-white p-3 rounded-[2rem] shadow-xl border border-brand-text/5 overflow-hidden group-hover:shadow-[0_20px_40px_rgba(22,163,74,0.1)] transition-all duration-500">
                                        {/* Video Container */}
                                        <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black mb-4">
                                            <video
                                                className="w-full h-full object-contain"
                                                controls
                                                preload="metadata"
                                                controlsList="nodownload"
                                            >
                                                <source src={video.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        {/* Reviewer Info */}
                                        <div className="px-3 pb-2 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
                                                {video.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-text leading-tight">{video.name}</p>
                                                <div className="flex text-yellow-500 mt-1 space-x-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTestimonialTab === 'written' && (
                        <motion.div
                            key="written-testimonials"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        >
                            {writtenReviews.map((review, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="bg-brand-bg-alt border border-brand-text/5 p-8 md:p-10 rounded-[2rem] shadow-lg hover:border-brand-primary/30 hover:shadow-[0_15px_30px_rgba(22,163,74,0.1)] transition-all duration-300 relative group"
                                >
                                    <div className="absolute top-6 right-8 text-6xl text-brand-secondary/10 font-serif leading-none group-hover:text-brand-primary/20 transition-colors duration-300">"</div>
                                    <div className="flex text-brand-primary mb-6 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current drop-shadow-md" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-brand-text-muted leading-relaxed font-medium relative z-10 text-[15px]">
                                        {review}
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-brand-text/5 flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-bg to-brand-bg-alt border border-brand-primary/20 flex items-center justify-center text-brand-text font-bold shadow-inner flex-shrink-0">
                                            S
                                        </div>
                                        <div>
                                            <h4 className="text-brand-text font-bold text-sm">Student</h4>
                                            <p className="text-brand-text-muted text-xs uppercase tracking-widest mt-0.5">Yoga Mudra</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default YogaTestimonials
