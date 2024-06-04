import React from 'react';

const DisableButton = ({
    text,
    type,
    classNames,
    onClick,
    fullWidth,
    loading,
    style,
    disabled,
}) => {
    return (
        <button
            type={type ? type : 'button'}
            style={{
                width: fullWidth ? '100%' : 'auto',
                ...style,
            }}
            className={`rounded-md border border-primary-300 bg-primary-100 px-8 py-2 text-lg capitalize text-primary-500 ${classNames}`}
            onClick={onClick ? onClick : undefined}
            disabled={loading || disabled}
        >
            {!loading && text}
            {loading && <div>Loading...</div>}
        </button>
    );
};

export default DisableButton;
