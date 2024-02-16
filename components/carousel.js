"use client";

import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    const slides = [
        [
            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/shaan.jpg"></img>
                    <div className='p-4'>
                        <h1 className='font-extrabold'>Shaan Khanna</h1>
                        <p className='text-sm'>Founder - Networking Now India </p>
                        <p className='text-normal leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“Our community is loving the new content. Lovely work.“</p>
                    </div>
                </div>

                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/8jmHCJmK2JA?si=o5tGcbZoxKvY3O1G?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Shaan khanna"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,

            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/sneha.jpg"></img>
                    <div className='p-4'>
                        <h1 className='font-extrabold'>Sneha</h1>
                        <p className='text-sm'>Founder - Arvinda by Sneha</p>
                        <p className='text-normal leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“ I have seen tremendous patience, eye for detail and growth in his work.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/FBS8pGZjZsE?si=jukrFshGqOSx4OCV?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Sneha"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,

            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 border-blue-600 rounded-lg">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/dailylawyer.jpg"></img>
                    <div className='p-2 flex flex-col items-start'>
                        <h1 className='font-extrabold'>Jenna V Krishnan</h1>
                        <p className='text-sm'>Founder- The Daily Lawyer</p>
                        <p className='text-sm leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“Lakshay is extremely organised and meticulous, using digital tools for seamless communication.“</p>

                    </div>
                </div>

                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/SxVNnqx9TZs?si=v6nPzzeVx8aNfYhk?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Jenna V Krishnan"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,
        ],
        [
            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/anuj.jpg"></img>
                    <div className='p-2'>
                        <h1 className='font-extrabold'>Anuj Kumar</h1>
                        <p className='text-sm'>Founder - Public and Policy Media</p>
                        {/* <p className='text-sm leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>
                            “Lakshay and his team excel in creating content that resonates with our audience, requiring minimal direction.“
                        </p> */}
                        <p className='text-sm leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>
                            “Lakshay and his team know what type of content our audience enjoys. They are great at their work.“
                        </p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/y4zC8dbD_Cw?si=cpz429Xqm8PCebHa?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Anuj Kumar"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,


            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindfulsome.jpg"></img>
                    <div className='p-4'>
                        <h1 className='font-extrabold'>Preiksha Jain</h1>
                        <p className='text-sm'>Founder - Mindfulsome <br />Relationship & Intimacy Coaching</p>
                        <p className='text-normal leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“Super work. The new content is awesome.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/-OTj-I9FW3g?si=VgFMw1wZGOkJd2Oe?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Mindfulsome"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,


            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindmatters.jpg"></img>
                    <div className='p-3'>
                        <h1 className='font-extrabold'>Vaitika Advani</h1>
                        <p className='text-sm'>Founder - Mind Matters by Vaitika </p>
                        <p className='text-sm leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“My friends keep on commenting and telling me that they just love the content. Thanks a lot.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/tqlR4awNDyM?si=4L2HZceVi07b4Xmn?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Vaitika"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,
        ],
        [
            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/spicy.png"></img>
                    <div className='p-4'>
                        <h1 className='font-extrabold'>Spicy Sangria Events</h1>
                        <p className='text-normal leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“Lovely work. People are loving the videos.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/-BBarzSsFAA?si=7YeNal0MxRGsAbA3?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Sneha"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,


            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/plant.png"></img>
                    <div className='p-2'>
                        <h1 className='font-extrabold'>Plant A Word</h1>
                        <p className='text-sm'>A Unique Language Learning School</p>
                        <p className='text-sm leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“We are getting good responses from our audience. Everybody is enjoying the content.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/qQnO1hjunq4?si=aDgJSE43LE_4UAn_?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Sneha"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,


            <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-2 rounded-lg border-blue-600">


                <div className='w-[300px] text-white font-normal flex items-center'>
                    <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/sneha.jpg"></img>
                    <div className='p-4'>
                        <h1 className='font-extrabold'> Fashion Law Journal</h1>
                        <p className='text-normal leading-5 px-2 py-1 border-2 border-[#32CD32] bg-white text-black rounded-lg'>“Perfect video editing and content.“</p>
                    </div>
                </div>



                <iframe width="350" height="450"
                    className='p-6'
                    src="https://www.youtube.com/embed/ZiflBujWPhA?si=9WB7aURk2sL1rB8X?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                    title="Sneha"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

            </div>,
        ],
    ];

    return (
        <div style={{ width: '95%', margin: '0 auto', marginTop: '20px' }} >

            <div className='flex justify-center items-center mt-20 mb-10'>
                <h1 className='text-white text-[48px] font-bold'>Snippets of <span className='text-[#32CD32] text-[48px] font-bold'>Satisfaction</span></h1>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div className='flex justify-center items-center'>
                    <button onClick={handlePrevSlide} className='text-white text-5xl'><FaChevronLeft /></button>
                </div>
                {slides[currentSlide]}
                <div className='flex justify-center items-center'>
                    <button onClick={handleNextSlide} className='text-white text-5xl'><FaChevronRight /></button>
                </div>
            </div>
        </div >
    );
};

export default Carousel;