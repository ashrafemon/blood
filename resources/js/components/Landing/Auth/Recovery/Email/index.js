import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AUTH_FORM_TYPE} from "../../../../../store/types";
import {isRequiredValidate, lengthValidate, phoneValidation} from "../../../../../utils/validateHelpers";
import {resetRequestByPhone} from "../../../../../store/actions/authActions";

const RecoverPhone = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        phone: null,
    });


    const [errors, setErrors] = useState({
        phone: {text: '', show: false},
    })

    const fieldChangeHandler = (field, value) =>{
        setErrors((prevState) => ({
            ...prevState,
            [field]: {text: '', show: false}
        }))

        setForm(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const showForm = () => {
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'otp'
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        let phoneValidate = isRequiredValidate(form.phone, 'phone', setErrors, 'Phone is required')

        if (!phoneValidate) {
            phoneValidate = phoneValidation(form.phone, 'phone', setErrors, 'Phone number must start with 019,017,013,015,016,018,014')

            if (!phoneValidate) {
                phoneValidate = lengthValidate(form.phone, 'phone', 11, setErrors, 'Phone should be 11 characters')
            }
        }

        dispatch(resetRequestByPhone(form, ()=> showForm()))
    }

    return (
        <Box textAlign='center'>
            <Typography variant='body1'>
                Enter your phone number & the instructions will be sent to you
            </Typography>

            <form onSubmit={submitHandler}>
                <TextField
                    error={errors.phone.show}
                    margin="normal"
                    label="Phone *"
                    fullWidth
                    variant="outlined"
                    value={form.phone}
                    InputProps={{inputProps: {maxlength: 11}}}
                    onChange={e => fieldChangeHandler('phone', e.target.value)}
                    helperText={errors.phone.text}
                />
                <Box my={2}>
                    <Button variant='contained' type='submit' fullWidth>Recover</Button>
                </Box>

            </form>
        </Box>
    );
};

export default RecoverPhone;
