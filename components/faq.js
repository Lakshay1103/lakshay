"use client";

import { React, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AccordionExpandIcon() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div
            className='flex flex-col justify-center items-center mt-20'
            data-aos='fade-up'
            data-aos-duration="1000"
        >

            <div className='text-center'>
                <h1 className='text-white text-[48px] font-bold m-0 p-0'>FAQs</h1>
                <p className='text-white text-sm m-0 p-0'>Your burning questions answered!</p>
            </div>

            <div
                className='w-3/4 mt-10'
                data-aos='fade-right'
                data-aos-duration="1500"
            >

                <Accordion
                    className='bg-gradient-to-r from-black to-gray-900  mb-4'
                >
                    <AccordionSummary
                        className=' rounded-lg p-3'
                        style={{ border: '2px solid #BAB2B2' }}
                        expandIcon={<ArrowDropDownIcon style={{ color: 'white' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text-white'>What is my USP?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            • In-depth understanding of the industry <br />
                            • Team composed of highly passionate and creative individuals <br />
                            • Unique approach that is fuelled by extensive insights in the industry and passion for the space.
                        </Typography>
                    </AccordionDetails>
                </Accordion>





                {/* <Accordion
                    className='bg-gradient-to-r from-black to-gray-900 mb-4'
                >
                    <AccordionSummary
                        className=' rounded-lg p-3'
                        style={{ border: '2px solid #BAB2B2' }}
                        expandIcon={<ArrowDropDownIcon style={{ color: 'white' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text-white'>What sets apart my marketing strategies?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            My team utilizes the latest trends and data-driven
                            insights to ensure that your content stands out in the competitive Instagram landscape.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}

                <Accordion
                    className='bg-gradient-to-r from-black to-gray-900 mb-4'

                >
                    <AccordionSummary
                        className=' rounded-lg p-3'
                        style={{ border: '2px solid #BAB2B2' }}
                        expandIcon={<ArrowDropDownIcon style={{ color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        <Typography className='text-white'>How can I determine if we&apos;re the right for you?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            We offer a complimentary one-on-one strategy call to determine if we&apos;re the right fit for you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion
                    className='bg-gradient-to-r from-black to-gray-900 mb-4'
                >
                    <AccordionSummary
                        className=' rounded-lg p-3'
                        style={{ border: '2px solid #BAB2B2' }}
                        expandIcon={<ArrowDropDownIcon style={{ color: 'white' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text-white'>Is there a guarantee for the results?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            While we do not provide a guarantee, based on our track record, we are confident in exceeding your current results by a significant margin.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

