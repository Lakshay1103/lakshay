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
                className='w-3/4 rounded-lg p-20 flex flex-col justify-center items-center'
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url('/CTAbg.png')",
                }}
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <p className='text-black font-bold my-4'>ARE YOU READY</p>

                <h1 className='text-white text-[48px] font-bold text-center leading-[50px]'>To Build Something <br />Worthwhile?</h1>

                <button class="bg-[#32CD32] text-white border border-white rounded-lg p-4 px-5 mt-5 hover:text-[#32CD32] hover:bg-white transition duration-300 ease-in-out"
                    onClick={() => window.open('https://cal.com/lakshaygoel/work-with-me', '_blank')}>
                    GET STARTED
                </button>
            </div>


            <div
                className='w-full h-[300px] mt-28 bg-cover bg-center bg-no-repeat flex justify-center items-center border-t-2 border-white'
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <div className='w-8/12 flex justify-center items-center mt-10'>
                    <div className='w-1/2 flex flex-col justify-center items-start'>
                        {/* Logo */}
                        <img src="vercel.svg" alt="Logo" className='w-40 bg-white p-5' />

                        <p className='text-lg text-bold text-white'>letsgolakshay@gmail.com</p>

                        {/* Social Icons */}
                        <div className='flex justify-between items-center w-40 mt-5 '>
                            <a href="https://www.instagram.com/lakshaygoellll/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/lakshaygoellll/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white'><FaLinkedin /></a>
                            <a href="https://www.youtube.com/channel/UCDvg7NV5ikI0KxikCWdmX9A" target="_blank" rel="noopener noreferrer" className='text-4xl text-white'><FaYoutube /></a>

                        </div>
                    </div>

                    <div className='w-1/2 flex flex-col justify-center items-center'>
                        <p className="text-center text-xl mt-2 font-semibold text-white">Subscribe to my newsletter for regular updates!</p>

                        {/* 
                        <div className='flex justify-between items-center'>
                            <input type="email" placeholder="Enter your email" className="w-80 p-2" />

                            <button className="bg-[#32CD32] text-white rounded p-2">Subscribe</button>
                        </div> */}

                        {/* Embed script */}

                        {/* <script src="https://f.convertkit.com/ckjs/ck.5.js"></script> */}
                        <form action="https://app.convertkit.com/forms/6221691/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="6221691" data-uid="a0c8df677b" data-format="sticky bar" data-version="5" data-options={{ settings: { after_subscribe: { action: "message", success_message: "Success! Now check your email to confirm your subscription.", redirect_url: "" }, analytics: { google: null, fathom: null, facebook: null, segment: null, pinterest: null, sparkloop: null, googletagmanager: null }, modal: { trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 }, powered_by: { show: true, url: "https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" }, recaptcha: { enabled: false }, return_visitor: { action: "show", custom_content: "" }, slide_in: { display_in: "bottom_right", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 }, sticky_bar: { display_in: "top", trigger: "timer", scroll_percentage: null, timer: 5, devices: "all", show_once_every: 15 } }, version: "5" }} min-width="400 500 600 700 800" data-gtm-form-interact-id="0">
                            <div className="formkit-container" data-stacked="false">
                                <div className="formkit-content" data-element="content" style={{ color: "rgb(255, 255, 255)", fontWeight: 700 }}>
                                    {/* <p>Get your free t-shirt by signing up.</p> */}
                                </div>
                                <div>
                                    <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                                    <div data-element="fields" className="seva-fields formkit-fields">
                                        <div className="formkit-field">
                                            <input className="formkit-input p-3 rounded-md w-80 mt-4" name="email_address" aria-label="Email Address" placeholder="Enter Your Email Address" required="" type="email" data-gtm-form-interact-field-id="0" />
                                            <button data-element="submit" className="formkit-submit formkit-submit p-3 rounded-md text-white bg-[#32CD32]">
                                                {/* <div className="formkit-spinner"></div> */}
                                                <span className="">Subscribe</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default Footer
