import classNames from 'classnames';
import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import useSmoothScroll from '../../hooks/useSmoothScoll';

const Logo = ({ className }) => {
    const { sticky, scrollToTop } = useSmoothScroll();
    const navigate = useNavigate();

    return (
        <nav
            className={classNames(
                `flex cursor-pointer items-center justify-center sm:justify-start gap-x-2 p-4 text-center sm:p-8`,
                className
            )}
        >
            <h1
                onClick={() => navigate('/')}
                className="cursor-pointer text-xl font-semibold text-secondary sm:text-2xl md:text-3xl"
            >
                Subsidy Searches
            </h1>
            <img src={LogoImg} alt="logo" className="h-6 sm:h-10" />
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
