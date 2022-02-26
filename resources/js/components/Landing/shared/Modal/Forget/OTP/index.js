import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";

const OTP = () => {
    const classes = useStyles();

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

        <Button variant='contained' fullWidth>Validate OTP</Button>

    </Box>);
};

export default OTP;
