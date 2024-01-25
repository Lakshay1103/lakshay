"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'

const arrleft = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row  w-full justify-start z-[20]"
        >

            <motion.div
                variants={slideInFromLeft(1)}
                className='absolute'>
                <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-40" />

            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.75)}
                className='absolute'>
                <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-20 ml-24" />

            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='absolute'>
                <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-10 ml-48" />

            </motion.div>




        </motion.div>



    )

}

export default arrleft
