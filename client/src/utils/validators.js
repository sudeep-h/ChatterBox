import { useState } from 'react';

export const useInputValidation = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("");

    const changeHandler = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (validator) {
            const validationResult = validator(newValue);
            if (!validationResult.isValid) {
                setError(validationResult.errorMessage);
            } else {
                setError("");
            }
        }
    };

    return {
        value,
        error,
        changeHandler
    };
};


export const UserNameValidator = (username) => {
    const isValidUsername = (name) => {
        return !/\s/.test(name);
    };
    if (!isValidUsername(username)) {
        return { isValid: false, errorMessage: "Username is Invalid" };
    }
};
