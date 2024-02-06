"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromBottom, slideInFromRight } from '../utils/motion'

const heroNew = () => {
    return (

        <motion.div
            className="bg-cover bg-center h-[500px]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero-bg.jpg')" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        >

            <div className='flex flex-col items-center justify-center h-[500px]'>

                <div className='text-white text-[58px] text-center font-extrabold'>Unleash The Power Of Marketing</div>
                <div className='text-white text-[51px] text-center font-extrabold -mt-5'>For personal brands, creators</div>

                <div className='text-white text-2xl text-center font-normal w-2/3 mt-4'>Elevate your brand with our dynamic strategies in
                    <span className='font-bold'> Instagram marketing, A2Z YouTube management, and Tested Email Funnels.</span>
                </div>

                <button className="mt-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-full p-2 px-10 shadow-md border-2 border-white bg-opacity-50 text-center">
                    EMBRACE THE EXTRAORDINARY
                </button>

            </div>
            
        </motion.div>

    )
}

export default heroNew