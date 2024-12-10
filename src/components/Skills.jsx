import React, { useState } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus, SiCsharp, SiDotnet, SiFlask } from "react-icons/si";
import { SiTensorflow } from 'react-icons/si';  
import { FaPython, FaDocker } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from "framer-motion";
import "./Skills.css";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const iconSize = 'text-5xl';
  const techList = [
    { icon: SiCplusplus, name: "C++", color: "text-blue-600", size: iconSize, duration: 2 },
    { icon: SiCsharp, name: "C#", color: "text-purple-600", size: iconSize, duration: 2.5 },
    { icon: SiDotnet, name: ".NET", color: "text-purple-500", size: iconSize, duration: 3 },
    { icon: FaPython, name: "Python", color: "text-yellow-500", size: iconSize, duration: 4 },
    { icon: SiFlask, name: "Flask", color: "text-slate-500", size: iconSize, duration: 5 },
    { icon: DiMsqlServer, name: "SQL Server", color: "text-red-600", size: iconSize, duration: 1.5 },
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400", size: iconSize, duration: 6 },
    { icon: RiReactjsLine, name: "React", color: "text-cyan-400", size: iconSize, duration: 3.2 },
    { icon: FaDocker, name: "Docker", color: "text-blue-400", size: iconSize, duration: 4.3 },
    { icon: RiFlutterFill, name: "Flutter", color: "text-blue-500", size: iconSize, duration: 3 },
    { icon: SiTensorflow, name: "Tensorflow", color: "text-red-500", size: iconSize, duration: 2}
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        className='my-20 text-center text-4xl'
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.5}}
      >
        Technologies
      </motion.h1>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity:0, x:-100}}
        transition={{duration: 1}}
        className='flex flex-col items-center justify-center gap-4'>
        {/* Icons */}
        <div className='flex flex-wrap items-center justify-center gap-8'>
          {techList.map((tech, index) => (
            <div
              key={index}
              className='flex flex-col items-center'
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                variants={iconVariant(tech.duration-1)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
              >
                <tech.icon className={`${tech.size} ${tech.color}`} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Persistent Space for Hover Text */}
        <div
          className='mt-4 text-lg text-slate-500 font-semibold transition-opacity duration-300 ease-in-out'
          style={{ minHeight: '30px' }} // Reserve space for the text
        >
          {hoveredTech && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {hoveredTech}
            </motion.span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
