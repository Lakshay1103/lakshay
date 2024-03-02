import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Navsm = () => {

    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuItemClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShowMenu(false);
        }
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <div>
            <nav
                className={`flex justify-between items-center py-4 px-8 bg-black text-white fixed top-0 left-0 right-0 z-50`}
                data-aos="slide-down" data-aos-duration="1500"
            >

                <div className="flex items-center">
                    <img src="/Logo_white.svg" alt="Logo" className="h-6" />
                </div>
                <div className="flex items-center">
                    <FaBars className="h-6 w-6 cursor-pointer" onClick={handleMenuToggle} />
                </div>
            </nav>
            {showMenu && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-black p-8 rounded-lg shadow-lg text-white relative border-2 border-white">
                        <FaTimes className="absolute top-2 right-2 cursor-pointer" onClick={handleCloseMenu} />
                        <div className="cursor-pointer mb-4" onClick={() => handleMenuItemClick('home')}>Home</div>
                        <div className="cursor-pointer mb-4" onClick={() => handleMenuItemClick('testimonials')}>Testimonials</div>
                        <div className="cursor-pointer mb-4" onClick={() => handleMenuItemClick('about')}>About</div>
                        <div className="cursor-pointer"><a href='https://cal.com/lakshaygoel/work-with-me'>Contact</a></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navsm;
