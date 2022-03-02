export const Validatation = ( stateField, errorField, setErrors, message) => {
    if (!stateField || stateField.length === 0 || stateField.id === null) {

        setErrors((prevState) => ({
            ...prevState,
            [errorField]: {text: message, show: true},
        }));

        return true;
    } else {
        setErrors((prevState) => ({
            ...prevState,
            [errorField]: {text: "", show: false},
        }));
        return false;
    }
};
