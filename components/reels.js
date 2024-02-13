import React from 'react'

const reels = () => {
    return (
        <>
            <div className='text-center mt-20 flex flex-col justify-center items-center'>

                <div>
                    <h1 className='text-white text-[48px] font-bold'>Snippets of <span className='text-[#32CD32] text-[48px] font-bold'>Satisfaction</span></h1>

                </div>

                <div className="reels-container flex justify-between items-center w-11/12 p-6 ">


                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/anuj.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Shaan Khanna</h1>
                                <p className='text-sm'>Founder - Networking Now India <br />A community of 51,000+ entrepreneurs</p>
                            </div>
                        </div>

                        <div className='w-[350px] text-white  italic'>
                            <p>“ Our community is loving the new content. Lovely work. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/8jmHCJmK2JA?si=o5tGcbZoxKvY3O1G?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Shaan khanna"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel mt-20 flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/sneha.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Sneha</h1>
                                <p className='text-sm'>Founder - Arvinda by Sneha <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                            </div>
                        </div>

                        <div className='w-[320px] text-white  italic'>
                            <p>“ I have seen tremendous patience, eye for detail and growth in his work.“</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/FBS8pGZjZsE?si=jukrFshGqOSx4OCV?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Sneha"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/dailylawyer.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Jenna V Krishnan</h1>
                                <p className='text-sm'>Founder- The Daily Lawyer <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>

                        <div className='w-[340px] text-white italic'>
                            <p>“ Lakshay is extremely organised and meticulous, using digital tools for seamless communication. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/SxVNnqx9TZs?si=v6nPzzeVx8aNfYhk?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Jenna V Krishnan"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>



                </div>

            </div>

            <div className='text-center flex flex-col justify-center items-center'>

                {/* <div>
                    <h1 className='text-white text-[48px] font-bold'>Snippets of <span className='text-[#32CD32] text-[48px] font-bold'>Satisfaction</span></h1>

                </div> */}

                <div className="reels-container flex justify-between items-center w-11/12 p-6 ">


                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center mt-2'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/anuj.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Anuj Kumar</h1>
                                <p className='text-sm'>Founder - Public and Policy Media</p>
                            </div>
                        </div>

                        <div className='w-[320px] pt-2 text-white italic'>
                            <p>“ Lakshay and his team know what type of content our audience enjoys. I do not need to tell him what to do. They are great at their work. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/y4zC8dbD_Cw?si=cpz429Xqm8PCebHa?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Anuj Kumar"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel mt-20 flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindfulsome.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Preiksha Jain</h1>
                                <p className='text-sm'>Founder - Mindfulsome <br />Relationship & Intimacy Coaching</p>
                            </div>
                        </div>

                        <div className='w-[350px] text-white italic'>
                            <p>“ Super work. The new content is awesome. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/-OTj-I9FW3g?si=VgFMw1wZGOkJd2Oe?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Preiksha Jain"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] mt-2 text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindmatters.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Vaitika Advani</h1>
                                <p className='text-sm'>Founder - Mind Matters by Vaitika </p>
                            </div>
                        </div>

                        <div className='w-[340px] text-white pt-2 italic'>
                            <p>“ My friends keep on commenting and telling me that they just love the content. Thanks a lot. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/tqlR4awNDyM?si=4L2HZceVi07b4Xmn?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Vaitika Advani"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>



                </div>




            </div>



            <div className='text-center flex flex-col justify-center items-center'>

                {/* <div>
                    <h1 className='text-white text-[48px] font-bold'>Snippets of <span className='text-[#32CD32] text-[48px] font-bold'>Satisfaction</span></h1>

                </div> */}

                <div className="reels-container flex justify-between items-center w-11/12 p-6 ">


                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center mt-2'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/anuj.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Spicy Sangria Events</h1>
                                <p className='text-sm'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>

                        <div className='w-[320px] pt-2 text-white italic'>
                            <p>“ Lovely work. People are loving the videos. “</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/-BBarzSsFAA?si=7YeNal0MxRGsAbA3?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Spicy Sangria"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel mt-20 flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindfulsome.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'>Plant A Word</h1>
                                <p className='text-sm'>A Unique Language Learning School</p>
                            </div>
                        </div>

                        <div className='w-[350px] text-white italic'>
                            <p>“ We are getting good responses from our audience. Everybody is enjoying the content.“</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/qQnO1hjunq4?si=aDgJSE43LE_4UAn_?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="Plant a word"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div className="reel flex flex-col justify-center items-center bg-[#252323] border-gradient border-4 border-blue-600 border-blue-500 border-blue-400">


                        <div className='w-[300px] mt-2 text-white font-normal flex items-center'>
                            <img className="w-[70px] h-[70px] rounded-full" src="/testimonials/mindmatters.jpg"></img>
                            <div className='p-4'>
                                <h1 className='font-extrabold'> Fashion Law Journal</h1>
                                <p className='text-sm'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>

                        <div className='w-[340px] text-white pt-2 italic'>
                            <p>“ Perfect video editing and content.“</p>
                        </div>

                        <iframe width="350" height="500"
                            className='p-6'
                            src="https://www.youtube.com/embed/ZiflBujWPhA?si=9WB7aURk2sL1rB8X?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1"
                            title="FLJ"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>

                    </div>



                </div>




            </div>





        </>
    )

}

export default reels
