import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Assuming you're using Font Awesome icons

const StepButton = ({
    text,
    invert,
    classNames,
    onClick,
    loading,
    style,
    disabled,
}) => {
    return (
        <button
            style={{
                // width: fullWidth ? '100%' : 'auto',
                ...style,
            }}
            className={`flex justify-center rounded-full border px-3 py-3 align-middle text-lg capitalize ${invert ? 'border-secondary text-secondary' : 'border-secondary bg-secondary text-white'} ${classNames}`}
            onClick={onClick ? onClick : undefined}
            disabled={loading || disabled}
        >
            {!loading && <>{invert ? <FaArrowLeft /> : <FaArrowRight />}</>}
            {loading && <div>Loading...</div>}
        </button>
    );
};

export default StepButton;
