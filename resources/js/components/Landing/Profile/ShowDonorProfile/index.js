import React, {useEffect} from 'react'
import {Box} from "@mui/system";
import {Avatar, Card, CardContent, Grid, List, ListItem, Stack, Typography} from "@mui/material";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {fetchDonateProfile} from "../../../../store/actions/authActions";
import {useParams} from "react-router-dom";

const ShowDonorProfile = () => {
    const {donateProfile} = useSelector(status => status.auth)
    const classes = useStyles()

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) dispatch(fetchDonateProfile(id))
    }, [id])


    return (
        <Box>
            <List>
                <ListItem>
                    <Typography variant='h2'>
                        {donateProfile?.user?.name}
                    </Typography>
                </ListItem>

                <ListItem>
                    <Typography variant='h2'>
                        # {donateProfile?.user?.id}
                    </Typography>
                </ListItem>

                <ListItem>
                    <Card className={classes.card} elevation={0}>
                        <CardContent>
                            <Stack direction='row' alignItems='center' justifyContent='space-around'>
                                <Box>
                                    <Avatar/>

                                    <Typography color='white' variant='h5'>
                                        {donateProfile?.user?.id}
                                        <br/>
                                        Group
                                    </Typography>
                                </Box>

                                <Box>
                                    <Avatar/>

                                    <Typography color='white' variant='h5'>
                                        5
                                        <br/>
                                        Life Saved
                                    </Typography>
                                </Box>

                            </Stack>

                        </CardContent>
                    </Card>
                </ListItem>

                {donateProfile?.user?.phone && (
                    <ListItem>
                        <Grid container alignItems='center'>
                            <Grid item lg={1}>
                                <LocalPhoneIcon/>
                            </Grid>

                            <Grid item lg={9}>
                                <Typography variant='h4'>
                                    {donateProfile?.user?.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                )}

                {donateProfile?.user?.email && (
                    <ListItem>
                        <Grid container alignItems='center'>
                            <Grid item lg={1}>
                                <EmailIcon/>
                            </Grid>

                            <Grid item lg={9}>
                                <Typography variant='h4'>
                                    Email
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                )}


            </List>

        </Box>
    )
}

export default ShowDonorProfile;
