import { useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import _ from 'lodash'

const CheckBox = ({
    label,
    id,
    disableAutoUpdate,
    value = false,
    onChange,
}) => {
    const { data, updateFormField } = useForm()
    useEffect(() => {
        //sets a default value if it has autoupdate and the existing value is undefined
        if (!_.get(data,id) && !disableAutoUpdate)
            updateFormField(id, false)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="mb-6 flex items-center" key={label}>
            <input
                onChange={
                    disableAutoUpdate
                        ? onChange
                        : e => updateFormField(id, e.target.checked)
                }
                checked={disableAutoUpdate ? value : _.get(data,id)}
                type="checkbox"
                id={id}
            />
            <label className="ml-2 block md:text-base text-sm text-gray-500">
                {label}
            </label>
        </div>
    )
}

export default CheckBox
