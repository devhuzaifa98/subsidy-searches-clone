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

export const handleFormat = (infoRef, event, format) => {
    const value = event.target.value;
    const stripPatternCharacters = value => value.replace(/[^\dA-z]/g, '');

    const isUserCharacter = character => /[\dA-z]/.test(character);

    const { target } = event;
    const { value: inputValue, selectionStart: cursorPosition } = target;
    if (!format) return inputValue;

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

        infoRef.current.endOfSection = nextCharacterIsPattern && !numbersAhead;

        if (
            nextCharacterIsPattern &&
            !isUserCharacter(formattedCharacters[cursorPosition - 1]) &&
            numbersAhead
        )
            infoRef.current.cursorPosition =
                cursorPosition + nextUserCharacterIndex + 1;
    }

    return formattedValue;
};
