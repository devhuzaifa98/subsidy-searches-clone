import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Boy from '../../assets/images/boy.png';
import HeroImg from '../../assets/images/hero.webp';
import { PrimaryButton } from '../../components/buttons';
import TextField from '../../components/shared/FormElements/TextField';
import Logo from '../../components/shared/Logo';
import Rank from '../../svgs/rank';
import Wave from '../../svgs/wave';

const Hero = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleNextButtonClick = () => {
        setError(false);
        const zip = document.getElementById('details.zip');
        if (!zip.checkValidity()) return setError(true);
        navigate('/form');
    };

    return (
        <section
            id="hero"
            className="relative z-0 flex flex-1 flex-col justify-between border-b border-b-light"
        >
            <h1 className="textlg w-full bg-secondary py-3 text-center font-semibold text-white">
                $0 Premium Healthcare
            </h1>
            <Wave className="absolute bottom-0 -z-10 hidden fill-primary md:block" />
            <div className="m-auto flex max-w-[1600px] flex-1 flex-col justify-between gap-y-20 px-5 py-10">
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
                    <div className="flex h-full items-center justify-center">
                        <div className="h-1/2 text-center text-3xl font-semibold md:w-1/2 md:text-left">
                            <h1>
                                Enter Zip code to see if you’re eligible for a
                                $0 premium health insurance plan <span></span>
                            </h1>
                            <div className="mt-20 flex flex-col items-stretch justify-center sm:flex-row">
                                <TextField
                                    placeholder="123456"
                                    id="details.zip"
                                    innerClasses="py-4 sm:text-xl font-bold rounded-none"
                                    type="number"
                                />
                                <PrimaryButton
                                    onClick={handleNextButtonClick}
                                    text="Next"
                                    className="border border-primary text-xl font-bold sm:rounded-l-none"
                                />
                            </div>
                        </div>
                        <div className="hidden w-1/2 justify-center md:flex">
                            <img
                                src={HeroImg}
                                className="aspect-[15/16] w-2/3 border border-gray-300 p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden items-center justify-center md:flex">
                    <img src={Boy} className="mr-20 h-40 w-40" />
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
{
    /* <div className="flex flex-col sm:flex-row items-stretch justify-center">
                        <TextField
                            placeholder="123456"
                            label={''}
                            id={'details.zip'}
                            innerClasses={`py-4 sm:text-xl font-bold rounded-none`}
                            type="number"
                        />
                        <PrimaryButton onClick={handleNextButtonClick} text="Next" classNames="font-bold mb-6 mt-2 text-xl border border-primary sm:rounded-l-none" />
                        </div> */
}
