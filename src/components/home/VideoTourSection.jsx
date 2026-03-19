import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import TiltWrapper from './../ui/TiltWrapper'

const VideoTourSection = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)

    // Ensure it attempts to play on mount securely
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented by browser, waiting for user interaction.", error)
                setIsPlaying(false)
            });
        }
    }, [])

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = (e) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4 px-4 py-1.5 border border-brand-red-dark/20 rounded-full bg-brand-red-dark/5 backdrop-blur-sm"
                    >
                        <span className="text-brand-red-light font-bold text-xs uppercase tracking-widest flex items-center">
                            <span className="w-2 h-2 rounded-full bg-brand-red-light mr-2 animate-pulse"></span>
                            Virtual Walkthrough
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight drop-shadow-sm"
                    >
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Energy</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed"
                    >
                        Step inside our state-of-the-art facility. Discover a space designed to elevate your mind, body, and soul.
                    </motion.p>
                </div>

                <TiltWrapper intensity={15} scaleOnHover={1.03}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brand-text/10 group bg-black"
                    >
                        {/* Glowing Aura Behind Video */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-red-light via-brand-red-dark to-brand-red-light rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>

                        <div 
                            className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-video flex items-center justify-center cursor-pointer"
                            onClick={togglePlay}
                        >
                            <video 
                                ref={videoRef}
                                src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/05/04-INTERIOR-1.mp4"
                                className="w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false} // Custom controls are used
                                controlsList="nodownload nofullscreen"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            ></video>
                            
                            {/* Custom Controls Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" onClick={e => e.stopPropagation()}>
                                <div className="bg-black/60 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 flex items-center space-x-6 shadow-2xl">
                                    <button 
                                        onClick={togglePlay}
                                        className="text-white hover:text-brand-red-light transition-colors transform hover:scale-110 flex items-center justify-center"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl pl-1" />}
                                    </button>
                                    
                                    <div className="h-4 w-[1px] bg-white/30"></div>

                                    <button 
                                        onClick={toggleMute}
                                        className="text-white hover:text-brand-red-light transition-colors transform hover:scale-110"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                    >
                                        {isMuted ? <FaVolumeMute className="text-xl" /> : <FaVolumeUp className="text-xl" />}
                                    </button>
                                </div>
                            </div>

                            {/* Large Play Overlay when paused */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10 transition-all duration-300 pointer-events-none">
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative"
                                    >
                                        <div className="absolute inset-0 rounded-full border border-white/50 animate-[ping_2s_ease-in-out_infinite]"></div>
                                        <FaPlay className="text-white text-3xl pl-2 drop-shadow-2xl" />
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </TiltWrapper>
            </div>
        </section>
    )
}

export default VideoTourSection
