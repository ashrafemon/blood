import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";
import {AUTH_FORM_TYPE} from "../../../../../store/types";
import {useDispatch} from "react-redux";

const ChangePassword = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const showForm = () => {
        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'login'
        })
    }


    return (<Box textAlign='center'>

        <Avatar className={classes.avatar}/>

        <Typography variant='h3'>
            Please Set your new password
        </Typography>


        {/* For New Password */}
        <TextField
            margin="normal"
            id="name"
            label="New Password *"
            type="password"
            fullWidth
            variant="outlined"
        />


        {/* For Confirm Password */}
        <TextField
            margin="normal"
            id="name"
            label="Confirm Password *"
            type="password"
            fullWidth
            variant="outlined"
        />

        <Button variant='contained' onClick={showForm} fullWidth>Confirm</Button>

    </Box>);
};

export default ChangePassword;
