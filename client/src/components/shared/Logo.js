import React from 'react';
import { BsChevronDoubleUp } from "react-icons/bs";
import useSmoothScroll from '../../hooks/useSmoothScoll';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png'

const  Logo = () => {
    const { sticky, scrollToTop } = useSmoothScroll();
    const navigate = useNavigate();

    return (
        <nav className='lg:w-1/3 md:w-2/3 sm:w-4/5 w-11/12 mx-auto'>
            <div className='flex justify-center items-center gap-x-2 bg-primary m-6 rounded-lg p-2'>
                <h1 onClick={() => navigate('/')} className='text-secondary text-3xl font-semibold cursor-pointer'>Subsidy Searches</h1>
                <img src={LogoImg} alt="logo" width={40} />
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
