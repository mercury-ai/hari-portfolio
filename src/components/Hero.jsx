import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/hariProfile2.jpg";
import {motion} from "framer-motion";

const container = (initial, final, delay) => ({
    hidden: { x: initial, opacity: 0 },
    visible: {
      x: final,
      opacity:1,
      transition: {
        duration: 0.5,
        delay: delay
      }
    }
});


export const Hero = () => {
  
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 px-4 sm:px-6 md:px-8 lg:px-12'> {/* Added padding */}
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'> {/* Maintained original styles, with extra padding */}
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-0'> {/* Centered text for mobile */}
            {/* Name with typing effect */}
            <motion.h1 
              variants={container(-100, 0, 0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Hari Govind V
            </motion.h1>
            
            <motion.span 
              variants={container(-100, 0, 0.5)}
              initial='hidden'
              animate='visible'
              style={{ lineHeight: 1.3 }}
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Software Engineer
            </motion.span>
      
            <motion.p 
               variants={container(-100, 0, 1)}
               initial='hidden'
               animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tight'>
                {HERO_CONTENT}
            </motion.p>
          
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 lg:p-8 flex justify-center px-4 sm:px-6 md:px-8 lg:px-0'> {/* Added padding without removing original styles */}
          <motion.img 
            initial= {{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={profilePic} 
            alt='Hari' 
            className='object-cover rounded-lg h-64 w-64 md:h-80 md:w-80 lg:h-[550px] lg:w-[550px]' 
          /> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
