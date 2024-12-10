import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <motion.div 
            whileInView={{ opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='flex flex-shrink-0 items-center text-white text-2xl font-bold' 
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
            <span className='mx-2 font-thin text-purple-300'>Hg</span>
        </motion.div>
        <motion.div 
            whileInView={{ opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='m-8 flex items-center justify-center gap-4 text-2xl'
        >
            <a href="https://github.com/mercury-ai" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hari-govind-v-a537a81aa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </motion.div>
    </nav>
  )
}

export default Navbar;
