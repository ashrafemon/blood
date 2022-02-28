import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Button, TextField, Typography} from "@mui/material";

import LoginLogo from "../../../../../assets/images/login-logo.png"

const Login = () => {
    const classes = useStyles();

    return (
        <Box>

            <Box textAlign='center' my={2}>
                <Typography variant='h3'>
                    Please Sign in
                </Typography>

                <Avatar src={LoginLogo} className={classes.loginLogo}/>
            </Box>

            <TextField
                margin="normal"
                id="name"
                label="Email *"
                type="email"
                fullWidth
                variant="outlined"
            />


            <TextField
                margin="normal"
                id="password"
                label="Password *"
                type="password"
                fullWidth
                variant="outlined"
            />

            <Box textAlign='end' my={2}>
                <Button variant="text">Forgot password?</Button>
            </Box>


            <Button variant='contained' fullWidth>Login</Button>


            <Box textAlign='center' my={2}>
                <Typography>
                    OR
                </Typography>

                <Button variant="text">Sign up</Button>
            </Box>
        </Box>
    );
};

export default Login;
