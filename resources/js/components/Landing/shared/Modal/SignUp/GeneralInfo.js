import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";



const GeneralInfo = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box>
            <TextField
                margin="normal"
                label="Name *"
                type="text"
                fullWidth
                variant="outlined"
            />

            <TextField
                margin="normal"
                label="Phone *"
                type="text"
                fullWidth
                variant="outlined"
            />


            <TextField
                margin="normal"
                label="Email *"
                type="Email"
                fullWidth
                variant="outlined"
            />

            <FormControl variant="outlined" fullWidth  margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>


            <FormControl variant="outlined" fullWidth  margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Confirm Password"
                />
            </FormControl>

        </Box>
    );
};

export default GeneralInfo;
