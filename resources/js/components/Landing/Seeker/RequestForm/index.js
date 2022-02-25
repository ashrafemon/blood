import React from 'react'
import {Box} from "@mui/system";
import {
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useStyles} from "./styled";
import {DateTimePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const RequestForm = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState(new Date());

    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Card elevation={0} className={classes.requestCard}>
                    <CardContent>
                        <Grid container spacing={2} alignItems='center'>

                            <Grid item lg={2.5}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select District</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select District"
                                    >
                                        <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                        <MenuItem value={'Borishal'}>Borishal</MenuItem>
                                        <MenuItem value={'Cumilla'}>Cumilla</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>

                            <Grid item lg={2.5}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Hospital</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Select Hospital"
                                    >
                                        <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                        <MenuItem value={'Borishal'}>Borishal</MenuItem>
                                        <MenuItem value={'Cumilla'}>Cumilla</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>


                            <Grid item lg={2.5}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Blood Group</InputLabel>

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


                            <Grid item lg={2.5}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Blood Needed Quantity</InputLabel>

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

                            <Grid item lg={7.5}>
                                <TextField label="Description" multiline maxRows={5} minRows={5} fullWidth
                                           variant="outlined" placeholder="Write description"/>
                            </Grid>

                            <Grid item lg={4.5}>
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
