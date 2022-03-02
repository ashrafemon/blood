import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";

import LoginLogo from "../../../../assets/images/login-logo.png"
import {useDispatch} from "react-redux";
import {Validatation} from "../../../../constants/validatation";
import {login} from "../../../../store/actions/authActions";


const Login = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

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

        if (!form.phone) {

            Validatation(form.phone,
                "phone",
                setErrors,
                "Phone is Required"
            );
        }

        if (!form.password) {
            Validatation(form.password,
                "password",
                setErrors,
                "Password is Required"
            );
        }

        dispatch(login(form))

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
                    id="name"
                    label="Phone *"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={form.phone}
                    onChange={e => filedChangeHandler('phone', e.target.value)}
                    helperText={errors.phone.text}
                />


                <TextField
                    error={errors.password.show}
                    margin="normal"
                    id="password"
                    label="Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password}
                    onChange={e => filedChangeHandler('password', e.target.value)}
                    helperText={errors.password.text}
                />

                <Box textAlign='end' my={2}>
                    <Button variant="text">Forgot password?</Button>
                </Box>


                <Button type='submit' variant='contained' fullWidth>Login</Button>
            </form>
        </Box>
    );
};

export default Login;
