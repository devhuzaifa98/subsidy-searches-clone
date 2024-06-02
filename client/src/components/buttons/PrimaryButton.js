import classNames from 'classnames';
import React from 'react';

const PrimaryButton = ({
    text,
    invert = false,
    type = 'button',
    classNames: additionalClasses = '',
    onClick,
    loading = false,
    style,
    disabled = false,
}) => {
    const buttonClasses = classNames(
        'flex items-center justify-center rounded border px-4 py-2 text-lg capitalize md:px-8',
        {
            'border-primary-300 text-primary-300': invert,
            'border-primary-300 bg-primary-300 text-secondary': !invert,
            'cursor-not-allowed': disabled || loading,
        },
        additionalClasses
    );

    return (
        <button
            type={type}
            style={style}
            className={buttonClasses}
            onClick={onClick}
            disabled={loading || disabled}
        >
            {loading ? <div>Loading...</div> : text}
        </button>
    );
};

export default PrimaryButton;
