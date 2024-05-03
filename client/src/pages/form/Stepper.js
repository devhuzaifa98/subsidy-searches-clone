import React from 'react';

const Stepper = ({ steps, currentStep }) => {
    return (
        <div aria-label="Progress" className='grid grid-cols-3 justify-center gap-x-1 sm:gap-x-4 md:gap-x-8'>
            {steps.map((step, index) => (
                <div key={step.name} className={`flex flex-col border-${(index <= currentStep) ? 'secondary' : 'gray-200'} py-2 md:pt-4 border-t-4`}  >
                    <span className={`text-xs font-medium text-${(index <= currentStep) ? 'secondary' : 'gray-500'}`}>Step {index + 1}</span>
                    <span className={`text-sm font-medium text-black uppercase`}>{step.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Stepper;