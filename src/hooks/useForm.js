import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});
    
    useEffect(() => {
        createValidators();
    }, [formState]);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys(formValidation)) {
            if( formValidation[ formValue ] !== null ) return false;
        }
        return true;
    }, [formValidation]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onFileChange = ({ target }) => {     
        const { name, files } = target;
        setFormState({
            ...formState,
            [ name ]: files
        });
    }

    const onSelectChange = (value, campo) => {
        setFormState({
            ...formState,
            [ campo ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators =  () => {
        const checkValues = {};
        for (const formField of Object.keys( formValidations)) {
            const [ fn, errorMessage ] = formValidations[ formField ];

            checkValues[`${formField}Valid`] = fn ( formState[formField] ) ? null : errorMessage;
            setFormValidation( checkValues );
        }
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
        onSelectChange,
        onFileChange,
    }
}