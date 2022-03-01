import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {Button, Card, CardContent, Container, Divider, Grid, Switch, TextField} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete, DateTimePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {useDispatch, useSelector} from "react-redux";
import {fetchAreasByDistrict, fetchDistricts, fetchHospitals} from "../../../../store/actions/siteActions";
import {FETCH_AREAS} from "../../../../store/types";
import {bloodGroup, gender, religion} from "../../../../constants/_data";
import {fetchBloodRequests, requestSeeker} from "../../../../store/actions/seekerActions";


const RequestForm = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {districts, areas, hospitals} = useSelector((state) => state.site)

    useEffect(() => {
        dispatch(fetchDistricts())
        // dispatch(fetchHospitals())
    }, [dispatch])

    const [form, setForm] = useState({
        district_id: null,
        area_id: null,
        hospital: null,
        blood_group: null,
        emergency: false,
        accepted_date: null,
        gender: null,
        religion: null,
        description: null,
    })


    const fieldChangeHandler = (field, value) => {

        // setErrors((prevState) => ({
        //     ...prevState,
        //     [field]: {text: '', show: false}
        // }))

        setForm((prevState) => ({
            ...prevState,
            [field]: value
        }))

        if (field === 'district_id') {
            if (value) dispatch(fetchAreasByDistrict(value.id))
            else dispatch({
                type: FETCH_AREAS,
                payload: []
            })
        }

    }

    const resetForm = () => {
        setForm(() => ({
            district_id: null,
            area_id: null,
            hospital: null,
            blood_group: null,
            emergency: false,
            accepted_date: null,
            gender: null,
            religion: null,
            description: null,
        }))
    }


    const submitHandler = (e) => {
        e.preventDefault()
        let formData = {...form};

        if (formData.district_id && formData.district_id.hasOwnProperty("id")) {
            formData["district_id"] = formData.district_id.id;
        }

        if (formData.area_id && formData.area_id.hasOwnProperty("id")) {
            formData["area_id"] = formData.area_id.id;
        }

        if (formData.hospital && formData.hospital.hasOwnProperty("id")) {
            formData["hospital"] = formData.hospital.id;
        }

        dispatch(requestSeeker(formData, () => {
            resetForm()
            dispatch(fetchBloodRequests())
        }))
    }


    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Card elevation={0} className={classes.requestCard}>
                    <form onSubmit={submitHandler}>
                        <CardContent>

                            <Switch
                                checked={form.emergency}
                                onChange={(e, value) => fieldChangeHandler('emergency', e.target.checked)}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                            <Divider/>
                            <br/>

                            <Grid container spacing={2}>

                                {/* ====== Select District ====== */}
                                <Grid item lg={2} xs={12}>
                                    <Autocomplete
                                        options={districts}
                                        getOptionLabel={option => option.name}
                                        fullWidth
                                        value={form.district_id}
                                        onChange={(e, data) => fieldChangeHandler('district_id', data)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Select District"/>
                                        }
                                    />
                                </Grid>


                                {/* ====== Select Area ====== */}
                                <Grid item lg={2} xs={12}>
                                    <Autocomplete
                                        options={areas}
                                        getOptionLabel={option => option.name}
                                        fullWidth
                                        value={form.area_id}
                                        onChange={(e, data) => fieldChangeHandler('area_id', data)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Select Areas"/>
                                        }
                                    />
                                </Grid>

                                {/* ====== Select Hospital ====== */}
                                <Grid item lg={2} xs={12}>
                                    {/*<Autocomplete*/}
                                    {/*    options={hospitals}*/}
                                    {/*    getOptionLabel={option => option.name}*/}
                                    {/*    fullWidth*/}
                                    {/*    onChange={(e, data) => fieldChangeHandler('hospital', data)}*/}
                                    {/*    renderInput={(params) =>*/}
                                    {/*        <TextField {...params} label="Select Hospital"/>*/}
                                    {/*    }*/}
                                    {/*/>*/}
                                    <TextField
                                        fullWidth
                                        value={form.hospital}
                                        onChange={(e) => fieldChangeHandler('hospital', e.target.value)}
                                        label="Hospital"
                                    />
                                </Grid>


                                {/* ====== Select Blood Group ====== */}
                                <Grid item lg={2} xs={12}>
                                    <Autocomplete
                                        options={bloodGroup}
                                        fullWidth
                                        value={form.blood_group}
                                        onChange={(e, data) => fieldChangeHandler('blood_group', data)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Blood Group"/>
                                        }
                                    />

                                </Grid>


                                {/* ====== Date & Time ====== */}
                                {/*{form.emergency === 'false' && (*/}
                                {/*   */}
                                {/*)}*/}

                                {!form.emergency && (
                                    <Grid item lg={2} xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField fullWidth {...props} />}
                                                label="Donate Time"
                                                value={form.accepted_date}
                                                onChange={(newValue) =>
                                                    fieldChangeHandler(
                                                        "accepted_date",
                                                        newValue
                                                    )
                                                }
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                )}



                                {/* ====== Select Gender ====== */}
                                <Grid item lg={2} xs={12}>
                                    <Autocomplete
                                        options={gender}
                                        fullWidth
                                        value={form.gender}
                                        onChange={(e, data) => fieldChangeHandler('gender', data)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Gender"/>
                                        }
                                    />
                                </Grid>


                                {/* ====== Select Religion ====== */}
                                <Grid item lg={2} xs={12}>
                                    <Autocomplete
                                        options={religion}
                                        fullWidth
                                        value={form.religion}
                                        onChange={(e, data) => fieldChangeHandler('religion', data)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Religion"/>
                                        }
                                    />
                                </Grid>


                                <Grid item lg={4} xs={12}>
                                    <TextField
                                        label="Description"
                                        multiline
                                        maxRows={5}
                                        minRows={5}
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Write description"
                                        value={form.description}
                                        onChange={(e) => fieldChangeHandler('description', e.target.value)}
                                    />
                                </Grid>

                                <Grid item lg={4} xs={12}>
                                    <Button type="submit" className={classes.button} variant="contained" color="primary"
                                            size="large">Post
                                        Request</Button>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </form>
                </Card>


            </Container>
        </Box>
    )
}

export default RequestForm;
