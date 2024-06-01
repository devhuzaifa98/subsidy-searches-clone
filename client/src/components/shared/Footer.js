import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="mt-8 bg-secondary py-4">
            <div className="container mx-auto w-11/12 text-white md:space-y-8 md:py-3 xl:w-auto">
                <div className="flex cursor-pointer justify-center gap-x-2 md:justify-start">
                    <h1 className="font-josefin mb-3 cursor-pointer text-center text-lg font-bold uppercase sm:mb-0 md:text-2xl">
                        Subsidy searches
                    </h1>
                    <img src={LogoImg} alt="" className="h-6" />
                </div>
                <div className="flex flex-col-reverse items-center justify-between gap-y-2 border-t border-gray-600 pt-4 text-xs sm:flex-row">
                    <p>Copyrights © 2024.</p>
                    <div className="space-x-4">
                        <Link
                            to="/privacy-policy"
                            className="hover:text-primary hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms-and-conditions"
                            className="hover:text-primary hover:underline"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
