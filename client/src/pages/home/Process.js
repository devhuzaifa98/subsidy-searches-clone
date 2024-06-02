import React from 'react';
import Wave2 from '../../svgs/wave-2';

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
            className="relative z-0 flex flex-col items-center justify-center gap-y-10 bg-transparent bg-white py-10 py-16 text-gray-700"
        >
            <Wave2 className="absolute bottom-0 left-0 -z-10" />
            <h1 className="text-5xl font-semibold">How It Works</h1>
            <h1 className="text-2xl">
                Eligibility for a complimentary health plan is based on
                household income.
            </h1>
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-semibold text-primary-600">
                    If your income falls within the blue bracket, you qualify.
                </h1>
                <h1 className="text-2xl">Don't wait, submit the form now!</h1>
                <table className="mt-4 border-separate border-spacing-1">
                    <thead>
                        <tr>
                            <th class="px-24 py-1.5">Family Size</th>
                            <th class="bg-primary-300 px-24 py-1.5">100%</th>
                            <th class="bg-primary-300 px-24 py-1.5">150%</th>
                            <th class="px-24 py-1.5">200%</th>
                            <th class="px-24 py-1.5">400%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="spacing-y-3 text-center">
                            <td class="px-24 py-1.5">1</td>
                            <td class="bg-primary-300 px-24 py-1.5">$14,580</td>
                            <td class="bg-primary-300 px-24 py-1.5">$21,870</td>
                            <td class="px-24 py-1.5">$29,160</td>
                            <td class="px-24 py-1.5">$58,320</td>
                        </tr>
                        <tr className="bg-gray-200 text-center">
                            <td class="px-24 py-1.5">2</td>
                            <td class="bg-primary-300 px-24 py-1.5">$19,720</td>
                            <td class="bg-primary-300 px-24 py-1.5">$29,580</td>
                            <td class="px-24 py-1.5">$39,440</td>
                            <td class="px-24 py-1.5">$78,880</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-24 py-1.5">3</td>
                            <td class="bg-primary-300 px-24 py-1.5">$24,860</td>
                            <td class="bg-primary-300 px-24 py-1.5">$37,290</td>
                            <td class="px-24 py-1.5">$49,720</td>
                            <td class="px-24 py-1.5">$99,440</td>
                        </tr>
                        <tr className="bg-gray-200 text-center">
                            <td class="px-24 py-1.5">4</td>
                            <td class="bg-primary-300 px-24 py-1.5">$30,000</td>
                            <td class="bg-primary-300 px-24 py-1.5">$45,000</td>
                            <td class="px-24 py-1.5">$60,000</td>
                            <td class="px-24 py-1.5">$120,000</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-24 py-1.5">5</td>
                            <td class="bg-primary-300 px-24 py-1.5">$35,140</td>
                            <td class="bg-primary-300 px-24 py-1.5">$52,710</td>
                            <td class="px-24 py-1.5">$70,280</td>
                            <td class="px-24 py-1.5">$140,560</td>
                        </tr>
                    </tbody>
                </table>
                <center>
                    <b>Note:</b> Exact income levels may vary by state.
                </center>
            </div>
            <div className="flex w-8/12 gap-x-10">
                {STEPS.map((step, i) => (
                    <div className="flex w-1/3 items-center justify-center gap-x-5 rounded-md bg-gray-100 px-6 py-10">
                        <h1 className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 p-5 text-2xl font-bold">
                            {i + 1}
                        </h1>
                        <div className="border-l pl-6">
                            <h1 className="text-2xl font-bold">{step.title}</h1>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
