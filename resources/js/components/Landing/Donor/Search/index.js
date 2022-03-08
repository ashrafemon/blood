import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {Grid, TextField} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import {useDispatch, useSelector} from "react-redux";
import {fetchAreasByDistrict, fetchDistricts} from "../../../../store/actions/siteActions";
import {bloodGroup, gender, religion} from "../../../../constants/_data";
import {FETCH_AREAS} from "../../../../store/types";
import * as types from "../../../../store/types";

const Search = () => {

    const {districts, areas, formData} = useSelector((state) => state.site)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDistricts())
    }, [dispatch])

    const [form, setForm] = useState({
        district_id: formData?.district_id || null,
        area_id: formData?.area_id || null,
        blood_group: formData?.blood_group || null,
        gender: formData?.gender || null,
        religion: formData?.religion || null,
    });


    useEffect(() => {
        if(formData && formData.district_id && typeof formData.district_id === "number"){
            dispatch(fetchAreasByDistrict(formData.district_id))
            districts.forEach((item) => {
                if(item.id === formData.district_id)
                    setForm((prevState) => ({
                        ...prevState,
                        district_id: item
                    }))
            })
        }
    }, [formData.district_id])

    useEffect(() => {
        if(formData && formData.area_id && typeof formData.area_id === "number" && areas.length > 0){
            areas.forEach((item) => {
                if(item.id === formData.area_id)
                    setForm((prevState) => ({
                        ...prevState,
                        area_id: item
                    }))
            })
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch({
                type: types.SEARCH_DONORS,
                payload: {
                    searchDonorsData: {},
                    formData: {}
                }
            })
        }
    }, [])

    const fieldChangeHandler = (field, value) => {
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


    return (
        <Box py={5}>
            <Grid container justifyContent='space-between'>

                <Grid item lg={2}>
                    <Autocomplete
                        options={districts}
                        getOptionLabel={option => option.name}
                        fullWidth
                        value={form.district_id}
                        onChange={(e, data) => fieldChangeHandler('district_id', data)}
                        renderInput={(params) =>
                            <TextField {...params} label="District"/>
                        }
                    />
                </Grid>

                <Grid item lg={2}>
                    <Autocomplete
                        options={areas}
                        getOptionLabel={option => option.name}
                        fullWidth
                        value={form.area_id}
                        onChange={(e, data) => fieldChangeHandler('area_id', data)}
                        renderInput={(params) =>
                            <TextField {...params} label="Area"/>
                        }
                    />
                </Grid>

                <Grid item lg={2}>
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

                <Grid item lg={2}>
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

                <Grid item lg={2}>
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
            </Grid>

        </Box>
    )
}


export default Search;
