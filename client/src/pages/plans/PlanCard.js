import toast from 'react-hot-toast';
import { FaCheck, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Bronze from '../../assets/images/bronze.png';
import Gold from '../../assets/images/gold.png';
import Silver from '../../assets/images/silver.png';
import { SecondaryButton } from '../../components/buttons';
import useContacts from '../../hooks/useContacts';

const PlanCard = ({ plan }) => {
    const navigate = useNavigate();
    const { updateContact } = useContacts();

    const metalLevelIndex = {
        Bronze: { index: 1, color: '#CD7F32' },
        Silver: { index: 2, color: 'silver' },
        Gold: { index: 3, color: 'gold' },
        Catastrophic: { index: 4, color: 'silver' },
    };

    const onPlanEnroll = async () => {
        try {
            await updateContact(localStorage.getItem('uuid'), {
                plan_id: plan.id,
            });
            navigate('/consent');
        } catch (error) {
            return toast.error(String(error), { duration: 3000 });
        }
    };

    return (
        <div>
            <span className="rounded-t bg-primary-300 px-3 py-1 text-sm text-white">
                Lowest premium plan
            </span>
            <div className="flex w-full flex-col rounded-b rounded-tr border border-gray-300 shadow">
                <div className="rounded-tr-lg border-b border-gray-200 bg-white px-4 py-2">
                    <div className="text-xs text-gray-400">{plan.name}</div>
                    <div className="text-md font-semibold text-dark">
                        {plan.issuer.name}
                    </div>
                </div>
                <div className="grid grid-cols-10 gap-x-4 gap-y-4 bg-white p-4 shadow">
                    <div className="col-span-5 flex flex-col items-center justify-center rounded-lg bg-gray-100 md:col-span-2">
                        <h1 className="text-xs capitalize text-gray-600">
                            Monthly premium
                        </h1>
                        <div className="text-3xl text-blue-600">
                            ${plan.premium_w_credit}
                        </div>
                        <div className="text-red-600 text-xs font-light line-through">
                            was ${plan.premium}
                        </div>
                    </div>
                    {plan.benefits[0].cost_sharings.find(
                        cost_sharing =>
                            cost_sharing.network_tier === 'In-Network'
                    ) && (
                        <div className="col-span-5 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-5 text-center md:col-span-2">
                            <h1 className="text-xs capitalize text-gray-600">
                                Primary Care Visit Copay
                            </h1>
                            <div className="text-3xl text-blue-600">
                                $
                                {
                                    plan.benefits[0].cost_sharings.find(
                                        cost_sharing =>
                                            cost_sharing.network_tier ===
                                            'In-Network'
                                    ).copay_amount
                                }
                            </div>
                        </div>
                    )}
                    <div className="col-span-10 md:col-span-6">
                        {plan.benefits
                            .filter(benefit => benefit.covered)
                            .slice(0, 6)
                            .map((benefit, index) => (
                                <div
                                    key={index}
                                    className="mb-1 flex justify-between"
                                >
                                    <h3 className="text-xs text-gray-500">
                                        {benefit.name}
                                    </h3>
                                    <FaCheck className="text-sm text-green-600" />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col justify-between rounded-b-lg bg-gray-100 sm:flex-row">
                    <div className="flex items-center gap-x-2 py-2 pl-4">
                        <img
                            className="h-5 w-5"
                            alt=""
                            src={
                                plan.metal_level === 'Bronze'
                                    ? Bronze
                                    : plan.metal_level === 'Gold'
                                      ? Gold
                                      : Silver
                            }
                        />
                        <p
                            className={`${plan.metal_level === 'Bronze' ? 'text-bronze' : plan.metal_level === 'Gold' ? 'text-gold' : 'text-gray-400'}`}
                        >
                            {plan.metal_level}
                        </p>
                        <div className="flex">
                            {Array.from({ length: 5 }, (_, index) => {
                                const { index: levelIndex, color } =
                                    metalLevelIndex[plan.metal_level];
                                return (
                                    <div key={index}>
                                        {index < levelIndex ? (
                                            <FaStar style={{ color: color }} />
                                        ) : (
                                            <FaStar style={{ color: 'gray' }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <SecondaryButton
                        classNames={
                            'rounded-none rounded-b sm:rounded-bl-none rounded-br botder border-gray-300 text-sm px-3 py-1'
                        }
                        onClick={onPlanEnroll}
                        text="enroll now"
                    />
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
