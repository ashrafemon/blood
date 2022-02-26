import React from 'react'
import {Box} from "@mui/system";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField
} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete, DateTimePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'


const RequestForm = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState(new Date());

    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Card elevation={0} className={classes.requestCard}>
                    <CardContent>

                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked/>} label="Emergency"/>
                        </FormGroup>
                        <Divider/>
                        <br/>

                        <Grid container spacing={2}>

                            {/* ====== Select District ====== */}
                            <Grid item lg={2}>
                                <Autocomplete
                                    disablePortal
                                    renderInput={(params) => <TextField {...params} label="Select District"/>}
                                />
                            </Grid>


                            {/* ====== Select Area ====== */}
                            <Grid item lg={2}>
                                <Autocomplete
                                    disablePortal
                                    renderInput={(params) => <TextField {...params} label="Select Area"/>}
                                />
                            </Grid>

                            {/* ====== Select Hospital ====== */}
                            <Grid item lg={2}>
                                <Autocomplete
                                    disablePortal
                                    renderInput={(params) => <TextField {...params} label="Select Hospital"/>}
                                />
                            </Grid>


                            {/* ====== Select Blood Group ====== */}
                            <Grid item lg={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Blood Group</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>O+</MenuItem>
                                        <MenuItem value={'Borishal'}>O-</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>

                            {/* ====== Select Quantity ====== */}
                            <Grid item lg={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Quantity</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                        <MenuItem value={'Borishal'}>Borishal</MenuItem>
                                        <MenuItem value={'Cumilla'}>Cumilla</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>

                            {/* ====== Date & Time ====== */}
                            <Grid item lg={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Donate Time"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>


                            {/* ====== Select Gender ====== */}
                            <Grid item lg={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Male</MenuItem>
                                        <MenuItem value={'Borishal'}>Female</MenuItem>
                                        <MenuItem value={'Cumilla'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                            {/* ====== Select Religion ====== */}
                            <Grid item lg={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Religion</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Blood Group"
                                    >
                                        <MenuItem value={'Dhaka'}>Male</MenuItem>
                                        <MenuItem value={'Borishal'}>Female</MenuItem>
                                        <MenuItem value={'Cumilla'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                            <Grid item lg={4}>
                                <TextField label="Description" multiline maxRows={5} minRows={5} fullWidth
                                           variant="outlined" placeholder="Write description"/>
                            </Grid>

                            <Grid item lg={4}>
                                <Button className={classes.button} variant="contained" color="primary" size="large">Post
                                    Request</Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>


            </Container>
        </Box>
    )
}

export default RequestForm;
