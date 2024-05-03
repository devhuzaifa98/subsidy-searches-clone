import React from 'react';
import LogoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-secondary py-4 mt-8'>
            <div className='container w-11/12 xl:w-auto mx-auto text-white md:space-y-8 md:py-3'>
                <div className='flex justify-center md:justify-start gap-x-2 cursor-pointer'>
                    <h1 className='font-josefin uppercase text-lg text-center md:text-2xl font-bold cursor-pointer mb-3 sm:mb-0'>Subsidy searches</h1>
                    <img src={LogoImg} alt="" className='h-6' />
                </div>
                <div className='flex flex-col-reverse gap-y-2 sm:flex-row items-center justify-between text-xs border-t border-gray-600 pt-4'>
                    <p>Copyrights © 2024.</p>
                    <div className='space-x-4'>
                        <Link to='/privacy-policy' className='hover:text-primary hover:underline'>Privacy Policy</Link>
                        <Link to='/terms-and-conditions' className='hover:text-primary hover:underline'>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
