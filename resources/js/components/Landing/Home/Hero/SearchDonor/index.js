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
import {bloodGroup, gender, religion} from "../../../../../constants/_data";
import {isRequiredValidate} from "../../../../../utils/validateHelpers";

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
        blood_group: {text: '', show: false},
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

        let formData = {...form};

        if (formData.district_id && formData.district_id.hasOwnProperty("id")) {
            formData["district_id"] = formData.district_id.id;
        }

        if (formData.area_id && formData.area_id.hasOwnProperty("id")) {
            formData["area_id"] = formData.area_id.id;
        }


        let districtValidate = isRequiredValidate(form.district_id, 'district_id', setErrors, 'District is required')

        let bloodValidate = isRequiredValidate(form.blood_group, 'blood_group', setErrors, 'Blood is required')


        if (!districtValidate && !bloodValidate) {
            dispatch(searchDonors(formData, () => {
                history.push('/donors')
            }))
        }
    }

    return (
        <SiteCard>
            <CardContent>
                <form onSubmit={submitHandler}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} lg={4}>

                            <Autocomplete
                                options={districts}
                                getOptionLabel={option => option.name}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('district_id', data)}
                                renderInput={(params) =>
                                    <TextField {...params} error={errors.district_id.show}
                                               helperText={errors.district_id.text} label="Select District"/>
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
                                    <TextField {...params} error={errors.blood_group.show}
                                               helperText={errors.blood_group.text} label="Blood Group Needed"/>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                options={gender}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('gender', data)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Gender"/>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Autocomplete
                                options={religion}
                                fullWidth
                                onChange={(e, data) => fieldChangeHandler('religion', data)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Religion"/>
                                }
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
