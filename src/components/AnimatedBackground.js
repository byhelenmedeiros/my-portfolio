import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [circlePosition, setCirclePosition] = useState({ x: '50%', y: '50%' });
  const [circleSize, setCircleSize] = useState(300);
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setCirclePosition({ x: `${x}%`, y: `${y}%` });

    // Add a new circle to the trail with a slight delay
    setTrail((prevTrail) => [
      { x: clientX, y: clientY, size: circleSize * 0.5 },
      ...prevTrail.slice(0, 10), // Limit the number of circles in the trail
    ]);

    // Adjust circle size based on mouse speed
    const speed = Math.sqrt((clientX - window.innerWidth / 2) ** 2 + (clientY - window.innerHeight / 2) ** 2);
    setCircleSize(Math.min(300 + speed * 0.1, window.innerWidth * 0.5)); // Prevent size from exceeding viewport
  };

  useEffect(() => {
    const handleResize = () => {
      setCircleSize(300); // Reset size on resize
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-gray-900 overflow-hidden z-[-1]">
      {/* Rastro do mouse */}
      {trail.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-[#CFA7CA] via-[#C07299] to-[#23699D] opacity-40"
          style={{
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            filter: 'blur(100px)',
            top: circle.y,
            left: circle.x,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            transition: 'width 0.2s ease, height 0.2s ease',
          }}
        />
      ))}

      {/* Círculo principal */}
      <div
        className="absolute rounded-full bg-gradient-to-r from-[#CFA7CA] via-[#C07299] to-[#23699D] opacity-50"
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          filter: 'blur(100px)',
          top: circlePosition.y,
          left: circlePosition.x,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
