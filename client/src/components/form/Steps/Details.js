import { useMemo } from 'react'
import useForm from '../../../hooks/useForm'
import { PrimaryButton } from '../../buttons'
import CheckBox from '../../shared/FormElements/CheckBox'
import Select from '../../shared/FormElements/Select'
import TextField from '../../shared/FormElements/TextField'
import StepWrapper from '../StepWrapper'
import Dependent from './Dependent'

const Details = ({ title }) => {
    const { data, updateFormField } = useForm()

    const maxDate = useMemo(() => {
        return new Date(new Date().getFullYear() - 18,0,1).toISOString().split('T')[0]
    }, [])

    return (
        <div>
            <div className="overflow-hidden border-b border-gray-300 bg-white">
                <StepWrapper title={title}>
                    <div>
                        <div className="flex space-x-6 wrap">
                            <TextField
                                label={'Date of Birth'}
                                id={'details.dob'}
                                type={'date'}
                                max={maxDate}
                                min={'1900-12-31'}
                            />
                            <TextField
                                label={'Zip Code'}
                                id={'details.zip'}
                                type={'text'}
                                placeholder={'Zip Code'}
                                minLength={5}
                            />
                            <div className="flex-1 hidden md:block">
                                <Select
                                    label="Select Year"
                                    id={'details.year'}
                                    options={['2024', '2024']}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <TextField
                                label={'First Name'}
                                id={'details.first_name'}
                                type={'text'}
                                placeholder={'First Name'}
                                minLength={2}
                                maxLength={20}
                            />
                            <TextField
                                label={'Last Name'}
                                id={'details.last_name'}
                                type={'text'}
                                placeholder={'Last Name'}
                                minLength={2}
                                maxLength={20}
                            />
                        </div>
                        <div className="flex-1 md:hidden">
                                <Select
                                    label="Select Year"
                                    id={'details.year'}
                                    options={['2024', '2024']}
                                />
                        </div>
                        <CheckBox
                            label={
                                'Eligible for coverage through a job, Medicaid, Medicare, or CHIP'
                            }
                            id={'details.has_mec'}
                        />
                        <CheckBox
                            label={
                                'Used tobacco products four (4) or more times per week on average during the past six (6) months (not including ceremonial uses)'
                            }
                            id={'details.uses_tobacco'}
                        />
                    </div>
                </StepWrapper>
            </div>
            {data?.spouse_details && (
                <Dependent
                    title={'Spouse'}
                    id={'spouse_details'}
                    maxDate={maxDate}
                />
            )}
            {(data?.dependents || []).map((val, index) => (
                <Dependent
                    title={'Dependent'}
                    id={'dependents'}
                    n={index}
                    maxDate={maxDate}
                />
            ))}
            <div className="mx-auto mt-4 flex w-full max-w-2xl justify-between space-x-4">
                <PrimaryButton
                    text={'Spouse'}
                    classNames="w-[50%]"
                    onClick={() => {
                        updateFormField('spouse_details',{})
                    }}
                    disabled={!!data.spouse_details}
                />
                <PrimaryButton
                    text={'Dependent'}
                    classNames="w-[50%]"
                    onClick={() => updateFormField(`dependents[${data?.dependents?.length || 0}]`, {})}
                />
            </div>
        </div>
    )
}

export default Details
