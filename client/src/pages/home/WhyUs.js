import React from 'react';
import Wave3 from '../../svgs/wave-3';

const STEPS = [
    {
        title: '4 out of 5 households are eligible',
        description:
            'We are able to find $0 premium policies for the majority of consumers.',
    },
    {
        title: 'Don’t overpay for health insurance',
        description:
            'We’ll find you affordable health insurance that could save your life, allow for preventative treatments and manage any health issues year-round.',
    },
    {
        title: 'No need to talk on the phone',
        description:
            'The form is 100% online. We will only contact you by text or email if we need any additional information.',
    },
];

const WhyUs = () => {
    return (
        <section
            id="why-us"
            className="relative z-0 flex flex-col items-center justify-center gap-y-10 bg-transparent py-10 py-16 text-gray-700"
        >
            <Wave3 className="absolute bottom-0 left-0 -z-10" />
            <h1 className="text-center text-5xl font-semibold text-secondary">
                Why Choose Us?
            </h1>
            <p className="mx-auto w-1/4 text-center">
                With decades of experience and thousands of happy customers,
                you’re in safe hands with Boost Health Insurance.
            </p>
            <div className="flex w-10/12 gap-x-10">
                {STEPS.map((step, i) => (
                    <div className="relative mt-20 w-1/3 gap-x-5 rounded-md bg-gray-100 px-6 pb-10 pt-20 shadow-md">
                        <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-16 -translate-y-16 rounded-full bg-gray-200 shadow-md"></div>
                        <div className="mb-4 flex gap-x-3 font-bold">
                            <span className="mt-1 flex h-7 w-8 items-center justify-center rounded bg-primary-300 text-xl text-secondary">
                                {i + 1}
                            </span>
                            <h1 className="text-2xl font-bold">{step.title}</h1>
                        </div>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
