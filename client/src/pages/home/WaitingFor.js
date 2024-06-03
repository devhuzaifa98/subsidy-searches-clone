import { IoIosArrowDropright } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import FamilyOne from '../../assets/images/family_1.jpg';
import FamilyTwo from '../../assets/images/family_2.jpg';
import Rank from '../../svgs/rank';

const WaitingFor = () => {
    const navigate = useNavigate();
    return (
        <section className="relative z-0 flex min-h-[600px] items-center justify-center gap-y-10 bg-transparent bg-white py-10 py-16 text-gray-700">
            <div className="flex w-1/3 flex-col items-center justify-center gap-y-5 px-20 text-center">
                <h1 className="text-center text-5xl font-semibold text-secondary">
                    What are you waiting for?
                </h1>
                <p>
                    The affordable health insurance you deserve is just 4
                    minutes away.
                </p>
                <button
                    onClick={() => navigate('/form')}
                    className="flex w-full items-center justify-center gap-x-2 rounded-full bg-primary-300 py-4 text-xl font-bold text-white"
                >
                    Check Now
                    <IoIosArrowDropright size={25} />
                </button>
                <div className="flex gap-x-2">
                    <Rank />
                    <p>
                        Rated 4.9 out of 5. Over <b>1,000</b> Reviews
                    </p>
                </div>
            </div>
            <div className="relative flex w-1/3 items-center justify-center">
                <img
                    className="h-[80%] w-[80%] rounded border border-gray-300 p-2"
                    src={FamilyOne}
                    alt="family 1"
                />
                <img
                    className="absolute -bottom-[10%] left-[60%] w-1/2 rounded border border-primary-600 p-2"
                    src={FamilyTwo}
                    alt="family 2"
                />
            </div>
        </section>
    );
};

export default WaitingFor;
