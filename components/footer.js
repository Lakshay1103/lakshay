"use client";

import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='mt-20 flex flex-col justify-center items-center'>

            <div
                className='w-3/4 rounded-lg p-20 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <p className='text-black font-bold my-4'>ARE YOU READY</p>

                <h1 className='text-white text-[48px] font-bold text-center leading-[50px]'>To Build Something <br />Worthwhile?</h1>

                <button class="bg-white text-[#32CD32] border border-[#32CD32] rounded-lg p-4 px-5 mt-5 hover:text-white hover:bg-[#32CD32]"
                    onClick={() => window.open('https://cal.com/lakshaygoel/work-with-me', '_blank')}>
                    GET STARTED
                </button>
            </div>


            <div
                className='w-full h-[300px] mt-28 bg-cover bg-center bg-no-repeat flex justify-center items-center'
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/footerbg4.svg')" }}
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <div className='w-8/12 flex justify-center items-center mt-10'>
                    <div className='w-1/2 flex flex-col justify-center items-start'>
                        {/* Logo */}
                        <img src="vercel.svg" alt="Logo" className='w-40' />

                        <p className='text-lg text-bold'>letsgolakshay@gmail.com</p>

                        {/* Social Icons */}
                        <div className='flex justify-between items-center w-40 mt-5 '>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-3xl'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='text-3xl'><FaLinkedin /></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='text-4xl'><FaYoutube /></a>

                        </div>
                    </div>

                    <div className='w-1/2 flex flex-col justify-center items-center'>

                        <div className='flex justify-between items-center'>
                            {/* Input Bar */}
                            <input type="email" placeholder="Enter your email" className="w-80 p-2" />

                            {/* Button */}
                            <button className="bg-[#32CD32] text-white rounded p-2">Subscribe</button>
                        </div>

                        {/* Subscribe Text */}
                        <p className="text-center text-xl mt-2 font-semibold">Subscribe to my newsletter for regular updates!</p>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Footer
