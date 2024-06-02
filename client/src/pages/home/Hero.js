import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GirlPointing from '../../assets/images/girl-pointing.png';
import HeroImg from '../../assets/images/hero.jpg';
import { PrimaryButton } from '../../components/buttons';
import TextField from '../../components/shared/FormElements/TextField';
import Logo from '../../components/shared/Logo';
import Rank from '../../svgs/rank';
import Wave from '../../svgs/wave';

const Hero = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleNextButtonClick = () => {
        setError(false);
        const zip = document.getElementById('details.zip');
        if (!zip.checkValidity()) {
            setError(true);
            return;
        }
        navigate('/form');
    };

    return (
        <section
            id="hero"
            className="relative z-0 flex flex-1 flex-col justify-between border-b border-b-light"
        >
            <h1 className="w-full bg-secondary py-3 text-center text-lg font-semibold text-white">
                $0 Premium Healthcare
            </h1>
            <Wave className="w-100 absolute bottom-0 -z-10 hidden fill-primary-300 md:block" />
            <div className="m-auto flex w-11/12 max-w-[1600px] flex-1 flex-col justify-between gap-y-20 px-5 py-10">
                <div className="flex flex-col gap-y-20">
                    <div>
                        <Logo leftAligned />
                        <div className="flex gap-x-2">
                            <Rank />
                            <p>
                                Rated 4.9 out of 5. Over <b>1,000</b> Reviews
                            </p>
                        </div>
                    </div>
                    <div className="flex h-full flex-col-reverse justify-center md:flex-row">
                        <div className="text-center text-3xl font-semibold md:w-1/2 md:text-left">
                            <h1>
                                Enter Zip code to see if you’re eligible for a
                                $0 premium health insurance plan <span></span>
                            </h1>
                            <div className="mt-10 flex flex-col items-stretch justify-center sm:flex-row sm:gap-x-3">
                                <TextField
                                    placeholder="123456"
                                    id="details.zip"
                                    wrapperClasses="mb-0"
                                    innerClasses="py-4 sm:text-xl font-bold rounded-l-md"
                                    type="number"
                                />
                                <PrimaryButton
                                    onClick={handleNextButtonClick}
                                    text="Get $0 Premium"
                                    className="rounded-r-md border border-primary-300 text-xl font-bold sm:rounded-l-none"
                                />
                            </div>
                        </div>
                        <div className="mb-10 flex justify-center md:mb-0 md:w-1/2">
                            <img
                                src={HeroImg}
                                alt="Hero"
                                className="max-h-[480px] w-full border border-secondary object-cover object-top p-2 md:w-2/3"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden items-center justify-center md:flex md:gap-x-12">
                    <img
                        src={GirlPointing}
                        alt="boy"
                        className="w-60 rounded-full bg-white p-4"
                    />
                    <p className="text-2xl text-white">
                        "I worked with Jean trying to find the most affordable
                        insurance plan that would protect me and my family as
                        well. He was able to guide me through the process and
                        put me in a plan that is amazing. Highly recommend this
                        company!!"
                        <br />
                        <br />- Paul D.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
