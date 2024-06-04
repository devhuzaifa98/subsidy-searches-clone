import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignaturePad from 'react-signature-canvas';
import { DisableButton, PrimaryButton } from '../../components/buttons';
import Layout from '../../components/Layout';
import AttestableCard from '../../components/T&C/AttestableCard';
import useContacts from '../../hooks/useContacts';
import { CONSENT_DATA } from '../../utils/consent_data';

const ConsentForm = () => {
    const navigate = useNavigate();
    const { getContact, updateContact, sendContactToGHL } = useContacts();

    const terms = useMemo(() => CONSENT_DATA, []);

    const [tnc, setTnc] = useState(terms);
    const signaturePadRef = useRef();
    const [uuid, setUUID] = useState(null);
    const [initials, setInitials] = useState('');

    useEffect(() => {
        const validate = async () => {
            const storedUUID = localStorage.getItem('uuid');
            if (!storedUUID) return navigate('/');
            setUUID(storedUUID);
            let lead = await getContact(storedUUID);

            if (!lead?.plan_id) return navigate('/plans');
            setInitials(
                `${lead.details.first_name[0].toUpperCase()}${lead.details.last_name[0].toUpperCase()}`
            );
        };
        validate();
    }, []);

    const onSubmit = async () => {
        const signature = signaturePadRef.current.toDataURL();

        await updateContact(uuid, {
            consent: {
                terms,
                signature,
            },
        });
        sendContactToGHL(uuid);
        localStorage.removeItem('uuid');
        navigate('/thank-you');
    };

    return (
        <Layout>
            <div className="mx-auto w-11/12 space-y-5 lg:w-3/4">
                <h1 className="text-left text-xl font-thin capitalize text-dark">
                    Terms & conditions
                </h1>
                {tnc.map((term, index) => (
                    <AttestableCard
                        onSelect={() =>
                            setTnc(prevTnc =>
                                prevTnc.map((t, i) =>
                                    i === index
                                        ? { ...t, isSelected: !t.isSelected }
                                        : t
                                )
                            )
                        }
                        isSelected={term.isSelected}
                        initials={initials}
                        title={term.title}
                        text={term.text}
                    />
                ))}
                <h1 className="text-left capitalize text-dark">Signature</h1>
                <SignaturePad
                    ref={signaturePadRef}
                    canvasProps={{
                        className:
                            'w-full h-48 bg-white mt-5 border border-gray-200 rounded-lg shadow',
                        height: 200,
                    }}
                />
                <div className="flex justify-end">
                    <DisableButton
                        text="Clear"
                        classNames="mr-5"
                        onClick={() => signaturePadRef.current.clear()}
                    />
                    <PrimaryButton
                        text="Submit"
                        disabled={tnc.some(term => !term.isSelected)}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ConsentForm;
