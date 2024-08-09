import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="mb-8">
            <h2 className="text-3xl font-bold">Contact</h2>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" required className="p-2 border border-gray-300 rounded"/>
                <input type="email" placeholder="Your Email" required className="p-2 border border-gray-300 rounded"/>
                <textarea placeholder="Your Message" required className="p-2 border border-gray-300 rounded"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
