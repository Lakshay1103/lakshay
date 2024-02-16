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
        <motion.nav className='flex justify-between items-center bg-black rounded-full' variants={slideInFromTop}>
          <div className='flex justify-between items-center px-1 py-2'>
            <Link to='home' smooth={true} duration={500} className='text-white text-xl p-2 mx-10'>
              Home
            </Link>
            <Link to='about' smooth={true} duration={500} className='text-white text-xl p-2 mx-10'>
              About
            </Link>
            <Link to='lg' smooth={true} duration={500} className='text-white text-3xl mx-10'>
              LG
            </Link>
            <Link to='testimonials' smooth={true} duration={500} className='text-white text-xl p-2 mx-10'>
              Testimonials
            </Link>
            <a href='https://cal.com/lakshaygoel/work-with-me' target='_blank' className='text-white text-xl px-3 py-2 mx-10 bg-[#32CD32] rounded-full'>
              Contact
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Nav;
