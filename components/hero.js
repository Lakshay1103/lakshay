"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'
import Arrleft from './arrleft'
import Arrright from './arrright'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Hero = () => {

    const el = useRef(null);
    const textShadowStyle = {
        textShadow: '0 0 4px rgba(255, 255, 255, 1)',
      };

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Personal&nbsp;Brands", "Creators", "Coaches", "Consultants", "Agency&nbsp;Owners", "Founders"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <motion.div
                className='flex justify-center align-center mt-10'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            >
                <h1 className='text-[40px] text-white'>Unleash The Power of Marketing for</h1>
            </motion.div>


            <div className='flex justify-between w-full ' >
                <Arrleft />

                <motion.div
                    className='flex justify-center align-center mt-20'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
                >
                    <span ref={el} className='text-7xl text-white' style={textShadowStyle}></span>

                </motion.div>

                <Arrright />
            </div>
        </>
    )
}

export default Hero
