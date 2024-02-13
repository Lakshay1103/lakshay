"use client";

import React, { useEffect, useState } from 'react';

const Cards = () => {
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
        <div className='cards-container'>
            <div className="container">
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
                        <h2 className="font-bold">TESTIMONIALS</h2>
                        <h1 className="text-black text-[48px] text-center font-bold">Real People,</h1>
                        <h1 className="text-[#32CD32] text-[48px] font-bold">Real Feedback!</h1>
                        <p className="text-xl">
                            Hear What My Clients Have to Say! <br />
                            Our clients share their success stories and showcase how our services have transformed their online presence.<br />
                            Let their testimony inspire you to take that next step!
                        </p>
                    </div>
                </div>

                <div id="Anuj" className={`panel ${activePanel === 'Anuj' ? 'active' : ''}`} onClick={() => setActivePanel('Anuj')}>
                    {activePanel === 'Anuj' && (
                        <iframe className="h-full w-full p-10 pb-20"
                            src="https://www.youtube.com/embed/J9yD5UF629E?si=bce4DchHJf4aXang?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Plant a word"
                            frameborder="0"
                            allowfullscreen>

                        </iframe>
                    )}
                    <div className="avatar flex items-center">
                        <img src="/testimonials/anuj.jpg" alt="Anuj" className='w-[50px] h-[50px] rounded-full mr-2' />
                        <h3 className='panel-heading'>Anuj Kumar</h3>
                    </div>
                </div>

                <div id="Sneha" className={`panel ${activePanel === 'Sneha' ? 'active' : ''}`} onClick={() => setActivePanel('Sneha')}>
                    {activePanel === 'Sneha' && (
                        <iframe className="h-full w-full p-10 pb-20"
                            src="https://www.youtube.com/embed/NXiBCsGdHHo?si=UVK7SsIDaGHXnSRY?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Plant a word"
                            frameborder="0"
                            allowfullscreen>

                        </iframe>
                    )}
                    <div className="avatar flex items-center">
                        <img src="/testimonials/sneha.jpg" alt="Anuj" className='w-[50px] rounded-full mr-2' />
                        <h3 className='panel-heading'>Sneha Arvind</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cards;
