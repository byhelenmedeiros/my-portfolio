import React from 'react';
import { motion } from 'framer-motion';

const words = [
  "Innovating",
  "Designing",
  "Building",
  "Creating",
  "Transforming"
];

const phrase = "Transforming your vision into reality";

const WordAnimation = () => {
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="relative text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="relative">
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {phrase}
            </motion.span>
            <div className="absolute inset-0 flex justify-center items-center">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="block"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 1, delay: index * 1.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WordAnimation;
