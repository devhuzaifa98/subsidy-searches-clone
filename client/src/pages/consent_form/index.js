import { useEffect, useMemo, useRef, useState } from "react"
import AttestableCard from "../../components/T&C/AttestableCard"
import Layout from '../../components/Layout'
import { SecondaryButton, DisableButton } from "../../components/buttons"
import SignaturePad from 'react-signature-canvas'
import { useNavigate } from "react-router-dom"
import { CONSENT_DATA } from "../../utils/consent_data"
import useContacts from "../../hooks/useContacts"

const ConsentForm = () => {

    const navigate = useNavigate()
    const { getContact, updateContact, sendContactToGHL } = useContacts()

    const terms = useMemo(() => CONSENT_DATA, [])

    const [tnc, setTnc] = useState(terms)
    const signaturePadRef = useRef()
    const [uuid, setUUID] = useState(null)
    const [initials, setInitials] = useState('')

    useEffect(() => {
        const validate = async () => {
            const storedUUID = localStorage.getItem('uuid')
            if (!storedUUID) return navigate('/')
            setUUID(storedUUID)
            let lead = await getContact(storedUUID)

            if (!lead?.plan_id) return navigate('/plans')
            setInitials(
                `${lead.details.first_name[0].toUpperCase()}${lead.details.last_name[0].toUpperCase()}`
            )
        }
        validate()
    }, [])

    const onSubmit = async () => {
        const signature = signaturePadRef.current.toDataURL()

        await updateContact(uuid, { signature })
        sendContactToGHL(uuid)
        localStorage.removeItem("uuid");
        navigate('/thank-you')
    }

    return (
        <Layout>
            <div className="w-11/12 lg:w-3/4 mx-auto space-y-5">
                <h1 className="text-left text-xl font-thin text-dark capitalize">Terms & conditions</h1>
                {tnc.map((term, index) => (
                    <AttestableCard
                        onSelect={() => setTnc(
                            (prevTnc) => prevTnc.map((t, i) => i === index ? { ...t, isSelected: !t.isSelected } : t)
                        )}
                        isSelected={term.isSelected}
                        initials={initials}
                        title={term.title}
                        text={term.text}
                    />
                ))}
                <h1 className="text-left text-dark capitalize">Signature</h1>
                <SignaturePad ref={signaturePadRef} canvasProps={{ className: 'w-full h-48 bg-white mt-5 border border-gray-200 rounded-lg shadow', height: 200 }} />
                <div className="flex justify-end">
                    <DisableButton
                        text='Clear'
                        invert={true}
                        classNames='mr-5'
                        onClick={() => signaturePadRef.current.clear()}
                    />
                    <SecondaryButton
                        text='Submit'
                        disabled={tnc.some(term => !term.isSelected)}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default ConsentForm