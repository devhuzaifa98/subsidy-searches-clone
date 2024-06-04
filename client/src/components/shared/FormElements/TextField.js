import classNames from 'classnames';
import _ from 'lodash';
import { useRef } from 'react';
import useForm from '../../../hooks/useForm';
import { handleFormat } from '../../../utils/input_formatter';

const TextField = ({
    id,
    label,
    format,
    wrapperClasses = '',
    innerClasses = '',
    onChange,
    ...additionalProperties
}) => {
    const { errorIds, data, updateFormField } = useForm();
    const error = errorIds.find(e => e.id === id);
    const ref = useRef({});

    const handleChange = e => {
        const formattedValue = handleFormat(ref, e, format);
        updateFormField(id, formattedValue);
        if (onChange) {
            onChange(e);
        }
    };

    const wrapperClass = classNames('flex-1', wrapperClasses);

    return (
        <div key={label} className={wrapperClass}>
            {label && (
                <label className="text-md mb-1 block font-bold text-gray-700 md:text-lg">
                    {label}
                </label>
            )}
            <input
                id={id}
                value={_.get(data, id, '')}
                onChange={handleChange}
                required
                className={classNames(
                    'appearance-none shadow',
                    { 'border-red': error, 'border-light': !error },
                    'focus:shadow-outline w-full rounded px-4 py-3 leading-tight text-gray-700 shadow-md placeholder:font-light placeholder:text-gray-400 focus:border-light focus:outline-none focus:ring-0',
                    innerClasses
                )}
                {...additionalProperties}
            />
            {error && error.message.length > 0 && (
                <p className="mt-1 text-xs text-red md:text-sm">
                    {error.message.replace('{label}', label)}
                </p>
            )}
        </div>
    );
};

export default TextField;
