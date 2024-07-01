import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronCircleDown } from "react-icons/fa";


const Cardssm = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id='testimonials' className='flex flex-col justify-center items-center'>
            <div
                className='bg-white flex justify-center items-center h-[400px] w-10/12 rounded-2xl'
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)),url('/Rectangle.svg')",
                }}
                data-aos='fade-right'
                data-aos-duration="1500"
            >
                <div className='testimonial-section w-3/4 flex flex-col justify-center items-center text-center'>

                    <h2 className="font-bold">TESTIMONIALS</h2>

                    <h1 className="text-black text-[48px] sm:text-[30px] md:text-[36px]  text-center font-bold">Real People,</h1>
                    <h1 className="text-[#32CD32] text-[48px] sm:text-[30px] md:text-[36px] font-bold -mt-4">Real Feedback!</h1>
                    <p className="text-2xl sm:text-sm md:text-md font-bold mt-1">
                        1.5 Million+ reach for 15+ Clients<br />
                    </p>
                    <p className='font-normal text-sm leading-4'>Our clients share their success stories and showcase how our services have transformed their online presence.</p><br />


                    <div className='bg-blue-700 border-2 text-white sm:text-sm md:text-lg rounded-full py-2 px-4'>Have a look  </div>
                    <div className='text-xl text-blue-700 mt-2'><FaChevronCircleDown /></div>



                </div>
            </div>

            <div className='flex justify-center items-center w-8/12 mt-4'>

                <div
                    className='testimonial-container flex flex-col justify-center items-center'
                    data-aos='fade-right'
                    data-aos-duration="1500"
                >

                    <div className='testimonial-text '>
                        <iframe
                            className='mt-5'
                            src="https://www.youtube-nocookie.com/embed/6397x3Mvdhk?si=Z0nIH2zfX8EpLY47"
                            title="Pooja"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                        <div className='flex justify-center items-center mt-2'>
                            <img src="/testimonials/PoojaDiwedi.jpeg" alt="Pooja" className='w-[40px] h-[40px] rounded-full mr-2' />
                            <p className='text-white font-bold text-lg'>Pooja Diwedi</p>
                        </div>
                    </div>

                    <div className='testimonial-text '>
                        <iframe
                            className='mt-5'
                            src="https://www.youtube.com/embed/J9yD5UF629E?si=bce4DchHJf4aXang?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=1&disablekb=1"
                            title="Anuj"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                        <div className='flex justify-center items-center mt-2'>
                            <img src="/testimonials/anuj.jpg" alt="Anuj" className='w-[40px] h-[40px] rounded-full mr-2' />
                            <p className='text-white font-bold text-lg'>Anuj Kumar</p>
                        </div>
                    </div>



                    <div className='testimonial-text'>
                        <iframe
                            className='mt-5'
                            src="https://www.youtube.com/embed/NXiBCsGdHHo?si=UVK7SsIDaGHXnSRY?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=1&disablekb=1"
                            title="Sneha"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                        <div className='flex justify-center items-center mt-2'>
                            <img src="/testimonials/sneha.jpg" alt="Anuj" className='w-[40px] h-[40px] rounded-full mr-2' />
                            <p className='text-white font-bold text-lg'>Sneha Arvind</p>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default Cardssm
