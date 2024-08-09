import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import '../styles/global.css'; 

const NavLink = ({ href, isActive, onClick, children }) => (
  <a
    href={href}
    className={classNames(
      'inline-flex items-center justify-center rounded-full transition-all duration-300 py-1 px-3 text-lg md:text-xl lg:text-2xl',
      {
        'text-white border border-gray-300': isActive,
        'text-gray-400 hover:text-white': !isActive,
      }
    )}
    onClick={onClick}
  >
    {children}
  </a>
);

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    const element = document.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={classNames(
        'fixed top-0 w-full font-syne transition-all duration-300',
        {
          'bg-transparent': !scrolled,
          'bg-opacity-30 backdrop-blur-md border border-gray-200': scrolled,
        }
      )}
      style={{ 
        left: '0', 
        right: '0', 
        marginLeft: 'auto', 
        marginRight: 'auto'
      }}
    >
      <nav className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 h-16 md:h-20 lg:h-24">
        <NavLink
          href="#home"
          isActive={activeLink === 'home'}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </NavLink>
        <NavLink
          href="#portfolio"
          isActive={activeLink === 'portfolio'}
          onClick={() => handleLinkClick('portfolio')}
        >
          Portfolio
        </NavLink>
        <NavLink
          href="#about"
          isActive={activeLink === 'about'}
          onClick={() => handleLinkClick('about')}
        >
          About Me
        </NavLink>
        <NavLink
          href="#resume"
          isActive={activeLink === 'resume'}
          onClick={() => handleLinkClick('resume')}
        >
          Resume
        </NavLink>
        <NavLink
          href="#contact"
          isActive={activeLink === 'contact'}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
