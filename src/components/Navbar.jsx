import React from 'react';
import { useDarkMode } from '../context/DarkLightMode.jsx';
import bgImage from '../assets/images/bgImage.png';
import shape from '../assets/images/shape.svg';
import light from '../assets/images/light.svg';
import brother from '../assets/images/bro.png';
import dark from '../assets/images/dark.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const bgClass = darkMode ? 'bg-slate-950' : 'bg-slate-200';
    const headerClass = darkMode ? 'bg-[rgba(30,33,57,1)]' : 'bg-[rgba(47,49,72,1)]';
    const borderClass = darkMode ? 'border-gray-500' : 'border-slate-600';

    return (
        <div className={`${bgClass} pb-4 sm:pb-8 md:pb-12`}>

            <header
                className={` md:fixed top-0 left-0 w-full lg:justify-between flex justify-between items-center 
                    md:flex-col md:w-[103px] md:rounded-t-xl md:rounded-r-xl md:h-screen  ${headerClass}`}
            >
                <Link to='/'
                    className="w-[100px] h-[100px] bg-cover flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <img
                        src={shape}
                        alt="shape image"
                        className="w-[30px] h-[30px] transition-transform duration-300 hover:rotate-[90deg]"
                    />
                </Link>

                <div className="flex items-center gap-5 md:flex-col">
                    <div className="p-3 cursor-pointer" onClick={toggleDarkMode}>
                        <img src={darkMode ? dark : light} alt="Toggle mode icon" />
                    </div>

                    <div className={`p-4 border-l md:border-t md:border-l-0 lg:border-l-0 ${borderClass}`}>
                        <img src={brother} alt="brother image" className="cursor-pointer w-[35px] h-[35px]" />
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Navbar;
