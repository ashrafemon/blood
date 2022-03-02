import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";

import {register} from "../../../../store/actions/authActions";


const GeneralInfo = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
    });


    const fieldChangeHandler = (field, value) => {
        setForm(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // dispatch(register(form))

        props.handleNext()

    }


    return (
        <Box>
            <form id="form-step0" onSubmit={submitHandler}>
                <TextField
                    margin="normal"
                    label="Name *"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={form.name}
                    onChange={e => fieldChangeHandler('name', e.target.value)}
                />

                <TextField
                    margin="normal"
                    label="Phone *"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={form.phone}
                    onChange={e => fieldChangeHandler('phone', e.target.value)}
                />


                <TextField
                    margin="normal"
                    label="Email *"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={form.email}
                    onChange={e => fieldChangeHandler('email', e.target.value)}
                />

                <TextField
                    margin="normal"
                    label="Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password}
                    onChange={e => fieldChangeHandler('password', e.target.value)}
                />

                <TextField
                    margin="normal"
                    label="Confirm Password *"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={form.password_confirmation}
                    onChange={e => fieldChangeHandler('password_confirmation', e.target.value)}
                />
            </form>
        </Box>
    );
};

export default GeneralInfo;
