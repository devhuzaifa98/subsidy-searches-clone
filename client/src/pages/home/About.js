import React from 'react';
import about from '../../assets/images/about.png';

const About = () => {
    return (
        <section id="about" className='container mx-auto min-h-screen flex justify-between items-center'>
            <div className='grid grid-cols-5 space-x-5 md:space-x-10'>
                <div className='col-span-5 md:col-span-2 mx-5 space-y-2 flex flex-col'>
                    <img src={about} alt="" className='flex-1 rounded-lg object-cover' />
                    <div className="grid grid-cols-2 gap-2">
                        <div className='flex flex-col rounded-lg bg-white px-4 py-6'>
                            <span className='text-3xl font-semibold'>100+</span>
                            <span className='text-sm font-light capitalize'>years experience</span>
                        </div>
                        <div className='flex flex-col rounded-lg bg-white px-4 py-6'>
                            <span className='text-3xl font-semibold'>$0</span>
                            <span className='text-sm font-light capitalize'>premiums</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-5 md:col-span-3'>
                    <h3 className='text-base font-bold text-dark capitalize'>About us</h3>
                    <h2 className='text-4xl font-semibold text-secondary mb-4 uppercase'>Who we are</h2>
                    <p className='text-dark-color'>
                        With over a century of combined experience, the Subsidy Searches team
                        has been helping individuals and families with their insurance needs.
                    </p>
                    <br />
                    <p className='text-dark-color'>
                        Our dedicated benefit specialists have assisted hundreds of thousands of people
                        in finding affordable health insurance plans, often with $0 premiums.
                        Our goal is to enroll you and your family in a plan that offers the necessary
                        coverage with maximum benefits at the lowest cost.
                    </p>
                    <br />
                    <p className='text-dark-color'>
                        At Subsidy Searches, we firmly believe that EVERYONE should have access to quality health
                        insurance that fits with their budget. Let us find that plan for you today!
                    </p>
                    <br />
                    <p className='text-dark-color'>Sincerely,</p>
                    <p className='text-dark-color'>
                        <b>Erick</b>
                    </p>
                    <p className='text-dark-color'>Lead Benefit Specialist</p>
                </div>
            </div>
        </section>
    );
};

export default About;