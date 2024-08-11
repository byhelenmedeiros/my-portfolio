import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    const element = document.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.hamburger-menu')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <header className={classNames('header', { 'scrolled': scrolled })}>
      <div className="nav-links flex items-center space-x-4 md:space-x-6 lg:space-x-8 ">
        {['home', 'portfolio', 'about', 'resume', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={classNames(
              'nav-link text-lg md:text-xl lg:text-2xl',
              {
                'active': activeLink === section,
                'inactive': activeLink !== section,
              }
            )}
            onClick={() => handleLinkClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          {['home', 'portfolio', 'about', 'resume', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={classNames(
                'nav-link text-lg md:text-xl lg:text-2xl',
                {
                  'active': activeLink === section,
                  'inactive': activeLink !== section,
                }
              )}
              onClick={() => handleLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <div className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
            <span className="ml-2">{darkMode ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
