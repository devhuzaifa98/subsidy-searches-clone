import React from 'react';
import AboutImg from '../../assets/images/about.jpg';

const About = () => {
    return (
        <section
            id="about"
            className="container relative z-0 mx-auto flex min-h-screen items-center justify-center bg-white"
        >
            <div className="grid grid-cols-4 space-x-5 md:space-x-10">
                <div className="col-span-5 mx-5 md:col-span-2">
                    <img
                        src={AboutImg}
                        alt=""
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="col-span-5 md:col-span-2">
                    <h3 className="text-base font-bold capitalize text-dark">
                        About us
                    </h3>
                    <h2 className="mb-4 text-4xl font-semibold uppercase text-secondary">
                        Who we are
                    </h2>
                    <p className="text-dark-color">
                        The Subsidy Searches team helps individuals and families
                        with finding low cost insurance coverage.
                    </p>
                    <br />
                    <p className="text-dark-color">
                        Our dedicated benefit specialists have assisted
                        thousands of people in finding affordable health
                        insurance plans, often with $0 premiums. Our goal is to
                        enroll you and your family in a plan that offers the
                        necessary coverage with maximum benefits at the lowest
                        cost.
                    </p>
                    <br />
                    <p className="text-dark-color">
                        At Subsidy Searches, we firmly believe that EVERYONE
                        should have access to quality health insurance that fits
                        with their budget. Let us find that plan for you today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
