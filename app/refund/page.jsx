import React from 'react'

const page = () => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center'>

            <div className="relative flex justify-center items-center w-full p-10 bg-center my-5">
                <div className="absolute inset-0 bg-[url('/privacy-bg.jpg')] bg-cover bg-center opacity-30"></div>
                <h1 className="relative text-white text-3xl font-semibold md:text-5xl">
                    <span className="text-[#F16D25]">Refund Policy</span>
                </h1>
            </div>

            <div className='mx-6 md:mx-32 text-justify text-white text-lg mb-10'>

                <p>Thank you for choosing Sociowell. We appreciate your business and trust. This document outlines our policy regarding refunds.
                </p>

                <p className='text-[#F16D25] mt-5'>1. No Refunds</p>
                <p>a. <span className='bold'>General:</span> At Sociowell, all sales are final. We do not offer refunds for any products or services purchased from us.<br />
                    b. <span className='bold'>Exceptions:</span> There are no exceptions to this policy unless explicitly stated in a written agreement signed by both the customer and Sociowell.
                </p>

                <p className='text-[#F16D25] mt-5'>2. Quality Assurance</p>
                <p>While we do not offer refunds, we stand by the quality of our products and services. If you encounter any issues or have concerns, please contact our customer service team, and we will do our best to assist you.

                </p>

                <p className='text-[#F16D25] mt-5'>3. Contact Us</p>
                <p>If you have questions or concerns about our refund policy, please contact us at Email:info@sociowell.com.
                </p>



            </div>
        </div>
    )
}

export default page
