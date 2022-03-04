import React, {useEffect, useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {register, validateAuthErrors} from "../../../../store/actions/authActions";
import {isEqualValidate, isRequiredValidate, lengthValidate, phoneValidation} from "../../../../utils/validateHelpers";
import validator from 'validator';

const GeneralInfo = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {validateErrors} = useSelector(state => state.auth)

    const [form, setForm] = useState({
        name: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
    });


    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {text: '', show: false}
        }))

        setForm(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const [errors, setErrors] = useState({
        name: {text: '', show: false},
        phone: {text: '', show: false},
        email: {text: '', show: false},
        password: {text: '', show: false},
        password_confirmation: {text: '', show: false}
    })

    const submitHandler = (e) => {
        e.preventDefault();

        const nameValidate = isRequiredValidate(form.name, 'name', setErrors, 'Name is required')
        let phoneValidate = isRequiredValidate(form.phone, 'phone', setErrors, 'Phone is required')

        if (!phoneValidate) {
            phoneValidate = phoneValidation(form.phone, 'phone', setErrors, 'Phone number must start with 019,017,013,015,016,018,014')

            if (!phoneValidate) {
                phoneValidate = lengthValidate(form.phone, 'phone', 11, setErrors, 'Phone should be 11 characters')
            }
        }

        let passwordValidate = isRequiredValidate(form.password, 'password', setErrors, 'Password is required')
        if (!passwordValidate) {
            passwordValidate = lengthValidate(form.password, 'password', 6, setErrors, 'Password must be minimum 6 characters')
        }

        let confirmPasswordValidate = isRequiredValidate(form.password_confirmation, 'password_confirmation', setErrors, 'Confirm password is required')
        if (!confirmPasswordValidate) {
            confirmPasswordValidate = lengthValidate(form.password_confirmation, 'password_confirmation', 6, setErrors, 'Confirm password must be minimum 6 characters')

            if (!confirmPasswordValidate) {
                confirmPasswordValidate = isEqualValidate(form.password, form.password_confirmation, 'password_confirmation', setErrors, 'Confirm password not match')
            }
        }

        let emailValidate = null



        if (form.email && form.email.length > 0) {
            if (!validator.isEmail(form.email)) {
                setErrors((prevState) => ({
                    ...prevState,
                    email: {text: 'Email is not valid', show: true}
                }))
                emailValidate = true
            } else {
                setErrors((prevState) => ({
                    ...prevState,
                    email: {text: '', show: false}
                }))
                emailValidate = false
            }
        }

        if (!nameValidate && !phoneValidate && !emailValidate && !passwordValidate && !confirmPasswordValidate) {
            dispatch(register(form, () => props.handleNext()))
        }
    }

    useEffect(() => {
        if (validateErrors && Object.keys(validateErrors).length > 0) {
            Object.keys(validateErrors).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: {text: validateErrors[key][0], show: true}
                }))
            })
        }
    }, [validateErrors])

    useEffect(() => {
        return () => {
            dispatch(validateAuthErrors({}))
        }
    }, [])


    return (
        <Box my={3}>
            <form id="form-step0" onSubmit={submitHandler}>
                <TextField
                    margin="normal"
                    label="Name *"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={form.name}
                    onChange={e => fieldChangeHandler('name', e.target.value)}
                    error={errors.name.show}
                    helperText={errors.name.text}
                />

                <TextField
                    margin="normal"
                    label="Phone *"
                    fullWidth
                    variant="outlined"
                    InputProps={{inputProps: {maxlength: 11}}}
                    value={form.phone}
                    onChange={e => fieldChangeHandler('phone', e.target.value)}
                    error={errors.phone.show}
                    helperText={errors.phone.text}
                />


                <TextField
                    margin="normal"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={form.email}
                    onChange={e => fieldChangeHandler('email', e.target.value)}
                    error={errors.email.show}
                    helperText={errors.email.text}
                />

                <TextField
                    margin="normal"
                    label="Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password}
                    onChange={e => fieldChangeHandler('password', e.target.value)}
                    error={errors.password.show}
                    helperText={errors.password.text}
                />

                <TextField
                    margin="normal"
                    label="Confirm Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password_confirmation}
                    onChange={e => fieldChangeHandler('password_confirmation', e.target.value)}
                    error={errors.password_confirmation.show}
                    helperText={errors.password_confirmation.text}
                />
            </form>
        </Box>
    );
};

export default GeneralInfo;
