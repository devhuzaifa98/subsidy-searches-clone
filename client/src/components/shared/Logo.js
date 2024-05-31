import React from 'react';
import { BsChevronDoubleUp } from "react-icons/bs";
import useSmoothScroll from '../../hooks/useSmoothScoll';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png'

const Logo = ({ leftAligned, className }) => {
    const { sticky, scrollToTop } = useSmoothScroll();
    const navigate = useNavigate();

    return (
        <nav className={`text-center p-4 ${leftAligned ? "!pl-0 w-full" : ""} sm:p-8 ` + className}>
            <div className={`flex ${leftAligned ? "" : "justify-center"} items-center gap-x-2 cursor-pointer`}>
                <h1 onClick={() => navigate('/')} className='text-secondary text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer'>Subsidy Searches</h1>
                <img src={LogoImg} alt="logo" className='h-6 sm:h-10' />
            </div>
            {sticky && (
                <button className="fixed bottom-8 right-8 bg-secondary text-white w-10 h-10 rounded-lg z-50 flex items-center justify-center" onClick={scrollToTop}>
                    <BsChevronDoubleUp />
                </button>
            )}
        </nav>
    );
};

export default Logo;
