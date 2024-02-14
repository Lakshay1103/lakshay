"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromRight, slideInFromBottom } from '../utils/motion'


const Logos = () => {
    return (
        <>
            <motion.div
                className='flex justify-center align-center mt-10'
                initial="hidden"
                animate="visible"
            >
                <motion.section
                    className="logoMarqueeSection"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
                >
                    <div className="container" id="logoMarqueeSection">
                        <div className="default-content-container flex items-center">
                            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                                <div className="marquee" style={{ animationDuration: '57s' }}>
                                    <a target="_blank"><img src="/logo/1.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/2.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/3.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/4.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/5.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/6.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/7.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/9.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/10.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/11.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/12.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/13.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>

                                </div>
                                <div className="marquee" style={{ animationDuration: '57s' }}>

                                    <a target="_blank"><img src="/logo/1.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/2.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/3.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/4.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/5.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/6.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/7.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/9.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/10.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/11.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/12.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src="/logo/13.png" title="" className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>


                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>



            </motion.div>

            {/* <motion.div
                className='flex justify-center align-center mt-20'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            >

                <div className="w-3/4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white p-5 rounded-2xl">
                    <p className="text-[50px] text-center leading-[50px]">
                        Helping you become a BRAND via Content, Branding & Community Building.
                    </p>
                </div>


            </motion.div> */}

        </>

    )
}
export default Logos

