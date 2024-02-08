"use client";

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

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
                <div className="panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}>
                    <h3 className='panel-heading'>Anuj Kumar</h3>
                </div>
                <div className="panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')" }}>
                    <h3 className='panel-heading' >Sneha Arvind</h3>
                </div>
                <div className="panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')" }}>
                    <h3 className='panel-heading' >Sneha Arvind</h3>
                </div>
                <div className="panel">
                    <h3 className='panel-heading'>Sneha Arvind</h3>
                </div>
            </div>
        </div>
    );
}

export default Cards;
