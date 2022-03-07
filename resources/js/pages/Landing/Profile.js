import React from 'react'
import ShowProfile from "../../components/Landing/Profile/ShowProfile";
import Wrapper from "../../components/Landing/shared/Wrapper";
import {Avatar, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import DonateHistory from "../../components/Landing/Profile/History/DonateHistory";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useDispatch, useSelector} from "react-redux";

import {EXPAND_DATA} from "../../store/types";
import PostHistory from "../../components/Landing/Profile/History/PostHistory";

const Profile = () => {

    const {expandContent, expandStatus} = useSelector(status => status.site)

    const dispatch = useDispatch()

    const clickHandler = (content, status) => {
        dispatch({
            type: EXPAND_DATA,

            payload: {
                expandContent: content,
                expandStatus: status,
            }
        })
    }

    return (
        <Wrapper>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={8} sm={6} xs={12}>
                        <ShowProfile/>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <Avatar/>
                    </Grid>

                    <Grid item lg={12}>

                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h4'>
                                Donate History
                            </Typography>

                            <IconButton onClick={() => clickHandler('donateHistory', true)}>
                                {expandContent ==='donateHistory' && expandStatus === true ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Stack>

                        {expandContent === 'donateHistory' && <DonateHistory/>}

                    </Grid>

                    <Grid item lg={12}>

                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h4'>
                                Seeker History
                            </Typography>

                            <IconButton onClick={() => clickHandler('seekerHistory', true)}>
                                {expandContent === 'seekerHistory' && expandStatus === true ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Stack>

                        {expandContent === 'seekerHistory' && <PostHistory/>}

                    </Grid>
                </Grid>
            </Container>

        </Wrapper>
    )
}

export default Profile
