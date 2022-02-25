import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, TextField, Typography} from "@mui/material";

const Email = () => {
    const classes = useStyles();

    return (
        <Box textAlign='center'>

            <Typography variant='h3'>
                Password Recovery
            </Typography>


            <Typography variant='body1'>
                Enter your phone number & the instructions will be sent to you
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

            <Button variant='contained' fullWidth>Recover</Button>

        </Box>
    );
};

export default Email;
