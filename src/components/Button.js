import React, { useState } from 'react';
import '../styles/main.css';

const Button = ({ onClick, text }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseDown = () => {
    setIsAnimating(true);
  };

  const handleMouseUp = () => {
    setIsAnimating(false);
  };

  return (
    <button
      className={`glass-button ${isAnimating ? 'animate' : ''}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="button-text">{text}</span>
      <svg className="click-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0L9 6H15L12 0Z" />
        <rect x="10" y="10" width="4" height="4" />
      </svg>
    </button>
  );
};

export default Button;
