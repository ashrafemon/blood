import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Card, CardContent, Container, Grid, IconButton, Switch, Typography} from "@mui/material";
import {useStyles} from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import bloodDropIcon from '../../../../assets/images/blood-drop-white.png';
import SafHand from '../../../../assets/images/safe-hand.png';
import ProfileImg from '../../../../assets/images/profile-img.png';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';


const ShowProfile = () => {
    const classes = useStyles()
    const label = {inputProps: {'aria-label': 'Switch demo'}};
    return (
        <Box py={15}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={6}>

                        <Grid container>
                            <Grid item lg={6}>
                                <Typography variant='h2'>
                                    John Doe
                                </Typography>

                                <Typography variant='h6' color='primary'>
                                    #B12DS34
                                </Typography>
                            </Grid>

                            <Grid item lg={6}>
                                <IconButton color='primary'>
                                    <EditIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>


                        <Card className={classes.card} elevation={0}>
                            <CardContent>
                                <Grid container alignItem='center'>
                                    <Grid item lg={6}>
                                        <Avatar src={bloodDropIcon} className={classes.cardIcon}/>

                                        <Typography color='white' variant='h5'>
                                            B+
                                        </Typography>

                                        <Typography color='white' variant='h5'>
                                            Group
                                        </Typography>
                                    </Grid>


                                    <Grid item lg={6}>
                                        <Avatar src={SafHand} className={classes.cardIcon}/>

                                        <Typography color='white' variant='h5'>
                                            5
                                        </Typography>

                                        <Typography color='white' variant='h5'>
                                            Life Saved
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>

                        <Grid container my={1} alignItems='center'>
                            <Grid item lg={1}>
                                <LocalPhoneIcon/>
                            </Grid>

                            <Grid item lg={3}>
                                +880-017-95929461
                            </Grid>
                            <Grid item lg={3}>
                                <Switch {...label} defaultChecked/>
                            </Grid>
                        </Grid>


                        <Grid container my={1}>
                            <Grid item lg={1}>
                                <MarkunreadIcon/>
                            </Grid>

                            <Grid item lg={3}>
                                johndoe@gmail.com
                            </Grid>

                        </Grid>

                        <Grid container my={2}>

                            <Grid item lg={3}>
                                <Typography variant='h4'>
                                    Available To Donate
                                </Typography>

                                <Box mt={2}>
                                    <Button variant='contained' className={classes.button}>
                                        mon
                                    </Button>

                                    <Button variant='outlined' className={classes.button}>
                                        Thus
                                    </Button>
                                </Box>

                            </Grid>
                            <Grid item lg={1}>
                                <Switch {...label} defaultChecked/>
                            </Grid>

                        </Grid>


                        <Grid container my={2} alignItems='center'>

                            <Grid item lg={3}>
                                <Typography variant='h4'>
                                    Emergency Donate
                                </Typography>

                            </Grid>
                            <Grid item lg={1}>
                                <Switch {...label} defaultChecked/>
                            </Grid>

                        </Grid>


                    </Grid>

                    <Grid item lg={6}>
                        <Avatar src={ProfileImg} className={classes.profileImg}/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default ShowProfile;
