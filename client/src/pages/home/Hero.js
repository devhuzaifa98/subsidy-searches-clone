import { useNavigate } from "react-router-dom";
import TextField from "../../components/shared/FormElements/TextField";
import { PrimaryButton } from "../../components/buttons";
import HeroImg from "../../assets/images/hero.webp";
import Logo from "../../components/shared/Logo";
import Wave from "../../svgs/wave";
import Boy from "../../assets/images/boy.png";
import { useState } from "react";
import Rank from "../../svgs/rank";

const Hero = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleNextButtonClick = () => {
    setError(false);
    const zip = document.getElementById("details.zip");
    if (!zip.checkValidity()) return setError(true);
    navigate("/form");
  };

  return (
    <section
      id="hero"
      className="flex-1 flex flex-col justify-between border-b border-b-light relative z-0"
    >
      <h1 className="w-full bg-secondary text-center text-white p-4 font-bold text-xl">
        $0 Premium Healthcare
      </h1>
      <Wave className="hidden md:block bottom-0 fill-primary absolute -z-10" />
      <div className="flex-1 gap-y-20 px-5 py-10 flex flex-col justify-between m-auto max-w-[1600px]">
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
          <div className="flex items-center justify-center h-full">
            <div className="text-center md:text-left h-1/2 md:w-1/2 text-3xl font-semibold">
              <h1>
                Enter Zip code to see if you’re eligible for a $0 premium health
                insurance plan <span></span>
              </h1>
              <div className="flex flex-col mt-20 sm:flex-row items-stretch justify-center">
                <TextField
                  placeholder="123456"
                  id="details.zip"
                  innerClasses="py-4 sm:text-xl font-bold rounded-none"
                  type="number"
                />
                <PrimaryButton
                  onClick={handleNextButtonClick}
                  text="Next"
                  className="font-bold text-xl border border-primary sm:rounded-l-none"
                />
              </div>
            </div>
            <div className="hidden md:flex justify-center w-1/2">
              <img
                src={HeroImg}
                className="w-2/3 p-2 border border-gray-300 aspect-[15/16]"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={Boy} className="h-40 w-40 mr-20" />
          <p className="text-2xl text-white">
            "I worked with Jean trying to find the most affordable insurance
            plan that would protect me and my family as well. He was able to
            guide me through the process and put me in a plan that is amazing.
            Highly recommend this company!!"
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
