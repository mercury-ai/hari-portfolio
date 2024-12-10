import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text, delay = 0, speed = 0.05, showCursor = false, onComplete }) => {
    useEffect(() => {
        if (onComplete) {
          // Adjust the typing duration based on speed and delay
          const typingDuration = text.length * speed * 1000 + delay * 1000;
          const timeout = setTimeout(onComplete, typingDuration);
          return () => clearTimeout(timeout);
        }
      }, [text, speed, delay, onComplete]);
      
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: speed,
          },
        },
      }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}>
          {char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          className="ml-1"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
        >
          !
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypingText;
