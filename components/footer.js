"use client";

import React from 'react'

const footer = () => {
    return (
        <div className='mt-20 flex justify-center items-center'>

            <div className='w-3/4 rounded-lg p-20 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'>

                <p className='text-black font-bold my-4'>ARE YOU READY</p>

                <h1 className='text-white text-[48px] font-bold text-center leading-[50px]'>To Build Something <br />Worthwhile?</h1>

                <button class="bg-white text-green-600 border border-green-600 rounded-full p-4 px-5 mt-5" onClick={() => window.open('https://calendly.com/lakshaygoellll/work-with-me', '_blank')}>
                    GET STARTED
                </button>
            </div>

        </div>
    )
}

export default footer
