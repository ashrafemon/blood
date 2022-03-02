import React, {useEffect, useState} from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import {Autocomplete, DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useDispatch, useSelector} from "react-redux";
import {bloodGroup, gender, religion} from "../../../../constants/_data";
import {fetchAreasByDistrict, fetchDistricts} from "../../../../store/actions/siteActions";
import {FETCH_AREAS} from "../../../../store/types";

const PersonalInfo = () => {
    const classes = useStyles();

    const {districts, areas} = useSelector((state) => state.site)
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        district_id: null,
        area_id: null,
        blood_group: null,
        gender: null,
        religion: null,
        dob: null
    });

    useEffect(() => {
        dispatch(fetchDistricts())
    }, [dispatch])


    const fieldChangeHandler = (field, value) => {
        setForm(prevState => ({
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
        e.preventDefault();

        // dispatch(register(form))
        //
        // props.handleNext()

    }

    return (
        <Box>
            <form onSubmit={submitHandler}>
                <Autocomplete
                    disablePortal
                    className={classes.autoComplete}
                    options={districts}
                    getOptionLabel={option => option.name}
                    fullWidth
                    value={form.district_id}
                    onChange={(e, data) => fieldChangeHandler('district_id', data)}
                    renderInput={(params) =>
                        <TextField {...params} label="Select District"/>
                    }
                />


                <Autocomplete
                    disablePortal
                    className={classes.autoComplete}
                    options={areas}
                    getOptionLabel={option => option.name}
                    fullWidth
                    onChange={(e, data) => fieldChangeHandler('area_id', data)}
                    renderInput={(params) =>
                        <TextField {...params} label="Select Areas"/>
                    }
                />


                <Autocomplete
                    disablePortal
                    className={classes.autoComplete}
                    options={bloodGroup}
                    fullWidth
                    onChange={(e, data) => fieldChangeHandler('blood_group', data)}
                    renderInput={(params) =>
                        <TextField {...params} label="Blood Group"/>
                    }
                />


                <Autocomplete
                    disablePortal
                    className={classes.autoComplete}
                    options={gender}
                    fullWidth
                    onChange={(e, data) => fieldChangeHandler('gender', data)}
                    renderInput={(params) =>
                        <TextField {...params} label="Gender"/>
                    }
                />


                <Autocomplete
                    disablePortal
                    className={classes.autoComplete}
                    options={religion}
                    fullWidth
                    onChange={(e, data) => fieldChangeHandler('religion', data)}
                    renderInput={(params) =>
                        <TextField {...params} label="Religion"/>
                    }
                />


                <Box my={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            className={classes.datePicker}
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            label="Donate Time"
                            value={form.dob}
                            onChange={(newValue) =>
                                fieldChangeHandler(
                                    "dob",
                                    newValue
                                )
                            }
                        />
                    </LocalizationProvider>
                </Box>
            </form>
        </Box>
    );
};

export default PersonalInfo;
