import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Autocomplete, DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
const SignUp = () => {
    const classes = useStyles();

    const [gender, setGender] = useState();
    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const [dob, setDob] = useState(null);

    return (
        <Box>



            {/* For Name */}
            <TextField
                margin="normal"
                id="name"
                label="Name *"
                type="text"
                fullWidth
                variant="outlined"
            />

            {/* For Phone */}
            <TextField
                margin="normal"
                id="name"
                label="Phone *"
                type="text"
                fullWidth
                variant="outlined"
            />

            {/* For Gender */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>
            </FormControl>


            {/* For Religion */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Religion"
                    onChange={handleChange}
                >
                    <MenuItem value={'muslim'}>Muslim</MenuItem>
                    <MenuItem value={'hindu'}>Hindu</MenuItem>
                    <MenuItem value={'buddhist'}>Buddhist</MenuItem>
                    <MenuItem value={'christian'}>Christian</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>
            </FormControl>

            {/* For DOB */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker

                    label="Date of Birth"

                    onChange={(newValue) => {
                        setDob(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth margin='normal' />}
                />
            </LocalizationProvider>

            {/* For  District*/}
            <Box my={2}>
                <Autocomplete
                    margin='normal'
                    disablePortal
                    id="combo-box-demo"
                    renderInput={(params) => <TextField {...params} label="District" />}
                />
            </Box>


            {/* For  District*/}
            <Autocomplete
                disablePortal
                id=""
                renderInput={(params) => <TextField {...params} label="Area" />}
            />


            {/* For Password */}
            <TextField
                margin="normal"
                id="password"
                label="Password *"
                type="password"
                fullWidth
                variant="outlined"
            />

            <Button variant='contained' fullWidth>Sign Up</Button>


            <Box textAlign='center' my={2}>
                <Typography>
                    OR
                </Typography>

                <Button variant="text">Login</Button>
            </Box>
        </Box>
    );
};

export default SignUp;
