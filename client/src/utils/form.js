import states from 'states-us';
import insurance from '../assets/images/insurance-icon.png'
import wage from '../assets/images/wage.png'
import user from '../assets/images/user-details.png'
import phone from '../assets/images/phone-icon.png'
import location from '../assets/images/location.png'
import newlyweds from '../assets/images/newlyweds.png'
import family from '../assets/images/family.png'
import flag from '../assets/images/united-states-flag.png'
import dental from '../assets/images/dental-clinic.png'
import employer from '../assets/images/computer-worker.png'
import surgery from '../assets/images/plastic-surgery.png'

export const STEPS = [
    {
        name: 'eligibility', subSteps: [
            {
                name: "type",
                title: "Who would you like to insure?",
                icon: insurance,
                fields: [
                    {
                        name: 'type', label: 'Insurance Type', type: 'radio_group', required: true, value: '', data: [
                            'Single',
                            'Couple',
                            'Family',
                            'Single Parent'
                        ]
                    }
                ]
            },
            {
                name: 'current_insurance',
                title: 'Current Insurance',
                subtitle: 'Do you currently have any of the following health insurance coverage?',
                icon: insurance,
                fields: [
                    {
                        name: 'current_insurance', label: 'current insurance', type: 'radio_group', required: true, value: '', data: [
                            'no existing coverage',
                            'medicare',
                            'medicaid',
                            'employer policy',
                            "Veteran's Adminitration (VA)"
                        ]
                    }
                ]
            },
            {
                name: 'income',
                title: 'Select your gross monthly income range',
                subtitle: 'Gross monthly income. Please be accurate. Income will be verified by Healthcare.gov',
                icon: wage,
                fields: [
                    {
                        name: 'estimated_income', label: "estimated income", type: 'radio_group', required: true, value: '', data: [
                            '$0 - $1215',
                            '$1216 - $2000',
                            '$2001 - $3500',
                            '$3501+',
                        ]
                    },
                    {
                        name: 'gross_income', type: 'currency_slider', required: true, value: '', label: 'gross salary', prefix: '$', value_dependency: 'estimated_income', minMax: {
                            '$0 - $1215': {
                                min: 0,
                                max: 1215
                            },
                            '$1216 - $2000': {
                                min: 1216,
                                max: 2000
                            },
                            '$2001 - $3500': {
                                min: 2001,
                                max: 3500
                            },
                            '$3501+': {
                                min: 3501,
                                max: Infinity
                            },
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'your_info', subSteps: [
            {
                name: 'details',
                title: 'Add your details',
                subtitle: 'Let us know more about yourself',
                icon: user,
                fields: [
                    { name: 'first_name', placeholder: 'john', type: 'text', value: '', required: true, label: 'first name' },
                    { name: 'last_name', placeholder: 'doe', type: 'text', value: '', required: true, label: 'last name' },
                    {
                        name: 'gender', type: 'radio_group', value: '', required: true, data: [
                            'male', 'female'
                        ]
                    },
                    { name: 'dob', placeholder: 'john', type: 'date', value: '', required: true, label: 'date of birth' },
                    { name: 'social_security_number', type: 'number', value: '', required: true, label: 'social security number' },
                    { name: "uses_tobacco", type: 'radio_group', value: '', required: true, label: 'Are you a tobacco user?', data: ['Yes', 'No'] }
                ]
            },
            {
                name: 'spouse_details',
                title: 'Add spouse details',
                subtitle: 'Provide Information About Your Spouse',
                icon: newlyweds,
                dependency: {
                    name: 'type',
                    values: ['Family', 'Couple']
                },
                fields: [
                    { name: 'first_name', placeholder: 'john', type: 'text', value: '', required: true, label: 'first name' },
                    { name: 'last_name', placeholder: 'doe', type: 'text', value: '', required: true, label: 'last name' },
                    {
                        name: 'gender', label: 'gender', type: 'radio_group', value: '', required: true, data: [
                            'male', 'female',
                        ]
                    },
                    { name: 'dob', placeholder: 'john', type: 'date', value: '', required: true, label: 'date of birth' },
                    { name: 'social_security_number', type: 'number', value: '', required: true, label: 'social security number' },
                    { name: 'email', type: 'email', placeholder: 'john.doe@example.com', value: '', required: true, label: 'email' },
                    { name: 'phone', type: 'tel', placeholder: '(123) 456-7890', value: '', required: true, label: 'phone number' },
                    { name: "uses_tobacco", type: 'radio_group', value: '', required: true, label: 'Are you a tobacco user?', data: ['Yes', 'No'] }
                ]
            },
            {
                name: 'contact',
                title: 'Add your contact details',
                subtitle: 'Give us your contact details so we can contact you',
                icon: phone,
                fields: [
                    { name: 'email', type: 'email', placeholder: 'john.doe@example.com', value: '', required: true, label: 'email' },
                    { name: 'phone', type: 'tel', placeholder: '(123) 456-7890', value: '', required: true, label: 'phone number' }
                ]
            },
            {
                name: 'address',
                title: 'Add your address',
                subtitle: 'Please provide your current residential address.',
                icon: location,
                fields: [
                    { name: 'street', type: 'text', placeholder: '1234 Main St.', value: '', required: true, label: 'street' },
                    { name: 'county', type: 'text', placeholder: 'county', value: '', label: 'county' },
                    { name: 'city', type: 'text', placeholder: 'city', value: '', required: true, label: 'city' },
                    { name: 'state', type: 'select', placeholder: 'state', value: '', required: true, label: 'state', data: states.map(state => state.name) },
                    { name: 'zip', type: 'text', placeholder: '12345', value: '', required: true, label: 'zip code', hidden: true },
                ]
            },
            {
                name: 'dependents',
                title: 'Dependents',
                subtitle: 'Individuals relying on you financially',
                icon: family,
                dependency: {
                    name: 'type',
                    values: ['Family', 'Single Parent']
                },
                fields: [
                    {
                        name: 'dependents', label: 'add dependent', type: 'appendable_form', value: [], required: false, fields: [
                            { name: 'first_name', placeholder: 'john', type: 'text', value: '', required: true, label: 'first name' },
                            { name: 'last_name', placeholder: 'doe', type: 'text', value: '', required: true, label: 'last name' },
                            {
                                name: 'gender', label: 'gender', type: 'radio_group', value: '', required: true, data: [
                                    'male', 'female',
                                ]
                            },
                            {
                                name: 'relationship', label: 'relationship with applicant', placeholder: 'child, sibling etc', type: 'select', value: '', required: true, data: [
                                    "Self",
                                    "Brother or Sister",
                                    "Child",
                                    "Collateral Dependent",
                                    "Ex-Spouse",
                                    "Foster Child",
                                    "Grandson or Granddaughter",
                                    "Life Partner",
                                    "Nephew or Niece",
                                    "Other Relationship",
                                    "Other Relative",
                                    "Sponsored Dependent",
                                    "Spouse",
                                    "Stepson or Stepdaughter",
                                    "Ward",
                                    "Adopted Child",
                                    "Annultant",
                                    "Brother-in-Law or Sister-in-Law",
                                    "Court Appointed Guardian",
                                    "Dependent of a Minor Dependent",
                                    "Guardian",
                                    "Son-in-Law or Daughter-in-Law",
                                    "Stepparent"
                                ]
                            },
                            { name: 'dob', placeholder: 'john', type: 'date', value: '', required: true, label: 'date of birth' },
                            { name: 'social_security_number', type: 'number', value: '', required: true, label: 'social security number' },
                            { name: 'phone', type: 'tel', placeholder: '(123) 456-7890', value: '', required: false, label: 'phone number' },
                            { name: "uses_tobacco", type: 'radio_group', value: '', required: true, label: 'Are you a tobacco user?', data: ['Yes', 'No'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'personalize', subSteps: [
            {
                name: 'us_national',
                title: 'Nationality',
                subtitle: 'Are you a US citizen?',
                icon: flag,
                fields: [
                    {
                        name: 'us_national', label: 'nationality', type: 'radio_group', value: '', required: true, data: [
                            'Yes', 'No'
                        ]
                    },
                ]
            },
            {
                name: 'dental_insurance',
                title: 'Dental insurance',
                subtitle: 'Would you like dental insurance?',
                icon: dental,
                boolean: true,
                fields: [
                    {
                        name: 'dental_insurance', label: 'dental insurance', type: 'radio_group', value: '', required: true, data: [
                            'Yes', 'No'
                        ]
                    }
                ]
            },
            {
                name: 'employer',
                title: 'Recent employer',
                subtitle: 'Where were you last employed? If you are self employed, please type in "Self employed"',
                icon: employer,
                fields: [
                    {
                        name: 'employer', type: 'text', placeholder: 'Google Inc.', value: '', required: true, label: 'most recent employer',
                    }
                ]
            }
        ]
    }
]