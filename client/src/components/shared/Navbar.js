import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import useSmoothScroll from '../../hooks/useSmoothScoll';

const SECTIONS = ['Home', 'About us', 'How It Works?'];

const Navbar = () => {
    const { sticky, scrollTo, scrollToTop } = useSmoothScroll();
    const navigate = useNavigate();

    return (
        <nav className="w-full">
            <div className="container mx-auto flex flex-col justify-center p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex cursor-pointer items-center justify-center gap-x-2 sm:justify-start">
                    <h1
                        onClick={() => navigate('/')}
                        className="mb-3 cursor-pointer text-center text-xl font-bold uppercase text-secondary sm:mb-0 md:text-2xl"
                    >
                        Subsidy searches
                    </h1>
                    <img src={Logo} alt="logo" width={40} />
                </div>

                <ul className="flex items-center justify-between space-x-8">
                    {SECTIONS.map((section, index) => (
                        <li key={index}>
                            <button
                                onClick={() => scrollTo(index)}
                                className="border-b-2 border-transparent text-sm font-semibold text-secondary hover:border-secondary sm:text-base md:text-[100%]"
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {sticky && (
                <button
                    className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded border border-secondary bg-primary text-secondary"
                    onClick={scrollToTop}
                >
                    <BsChevronDoubleUp />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
