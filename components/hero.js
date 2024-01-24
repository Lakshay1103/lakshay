"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'

const hero = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row  w-full z-[20]"
        >

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex text-6xl text-bold text-white  w-auto h-auto'
            >
                <div className='flex justify-between w-full'>
                    <div className='flex mt-20 '>
                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            className='absolute'>
                            <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-40" />

                        </motion.div>

                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            className='absolute'>
                            <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-20 ml-24" />

                        </motion.div>

                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            className='absolute'>
                            <img src="/bluearr1.png" alt="arrow" className=" w-[250px] h-[250px] z-10 ml-48" />

                        </motion.div>
                    </div>

                    <div className='flex mt-20'>
                        <motion.div
                            variants={slideInFromRight(0.5)}
                            className=''>
                            <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-40" />

                        </motion.div>

                        <motion.div
                            variants={slideInFromRight(0.5)}
                            className=''>
                            <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-20" />

                        </motion.div>

                        <motion.div
                            variants={slideInFromRight(0.5)}
                            className=''>
                            <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-10" />

                        </motion.div>
                    </div>
                </div>

            </motion.div>


        </motion.div >
    )
}

export default hero
