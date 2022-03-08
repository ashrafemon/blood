import React, {useState} from 'react'
import ShowProfile from "../../components/Landing/Profile/ShowProfile";
import Wrapper from "../../components/Landing/shared/Wrapper";
import {Avatar, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import DonateHistory from "../../components/Landing/Profile/History/DonateHistory";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useDispatch, useSelector} from "react-redux";
import PostHistory from "../../components/Landing/Profile/History/PostHistory";

import profileImg from "../../assets/images/profile-img.png"
import {makeStyles} from "@mui/styles";
import {Rating} from "@mui/lab";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '100%',
        minHeight: 400,
        margin: 'auto',
        borderRadius: 15,
    }
}))

const Profile = () => {
    const classes = useStyles();


    const {currentUser} = useSelector(status => status.auth)

    const dispatch = useDispatch()


    const [show, setShow] = useState({
        isShow: false,
        content: ''
    })

    const toggleHistoryHandler = (content) => {
        setShow(prevState => ({
            ...prevState,
            isShow: !show.isShow,
            content: content
        }))
    }


    return (
        <Wrapper>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={8} sm={6} xs={12}>
                        <ShowProfile/>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <Avatar src={currentUser ? currentUser?.profile?.avatar : profileImg}
                                className={classes.avatar}/>

                        <Stack direction='row' justifyContent='space-around' my={2}>

                            <Typography variant='h3'>
                                Rating
                            </Typography>

                            <Rating value={2.5} readOnly/>


                            <Typography variant='h4'>
                                4/5
                            </Typography>


                        </Stack>
                    </Grid>

                    <Grid item lg={12}>

                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h4'>
                                Donate History
                            </Typography>

                            <IconButton onClick={() => toggleHistoryHandler('donate')}>
                                {show.isShow && show.content === 'donate' ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Stack>

                        {show.isShow && show.content === 'donate' && <DonateHistory/>}

                    </Grid>

                    <Grid item lg={12}>

                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h4'>
                                Seeker History
                            </Typography>

                            <IconButton onClick={() => toggleHistoryHandler('seekerHistory')}>
                                {show.isShow && show.content === 'seekerHistory' ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Stack>

                        {show.isShow && show.content === 'seekerHistory' && <PostHistory/>}

                    </Grid>
                </Grid>
            </Container>

        </Wrapper>
    )
}

export default Profile
