import React from "react";
import { motion } from "framer-motion";

const HelloSVG = () => {
  const textVariants = {
    hidden: { fillOpacity: 0 },
    visible: {
      fillOpacity: 1,
      transition: {
        duration: 3, // Duration for the fade-in effect
        ease: "easeInOut",
        repeat: Infinity, // Loop the animation
        repeatType: "loop",
        repeatDelay: 1, // Pause before restarting
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-neutral-950 h-screen">
      <svg
        className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500" /* Maintain a 500x500 canvas */
        width="500" /* Explicitly set width */
        height="500" /* Explicitly set height */
      >
        {/* Animated Hello Text */}
        <motion.text
          x="50%" /* Center horizontally */
          y="50%" /* Center vertically */
          textAnchor="middle" /* Align text to the center */
          dominantBaseline="middle" /* Vertically align text */
          fontSize="64" /* Scaled font size */
          fill="#67e8f9" /* Cyan-300 equivalent */
          fontFamily="'Brush Script MT', cursive" /* Cursive font style */
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          hello
        </motion.text>
      </svg>
    </div>
  );
};

export default HelloSVG;
