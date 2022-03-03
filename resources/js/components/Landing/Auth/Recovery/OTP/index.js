import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";
import {AUTH_FORM_TYPE} from "../../../../../store/types";
import {useDispatch} from "react-redux";

const OTP = () => {
    const classes = useStyles();

   const dispatch = useDispatch();

    const showForm = () => {
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'password'
        })
    }

    return (<Box textAlign='center'>

        <Avatar className={classes.avatar}/>

        <Typography variant='h3'>
            We have sent a code to your phone number
        </Typography>


        {/* For Phone */}
        <TextField
            margin="normal"
            id="name"
            label="Phone *"
            type="text"
            fullWidth
            variant="outlined"
        />

        <Button variant='contained' onClick={showForm} fullWidth>Validate OTP</Button>

    </Box>);
};

export default OTP;
