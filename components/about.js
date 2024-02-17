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

        <div className='flex justify-center items-center'>
            <div id='about' className='flex justify-center items-center mt-20 w-10/12 bg-white p-8 rounded-md'
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <div
                    className='flex justify-center items-center'
                    data-aos='fade-right'
                    data-aos-duration="1000"
                >
                    <img src="/lakshay1.jpg" alt="About" width={1080} height={1920} />
                </div>

                <div
                    className='flex flex-col justify-between items-center mt-4 bg-[#32CD32]'
                    data-aos='fade-right'
                    data-aos-duration="1200"
                >
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white m-4'><FaInstagram /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white m-4'><FaLinkedin /></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='text-4xl text-white m-4'><FaYoutube /></a>

                </div>

                <div className='p-10'
                    data-aos='fade-right'
                    data-aos-duration="1500"
                >

                    <h2 className='font-bold'>ABOUT ME</h2>
                    <h1 className="text-[#32CD32] text-[48px] font-bold">Hello. I'm Lakshay Goel.</h1>
                    <p className='font-bold  text-xl'>Entrepreneur, Creator, and Social Media Marketer</p>
                    <p className='mt-5 text-lg'>I help people build powerful and impactful personal brands on Instagram and YouTube via Content,
                        Branding & Community Building. With a passion for building powerful personal brands,
                        I lead a team dedicated to pushing the boundaries of marketing and community building.
                    </p>

                    <div className='border-l-4 border-black mt-4 px-4'>
                        <p className='text-lg ' >"Your brand is what people say about you when you are not in a room."<br />
                            <span className='font-bold'>- Jeff Bezos</span>
                        </p>
                    </div>

                    <div className='bg-[#0000ff] text-white rounded-full px-5 py-2 mt-5 w-32 flex justify-center items-center hover:text-[#0000ff] hover:bg-white border-2 border-[#0000ff]'>
                        <a href='https://cal.com/lakshaygoel/work-with-me'>LET'S TALK</a>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default About
