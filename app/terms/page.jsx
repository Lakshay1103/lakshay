import React from 'react'

const page = () => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center'>

            <div className="relative flex justify-center items-center w-full p-10 bg-center my-5">
                <div className="absolute inset-0 bg-[url('/privacy-bg.jpg')] bg-cover bg-center opacity-30"></div>
                <h1 className="relative text-white text-3xl font-semibold md:text-5xl">
                    <span className="text-[#F16D25]">Terms of Use</span>
                </h1>
            </div>

            <div className='mx-6 md:mx-32 text-justify text-white text-lg mb-10'>

                <p>Welcome to Sociowell. This document outlines the terms of use governing the use of our social media management services. By using our services, you agree to be bound by these terms.</p>

                <p className='text-[#F16D25] mt-5'>1. Acceptance of Terms</p>
                <p>By accessing and using Sociowell&apos;s services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use our services.
                </p>

                <p className='text-[#F16D25] mt-5'>2. Ownership & Rights</p>
                <p>a. Upon completion of our social media management services and full payment by the client, Sociowell hereby transfers and assigns to the client all ownership rights in the content we produce and publish for them. This includes the rights to distribute, display, modify, and monetize the content.<br />
                    b. Until full payment is received, Sociowell retains all rights to the produced content.</p>

                <p className='text-[#F16D25] mt-5'>3. Payment & Fees</p>
                <p>Payment terms, fees, and other related charges will be specified separately in the service contract or agreement. Failure to settle payment within the stipulated timeframe may result in the withholding of content files and rights.</p>

                <p className='text-[#F16D25] mt-5'>4. Service Guarantee & Limitations</p>
                <p>Sociowell strives to provide top-quality services to all our clients. However, we make no warranties regarding the outcome or quality of any particular management project. Feedback and revisions will be governed by the stipulations outlined in the service agreement.</p>

                <p className='text-[#F16D25] mt-5'>5. Limitation of Liability</p>
                <p>Sociowell and its affiliates will not be liable for any indirect, incidental, or consequential damages (including lost profits) arising out of or in connection with our services, even if we have been advised of the possibility of such damages.</p>

                <p className='text-[#F16D25] mt-5'>6. Termination</p>
                <p>Sociowell reserves the right to terminate services at any time for any reason, including but not limited to violations of these terms or failure to pay fees when due.</p>

                <p className='text-[#F16D25] mt-5'>7. Changes to Terms</p>
                <p>We reserve the right to modify these terms at any time. If we make changes, we will notify you by revising the date at the top of the page.</p>

                <p className='text-[#F16D25] mt-5'>8. Contact</p>
                <p>For any questions or clarifications regarding these terms, please contact us at info@sociowell.com</p>



            </div>
        </div>
    )
}

export default page
