import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            await axios.post('/api/send-email', { name, email, subject, message });
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setStatus('Message sent successfully!');
            setShowThankYou(true);
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative p-8 md:p-20 text-white flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className={`flex flex-col bg-gray-800 rounded-lg border border-gray-600 p-6 md:p-8 shadow-lg transition-transform ${showThankYou ? 'translate-x-full' : ''} lg:w-1/2 lg:ml-8 lg:order-1`}>
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <motion.form
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                        <select
                            id="subject"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="" disabled>Select Subject</option>
                            <option value="Inquiry">Inquiry</option>
                            <option value="Quote">Quote</option>
                            <option value="Pricing">Pricing</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`glass-button-contact flex items-center justify-center p-2.5 rounded transition-colors duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {status && (
                        <motion.p
                            className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {status}
                        </motion.p>
                    )}
                </motion.form>
                {showThankYou && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white text-gray-900 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold">Thank You!</h2>
                    </motion.div>
                )}
            </div>

            {/* Rotating Text Section */}
            <div className="flex items-center justify-center lg:w-1/2 lg:order-2 mt-10 lg:mt-0">
                <motion.div
                    className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 10,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="absolute w-full h-full"
                    >
                        <path
                            id="circlePath"
                            d="
                                M 50, 50
                                m -40, 0
                                a 40,40 0 1,1 80,0
                                a 40,40 0 1,1 -80,0
                            "
                            fill="none"
                        />
                        <text fontSize="10" fill="white">
                            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                LET'S WORK TOGETHER! LET'S WORK TOGETHER! LET'S WORK TOGETHER!
                            </textPath>
                        </text>
                    </svg>
                    <FaEnvelope
                        className="absolute text-white text-6xl"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
