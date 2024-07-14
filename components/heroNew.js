"use client";

import React from 'react'
import { motion } from "framer-motion"
import { slideInFromTop, slideInFromLeft, slideInFromBottom, slideInFromRight } from '../utils/motion'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroNew = () => {

    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (

        <motion.div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: "linear-gradient(rgba(14,47,49,0.75), rgba(0,0,0,0.75)), url('/bg-1-1.jpeg')" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            data-aos="fade-up" data-aos-duration="1000"
            id='home'
        >

            <div className='flex flex-col items-center justify-center h-screen'>

                <div className='hero-title text-white text-[30px] leading-normal md:text-[50px] text-center font-extrabold' data-aos="fade-up" data-aos-duration="2000">Transforming Health and Wellness space for</div>

                <div className="text-rotate-wrap mt-5">
                    <div
                        style={{
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            opacity: 1,
                            transformStyle: "preserve-3d",
                            // marginTop:"60px;"
                        }}
                        className="text-rotate "
                    >
                        <div className="rotate-text ">Coaches and Educators</div>
                        <div className="rotate-text ">Wellness brands</div>
                        <div className="rotate-text ">Wellness Tourism</div>
                        <div className="rotate-text ">Personal Care & Beauty</div>
                        <div className="rotate-text ">Nutrition & Health</div>
                        {/* <div className="rotate-text">Consultants</div> */}
                    </div>
                </div>

                <div className='hero-description text-white text-2xl text-center font-normal sm:w-full md:w-2/3 lg:w-2/3 mt-10 leading-10'>We&apos;re The <span className='bg-[#F16D25] p-2 rounded-full'>Go-To Agency</span> for<br />
                    <span className='font-bold'>Health and Wellness Marketing.</span>
                </div>

                <button
                    className="hero-btn mt-6 bg-[#249349] text-white text-lg rounded-full py-2 px-10 shadow-md border-2 border-white text-center"
                    data-aos="fade-down" data-aos-duration="1000"
                    onClick={() => {
                        const reelsElement = document.getElementById('reels');
                        reelsElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    WATCH OUR IMPACT
                </button>

            </div>

        </motion.div>

    )
}

export default HeroNew
