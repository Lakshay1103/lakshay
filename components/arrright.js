import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'

const arrright = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row w-full z-[20] justify-end h-96"
        >

            <motion.div
                variants={slideInFromRight(1)}
                className='absolute'>
                <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-40" />

            </motion.div>

            <motion.div
                variants={slideInFromRight(0.75)}
                className='absolute'>
                <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-20 mr-24" />

            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='absolute'>
                <img src="/bluearr2.png" alt="arrow" className=" w-[250px] h-[250px] z-10 mr-48" />

            </motion.div>







        </motion.div >
    )


}

export default arrright
