"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft } from '../utils/motion'

const nav = () => {
  const textShadowStyle = {
    textShadow: '0 0 4px rgba(255, 255, 255, 1)',
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center  w-full z-[20]"
    >
      <motion.nav
        className="flex justify-between items-center bg-black"
        variants={slideInFromTop}
      >
        <div className="flex justify-between">
          <a href="#" className="text-white text-xl p-10">
            Home
          </a>
          <a href="#" className="text-white p-10 text-xl" >
            Contact
          </a>
          <a href="#" className="text-white text-2xl font-bold p-10" >
            Logo
          </a>
          <a href="#" className="text-white p-10 text-xl" >
            Testimonials
          </a>
          <a href="#" className="text-white p-10 text-xl" >
            About
          </a>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default nav;
