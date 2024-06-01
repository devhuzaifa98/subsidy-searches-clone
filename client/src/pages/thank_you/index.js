import React from 'react';
import Logo from '../../assets/images/logo.png';
import ThanksImg from '../../assets/images/thanks.png';

import './ThankYou.css';

const ThankYou = () => {
    return (
        <div
            id="thank-you"
            className="flex h-screen items-center justify-center"
        >
            <div className="flex w-4/5 flex-col items-center justify-center gap-y-3 sm:w-1/2 lg:w-1/4">
                <img src={ThanksImg} alt="logo" className="w-48 text-dark" />
                <p className="text-center text-2xl text-dark">
                    You're all ready to receive your card shortly. An email
                    confirming your form registration will be sent to you
                    shortly.
                </p>
                <div className="flex gap-x-2 bg-primary px-3 py-1">
                    <h1 className="text-lg font-bold uppercase text-secondary md:text-2xl">
                        subsidy searches
                    </h1>
                    <img src={Logo} alt="logo" width={30} />
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
