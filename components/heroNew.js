"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromBottom, slideInFromRight } from '../utils/motion'

const heroNew = () => {
    return (

        <motion.div
            className="w-full h-96 sm:bg-[url('/hero-bg.jpg')] sm:bg-cover sm:bg-center sm:bg-no-repeat"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        >

            <div>

                <div className='text-white text-5xl font-extrabold'>Unleash The Power Of Marketing</div><br />
                <div className='text-white text-4xl font-extrabold'>For personal brands, creators</div>



            </div>
        </motion.div>

    )
}

export default heroNew
