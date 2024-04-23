import React from "react"
import Logo from '../../assets/images/logo.png'
import ThanksImg from '../../assets/images/thanks.png'

import './ThankYou.css'

const ThankYou = () => {
    return (
        <div id='thank-you' className='h-screen flex items-center justify-center'>
            <div className='w-4/5 sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center gap-y-3'>
                <img src={ThanksImg} alt="logo" className='w-48 text-dark' />
                <p className='text-dark text-2xl text-center'>You're all ready to receive your card shortly. An email confirming your form registration will be sent to you shortly.</p>
                <div className='flex gap-x-2 bg-primary px-3 py-1'>
                    <h1 className='uppercase font-bold text-lg md:text-2xl text-secondary'>subsidy searches</h1>
                    <img src={Logo} alt="logo" width={30} />
                </div>
            </div>
        </div>
    )
}

export default ThankYou
