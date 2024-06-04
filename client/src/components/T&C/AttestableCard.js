import React from 'react';

const AttestableCard = ({ initials, isSelected, title, text, onSelect }) => (
    <div
        onClick={onSelect}
        className={`mb-3 flex cursor-pointer gap-x-3 rounded-lg border border-gray-200 bg-white p-2 shadow ${isSelected && 'border-primary-400'}`}
    >
        <div
            className={`mt-1 flex h-6 min-w-6 items-center justify-center rounded text-xs font-semibold ${isSelected ? 'border-2 border-primary-400 text-primary-400' : 'border border-gray-300 text-gray-400 hover:border-primary-300'}`}
        >
            {isSelected ? initials : ' '}
        </div>
        <div className="h-20 overflow-y-auto pr-4 text-justify text-sm">
            <div className="text-gray-500">{title}</div>
            <div className="font-light text-gray-400">{text}</div>
        </div>
    </div>
);

export default AttestableCard;
