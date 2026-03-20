import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'

const YogaTimetable = () => {
    return (
        <div className="mt-32 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                >
                    Time Table
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight"
                >
                    Time Table <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">As Follow</span>
                </motion.h2>
                <div className="flex justify-center mb-8">
                    <div className="h-[1px] w-12 bg-gradient-to-l from-brand-red-light to-transparent"></div>
                    <FaLeaf className="text-brand-red-light text-xl mx-4" />
                    <div className="h-[1px] w-12 bg-gradient-to-r from-brand-red-light to-transparent"></div>
                </div>
            </div>

            {/* Timetable Container */}
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Monday To Saturday */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group"
                >
                    <div className="md:w-1/4 bg-gradient-to-br from-brand-red-light to-brand-red-dark p-8 flex items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] transform translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 leading-tight">
                            Monday<br /><span className="text-sm font-medium tracking-widest uppercase opacity-80 mt-2 block">To</span>Saturday
                        </h3>
                    </div>
                    <div className="md:w-3/4 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-3 gap-4 bg-brand-bg-alt">
                        {[
                            ["04:00 AM - 05:00 AM", "05:00 AM - 06:00 AM"],
                            ["06:00 AM - 07:00 AM", "07:00 AM - 08:00 AM"],
                            ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM"],
                            ["04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM"],
                            ["06:00 PM - 07:00 PM", "07:30 PM - 08:30 PM"],
                            ["08:30 PM - 09:30 PM", "09:30 PM - 10:30 PM"]
                        ].map((block, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-5 border border-brand-text/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/card">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-red-light to-brand-red-dark opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                <div className="flex flex-col space-y-3">
                                    {block.map((time, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red-light/50 group-hover/card:bg-brand-red-light transition-colors"></div>
                                            <span className="text-brand-text font-bold text-[13px] sm:text-sm">{time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* SUNDAY */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group"
                >
                    <div className="md:w-1/4 bg-gradient-to-br from-brand-red-light/80 to-brand-red-dark/80 p-8 flex items-center justify-center text-center relative overflow-hidden">
                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 tracking-wider">
                            SUNDAY
                        </h3>
                    </div>
                    <div className="md:w-3/4 p-6 md:p-8 flex flex-wrap gap-4 bg-brand-bg-alt items-center">
                        {[
                            "04:00 AM - 05:00 AM",
                            "05:00 AM - 06:00 AM",
                            "06:00 AM - 07:00 AM",
                            "07:00 AM - 08:00 AM",
                            "08:00 AM - 09:00 AM"
                        ].map((time, idx) => (
                            <div key={idx} className="bg-white rounded-xl px-5 py-3 border border-brand-text/5 shadow-sm hover:border-brand-red-light/50 hover:shadow-md transition-all flex items-center gap-2">
                                <span className="text-brand-text font-bold text-[13px] sm:text-sm whitespace-nowrap">{time}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ZUMBA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-text/5 hover:border-brand-red-light/30 transition-all duration-500 group shadow-brand-red-light/5"
                >
                    <div className="md:w-1/4 bg-brand-red-light p-8 flex items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                        <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 tracking-widest">
                            ZUMBA
                        </h3>
                    </div>
                    <div className="md:w-3/4 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-brand-bg-alt items-center">
                        {[
                            { day: "Tuesday", time: "07:00 PM - 08:00 PM" },
                            { day: "Thursday", time: "07:00 PM - 08:00 PM" },
                            { day: "Saturday", time: "07:00 PM - 08:00 PM" }
                        ].map((slot, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-5 border border-brand-text/5 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
                                <div className="text-brand-red-light font-black uppercase text-[11px] sm:text-xs tracking-[0.2em] mb-2">{slot.day}</div>
                                <div className="text-brand-text font-bold text-[13px] sm:text-sm">{slot.time}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default YogaTimetable
