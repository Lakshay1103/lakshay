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
                <div className="panel active flex justify-center items-center " style={{ backgroundImage: "url('/Rectangle.svg')" }}>
                    <div className='text-black flex flex-col justify-centre items-start w-3/4'>
                        <h2>TESTIMONIALS</h2>

                        <h1>Real People,<span>Real Feedback!</span></h1>
                        <p>Hear What My Clients Have to Say!
                            Our clients share their success stories and showcase how our services have transformed their online presence.
                            Let their testimony inspire you to take that next step!
                        </p>
                    </div>
                </div>
                <div className="panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}>
                    <h3>ANUJ KUMAR</h3>
                </div>
                <div className="panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')" }}>
                    <h3>SNEHA ARVIND</h3>
                </div>

            </div>
        </div>
    );
}

export default Cards;
