import React from 'react'

const page = () => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center'>

            <div className="relative flex justify-center items-center w-full p-10 bg-center my-5">
                <div className="absolute inset-0 bg-[url('/privacy-bg.jpg')] bg-cover bg-center opacity-50"></div>
                <h1 className="relative text-white text-xl font-semibold md:text-5xl">
                    Sociowell - <span className="text-[#F16D25]">Privacy Policy</span>
                </h1>
            </div>

            <div className='mx-6 md:mx-32 text-justify text-white text-lg mb-10'>

                <p>At Sociowell, we value your privacy and are committed to protecting your personal
                    information. This privacy policy outlines our practices concerning the collection,
                    use, and sharing of your personal information. By using our services, you consent to
                    the practices described in this policy.
                </p>

                <p className='text-[#F16D25] mt-5'>1. Information We Collect</p>
                <p>a. Personal Information: When you use our services, we may collect personal information,
                    such as your name, email address, postal address, phone number, and payment details.<br />
                    b. Content Information: We store the videos and related content you provide for editing
                    and social media management.<br />
                    c. Usage Information: We may collect information about how you use our services, such as
                    the type of content you view or produce, the frequency of your visits, and other information.
                </p>

                <p className='text-[#F16D25] mt-5'>2. How We Use Your Information</p>
                <p>a. To provide our services, including social media management, editing and producing videos.<br />
                    b. To communicate with you about our services, updates, and promotional offers.<br />
                    c. To enhance and improve our services through feedback and other insights provided by you.

                </p>

                <p className='text-[#F16D25] mt-5'>3. Information Sharing & Disclosure</p>
                <p>a. Client's Ownership: Content produced and published for clients belongs to the clients, and they have full discretion over its distribution.<br />
                    b. Service Providers: We may share your information with third-party vendors or service providers who help us provide our services.<br />
                    c. Legal Requirements: We may disclose your information when required by law or when we believe that such action is necessary to comply with the law or legal processes.
                </p>

                <p className='text-[#F16D25] mt-5'>4. Data Security</p>
                <p>We implement appropriate security measures to protect against unauthorized access, alteration, or destruction of your personal data. However, no online activity is ever fully secure, and we cannot guarantee its absolute security.</p>

                <p className='text-[#F16D25] mt-5'>5. Cookies & Tracking Technologies</p>
                <p>Our website may use cookies or similar tracking technologies to enhance user experience and to analyze trends, administer the website, and track user activities.
                </p>

                <p className='text-[#F16D25] mt-5'>6. Your Choices & Rights</p>
                <p>You have the right to access, correct, or delete your personal information in our possession. Requests can be made by contacting us directly.
                </p>


                <p className='text-[#F16D25] mt-5'>7. Changes to This Policy</p>
                <p>We reserve the right to modify this privacy policy at any time. Any changes made will be reflected here, and the "last updated" date at the top will indicate when the latest changes were made.
                </p>

                <p className='text-[#F16D25] mt-5'>8. Contact Us</p>
                <p>For any questions, concerns, or comments about this privacy policy, please contact us at info@sociowell.com
                </p>

            </div>
        </div>
    )
}

export default page
