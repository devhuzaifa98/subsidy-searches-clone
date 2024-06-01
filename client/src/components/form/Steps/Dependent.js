import useForm from '../../../hooks/useForm';
import CheckBox from '../../shared/FormElements/CheckBox';
import TextField from '../../shared/FormElements/TextField';
import StepWrapper from '../StepWrapper';

const Dependent = ({ n, title, id, maxDate }) => {
    const idPrefx = n !== undefined ? `${id}[${n}]` : `${id}`;
    const { updateFormField } = useForm();
    return (
        <StepWrapper
            title={title}
            removable={true}
            dependent={true}
            onRemove={() => {
                updateFormField(idPrefx, '', true);
            }}
        >
            <div>
                <div className="flex space-x-6">
                    <TextField
                        label={'Date of Birth'}
                        id={`${idPrefx}.dob`}
                        type={'date'}
                        max={maxDate}
                        min={'1900-12-31'}
                    />
                </div>
                <div className="flex space-x-6">
                    <TextField
                        label={'First Name'}
                        id={`${idPrefx}.first_name`}
                        type={'text'}
                        placeholder={'First Name'}
                        minLength={2}
                        maxLength={20}
                    />
                    <TextField
                        label={'Last Name'}
                        id={`${idPrefx}.last_name`}
                        type={'text'}
                        placeholder={'Last Name'}
                        minLength={2}
                        maxLength={20}
                    />
                </div>
                <CheckBox
                    label={
                        'Eligible for coverage through a job, Medicaid, Medicare, or CHIP'
                    }
                    id={`${idPrefx}.has_mec`}
                />
                <CheckBox
                    label={
                        'Used tobacco products four (4) or more times per week on average during the past six (6) months (not including ceremonial uses)'
                    }
                    id={`${idPrefx}.uses_tobacco`}
                />
            </div>
        </StepWrapper>
    );
};

export default Dependent;
