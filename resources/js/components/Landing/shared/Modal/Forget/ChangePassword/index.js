import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";

const ChangePassword = () => {
    const classes = useStyles();


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

        <Button variant='contained' fullWidth>Confirm</Button>

    </Box>);
};

export default ChangePassword;
