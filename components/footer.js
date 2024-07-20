"use client";

import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='flex flex-col justify-center items-center pb-10'>

            <div
                style={{ backgroundImage: "linear-gradient(rgba(14,47,49,0.75), rgba(14,47,49,0.75)), url('/bg-2-1.jpeg')" }}
                className='bg-center bg-cover flex justify-center items-center w-full'
            >

                <div
                    className='footer-CTA w-full h-[600px] bg-center bg-cover flex flex-col justify-center items-center py-20'
                    data-aos='fade-up'
                    data-aos-duration="1000"
                >

                    <p className='text-[#F16D25] text-xl md:text-2xl font-bold my-4'>ARE YOU READY</p>

                    <h1 className='text-white text-4xl md:text-[70px] font-bold text-center md:leading-[70px]'>To Build Something <br />Worthwhile?</h1>

                    <button class="bg-[#249349] text-white font-bold border border-white rounded-full p-4 px-5 mt-5 hover:text-[#249349] hover:bg-white transition duration-300 ease-in-out"
                        onClick={() => window.open('https://calendly.com/sociowell/work-with-us', '_blank')}>
                        GET STARTED
                    </button>
                </div>
            </div>

            <div
                className='w-full bg-cover bg-center bg-no-repeat flex justify-center items-center border-t-2 border-white'
                data-aos='fade-up'
                data-aos-duration="1000"
            >

                <div className='footer w-9/12 flex justify-center items-center mt-10'>
                    <div className='footer-text w-1/2 flex flex-col justify-center items-start'>
                        {/* Logo */}
                        <img src="/logo/sociowell-4.png" alt="Logo" className='w-60 mt-5' />

                        <a href="mailto:info@sociowell.com" className='text-lg text-bold text-white underline-animation ml-4'>
                            info@sociowell.com
                        </a>

                        {/* Social Icons */}
                        <div className='footer-icons flex justify-between items-center w-40 mt-5 ml-4'>
                            <a href="https://www.instagram.com/sociowell/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white hover:text-[#249349]'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/company/sociowell/" target="_blank" rel="noopener noreferrer" className='text-3xl text-white hover:text-[#249349]'><FaLinkedin /></a>
                            <a href="https://www.youtube.com/channel/UCDvg7NV5ikI0KxikCWdmX9A" target="_blank" rel="noopener noreferrer" className='text-4xl text-white hover:text-[#249349]'><FaYoutube /></a>

                        </div>
                    </div>

                    <div className='footer-form w-1/2 flex flex-col justify-center items-center'>

                        <p className="text-center text-xl mt-2 font-semibold text-white">Stay Inspired – Sign up for regular updates!</p>

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
                                            <button data-element="submit" className="formkit-submit formkit-submit p-3 rounded-md text-white bg-[#249349]">
                                                {/* <div className="formkit-spinner"></div> */}
                                                <span className="">Subscribe</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className='flex flex-col sm:flex-row justify-center items-center mt-5 text-white text-nowrap text-sm md:text-lg'>

                            <Link className='border-r-2 border-white px-4' href="/privacy"><span className='underline-animation'>Privacy Policy</span></Link>
                            <Link className='border-r-2 border-white px-4 ' href="/refund"><span className='underline-animation'>Refund Policy</span></Link>
                            <Link className='p-2' href="/terms"><span className='underline-animation'>Terms of Use</span></Link>

                        </div>

                    </div>
                </div>

            </div>


        </div >
    )
}

export default Footer
