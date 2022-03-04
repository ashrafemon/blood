import React, {useEffect} from 'react'
import {Box} from "@mui/system";
import {
    Avatar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import {useStyles} from "./styled";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SeekerItem from "./SeekerItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchBloodRequest, fetchBloodRequests} from "../../../../store/actions/seekerActions";
import {FETCH_BLOOD_REQUEST, TOGGLE_BLOOD_REQUEST_DIALOG} from "../../../../store/types";

const Seekers = () => {
    const classes = useStyles()


    const handleClose = () => {
        dispatch({
            type: FETCH_BLOOD_REQUEST,
            payload: {}
        })
        dispatch({
            type: TOGGLE_BLOOD_REQUEST_DIALOG,
            payload: false
        })
    };


    const {bloodRequests, bloodRequest, bloodRequestDialog} = useSelector((state) => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBloodRequests())
    }, [dispatch])

    return (
        <Box>


            <Container maxWidth="xl">

                {/*<Grid container spacing={2}>*/}
                {/*    <Grid item lg={6} xs={12}>*/}
                {/*        <Typography variant='h3' color='primary'>*/}
                {/*            1,223 people are searching for A+ Blood in your area*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}


                {/*    <Grid item lg={6} xs={12}>*/}
                {/*        <Grid container spacing={3}>*/}
                {/*            /!* ===== All District ===== *!/*/}
                {/*            <Grid item lg={2.5} xs={6}>*/}
                {/*                <Autocomplete*/}
                {/*                    disablePortal*/}
                {/*                    renderInput={(params) => <TextField {...params} label="All District"/>}*/}
                {/*                />*/}
                {/*            </Grid>*/}


                {/*            /!* ===== All Area ===== *!/*/}
                {/*            <Grid item lg={2.5} xs={6}>*/}
                {/*                <Autocomplete*/}
                {/*                    disablePortal*/}
                {/*                    renderInput={(params) => <TextField {...params} label="All Area"/>}*/}
                {/*                />*/}
                {/*            </Grid>*/}

                {/*            /!* ===== Blood group ===== *!/*/}
                {/*            <Grid item lg={2.5} xs={6}>*/}
                {/*                <FormControl fullWidth>*/}
                {/*                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>*/}

                {/*                    <Select*/}
                {/*                        labelId="demo-simple-select-label"*/}
                {/*                        id="demo-simple-select"*/}

                {/*                        label="Select Blood Group"*/}
                {/*                    >*/}
                {/*                        <MenuItem value={'Dhaka'}>Male</MenuItem>*/}
                {/*                        <MenuItem value={'Borishal'}>Female</MenuItem>*/}
                {/*                        <MenuItem value={'Cumilla'}>Other</MenuItem>*/}
                {/*                    </Select>*/}
                {/*                </FormControl>*/}
                {/*            </Grid>*/}


                {/*            /!* ===== Gender ===== *!/*/}
                {/*            <Grid item lg={2} xs={6}>*/}
                {/*                <FormControl fullWidth>*/}
                {/*                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>*/}

                {/*                    <Select*/}
                {/*                        labelId="demo-simple-select-label"*/}
                {/*                        id="demo-simple-select"*/}

                {/*                        label="Select Blood Group"*/}
                {/*                    >*/}
                {/*                        <MenuItem value={'Dhaka'}>Male</MenuItem>*/}
                {/*                        <MenuItem value={'Borishal'}>Female</MenuItem>*/}
                {/*                        <MenuItem value={'Cumilla'}>Other</MenuItem>*/}
                {/*                    </Select>*/}
                {/*                </FormControl>*/}
                {/*            </Grid>*/}


                {/*            /!* ===== Seeker Type ===== *!/*/}
                {/*            <Grid item lg={2.5} xs={12}>*/}
                {/*                <FormControl fullWidth>*/}
                {/*                    <InputLabel id="demo-simple-select-label">Seeker Type</InputLabel>*/}

                {/*                    <Select*/}
                {/*                        labelId="demo-simple-select-label"*/}
                {/*                        id="demo-simple-select"*/}

                {/*                        label="Select Blood Group"*/}
                {/*                    >*/}
                {/*                        <MenuItem value={'Dhaka'}>Emergency</MenuItem>*/}
                {/*                        <MenuItem value={'Borishal'}>Regular</MenuItem>*/}
                {/*                    </Select>*/}
                {/*                </FormControl>*/}
                {/*            </Grid>*/}

                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}


                <Grid container spacing={5} my={3}>
                    {bloodRequests?.data?.map((data, i) => (
                        <Grid item lg={4} sm={6} xs={12} key={i}>
                            <SeekerItem item={data}/>
                        </Grid>
                    ))}

                </Grid>


            </Container>
        </Box>
    )
}

export default Seekers;
