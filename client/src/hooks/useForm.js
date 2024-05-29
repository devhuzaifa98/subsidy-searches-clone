import { useFormContext } from "../context/context"

const useForm = () => {
    const { state, dispatch } = useFormContext()

    const setForm = data => {
        dispatch({
            type: 'SET_DATA',
            payload: data,
        })
    }

    const initializeForm = () => {
        //only works for details object as of yet
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const queryParams = Object.fromEntries(urlParams.entries())
        if (queryParams.dob)
            queryParams.dob = new Date(queryParams.dob)
                .toISOString()
                .split('T')[0]
        if (Object.keys(queryParams).length > 0)
            setForm({ details: queryParams })
    }

    const setErrorIds = ids => {
        dispatch({
            type: 'SET_ERROR_IDS',
            payload: ids,
        })
    }
    const updateFormField = (id, value, shouldDelete) => {
        dispatch({
            type: 'UPDATE_INPUT_FIELD',
            payload: {
                id,
                value,
                shouldDelete,
            },
        })
    }

    const nextStep = submit => {
        //validation
        let inputs = Array.from(document.querySelectorAll('input, select'))
        const erroredInputs = inputs
            .map(input => {
                if(!input.checkValidity()) return { id: input.id, message: input.validationMessage }
                return undefined
            })
            .filter(val => val !== undefined)
        if (erroredInputs.length > 0) return setErrorIds(erroredInputs)
        if (submit) return submit()
        dispatch({
            type: 'NEXT_STEP',
        })
    }

    const previousStep = () => dispatch({ type: 'PREVIOUS_STEP' })

    return {
        setForm,
        nextStep,
        previousStep,
        initializeForm,
        updateFormField,
        data: state.data,
        currentStep: state.currentStep,
        errorIds: state.errorIds,
    }
}

export default useForm
