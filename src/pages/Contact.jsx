import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, email, service, message } = formData;

        // Format the message
        const textMessage = `*New Enquiry from Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Service:* ${service || 'General Enquiry'}\n*Message:* ${message}`;

        // WhatsApp URL
        const whatsappUrl = `https://wa.me/918097923924?text=${encodeURIComponent(textMessage)}`;

        // Mailto URL
        const mailtoUrl = `mailto:yoganeshhealthinstitute@gmail.com?subject=New Enquiry from ${name}&body=${encodeURIComponent(textMessage.replace(/\*/g, ''))}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Trigger mailto in current tab (or small delay to ensure WhatsApp opens)
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 500);

        setIsSubmitted(true);

        // Reset form after a delay
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        }, 5000);
    };

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
                                <div className="bg-brand-bg-alt border border-brand-text/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute inset-0 z-20 bg-brand-bg-alt/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10"
                                        >
                                            <FaCheckCircle className="text-6xl text-[#25D366] mb-6" />
                                            <h3 className="text-3xl font-bold mb-4">Request Sent!</h3>
                                            <p className="text-brand-text-muted text-lg mb-8">
                                                Redirecting you to WhatsApp and your Email client to finalize the message.
                                            </p>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="px-8 py-3 bg-brand-text text-white rounded-full font-bold hover:bg-brand-red-light transition-colors"
                                            >
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    )}

                                    <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Full Name <span className="text-brand-red-light">*</span></label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Phone Number <span className="text-brand-red-light">*</span></label>
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    type="tel"
                                                    className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors"
                                                    placeholder="+91 84229 23924"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Email Address <span className="text-brand-red-light">*</span></label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Preferred Service</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors appearance-none"
                                            >
                                                <option value="">Select a division (Optional)</option>
                                                <option value="Health Institute">Health Institute</option>
                                                <option value="Yoga Classes">Yoga Classes</option>
                                                <option value="Fitness Classes">Fitness Classes</option>
                                                <option value="Wellness Center">Wellness Center</option>
                                                <option value="Dance Classes">Dance Classes</option>
                                                <option value="Music Classes">Music Classes</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-brand-text-muted">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="5"
                                                className="w-full bg-brand-bg border border-brand-text/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-red-light transition-colors"
                                                placeholder="How can we assist you?"
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="w-full py-4 rounded-xl bg-gradient-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(192,0,0,0.4)] transition-all">
                                            Submit Message
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
                                                    Nms Icon, 901,902, PLOT NO. 194,<br />
                                                    near Bamandongri Railway Station,<br />
                                                    Sector 19, Ulwe, Navi Mumbai - 410206
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light text-xl shrink-0 mr-6">
                                                <FaPhoneAlt />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                                                <a href="tel:+918097923924" className="text-brand-text-muted hover:text-brand-text transition-colors block">+91 8097923924</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-red-dark/10 flex items-center justify-center text-brand-red-light text-xl shrink-0 mr-6">
                                                <FaEnvelope />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Email Address</h4>
                                                <a href="mailto:yoganeshhealthinstitute@gmail.com" className="text-brand-text-muted hover:text-brand-text transition-colors block">yoganeshhealthinstitute@gmail.com</a>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <a
                                                href="https://wa.me/918097923924"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#25D366]/10 text-[#25D366] font-bold border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-colors"
                                            >
                                                <FaWhatsapp className="text-2xl" /> <span>Chat with us instantly</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-80 rounded-[2rem] overflow-hidden shadow-xl border border-brand-text/5 group relative">
                                    <div className="absolute inset-0 bg-brand-red-dark/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10 mix-blend-color"></div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693190868846!2d73.02325011119523!3d18.968080282121045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ba8109ed8d%3A0x6b29ebd836d5b038!2sNMS%20ICON!5e0!3m2!1sen!2sin!4v1710849202157!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="YOGANESH Location Map"
                                    ></iframe>
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
