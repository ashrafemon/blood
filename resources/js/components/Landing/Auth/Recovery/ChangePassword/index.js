import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import {AUTH_FORM_TYPE} from "../../../../../store/types";
import {useDispatch, useSelector} from "react-redux";
import {isEqualValidate, isRequiredValidate, lengthValidate} from "../../../../../utils/validateHelpers";
import {resetPassword} from "../../../../../store/actions/authActions";

const ChangePassword = () => {
    const classes = useStyles();

    const {phone} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    let phoneNum = null
    Object.values(phone).map(item =>{
        phoneNum = item
    })


    const [form, setForm] = useState({
        phone: phoneNum,
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
        password: {text: '', show: false},
        password_confirmation: {text: '', show: false}
    })

    const submitHandler = (e) => {
        e.preventDefault();

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


        if (!passwordValidate && !confirmPasswordValidate) {
            dispatch(resetPassword(form, () => {
                dispatch({
                    type: AUTH_FORM_TYPE,
                    payload: 'login'
                })
            }))
        }


    }


    return (
        <form onSubmit={submitHandler}>

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

            <Box my={2}>
                <Button variant='contained' type='submit' fullWidth>Confirm</Button>
            </Box>
        </form>
    );
};

export default ChangePassword;
