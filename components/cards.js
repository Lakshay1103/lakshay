"use client";
import React, { useEffect } from 'react';

const Cards = () => {
    useEffect(() => {
        const panels = document.querySelectorAll('.panel');

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses();
                panel.classList.add('active');
            });
        });

        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active');
            });
        }

        return () => {
            panels.forEach(panel => {
                panel.removeEventListener('click', () => {
                    removeActiveClasses();
                    panel.classList.add('active');
                });
            });
        };
    }, []);

    return (
        <div className='cards-container'>
            <div className="container">
                <div className="panel active flex justify-center items-center" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)),url('/Rectangle.svg')" }}>
                    <div className='first-slide text-black flex flex-col justify-centre items-start w-3/4'>
                        <h2 className='font-bold'>TESTIMONIALS</h2>
                        <h1 className='text-black text-[52px] text-center font-bold'>Real People,</h1>
                        <h1 className='text-[#32CD32] text-[52px] font-bold'>Real Feedback!</h1>
                        <p className='text-2xl'>Hear What My Clients Have to Say! <br />
                            Our clients share their success stories and showcase how our services have transformed their online presence.<br />
                            Let their testimony inspire you to take that next step!
                        </p>
                    </div>
                </div>
                <div className="panel" >
                    <video className='video h-full w-full pb-10 px-10' loop controls>
                        <source src="/videoplayback.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3 className='panel-heading'>Anuj Kumar</h3>
                </div>


                <div className="panel">
                    <video className='video h-full w-full pb-10 px-10' loop controls>
                        <source src="/videoplayback.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3 className='panel-heading'>Sneha Arvind</h3>
                </div>
            </div>
        </div>
    );
}

export default Cards;
