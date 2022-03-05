import React, {useEffect, useState} from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, TextField} from "@mui/material";
import {useStyles} from "./styled";
import {Autocomplete} from "@mui/lab";
import {addressType} from "../../../../constants/_data";
import {useDispatch, useSelector} from "react-redux";
import {fetchMe, update} from "../../../../store/actions/authActions";
import {TOGGLE_PROFILE_DIALOG} from "../../../../store/types";


const Address = () => {
    const {currentUser} = useSelector(state=> state.auth)

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMe())
    }, [dispatch])


    const [form, setForm] = useState({
        address: currentUser?.address,
        addressType: currentUser?.addressType,
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

            <TextField
                margin="normal"
                label="Address"
                fullWidth
                variant="outlined"
                value={form.address}
                onChange={e => fieldChangeHandler('address', e.target.value)}
            />


            <Autocomplete
                disablePortal
                options={addressType}
                fullWidth
                value={form.addressType}
                onChange={(e, data) => fieldChangeHandler('addressType', data)}
                renderInput={(params) =>
                    <TextField {...params} margin='normal' label="Address Type"/>
                }
            />



            <Box my={2}>
                <Button type='submit' variant='contained' fullWidth>
                    {currentUser?.profile?.address === null ? 'Add' : 'Update'}
                </Button>
            </Box>

        </form>
    )
}

export default Address;
