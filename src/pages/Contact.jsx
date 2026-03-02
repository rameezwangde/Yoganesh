import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Let's Get You Started</title>
                <meta name="description" content="Get in touch with YOGANESH. Book a trial, enquire about our divisions, or locate our wellness facility." />
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
                        <h1 className="text-5xl font-extrabold text-brand-text mb-6">Let's Get You <span className="text-gradient">Started</span></h1>
                        <p className="text-brand-text-muted max-w-2xl mx-auto">Whether you're ready to transform or just have a few questions, our team is here for you.</p>
                    </motion.div>
                </section>

                {/* Split Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Left Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="bg-brand-bg-alt border border-brand-text/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                                    <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                                    <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Full Name <span className="text-brand-red-light">*</span></label>
                                                <input required type="text" className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Phone Number <span className="text-brand-red-light">*</span></label>
                                                <input required type="tel" className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="+1 234 567 890" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Email Address <span className="text-brand-red-light">*</span></label>
                                            <input required type="email" className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="john@example.com" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Preferred Service</label>
                                            <select className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors appearance-none">
                                                <option value="">Select a division (Optional)</option>
                                                <option value="health">Health Institute</option>
                                                <option value="yoga">Yoga Classes</option>
                                                <option value="fitness">Fitness Classes</option>
                                                <option value="wellness">Wellness Center</option>
                                                <option value="dance">Dance Classes</option>
                                                <option value="music">Music Classes</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Message</label>
                                            <textarea rows="5" className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors" placeholder="How can we assist you?"></textarea>
                                        </div>

                                        <button type="submit" className="w-full py-4 rounded-xl bg-gradient-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(192,0,0,0.4)] transition-all">
                                            Submit Request
                                        </button>
                                    </form>
                                </div>
                            </motion.div>

                            {/* Right Details & Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 flex flex-col justify-between"
                            >
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light text-xl shrink-0 mr-6">
                                                <FaMapMarkerAlt />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                                <p className="text-brand-text-muted leading-relaxed">
                                                    123 Wellness Avenue,<br />
                                                    Fitness District, Floor 2<br />
                                                    City, Country 10001
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light text-xl shrink-0 mr-6">
                                                <FaPhoneAlt />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                                                <a href="tel:+918779241367" className="text-brand-text-muted hover:text-brand-text transition-colors block">+91 877 924 1367</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light text-xl shrink-0 mr-6">
                                                <FaEnvelope />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Email Address</h4>
                                                <a href="mailto:info@yoganesh.com" className="text-brand-text-muted hover:text-brand-text transition-colors block">info@yoganesh.com</a>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <a
                                                href="https://wa.me/918779241367"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#25D366]/10 text-[#25D366] font-bold border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-colors"
                                            >
                                                <FaWhatsapp className="text-2xl" /> <span>Chat with us instantly</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="w-full h-64 bg-[#E2E8F0] rounded-3xl border border-brand-text/10 flex items-center justify-center overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-brand-bg opacity-40 group-hover:opacity-10 transition-opacity"></div>
                                    <span className="text-brand-text/50 font-bold uppercase tracking-widest relative z-10 flex flex-col items-center">
                                        <FaMapMarkerAlt className="text-3xl mb-2 text-brand-red-dark" />
                                        Interactive Map Placeholder
                                    </span>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contact
