import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

const faqData = [
    {
        title: 'What is a $0 premium policy?',
        description: `With a $0 premium policy, there is nothing to pay on a monthly basis.
    Zero-premium plans are offered to you through one of our trusted private insurance company partners.
    To keep costs low, the federal government contracts with private insurance companies and pays them a flat fee.
    The insurance company then creates agreements with a network of local hospitals or providers, which makes it more affordable for you.
    Your plan replaces traditional Medicare coverage where Part A is hospital insurance, Part B is medical insurance, and Part D provides prescription drug coverage.
    Depending on the plan you are eligible for, and what is available in your state, your plan may also cover extra services like hearing, vision, dental, and other wellness programs that traditional Medicare does not.`,
    },
    {
        title: 'Am I eligible for subsidy through the marketplace?',
        description: `4 out of 5 applicants are eligible for a $0 premium policy and 80% of customers will pay no more than $10 per month.
    Eligibility depends on the combination of a number of factors including your age, income, and location.
    But don’t worry - we will determine your eligibility based on the answers provided in your application form.
    If you aren’t eligible for a $0 premium policy, we will find you the best value option for your needs.`,
    },
    {
        title: 'Does it include dental?',
        description: `The majority of policies also include routine and emergency dental care. Where this is not offered as standard, it can usually be purchased as an add-on.`,
    },
    {
        title: 'Will I be covered for pre-existing medical conditions?',
        description: `Yes. Pre-existing conditions do not disqualify eligibility.`,
    },
    {
        title: 'When will I need to pay for medical care?',
        description: `There will often be some costs to pay when you access medical care. These include deductibles, coinsurance, and/or copays and represent the share you pay out of your own pocket when you receive care.
    These costs will be clearly outlined in your policy documents and your carrier will be happy to clarify any queries.`,
    },
];

const FAQ = () => {
    const [openedIndex, setOpenedIndex] = useState();
    return (
        <section className="bg-white py-16">
            <div className="flex h-full w-full flex-col justify-between px-5 pt-10 lg:m-auto lg:max-w-[1300px] lg:flex-row">
                <div className="w-full max-w-[470px] lg:w-1/2">
                    <img width={75} src={Logo} alt="logo" />
                    <h1 className="text-3xl font-semibold text-secondary lg:text-5xl">
                        Need more information?
                    </h1>
                    <h1 className="text-3xl font-light text-secondary lg:text-5xl">
                        We're here to help.
                    </h1>
                    <h6 className="mt-8 text-gray-600">
                        Frequently asked questions
                    </h6>
                </div>
                <div className="mt-10 w-full lg:w-1/2">
                    {faqData.map((item, key) => (
                        <div key={key} className="border-b border-gray-300">
                            <div
                                className="flex w-full items-center gap-x-2 bg-gray-100 p-4 text-left text-lg font-medium hover:cursor-pointer"
                                onClick={() =>
                                    setOpenedIndex(
                                        openedIndex === key ? undefined : key
                                    )
                                }
                            >
                                {openedIndex === key ? (
                                    <FaMinus className="fill-primary-300" />
                                ) : (
                                    <FaPlus className="fill-primary-300" />
                                )}{' '}
                                <span>{item.title}</span>
                            </div>
                            <p
                                className={`${openedIndex === key ? 'py-5' : 'h-0 py-0 opacity-0'} bg-gray-100 px-10 text-gray-700 transition-[padding] duration-200`}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
