import _ from 'lodash';
import React, { useMemo, useRef, useState } from 'react';
import useForm from '../../../hooks/useForm';

const TextField = ({
    id,
    label,
    format,
    disableAutoUpdate,
    value: userValue = '',
    wrapperClasses,
    innerClasses,
    onChange,
    ...additionalProperties
}) => {
    const { data, inputChangeHandler, errorIds } = useForm();

    const formatValue = (value, pattern) => {
        if (!pattern) return value;

        const placeholder = '#';
        let endOfValue = 0;
        let characterIndex = 0;
        let newValue = value;

        return [...pattern]
            .map((patternCharacter, index) => {
                const character = newValue[characterIndex];
                const patternLength = pattern.length;

                if (!endOfValue) {
                    if (index === patternLength - 1) endOfValue = patternLength;
                    if (character === undefined)
                        endOfValue = pattern.indexOf(placeholder, index);
                }

                if (patternCharacter === placeholder) {
                    characterIndex += 1;
                    return character;
                }

                return patternCharacter;
            })
            .splice(0, endOfValue)
            .join('');
    };

    const stripPatternCharacters = value => value.replace(/[^\dA-z]/g, '');

    const isUserCharacter = character => /[\dA-z]/.test(character);

    const [value, setValue] = useState(formatValue(userValue, format));
    const inputRef = useRef();
    const infoRef = useRef({});

    const handleChange = event => {
        const { target } = event;
        const { value: inputValue, selectionStart: cursorPosition } = target;
        if (!format) return inputChangeHandler(id, inputValue);

        const didDelete = inputValue.length < value.length;

        infoRef.current.cursorPosition = cursorPosition;

        let rawValue = stripPatternCharacters(inputValue);

        if (didDelete) {
            const patternCharacterDeleted = !isUserCharacter(
                [...value][cursorPosition]
            );

            if (patternCharacterDeleted) {
                const firstBit = inputValue.substr(0, cursorPosition);
                const rawFirstBit = stripPatternCharacters(firstBit);

                rawValue =
                    rawFirstBit.slice(0, -1) +
                    stripPatternCharacters(inputValue.substr(cursorPosition));

                infoRef.current.cursorPosition =
                    firstBit.replace(/([\d\w]+)[^\dA-z]+$/, '$1').length - 1;
            }
        }

        const formattedValue = formatValue(rawValue, format);

        infoRef.current.endOfSection = false;

        if (!didDelete) {
            const formattedCharacters = [...formattedValue];
            const nextCharacter = formattedCharacters[cursorPosition];
            const nextCharacterIsPattern = !isUserCharacter(nextCharacter);
            const nextUserCharacterIndex = formattedValue
                .substr(cursorPosition)
                .search(/[\dA-z]/);
            const numbersAhead = nextUserCharacterIndex !== -1;

            infoRef.current.endOfSection =
                nextCharacterIsPattern && !numbersAhead;

            if (
                nextCharacterIsPattern &&
                !isUserCharacter(formattedCharacters[cursorPosition - 1]) &&
                numbersAhead
            )
                infoRef.current.cursorPosition =
                    cursorPosition + nextUserCharacterIndex + 1;
        }

        setValue(formattedValue);
        inputChangeHandler(id, formattedValue);
    };

    const error = useMemo(
        () => errorIds.find(errorId => errorId.id === id),
        [errorIds, id]
    );

    return (
        <div
            key={label}
            className={`${error ? 'mb-2' : 'mb-8'} flex-1 ${wrapperClasses}`}
        >
            <label className="block text-base font-bold text-gray-700">
                {label}
            </label>
            <input
                id={id}
                ref={inputRef}
                value={disableAutoUpdate ? value : _.get(data, id) || ''}
                onChange={disableAutoUpdate ? onChange : handleChange}
                required={true}
                className={`appearance-none shadow ${error ? 'border-red-600' : 'border-light'} focus:shadow-outline w-full rounded px-4 py-3 leading-tight text-gray-700 shadow-md focus:border-light focus:outline-none focus:ring-0 ${innerClasses}`}
                {...additionalProperties}
            />
            {error && (
                <p className="text-red-600 mt-1 text-sm">
                    {error.message.replace('{label}', label)}
                </p>
            )}
        </div>
    );
};
export default TextField;
