import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GirlPointing from '../../assets/images/girl-pointing.png';
import HeroImg from '../../assets/images/hero.jpg';
import { PrimaryButton } from '../../components/buttons';
import TextField from '../../components/shared/FormElements/TextField';
import Logo from '../../components/shared/Logo';
import Rank from '../../svgs/rank';
// import Wave from '../../svgs/wave';
import PhoneWhite from '../../assets/images/phone-white.webp';
import Wave from '../../assets/images/wave.png';
import useForm from '../../hooks/useForm';

const Hero = () => {
    const navigate = useNavigate();
    const { setErrorIds, errorIds } = useForm();

    const handleNextButtonClick = () => {
        const zip = document.getElementById('details.zip');
        if (!zip.checkValidity()) {
            const errorId = errorIds.find(e => e.id === zip.id);
            if (!errorId)
                setErrorIds([...errorIds, { id: zip.id, message: '' }]);
            return;
        }
        navigate('/form');
    };

    return (
        <section
            id="hero"
            className="relative z-0 flex flex-1 flex-col justify-between border-b border-b-light"
        >
            <div className="flex w-full items-center justify-center gap-x-1 bg-secondary py-2 text-center text-gray-200">
                <a href="/" className="text-md font-semibold hover:underline">
                    $0 Premium Healthcare!
                </a>
                <span className="text-md hidden font-light lg:block">
                    Need help?
                </span>
                <span className="hidden text-lg font-semibold lg:block">
                    Call toll free:
                </span>
                <div className="flex items-center">
                    <img src={PhoneWhite} className="h-10 w-10" />
                    <div className="flex flex-col">
                        <a
                            href="tel:1-866-650-0567"
                            className="text-md font-extrabold !leading-none lg:text-lg"
                        >
                            1-888-294-9212
                        </a>
                        <span className="text-xs font-medium text-primary-300 lg:text-xs">
                            Sun - Sat 8 AM - 8 PM EST
                        </span>
                    </div>
                </div>
            </div>
            <img
                src={Wave}
                className="absolute bottom-0 -z-10 hidden h-1/2 w-full fill-primary-300 md:block"
            />
            <div className="m-auto flex max-w-[1300px] flex-1 flex-col justify-between gap-y-20 px-2 py-2 md:px-0 md:py-10">
                <div className="flex flex-col">
                    <div className="p-4">
                        <Logo className="!p-0 !py-2.5" />
                        <div className="my-4 flex gap-x-2 text-sm text-gray-600">
                            <Rank />
                            <p>
                                Rated 4.9 out of 5. Over <b>1,000</b> Reviews
                            </p>
                        </div>
                    </div>
                    <div className="flex h-full flex-col-reverse items-center justify-center md:flex-row">
                        <div className="m-2.5 text-center text-3xl font-semibold md:w-1/2 md:text-left">
                            <h1>
                                See if you’re eligible for a $0 premium health
                                insurance plan{' '}
                                <br className="block sm:hidden" />
                                <span className="text-2xl">
                                    4 Out Of 5 Of Our Customers Qualify
                                </span>
                            </h1>
                            <div className="mt-36 flex flex-col items-stretch justify-center gap-y-3 sm:flex-row sm:gap-x-3">
                                <TextField
                                    placeholder="123456"
                                    id="details.zip"
                                    wrapperClasses="mb-0"
                                    innerClasses="py-4 sm:text-xl font-semibold rounded-l-md"
                                    type="text"
                                    minLength="5"
                                />
                                <PrimaryButton
                                    onClick={handleNextButtonClick}
                                    text="Get $0 Premium"
                                    className="rounded-r-md border border-primary-500 text-xl font-bold sm:rounded-l-none"
                                />
                            </div>
                        </div>
                        <div className="mb-10 hidden justify-center md:mb-0 md:flex md:w-1/2">
                            <img
                                src={HeroImg}
                                alt="Hero"
                                className="max-h-[480px] w-full border border-gray-300 object-cover object-top p-2 md:w-2/3"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-20 hidden items-center justify-center md:flex md:gap-x-12">
                    <img
                        src={GirlPointing}
                        alt="boy"
                        className="w-36 rounded-full bg-white p-4"
                    />
                    <p className="text-2xl text-white">
                        "I worked with Subsidy Searches trying to find the most
                        affordable insurance plan that would protect me and my
                        family as well. They were able to guide me through the
                        process and put me in a plan that is amazing. Highly
                        recommend this company!!"
                        <br />
                        <br />- Paul D.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
