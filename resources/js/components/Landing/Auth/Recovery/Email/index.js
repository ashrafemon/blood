import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AUTH_FORM_TYPE} from "../../../../../store/types";

const Email = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const showForm = () => {
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'otp'
        })
    }

    return (
        <Box textAlign='center'>

            <Typography variant='h3'>
                Password Recovery
            </Typography>


            <Typography variant='body1'>
                Enter your phone number & the instructions will be sent to you
            </Typography>

            <form onSubmit={submitHandler}>



            <TextField
                margin="normal"
                label="Phone *"
                fullWidth
                variant="outlined"
            />

                <Button variant='contained' onClick={showForm} fullWidth>Recover</Button>
            </form>
        </Box>
    );
};

export default Email;
