import React from 'react';
import wave from '../../assets/images/wave.png';

const STEPS = [
    {
        title: 'Complete the form',
        description:
            'Fill out the required information in the form to proceed.',
    },
    {
        title: 'Evaluation',
        description:
            'Your information will be evaluated to determine eligibility.',
    },
    {
        title: 'GET A $0 HEALTH INSURANCE PREMIUM',
        description:
            'If eligible, enjoy the benefits of a health insurance premium with no cost.',
    },
];

const Process = () => {
    return (
        <section
            id="process"
            className="relative z-0 bg-white py-10 py-16 text-gray-700"
        >
            <img
                src={wave}
                className="absolute bottom-0 left-0 -z-10 h-1/2 w-full"
            />
            <div className="m-auto flex max-w-[1300px] flex-col items-center justify-center gap-y-5 text-center">
                <h1 className="text-4xl font-semibold md:text-5xl">
                    How It Works
                </h1>
                <h1 className="text-2xl md:text-3xl">
                    Eligibility for a complimentary health plan is based on
                    household income.
                </h1>
                <div className="my-10 w-full px-1 text-center">
                    <h1 className="text-2xl font-semibold text-primary-600 md:text-3xl">
                        If your income falls within the blue bracket, you
                        qualify.
                    </h1>
                    <h1 className="text-xl md:text-2xl">
                        Don't wait, submit the form now!
                    </h1>
                    <table className="mt-4 w-full border-separate border-spacing-1">
                        <thead>
                            <tr>
                                <th>Family Size</th>
                                <th class="bg-primary-300">100%</th>
                                <th class="bg-primary-300">150%</th>
                                <th>200%</th>
                                <th>400%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="spacing-y-3 text-center">
                                <td>1</td>
                                <td class="bg-primary-300">$14,580</td>
                                <td class="bg-primary-300">$21,870</td>
                                <td>$29,160</td>
                                <td>$58,320</td>
                            </tr>
                            <tr className="bg-gray-200 text-center">
                                <td>2</td>
                                <td class="bg-primary-300">$19,720</td>
                                <td class="bg-primary-300">$29,580</td>
                                <td>$39,440</td>
                                <td>$78,880</td>
                            </tr>
                            <tr className="text-center">
                                <td>3</td>
                                <td class="bg-primary-300">$24,860</td>
                                <td class="bg-primary-300">$37,290</td>
                                <td>$49,720</td>
                                <td>$99,440</td>
                            </tr>
                            <tr className="bg-gray-200 text-center">
                                <td>4</td>
                                <td class="bg-primary-300">$30,000</td>
                                <td class="bg-primary-300">$45,000</td>
                                <td>$60,000</td>
                                <td>$120,000</td>
                            </tr>
                            <tr className="text-center">
                                <td>5</td>
                                <td class="bg-primary-300">$35,140</td>
                                <td class="bg-primary-300">$52,710</td>
                                <td>$70,280</td>
                                <td>$140,560</td>
                            </tr>
                        </tbody>
                    </table>
                    <center>
                        <b>Note:</b> Exact income levels may vary by state.
                    </center>
                </div>
                <div className="flex flex-col gap-x-10 md:flex-row">
                    {STEPS.map((step, i) => (
                        <div className="m-2 flex items-center justify-center gap-x-5 rounded-md bg-gray-100 px-6 py-12 text-start">
                            <h1 className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 p-5 text-2xl font-bold">
                                {i + 1}
                            </h1>
                            <div className="border-l pl-6">
                                <h1 className="text-xl font-bold md:text-2xl">
                                    {step.title}
                                </h1>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
