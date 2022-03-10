import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete} from "@mui/lab";
import {bloodGroup, gender, religion} from "../../../../constants/_data";
import {useDispatch, useSelector} from "react-redux";
import {fetchMe, update} from "../../../../store/actions/authActions";
import {FETCH_AREAS, TOGGLE_PROFILE_DIALOG} from "../../../../store/types";
import {fetchAreasByDistrict, fetchDistricts, upload} from "../../../../store/actions/siteActions";
import FileUploader from "../../shared/FileUploader";


const ProfileEdit = () => {
    const classes = useStyles()
    const {currentUser} = useSelector(state => state.auth)
    const {districts, areas} = useSelector((state) => state.site)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMe())


    }, [dispatch])


    useEffect(() => {
        dispatch(fetchDistricts)
    }, [])


    const [form, setForm] = useState({
        name: currentUser?.name || null,
        email: currentUser?.email || null,
        blood_group: currentUser?.profile?.blood_group || null,
        religion: currentUser?.profile?.religion || null,
        gender: currentUser?.profile?.gender || null,
        avatar: currentUser?.profile?.avatar || null,
        district_id: currentUser?.profile?.district_id || null,
        area_id: currentUser?.profile?.area_id || null,
    })

    useEffect(()=>{
        if (currentUser && currentUser?.profile?.district_id){
            dispatch(fetchAreasByDistrict(currentUser?.profile?.district_id))
            districts.forEach(item => {
                if (item.id === currentUser.profile.district_id){
                    setForm(prevState => ({
                        ...prevState,
                        district_id: item
                    }))
                }
            })
        }
    },[currentUser?.profile?.district_id])

    useEffect(()=>{
        if (currentUser && currentUser?.profile?.area_id){

            areas.forEach(item => {
                if (item.id === currentUser.profile.area_id){
                    setForm(prevState => ({
                        ...prevState,
                        area_id: item
                    }))
                }
            })
        }
    },[currentUser?.profile?.area_id])

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
        e.preventDefault()

        dispatch(update(form, () => {
            dispatch({
                type: TOGGLE_PROFILE_DIALOG,
                payload: false
            })
        }))
    }

    const uploadHandler = (file) => {
        if (file) {
            dispatch(upload(file, (image) => {
                setForm((prevState) => ({
                    ...prevState,
                    avatar: image
                }))
            }))
        }
    }

    return (
        <form onSubmit={submitHandler}>

            <FileUploader avatar={form.avatar} changer={uploadHandler}/>


            <TextField
                margin="normal"
                label="Name"
                fullWidth
                variant="outlined"
                value={form.name}
                onChange={e => fieldChangeHandler('name', e.target.value)}
            />

            <TextField
                margin="normal"
                label="Email"
                type='email'
                fullWidth
                variant="outlined"
                value={form.email}
                onChange={e => fieldChangeHandler('email', e.target.value)}
            />

            <Autocomplete
                disablePortal
                options={districts}
                getOptionLabel={option => option.name || ''}
                fullWidth
                value={form.district_id}
                onChange={(e, data) => fieldChangeHandler('district_id', data)}
                renderInput={(params) =>
                    <TextField {...params} margin='normal' label="District"/>
                }
            />


            <Autocomplete
                disablePortal
                options={areas}
                getOptionLabel={option => option.name || ''}
                fullWidth
                onChange={(e, data) => fieldChangeHandler('area_id', data)}
                renderInput={(params) =>
                    <TextField margin='normal' {...params} label="Areas"/>
                }
            />

            <Autocomplete
                disablePortal
                options={bloodGroup}
                fullWidth
                value={form.blood_group}
                onChange={(e, data) => fieldChangeHandler('blood_group', data)}
                renderInput={(params) =>
                    <TextField {...params} margin='normal' label="Blood Group"/>
                }
            />


            <Autocomplete
                disablePortal
                options={gender}
                fullWidth
                value={form.gender}
                onChange={(e, data) => fieldChangeHandler('gender', data)}
                renderInput={(params) =>
                    <TextField {...params} margin='normal' label="Gender"/>
                }
            />


            <Autocomplete
                disablePortal
                options={religion}
                fullWidth
                value={form.religion}
                onChange={(e, data) => fieldChangeHandler('religion', data)}
                renderInput={(params) =>
                    <TextField {...params} margin='normal' label="Religion"/>
                }
            />

            <Box my={2}>
                <Button type='submit' variant='contained' fullWidth>Update</Button>
            </Box>


        </form>
    )
}

export default ProfileEdit;
