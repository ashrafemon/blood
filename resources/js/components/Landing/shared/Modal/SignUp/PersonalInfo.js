import React, {useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Autocomplete, DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const PersonalInfo = () => {
    const classes = useStyles();

    const [dob, setDob] = useState(null);

    return (
        <Box>

            <Autocomplete
                margin='normal'
                disablePortal
                renderInput={(params) => <TextField {...params} label="District"/>}
            />

            <Box my={2}>
                <Autocomplete
                    margin='normal'
                    disablePortal
                    renderInput={(params) => <TextField {...params} label="Area"/>}
                />
            </Box>

            <FormControl fullWidth margin="normal">
                <InputLabel id="group">Blood Group</InputLabel>
                <Select
                    labelId="group"
                    label="Blood Group"
                >
                    <MenuItem value={'male'}>A+</MenuItem>
                    <MenuItem value={'female'}>A-</MenuItem>
                </Select>
            </FormControl>


            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>
            </FormControl>


            <FormControl fullWidth margin="normal">
                <InputLabel id="religion">Religion</InputLabel>
                <Select
                    labelId="religion"
                    label="Religion"
                >
                    <MenuItem value={'male'}>Muslim</MenuItem>
                    <MenuItem value={'female'}>Hindu</MenuItem>
                    <MenuItem value={'other'}>Christian</MenuItem>
                    <MenuItem value={'other'}>Buddhist</MenuItem>
                </Select>
            </FormControl>



            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker

                    label="Date of Birth"

                    onChange={(newValue) => {
                        setDob(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth margin='normal' />}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default PersonalInfo;
