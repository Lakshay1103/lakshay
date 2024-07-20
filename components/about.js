"use client";

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (

        <div
            className='flex justify-center items-center pt-24'
            data-aos='fade-up'
            data-aos-duration="1000"
        >
            <div id='about' className='about-container flex justify-center items-center mt-20 w-10/12 bg-white p-8 rounded-md'            >

                <div className='image-icons-about w-2/5 flex justify-center items-center flex-col'>

                    <div
                        className='about-img flex justify-center items-center w-[300px] h-[300px]'
                        data-aos='fade-right'
                        data-aos-duration="1000"
                    >
                        <img src="/lakshay2.png" alt="About" width={1080} height={1920} />
                    </div>

                    <div
                        className='about-icons flex flex-col md:flex-row justify-center items-center md:mt-4 bg-[#249349]'
                        data-aos='fade-right'
                        data-aos-duration="1200"
                    >
                        <a href="https://www.instagram.com/lakshaygoellll/" target="_blank" rel="noopener noreferrer" className='text-xl md:text-2xl text-white m-2  '><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/lakshaygoellll/" target="_blank" rel="noopener noreferrer" className='text-xl md:text-2xl text-white m-2 '><FaLinkedin /></a>
                        <a href="https://www.youtube.com/channel/UCDvg7NV5ikI0KxikCWdmX9A" target="_blank" rel="noopener noreferrer" className='text-xl md:text-3xl text-white m-2 '><FaYoutube /></a>
                    </div>
                </div>

                <div className='about-description p-10 pr-0 md:w-3/5 w-full text-center md:text-left'
                    data-aos='fade-right'
                    data-aos-duration="1500"
                >

                    <h2 className='font-bold text-[#F16D25] uppercase'>The Heart behind Sociowell</h2>
                    <h1 className="text-[#249349] text-[48px] font-bold">Hello! I&apos;m Lakshay Goel.</h1>
                    <h3 className='font-bold text-lg -mt-2'>Marketer & Content Creator</h3>
                    <p className='mt-3 text-lg'>I help people make an impact in the health and wellness space with Content, Branding & Community Building.<br />
                        After having seen major changes in my life due to mindfuness, meditation, fitness and nutrition,
                        this space interests me a lot.<br /> With a passion for bringing change in the lives of people,
                        I started Sociowell- The Go-To Agency for Health and Wellness Marketing.
                    </p>

                    {/* <div className='border-l-4 border-black mt-4 px-4'>
                        <p className='text-lg ' >&quot;Your brand is what people say about you when you are not in a room.&quot;<br />
                            <span className='font-bold'>- Jeff Bezos</span>
                        </p>
                    </div> */}

                    <div className='w-full flex justify-center items-center md:justify-start'>
                        <a className='bg-[#249349] text-white text-xl font-bold rounded-full px-5 py-2 mt-5 hover:text-[#249349] hover:bg-white border-2 border-[#249349]' href='https://calendly.com/sociowell/work-with-us'>Let&apos;s Talk</a>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default About
