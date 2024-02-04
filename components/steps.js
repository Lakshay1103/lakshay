"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromBottom, slideInFromRight } from '../utils/motion'


const steps = () => {
    return (
        <motion.div
            className='flex flex-col justify-center align-center bg-cover bg-center h-screen'
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/bg-svg-1.png')" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        >

            <div className=' text-white text-[52px] text-center font-normal'>Our <span className='text-[#32CD32]'>3-Step System</span> for Seamless <br /> Social Media Growth</div>

            <div className='text-white text-xl text-center font-light'>
                Unlock the potential of your social media journey with our <br /> proven system!
            </div>

        </motion.div>
    )
}

export default steps
