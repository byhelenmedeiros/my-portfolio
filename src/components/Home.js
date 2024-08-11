import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa'; // Importa o ícone de coração
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="relative">
      <section
        id="home"
        className="home__header flex flex-col justify-center items-center text-white px-6"
      >
        <Header />

        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.p
  className="text__small text-xs sm:text-sm md:text-base lg:text-lg  text-center mb-2 sm:mb-4 md:mb-6"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  Full stack developer
</motion.p>

          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transforming ideas into unforgettable visual experiences
          </motion.h1>
          <motion.p
            className="home__subtitle text-base sm:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Passionate about creating interfaces that captivate and engage.
          </motion.p>
        </motion.div>
      </section>

      {/* Heart icon with rotating text */}
      <div className="absolute top-4 left-4 flex items-center justify-center">
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* SVG for circular text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            {/* Define the circular path */}
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

            {/* Circular Text */}
            <text fontSize="16" fill="white">
              <textPath href="#circlePath" startOffset="5%">
                Good to see you here! Good to see you here!
              </textPath>
            </text>
          </svg>

          {/* Heart Icon in the center */}
          <FaHeart
            className="absolute text-white"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
