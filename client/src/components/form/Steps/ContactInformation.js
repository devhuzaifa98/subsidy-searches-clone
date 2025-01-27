import TextField from '../../shared/FormElements/TextField';
import StepWrapper from '../StepWrapper';

const ContactInformation = ({ title }) => {
    return (
        <StepWrapper title={title}>
            <TextField
                label="Email"
                id="details.email"
                type="email"
                placeholder="Email"
                pattern="^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\\.[a-zA-Z]{2,4}$"
                wrapperClasses="mb-4"
            />
            <TextField
                label="Phone Number"
                id="details.phone"
                type="text"
                placeholder="+1 (555) 987-6543"
                format="+1 (###) ###-####"
                minLength={17}
                wrapperClasses="mb-4"
            />
            <TextField
                label="Address"
                id="details.street"
                type="text"
                placeholder="Address"
                wrapperClasses="mb-4"
            />
        </StepWrapper>
    );
};

export default ContactInformation;
