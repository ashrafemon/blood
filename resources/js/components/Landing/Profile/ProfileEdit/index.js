import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, TextField} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete} from "@mui/lab";
import {bloodGroup, gender, religion} from "../../../../constants/_data";
import {useDispatch, useSelector} from "react-redux";
import {fetchMe, update} from "../../../../store/actions/authActions";
import {TOGGLE_PROFILE_DIALOG} from "../../../../store/types";


const ProfileEdit = () => {
    const {currentUser} = useSelector(state=> state.auth)

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMe())
    }, [dispatch])


    const [form, setForm] = useState({
        name: currentUser?.name,
        email: currentUser?.email,
        blood_group: currentUser?.profile?.blood_group,
        religion: currentUser?.profile?.religion,
        gender: currentUser?.profile?.gender,
    })


    const fieldChangeHandler = (field, value) => {
        setForm(prevState => ({
            ...prevState,
            [field]: value
        }))
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

    return (
        <form onSubmit={submitHandler}>
            <Avatar className={classes.avatar}/>

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
