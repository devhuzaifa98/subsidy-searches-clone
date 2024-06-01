import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import useSmoothScroll from '../../hooks/useSmoothScoll';

const Logo = ({ leftAligned, className }) => {
    const { sticky, scrollToTop } = useSmoothScroll();
    const navigate = useNavigate();

    return (
        <nav
            className={
                `p-4 text-center ${leftAligned ? 'w-full !pl-0' : ''} sm:p-8 ` +
                className
            }
        >
            <div
                className={`flex ${leftAligned ? '' : 'justify-center'} cursor-pointer items-center gap-x-2`}
            >
                <h1
                    onClick={() => navigate('/')}
                    className="cursor-pointer text-xl font-semibold text-secondary sm:text-2xl md:text-3xl"
                >
                    Subsidy Searches
                </h1>
                <img src={LogoImg} alt="logo" className="h-6 sm:h-10" />
            </div>
            {sticky && (
                <button
                    className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white"
                    onClick={scrollToTop}
                >
                    <BsChevronDoubleUp />
                </button>
            )}
        </nav>
    );
};

export default Logo;
