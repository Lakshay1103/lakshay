"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { slideInFromTop } from '../utils/motion';

const Nav = () => {
  const textShadowStyle = {
    textShadow: '0 0 4px rgba(255, 255, 255, 1)',
  };

  return (
    <div className='fixed top-0 left-0 bg-transparent z-50 flex flex-col justify-center items-center w-full mt-2'>
      <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center'>
        <motion.nav 
        className='flex justify-between items-center rounded-full' 
        variants={slideInFromTop}
        style={{background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))'}}>
          <div className='flex justify-between items-center py-2'>
            <Link to='home' smooth={true} duration={500} className='text-white text-xl p-2 mr-10 ml-2' style={{ cursor: 'pointer' }}>
              Home
            </Link>

            <Link to='testimonials' smooth={true} duration={500} className='text-white text-xl p-2 mx-10' style={{ cursor: 'pointer' }}>
              Testimonials
            </Link>
            <Link to='lg' smooth={true} duration={500} className='text-white text-4xl mx-10' style={{ cursor: 'pointer' }}>
              LG
            </Link>
            <Link to='about' smooth={true} duration={500} className='text-white text-xl p-2 mx-10' style={{ cursor: 'pointer' }}>
              About
            </Link>

            <a href='https://cal.com/lakshaygoel/work-with-me' target='_blank' className='text-white text-xl px-3 py-2 ml-10 mr-2 bg-[#32CD32] rounded-full' style={{ cursor: 'pointer' }}>
              Contact
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Nav;
