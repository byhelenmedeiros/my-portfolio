import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUserAlt, FaEnvelope, FaCommentAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            await axios.post('/api/send-email', { name, email, message });
            setName('');
            setEmail('');
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
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <motion.div
                            className="absolute top-3 right-3 text-gray-400"
                            animate={{ opacity: name ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaUserAlt />
                        </motion.div>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <motion.div
                            className="absolute top-3 right-3 text-gray-400"
                            animate={{ opacity: email ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaEnvelope />
                        </motion.div>
                    </div>
                    <div className="relative">
                        <textarea
                            placeholder="Your Message"
                            required
                            className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <motion.div
                            className="absolute top-3 right-3 text-gray-400"
                            animate={{ opacity: message ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaCommentAlt />
                        </motion.div>
                    </div>
                    <button
                        type="submit"
                        className={`flex items-center justify-center bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : <><FaPaperPlane className="mr-2" /> Send Message</>}
                    </button>
                    {status && (
                        <motion.p
                            className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {status.includes('successfully') ? <FaCheckCircle className="inline mr-2" /> : <FaExclamationCircle className="inline mr-2" />}
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
            <div className="flex items-center justify-center lg:w-1/2 lg:order-2">
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
