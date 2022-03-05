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
import SeekerFilter from "./SeekerFilter";

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

                <Grid container alignItems='center'>
                    <Grid item lg={6} sm={6} xs={12}>
                        <Typography variant='h4' color='primary'>
                            {bloodRequests?.total} people are searching for Blood in your area
                        </Typography>
                    </Grid>

                    <Grid item lg={6} sm={6} xs={12}>
                        <SeekerFilter/>
                    </Grid>
                </Grid>





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
