"use client";

import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Carousel = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    const slides = [
        [
            <div key="slide1" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>

                    <div className='w-[300px] text-white font-normal flex flex-col justify-center items-start'>

                        <div className='p-2 flex justify-start items-center'>
                            <img className="w-16 rounded-full" src="/testimonials/mindfulsome.jpg"></img>

                            <div className='flex flex-col p-2 w-[300px]'>
                                <h1 className='font-extrabold'>Preiksha Jain</h1>
                                <p className='text-sm'>Founder - Mindfulsome</p>
                                <p className='text-sm'>Relationship & Intimacy Coaching</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal leading-5 px-2 py-1 italic'>“Super work. The new content is awesome.“</p>
                    </div>

                </div>


                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/-OTj-I9FW3g?si=VgFMw1wZGOkJd2Oe?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Mindfulsome"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>
            ,

            <div key="slide2" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>
                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-2 flex justify-start items-start'>
                            <img className="w-16 rounded-full" src="/testimonials/sneha.jpg"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Sneha</h1>
                                <p className='text-sm'>Founder - Arvinda by Sneha</p>
                                <p className='text-sm'>Mindfulness Coach</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal leading-5 px-2 py-1 italic '>“I have seen tremendous patience, eye for detail and growth in his work.“</p>
                    </div>
                </div>

                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/FBS8pGZjZsE?si=jukrFshGqOSx4OCV?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Sneha"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,

            <div key="slide3" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">
                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>
                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-4 flex justify-start items-center'>
                            <img className="w-16 rounded-full" src="/testimonials/Afsheen.jpeg"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Afsheen Dattoobhai</h1>
                                <p className='text-sm'>Instructor to Life Coaches</p>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal leading-5 px-2 py-1 italic'>“Great job Lakshay and his team. People are giving us amazing feedback“</p>
                    </div>
                </div>

                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/greGPnmnZtM?si=lVqbBrXtF5Fxon0k"
                        title="Sneha"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,


        ],
        [

            <div key="slide4" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>

                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-4 flex justify-start items-start'>
                            <img className="w-16 rounded-full" src="/testimonials/mindmatters.jpg"></img>

                            <div className='flex flex-col p-2 w-[300px]'>
                                <h1 className='font-extrabold'>Vaitika Advani</h1>
                                <p className='text-sm'>Founder - Mind Matters</p>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-sm leading-5 px-2 py-1 italic'>“My friends keep on commenting and telling me that they just love the content. Thanks a lot.“</p>
                    </div>
                </div>

                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/tqlR4awNDyM?si=4L2HZceVi07b4Xmn?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Vaitika"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,

            <div key="slide5" id='reels' className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>
                    <div className='w-[300px]  font-normal flex flex-col items-start'>

                        <div className='p-2 flex justify-start items-start'>
                            <img className="w-16 rounded-full" src="/testimonials/Shaan.jpg"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Shaan Khanna</h1>
                                <p className='text-sm'>Founder - Networking Now India </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal px-2 py-1 italic leading-5'>“Our community is loving the new content. Lovely work.“</p>
                    </div>
                </div>
                <div >
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/CV9g8qV_GtU?si=zccnhlnPbRT3nN42?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Shaan khanna"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,

            <div key="slide6" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 border-[#249349] rounded-lg">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>

                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-2 flex justify-start items-start'>
                            <img className="w-16 rounded-full" src="/testimonials/dailylawyer.jpg"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Jenna V Krishnan</h1>
                                <p className='text-sm'>Founder - The Daily Lawyer</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-[14px] leading-5 px-2 py-1 italic'>“Lakshay is extremely organised and meticulous, using digital tools for seamless communication.“</p>
                    </div>
                </div>

                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/SxVNnqx9TZs?si=v6nPzzeVx8aNfYhk?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Jenna V Krishnan"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,



        ],
        [

            <div key="slide7" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>
                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-2 flex justify-start items-start'>
                            <img className="w-16 rounded-full" src="/testimonials/anuj.jpg"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Anuj Kumar</h1>
                                <p className='text-sm'>Founder - Public and Policy Media</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal leading-5 px-2 py-1 italic'>“Lakshay and his team know what type of content our audience enjoys. They are great at their work.“</p>
                    </div>
                </div>

                <div>

                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/y4zC8dbD_Cw?si=cpz429Xqm8PCebHa?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Anuj Kumar"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>

                </div>

            </div>,



            <div key="slide8" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>

                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-4 flex justify-start items-center'>
                            <img className="w-16 rounded-full" src="/testimonials/plant.png"></img>

                            <div className='flex flex-col p-2 w-[300px]'>
                                <h1 className='font-extrabold'>Plant A Word</h1>
                                <p className='text-sm'>A Unique Language Learning School</p>

                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-sm leading-5 px-2 py-1 italic'>“We are getting good responses from our audience. Everybody is enjoying the content.“</p>
                    </div>

                </div>

                <div>
                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/qQnO1hjunq4?si=aDgJSE43LE_4UAn_?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="Sneha"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>,


            <div key="slide9" className="reel flex flex-col justify-between items-center bg-[#252323] border-gradient border-2 rounded-lg border-[#249349]">

                <div className='border-2 border-[#F16D25] text-white rounded-lg mt-2'>

                    <div className='w-[300px] text-white font-normal flex flex-col items-start'>

                        <div className='p-4 flex justify-start items-center'>
                            <img className="w-16 rounded-full" src="/testimonials/FLJ.png"></img>

                            <div className='flex flex-col p-2'>
                                <h1 className='font-extrabold'>Fashion Law Journal</h1>
                                <p className='text-sm'>Leading Provider for the Fashion Law Insights</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center w-[300px]'>
                        <p className='text-normal leading-5 px-2 py-1 italic'>“Perfect video editing and content.“</p>
                    </div>

                </div>

                <div>

                    <iframe width="350" height="450"
                        className='p-6'
                        src="https://www.youtube-nocookie.com/embed/ZiflBujWPhA?si=9WB7aURk2sL1rB8X?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                        title="FLJ"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>
        ],
    ];

    return (
        <div className='pb-20'
            style={{ backgroundImage: "linear-gradient(rgba(14,47,49,0.75), rgba(14,47,49,0.75)), url('/2.jpg')" }}
        >
            <div
                style={{ width: '95%', margin: '0 auto' }}
                data-aos='fade-up'
                data-aos-duration="1500"
            >

                <div id="reels" className='flex justify-center items-center mb-5'>
                    <h1 className='text-white text-[48px] font-bold mt-28'>Snippets of <span className='text-[#32CD32] text-[48px] font-bold'>Satisfaction</span></h1>

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='flex justify-center items-center'
                        data-aos='fade-right'
                        data-aos-duration="1000"
                    >
                        <button onClick={handlePrevSlide} className='text-white text-5xl'><FaChevronLeft /></button>
                    </div>
                    <div className='flex justify-between w-[95%]'>
                        {slides[currentSlide]}
                    </div>
                    <div className='flex justify-center items-center'
                        data-aos='fade-left'
                        data-aos-duration="1000"
                    >
                        <button onClick={handleNextSlide} className='text-white text-5xl'><FaChevronRight /></button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Carousel;
