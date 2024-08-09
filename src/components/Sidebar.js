import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Button from '../components/Button'; 

const Sidebar = () => {
  const handleButtonClick = (section) => {
    if (section === 'contact') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="sidebar">
      <img src={avatar} alt="Helen Medeiros" />
      <h2>Helen Medeiros</h2>
      <h3>UI/UX Designer & Full Stack Developer</h3>
      
      {/* Botões de Redes Sociais */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
      
      {/* Botão para Contato */}
      <div>
      <Button onClick={() => handleButtonClick('contact')} text="Let's Work Together" />
    </div>
    </div>
  );
};

export default Sidebar;
