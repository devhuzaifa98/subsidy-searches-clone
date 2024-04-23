import React from 'react';
import Logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='bg-secondary py-4 mt-8'>
            <div className='flex flex-col justify-center items-center text-white text-xs'>
                <div className='flex gap-x-2'>
                    <h1 className='uppercase font-bold text-lg md:text-2xl text-primary'>subsidy searches</h1>
                    <img src={Logo} alt="logo" width={30} />
                </div>
                <p>Copyrights © 2024</p>
            </div>
        </div>

    );
};

export default Footer;
