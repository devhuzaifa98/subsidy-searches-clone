import React from 'react';

const PrimaryButton = ({ text, invert, type, classNames = '', onClick, loading, style, disabled }) => {
    return (
        <button
            type={type ? type : 'button'}
            style={{...style}}
            className={`${(disabled || loading) ? 'cursor-not-allowed' : ''} flex items-center justify-center px-4 md:px-8 py-2 capitalize text-lg border rounded ${invert ? 'text-primary border-primary' : 'text-secondary border-primary bg-primary'} ${classNames}`}
            onClick={onClick ? onClick : undefined}
            disabled={loading || disabled}
        >
            {!loading && text}
            {loading && (
                <div>Loading...</div>
            )}
        </button>
    );
};

export default PrimaryButton;
