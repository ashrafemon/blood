import React, {useState} from 'react'
import Wrapper from "../../components/Landing/shared/Wrapper";
import {Avatar, Button, Container, Grid, Stack, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ShowDonorProfile from "../../components/Landing/Profile/ShowDonorProfile";
import {Rating} from "@mui/lab";
import {Box} from "@mui/system";
import {donateUpdate} from "../../store/actions/authActions";
import {NavLink, useParams} from "react-router-dom";

const DonorProfile = () => {

    const dispatch = useDispatch()

    const {id} = useParams()

    const [form, setForm] = useState({
        rating: null,
        description: null,
        status: null,
    })

    const changeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(donateUpdate(form,id))

    }

    return (
        <Wrapper>
            <Container maxWidth="xl">


                <Grid container>
                    <Grid item lg={8} sm={6} xs={12}>
                        <ShowDonorProfile/>
                    </Grid>

                    <Grid item lg={4} sm={6} xs={12}>
                        <Avatar/>
                    </Grid>

                    <Grid item lg={6} sm={6} xs={12}>
                        <form onSubmit={submitHandler}>
                            <TextField
                                label="Description"
                                multiline
                                maxRows={5}
                                minRows={5}
                                fullWidth
                                variant="outlined"
                                placeholder="Write description"
                                value={form.description}
                                onChange={(e) => changeHandler('description', e.target.value)}
                            />

                            <Rating
                                name="simple-controlled"
                                value={form.rating}
                                onChange={(e, value) => changeHandler('rating', value)}
                            />

                            <Stack direction='row' spacing={3}>
                                <NavLink to='/'>
                                    <Button variant='outlined'>Cancel</Button>
                                </NavLink>
                                <Button type='submit' variant='contained'>Received</Button>
                            </Stack>

                        </form>
                    </Grid>
                </Grid>

            </Container>

        </Wrapper>
    )
}

export default DonorProfile
