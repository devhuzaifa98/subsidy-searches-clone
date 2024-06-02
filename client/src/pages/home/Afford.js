import React from 'react';
import GirlMeeting from '../../assets/images/girl-meeting.jpg';
import { PrimaryButton } from '../../components/buttons';
import Rank from '../../svgs/rank';

const Afford = () => {
    return (
        <section
            id="afford"
            className="relative z-0 flex flex-col items-center justify-center gap-y-10 bg-transparent bg-white py-10 py-16 text-gray-700"
        >
            <h1 className="text-center text-5xl font-semibold text-secondary">
                You CAN Afford Health Insurance
            </h1>
            <div className="mx-auto grid w-full grid-cols-1 gap-y-8 py-8 md:w-8/12 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
                <p className="px-6 md:px-0">
                    Most people don't know that they qualify for a $0 premium
                    health insurance plan, but Boost Health Insurance has helped
                    thousands of people to lower their premiums since 2014. Many
                    households do not need to pay a monthly premium to access
                    healthcare.
                    <br />
                    <br />
                    If you pay taxes, you will likely be entitled to subsidized
                    health insurance through The Affordable Care Act. Once we
                    have your information, we’ll use our sector expertise and
                    extensive network to find the policy that is right for you
                    and your family.
                    <br />
                    <br />
                    There’s no need to feel insecure about your healthcare
                    situation. It takes an average of just 4 minutes to complete
                    the online form, with no phone calls needed. Our team of
                    dedicated insurance agents will ensure that you get the best
                    value. 80% of applicants pay $10 or less for their monthly
                    premium.
                    <br />
                    <br />
                    How much would it cost you if you didn't take advantage of a
                    $0 premium health insurance plan?
                </p>
                <img
                    src={GirlMeeting}
                    alt="Girl Meeting"
                    className="h-auto min-w-full object-cover md:h-96 md:w-auto"
                />
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <PrimaryButton
                    text="See if you qualify"
                    classNames="md:px-20 md:py-4 font-semibold text-xl"
                />
                <div className="flex gap-x-2">
                    <Rank />
                    <p>
                        Rated 4.9 out of 5. Over <b>1,000</b> Reviews
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Afford;
