
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>

            <div className='text-center'>
            <h1 className='text-white text-[48px] font-bold m-0 p-0'>FAQs</h1>
            <p className='text-white text-sm m-0 p-0'>Your burning questions answered!</p>
            </div>

            <div className='w-3/4 mt-10'>
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
                        <Typography className='text-white'>How can I determine if I am the right fit for you?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            I offer a complimentary one-on-one discovery call to understand your objectives.
                            If I believe that my team and I can deliver results for you, we will proceed from there.
                            Otherwise, I will do my best to connect you with someone from my network who can assist you.
                            Transparency is highly important to us.
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
                        <Typography className='text-white'>What sets apart my marketing strategies?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            My team utilizes the latest trends and data-driven
                            insights to ensure that your content stands out in the competitive Instagram landscape.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

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
                        <Typography className='text-white'>What sets me apart?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            - I create customized dashboards for each client to meet their specific needs<br />
                            - I work with a limited number of clients to ensure personalized attention<br />
                            - I use royalty-free elements to protect your accounts from any copyrights
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
                        <Typography className='text-white'>Is there a guarantee for my growth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white'>
                            While I do not provide a guarantee, based on our track record,
                            we are confident in exceeding your current results by a significant margin.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
