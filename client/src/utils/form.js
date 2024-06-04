import ContactInformation from '../components/form/Steps/ContactInformation';
import Details from '../components/form/Steps/Details';
import Income from '../components/form/Steps/Income';
import SSN from '../components/form/Steps/SSN';

export const STEPS = [
    {
        title: 'You',
        subtitle: 'Tell us about yourself & your household.',
        id: 'details',
        component: Details,
    },
    {
        title: 'Income',
        subtitle: 'What is your household income?',
        id: 'income',
        component: Income,
    },
    {
        title: 'Contact Info',
        subtitle: 'What is your contact information?',
        id: 'contact',
        component: ContactInformation,
    },
    {
        title: 'Social Security Number',
        subtitle: 'Enter Social Security Numbers',
        id: 'ssn',
        component: SSN,
    },
];

export default STEPS;
