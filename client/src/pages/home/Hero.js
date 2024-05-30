import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/shared/FormElements/TextField";
import { PrimaryButton } from "../../components/buttons";
import HeroImg from '../../assets/images/hero.png'

const Hero = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleNextButtonClick = () => {
        setError(false);
        const zip = document.getElementById('details.zip')
        if(!zip.checkValidity()) return setError(true)
        navigate('/form')
    }

    return (
        <section
            id="hero"
            className="flex-1 flex flex-col border-b border-b-light"
        >
            <div className="bg-primary grow sm:grow-0">
                <div className="container mx-auto grid grid-cols-5 gap-x-6 pt-10 items-center">
                    <div className="col-span-5 sm:col-span-2 px-4 sm:px-0">
                        <div className="bg-secondary p-10 mb-10 text-white text-left rounded-lg">
                            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                                Insurance made easy for everyone
                            </h1>
                        </div>
                    </div>
                    <div className="sm:col-span-3 hidden sm:block ml-auto">
                        <img src={HeroImg} alt="hero" width={500} className="mx-auto" />
                    </div>
                </div>
            </div>
            <div className="sm:flex-1 bg-secondary text-white">
                <div className="w-full px-4 sm:w-1/2 py-14 mx-auto flex flex-col justify-center">
                    <p className="mb-2">
                        Enter your zip code to see if you qualify
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch justify-center">
                        <TextField
                            placeholder="123456"
                            label={''}
                            id={'details.zip'}
                            wrapperClasses="flex-1"
                            innerClasses={`py-4 sm:text-xl md:rounded-r-none font-bold ${error ? 'border-red' : 'border-light'}`}
                            type="text"
                            minLength={5}
                        />
                        <PrimaryButton onClick={handleNextButtonClick} text="Next" classNames="font-bold text-xl mb-6 border border-primary md:rounded-l-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
