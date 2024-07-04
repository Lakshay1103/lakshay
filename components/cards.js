"use client";

import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Cards = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [activePanel, setActivePanel] = useState('first');

    useEffect(() => {
        const panels = document.querySelectorAll('.panel');

        const handleClick = (panelId) => {
            setActivePanel(panelId);
        };

        panels.forEach(panel => {
            panel.addEventListener('click', () => handleClick(panel.id));
        });

        return () => {
            panels.forEach(panel => {
                panel.removeEventListener('click', () => handleClick(panel.id));
            });
        };
    }, []);

    return (
        <div id='testimonials' 
        className='cards-container'
        style={{ backgroundImage: "linear-gradient(rgba(14,47,49,0.75), rgba(0,0,0,0.75)), url('/1.svg')" }}

        >
            <div
                className="container-testimonials"
                data-aos='fade-right'
                data-aos-duration="1500"
            >
                <div
                    id="first"
                    className={`panel flex justify-center items-center ${activePanel === 'first' ? 'active' : ''
                        } ${activePanel && activePanel !== 'first' ? 'shrink' : ''}`}
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)),url('/Rectangle.svg')",
                    }}
                    onClick={() => setActivePanel('first')}
                >

                    <div className="first-slide text-black flex flex-col justify-centre items-start w-3/4">
                        <h2 className="font-bold text-[#F16D25]">OUR TESTIMONIALS</h2>
                        <h1 className="text-black text-[48px] text-center font-bold">Real People,</h1>
                        <h1 className="text-[#249349] text-[48px] font-bold -mt-4">Real Feedback!</h1>
                        <p className="text-xl">
                            <span className='font-bold'>Hear What Our Clients Have to Say! </span><br /><br />
                            Our clients share their success stories and showcase how our services have helped them make an impact.<br /><br />

                            <div className='flex justify-start items-center bg-[#249349] text-white rounded-full p-4 w-[250px]'><span className='mr-5'>Have a look</span> <img src='/arr-long.png' width={30} height={30}></img></div>

                        </p>
                    </div>
                </div>

                <div id="Anuj" className={`panel ${activePanel === 'Pooja' ? 'active' : ''}`} onClick={() => setActivePanel('Pooja')}>
                    {activePanel === 'Pooja' && (
                        <iframe className="h-full w-full p-10 pb-20"
                            src="https://www.youtube-nocookie.com/embed/6397x3Mvdhk?si=Z0nIH2zfX8EpLY47"
                            title="Pooja Diwedi"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                    )}

                    <span className='flex justify-center items-center'>
                        <img src="/testimonials/PoojaDiwedi.jpeg" alt="Pooja" className='w-[50px] h-[50px] rounded-full m-4' />
                    </span>

                    <div className="avatar flex items-center">
                        <img src="/testimonials/PoojaDiwedi.jpeg" alt="Pooja" className='w-[50px] h-[50px] rounded-full mr-2' />
                        <h3 className='panel-heading'>Pooja Diwedi</h3>
                    </div>
                </div>




                <div id="Sneha" className={`panel ${activePanel === 'Sneha' ? 'active' : ''}`} onClick={() => setActivePanel('Sneha')}>
                    {activePanel === 'Sneha' && (
                        <iframe className="h-full w-full p-10 pb-20"
                            src="https://www.youtube-nocookie.com/embed/NXiBCsGdHHo?si=UVK7SsIDaGHXnSRY?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=1&disablekb=1"
                            title="Plant a word"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                    )}
                    <span className='flex justify-center items-center'>
                        <img src="/testimonials/sneha.jpg" alt="Anuj" className='w-[50px] h-[50px] rounded-full m-4' />
                    </span>

                    <div className="avatar flex items-center">
                        <img src="/testimonials/sneha.jpg" alt="Anuj" className='w-[50px] rounded-full mr-2' />
                        <h3 className='panel-heading'>Sneha Arvind</h3>
                    </div>
                </div>

                <div id="Pooja" className={`panel ${activePanel === 'Anuj' ? 'active' : ''}`} onClick={() => setActivePanel('Anuj')}>
                    {activePanel === 'Anuj' && (
                        <iframe className="h-full w-full p-10 pb-20"
                            src="https://www.youtube-nocookie.com/embed/J9yD5UF629E?si=bce4DchHJf4aXang?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=1&disablekb=1"
                            title="Plant a word"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                    )}

                    <span className='flex justify-center items-center'>
                        <img src="/testimonials/anuj.jpg" alt="Anuj" className='w-[50px] h-[50px] rounded-full m-4' />
                    </span>

                    <div className="avatar flex items-center">
                        <img src="/testimonials/anuj.jpg" alt="Anuj" className='w-[50px] h-[50px] rounded-full mr-2' />
                        <h3 className='panel-heading'>Anuj Kumar</h3>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Cards;
