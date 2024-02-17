"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromBottom, slideInFromRight } from '../utils/motion'
import Aos from 'aos';
import 'aos/dist/aos.css';

const heroNew = () => {

    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (

        <motion.div
            className="bg-cover bg-center h-[500px] mt-20" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero-bg.jpg')" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            data-aos="fade-up"  data-aos-duration="1000"
        >

            <div className='flex flex-col items-center justify-center h-[500px]'>

                <div className='text-white text-[48px] text-center font-extrabold' data-aos="fade-up"  data-aos-duration="2000">Unleash The Power Of Marketing For</div>
                {/* <div className='text-white text-[51px] text-center font-extrabold -mt-5'>For personal brands, creators</div> */}
                <div className="text-rotate-wrap mt-5">
                    <div
                        style={{
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            opacity: 1,
                            transformStyle: "preserve-3d",
                            // marginTop:"60px;"
                        }}
                        className="text-rotate"
                    >
                        <div className="rotate-text">Personal Brands</div>
                        <div className="rotate-text">Creators</div>
                        <div className="rotate-text">Coaches</div>
                        <div className="rotate-text">Founders</div>
                        <div className="rotate-text">Agency Owners</div>
                        <div className="rotate-text">Consultants</div>
                    </div>
                </div>

                <div className='text-white text-2xl text-center font-normal w-2/3 mt-10'>Elevate your brand with our dynamic strategies in<br />
                    <span className='font-bold'> Instagram marketing, A2Z YouTube management, and Tested Email Funnels.</span>
                </div>

                <button
                    className="mt-6 bg-gradient-to-r from-transparent via-blue-700 via-blue-600 via-blue-500 to-blue-400 text-white text-lg rounded-full py-2 px-10 shadow-md border-2 border-white bg-opacity-50 text-center"
                    data-aos="fade-down"  data-aos-duration="2000"
                    onClick={() => {
                        const reelsElement = document.getElementById('reels');
                        reelsElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    EMBRACE THE EXTRAORDINARY
                </button>

                

            </div>
            
        </motion.div>

    )
}

export default heroNew
