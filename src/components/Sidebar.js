import React, { useEffect, useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Button from '../components/Button';

const Sidebar = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('sidebar-enter');

    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (section) => {
    if (section === 'contact') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`sidebar ${animationClass} flex flex-col items-center p-4 w-full sm:w-11/12 md:w-4/5 lg:w-96 max-w-lg mx-auto`}>
      <img 
        src={avatar} 
        alt="Helen Medeiros" 
        className="sidebar__avatar mb-6 filter grayscale w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg"
      />

      <h2 className="sidebar__title text-primary hover:text-[#836285] transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90 text-lg md:text-xl">
        Helen Medeiros
      </h2>
      
      <h3 className="sidebar__subtitle text-secondary hover:text-[#836285] transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90 text-sm md:text-lg">
        UI/UX Designer & Full Stack Developer
      </h3>
      
      <p className="text-sm md:text-base">Based in: Viana do Castelo</p> 

      {/* Botões de Redes Sociais */}
      <div className="sidebar__social-icons flex justify-center space-x-4 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-2"
        >
          <FaFacebook size="1.5em" className="text-gray-600 transition-colors duration-500 group-hover:text-[#836285]" />
          <span className="absolute inset-0 rounded-lg border border-gray-300 opacity-0 transform scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#836285]"></span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-2"
        >
          <FaTwitter size="1.5em" className="text-gray-600 transition-colors duration-500 group-hover:text-[#836285]" />
          <span className="absolute inset-0 rounded-lg border border-gray-300 opacity-0 transform scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#836285]"></span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-2"
        >
          <FaLinkedin size="1.5em" className="text-gray-600 transition-colors duration-500 group-hover:text-[#836285]" />
          <span className="absolute inset-0 rounded-lg border border-gray-300 opacity-0 transform scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#836285]"></span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-2"
        >
          <FaInstagram size="1.5em" className="text-gray-600 transition-colors duration-500 group-hover:text-[#836285]" />
          <span className="absolute inset-0 rounded-lg border border-gray-300 opacity-0 transform scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#836285]"></span>
        </a>
      </div>

      {/* Botão para Contato */}
      <div className="sidebar__contact-btn mt-8">
        <Button onClick={() => handleButtonClick('contact')} text="Let's Work Together" />
      </div>

      {/* Links para PT e EN */}
      <div className="mt-4 flex space-x-2">
        <a href="/pt" className="text-gray-600 font-bold hover:text-[#836285] transition-colors duration-300">PT</a>
        <span className="text-gray-600 font-bold">|</span>
        <a href="/" className="text-gray-600 font-bold hover:text-[#836285] transition-colors duration-300">EN</a>
      </div>
    </div>
  );
};

export default Sidebar;
