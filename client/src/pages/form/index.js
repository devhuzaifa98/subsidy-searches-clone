import React, { useEffect } from "react";
import Stepper from "./Stepper";
import FormContainer from "../../components/form/FormContainer";
import useForm from "../../hooks/useForm";
import Layout from "../../components/Layout";
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import useContacts from "../../hooks/useContacts";

const Form = () => {
    const { state, initializeForm, parseData } = useForm();
    const navigate = useNavigate()
    const { createContact } = useContacts()

    useEffect(() => {
        initializeForm();
        // eslint-disable-next-line
    }, []); //Do not include in dependency array as it will cause an infinite call cycle

    const submit = async (setLoading) => {
        const {
            type,
            current_insurance,
            income,
            details,
            contact,
            address,
            us_national,
            dental_insurance,
            recent_employer,
            procedures_in_network,
            spouse_details,
            dependents,
        } = parseData();

        const data = {
            details: {
                current_insurance,
                ...income,
                ...details,
                ...contact,
                ...address,
                us_national,
                dental_insurance,
                recent_employer,
                procedures_in_network,
            },
            spouse_details,
            dependents,
            type: type.toLowerCase().replace(" ", "-"),
        };
        try {
            setLoading(false);
            const response = await createContact(data)
            localStorage.setItem('uuid', response._id)
            navigate('/plans');
        } catch (error) {
            return toast.error(String(error), { duration: 3000 });
        }
    };

    return (
        <Layout>
            <div className="lg:w-1/3 md:w-2/3 sm:w-4/5 w-11/12 mx-auto">
                <Stepper steps={state.form} currentStep={state.currentStep} />
                <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                    <FormContainer submit={submit} />
                </form>
            </div>
            <Toaster />
        </Layout>
    );
};

export default Form;
