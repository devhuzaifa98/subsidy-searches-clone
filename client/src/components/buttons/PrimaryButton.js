import React from 'react';

const PrimaryButton = ({
    text,
    invert,
    type,
    classNames = '',
    onClick,
    loading,
    style,
    disabled,
}) => {
    return (
        <button
            type={type ? type : 'button'}
            style={{ ...style }}
            className={`${disabled || loading ? 'cursor-not-allowed' : ''} flex items-center justify-center rounded border px-4 py-2 text-lg capitalize md:px-8 ${invert ? 'border-primary text-primary' : 'border-primary bg-primary text-secondary'} ${classNames}`}
            onClick={onClick ? onClick : undefined}
            disabled={loading || disabled}
        >
            {!loading && text}
            {loading && <div>Loading...</div>}
        </button>
    );
};

export default PrimaryButton;
