import React, {useEffect, useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";
import LoginLogo from "../../../../assets/images/login-logo.png"
import {useDispatch, useSelector} from "react-redux";
import {login, validateAuthErrors} from "../../../../store/actions/authActions";
import {isRequiredValidate, lengthValidate, phoneValidation} from "../../../../utils/validateHelpers";
import {AUTH_FORM_TYPE} from "../../../../store/types";

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {validateErrors, authFormType} = useSelector(state => state.auth)

    const [form, setForm] = useState({
        phone: null,
        password: null,
    })

    const [errors, setErrors] = useState({
        phone: {text: '', show: false},
        password: {text: '', show: false}
    })

    const filedChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {text: '', show: false}
        }))


        setForm(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const submitHandler = e => {
        e.preventDefault();

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

        if (!phoneValidate && !passwordValidate) {
            dispatch(login(form))
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


    const showForm = () => {
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'forgot'
        })
    }


    return (
        <Box>

            <Box textAlign='center' my={2}>
                <Typography variant='h3'>
                    Please Sign in
                </Typography>

                <Avatar src={LoginLogo} className={classes.loginLogo}/>
            </Box>

            <form onSubmit={submitHandler}>
                <TextField
                    error={errors.phone.show}
                    margin="normal"
                    label="Phone *"
                    fullWidth
                    variant="outlined"
                    value={form.phone}
                    InputProps={{inputProps: {maxlength: 11}}}
                    onChange={e => filedChangeHandler('phone', e.target.value)}
                    helperText={errors.phone.text}
                />


                <TextField
                    error={errors.password.show}
                    margin="normal"
                    label="Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password}
                    onChange={e => filedChangeHandler('password', e.target.value)}
                    helperText={errors.password.text}
                />

                <Box textAlign='end' my={2}>
                    <Button variant="text" onClick={showForm} >Forgot password?</Button>
                </Box>

                <Button type='submit' variant='contained' fullWidth>Login</Button>
            </form>
        </Box>
    );
};

export default Login;