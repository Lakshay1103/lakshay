import React from 'react'

const Cardssm = () => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className='bg-white flex justify-center items-center h-[500px] w-3/4 rounded-2xl'
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)),url('/Rectangle.svg')",
                }}
            >
                <div className='w-3/4 flex flex-col justify-center items-center text-center'>

                    <h2 className="font-bold">TESTIMONIALS</h2>

                    <h1 className="text-black text-[48px] sm:text-[30px] md:text-[36px]  text-center font-bold">Real People,</h1>
                    <h1 className="text-[#32CD32] text-[48px] sm:text-[30px] md:text-[36px] font-bold -mt-4">Real Feedback!</h1>
                    <p className="text-lg sm:text-sm md:text-md">
                        <span className='font-bold'>Hear What My Clients Have to Say! </span><br /><br />
                        Our clients share their success stories and showcase how our services have transformed their online presence.<br /><br />
                    </p>
                    <div className='border-blue-700 border-2 text-black sm:text-sm md:text-lg rounded-full p-2'>Let their testimony inspire you to take that next step 👇 </div>


                </div>
            </div>
        </div>

    )
}

export default Cardssm
