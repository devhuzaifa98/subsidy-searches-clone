import _ from 'lodash';
import { useRef } from 'react';
import useForm from '../../../hooks/useForm';
import { handleFormat } from '../../../utils/input_formatter';

const TextField = ({
    id,
    label,
    format,
    wrapperClasses,
    innerClasses,
    onChange,
    ...additionalProperties
}) => {
    const { errorIds, data, updateFormField } = useForm();
    const error = errorIds.find(e => e.id === id);
    const ref = useRef({});

    return (
        <div
            key={label}
            className={`${error ? 'mb-2' : 'mb-6'} flex-1 ${wrapperClasses}`}
        >
            <label className="text-md mb-1 block font-bold text-gray-700 md:text-lg">
                {label}
            </label>
            <input
                id={id}
                value={_.get(data, id) || ''}
                onChange={e =>
                    updateFormField(id, handleFormat(ref, e, format))
                }
                required={true}
                className={`appearance-none shadow ${
                    error ? 'border-red' : 'border-light'
                } focus:shadow-outline w-full rounded px-4 py-3 leading-tight text-gray-700 shadow-md focus:border-light focus:outline-none focus:ring-0 ${innerClasses}`}
                {...additionalProperties}
            />
            {error && (
                <p className="mt-1 text-xs text-red md:text-sm">
                    {error.message.replace('{label}', label)}
                </p>
            )}
        </div>
    );
};
export default TextField;
