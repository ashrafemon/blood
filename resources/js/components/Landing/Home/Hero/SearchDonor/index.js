import React, {useEffect, useState} from 'react'
import {Button, CardContent, Grid, TextField} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import {SiteCard} from "../../../../../styles/globalStyles";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchAreasByDistrict, fetchDistricts} from "../../../../../store/actions/siteActions";
import {FETCH_AREAS} from "../../../../../store/types";
import {searchDonors} from "../../../../../store/actions/donorActions";
import {useHistory} from "react-router-dom";
import {bloodGroup} from "../../../../../constants/_data";

const SearchDonor = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const history = useHistory()
    const {districts, areas} = useSelector((state) => state.site)

    useEffect(() => {
        dispatch(fetchDistricts())
    }, [dispatch])

    const [form, setForm] = useState({
        district_id: null,
        area_id: null,
        gender: null,
        blood_group: null,
        religion: null
    })

    const [errors, setErrors] = useState({
        district_id: {text: '', show: false},
        area_id: {text: '', show: false},
        gender: {text: '', show: false},
        blood_group: {text: '', show: false},
        religion: {text: '', show: false}
    })

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: {text: '', show: false}
        }))
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

    const submitHandler = (e) => {
        e.preventDefault()

        if (form.district_id && form.blood_group) {
            let formData = {
                district_id: form.district_id.id,
                blood_group: form.blood_group
            }

            dispatch(searchDonors(formData, () => {
                history.push('/donors')
            }))
        }
    }

    return (
        <SiteCard>
            <CardContent>
                <form onSubmit={submitHandler}>
                    <Grid container spacing={3} alignItems="center">

                        <Grid item xs={12} lg={4}>

                            <Autocomplete
                                options={districts}
                                getOptionLabel={option => option.name}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('district_id', data)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Select District"/>
                                }
                            />

                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                options={areas}
                                getOptionLabel={option => option.name}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('area_id', data)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Select Areas"/>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                options={bloodGroup}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('blood_group', data)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Blood Group Needed"/>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Gender"/>}
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                disablePortal
                                // options={top100Films}
                                renderInput={(params) => <TextField {...params} fullWidth label="Religion"/>}
                            />
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <Button type="submit" className={classes.button} variant="contained" color="primary"
                                    fullWidth>Search Donor</Button>
                        </Grid>

                    </Grid>
                </form>
            </CardContent>
        </SiteCard>
    )
}

export default SearchDonor
