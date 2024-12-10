import React from 'react'
import { CONTACT } from '../constants'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity:0, y:-100}}
          transition={{duration: 0.5}}
        >
           <h2 className='my-10 text-center text-4xl'>Contact Me</h2>
        </motion.div>
       
        <div className='text-center tracking-tighter'>
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{ opacity:0, x:-100}}
              transition={{duration: 0.3}}
              whileHover={{ scale: 1.2, color: "#67e8f9" }}
            >
              <a href={`tel:${CONTACT.phoneNo}`} className='my-4 flex items-center justify-center'>
                <FaPhoneAlt className='mr-2' /><span>{CONTACT.phoneNo}</span>
              </a>
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{ opacity:0, x:100}}
              transition={{duration: 0.3}}
              whileHover={{ scale: 1.2, color: "#67e8f9" }}
            >
               <a href={`mailto:${CONTACT.email}`} className='flex items-center justify-center'>
                <FaEnvelope className='mr-2' /> <span>{CONTACT.email}</span>
              </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
