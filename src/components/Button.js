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
      {text}
    </button>
  );
};

export default Button;
